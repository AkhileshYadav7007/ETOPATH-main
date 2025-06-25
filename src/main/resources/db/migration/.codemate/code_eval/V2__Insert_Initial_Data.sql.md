# SQL Code Review Report

## 1. Table Naming Conventions

**Observation**:  
All table names use snake_case and plural forms, which is good. However, check your organization standards—some teams prefer singular table names (e.g., `course` rather than `courses`). If pluralization is your standard, this is fine.

## 2. Primary Key Consistency & Data Types

**Observation**:  
The `id` fields are human-readable string slugs (e.g., `'starter-track'`) instead of auto-increment integers or UUIDs.

**Issues**:
- String primary keys reduce index efficiency and increase storage requirements.
- Human-readable IDs are prone to accidental changes.

**Suggestion (Pseudo code):**
```sql
-- ALTER TABLE courses: Use auto-increment INT or UUID as primary key (id)
ALTER TABLE courses MODIFY id INT AUTO_INCREMENT PRIMARY KEY;

-- Add separate slug or code field for human-readable identifier
ALTER TABLE courses ADD COLUMN slug VARCHAR(100) UNIQUE;

-- Adjust related tables (course_features, course_marketplaces) to use integer foreign keys
ALTER TABLE course_features MODIFY course_id INT;
ALTER TABLE course_marketplaces MODIFY course_id INT;
```

## 3. Insert Syntax Issues

**Observation**:  
Mixes single-row and multi-row `INSERT` statements. Some implementations (older MySQL, for example) require multi-row format.  
Example:
```sql
INSERT INTO course_marketplaces (course_id, marketplace) VALUES
('growth-track', 'Amazon.in'),
('growth-track', 'Flipkart');
```
Vs
```sql
INSERT INTO course_marketplaces (course_id, marketplace) VALUES
('starter-track', 'Amazon.in');
```
**Suggestion:**  
Standardize to batch (multi-row) INSERTs for clarity and performance.
```sql
-- Preferred multi-row INSERT format
INSERT INTO course_marketplaces (course_id, marketplace) VALUES
('starter-track', 'Amazon.in'),
('growth-track', 'Amazon.in'),
('growth-track', 'Flipkart'),
('pro-track', 'Amazon.in'),
('pro-track', 'Flipkart'),
('pro-track', 'Meesho'),
('pro-track', 'Amazon Global');
```

## 4. Hardcoded String IDs and Data Duplication Risk

**Observation**:  
IDs like `'starter-track'`, `'growth-track'` are manually repeated for foreign key references.  
Risk: Typos or future changes in IDs will break referential integrity.

**Suggestion:**  
Use integer autofield/UUID foreign keys and only use string slugs for display, not as primary joins.  
```sql
-- Get IDs using subqueries in insertion (or use the correct integer IDs if already migrated)
INSERT INTO course_features (course_id, feature) VALUES
((SELECT id FROM courses WHERE slug = 'starter-track'), 'Live training sessions');
```

## 5. Data Types for Fields

**Observation**:
- `"duration"` as '45 Days' (string)
- `"fee"`, `"original_price"` as `FLOAT`s

**Issues**:
- Duration should be an integer (`days`) or at least a number, not a string (for calculations, filters, reporting, aggregation, etc).
- Use `DECIMAL` for money, not `FLOAT` (float is not precise for currency).

**Suggestion:**
```sql
-- Change duration to INT (e.g., 45 instead of '45 Days')
ALTER TABLE courses MODIFY duration INT;

-- Change fee and original_price to DECIMAL(10,2)
ALTER TABLE courses MODIFY fee DECIMAL(10,2);
ALTER TABLE courses MODIFY original_price DECIMAL(10,2);
```

## 6. No Use of Transactions

**Observation**:  
Multiple related inserts without transaction wrapping. If a failure occurs midway, you can get orphaned rows or partial data.

**Suggestion:**
```sql
-- Use transactions for bulk insert sequences
BEGIN TRANSACTION;

-- ...all your insert statements...

COMMIT;
```

## 7. No Explicit Constraint Enforcement

**Observation**:  
No foreign key constraints mentioned. Risk of referential integrity violation.

**Suggestion:**
```sql
ALTER TABLE course_features
ADD CONSTRAINT fk_course_features_course
FOREIGN KEY (course_id) REFERENCES courses(id);

ALTER TABLE course_marketplaces
ADD CONSTRAINT fk_course_marketplaces_course
FOREIGN KEY (course_id) REFERENCES courses(id);
```

## 8. ENUM vs VARCHAR for Categorical Fields

**Observation**:  
Fields like `level` are VARCHAR('Beginner', 'Intermediate', 'Advanced').

**Suggestion:**
```sql
-- Use ENUM for level if the set is fixed
ALTER TABLE courses MODIFY level ENUM('Beginner', 'Intermediate', 'Advanced');
```

## 9. Best Practice: Comments & Documentation

**Observation**:  
No inline explanations or comments describing the inserts or schema rationale.

**Suggestion:**  
Add meaningful comments above logical blocks for future maintainers.

```sql
-- Insert available courses for new sellers, intermediate, and pro entrepreneurs
INSERT INTO ...
```

---

# **Action Items Summary**

Implement the following corrections to align with industry standards:

- [ ] Change primary key fields to auto-increment integers or UUIDs, add a slug column for human-readable codes.
- [ ] Use multi-row inserts for consistency.
- [ ] Refactor foreign key relationships to use numeric keys, not string slugs.
- [ ] Change `duration` to INT, `fee`/`original_price` to DECIMAL.
- [ ] Wrap related inserts in a transaction.
- [ ] Enforce referential integrity with foreign key constraints.
- [ ] Change categorical VARCHARs to ENUM where possible.
- [ ] Add documentation/comments.

**Sample corrected lines (pseudo code):**
```sql
ALTER TABLE courses MODIFY id INT AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE courses ADD COLUMN slug VARCHAR(100) UNIQUE;
ALTER TABLE courses MODIFY duration INT;
ALTER TABLE courses MODIFY fee DECIMAL(10,2);
ALTER TABLE courses MODIFY original_price DECIMAL(10,2);
ALTER TABLE courses MODIFY level ENUM('Beginner', 'Intermediate', 'Advanced');
BEGIN TRANSACTION;
-- All your insert statements here
COMMIT;
ALTER TABLE course_features MODIFY course_id INT;
ALTER TABLE course_features ADD CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES courses(id);
```

---

**Note**: For full correctness, migrate your current data to the new schema, ensure no data loss, and update all application logic accordingly.