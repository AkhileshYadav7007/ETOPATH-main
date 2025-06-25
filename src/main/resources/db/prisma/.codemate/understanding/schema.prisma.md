# High-Level Documentation: Prisma Schema Overview

This Prisma schema defines a data model for a course selling platform with user management, enrollments, order processing, and payment integration. The database is PostgreSQL, and Prisma Client is used for data access.

---

## Models Overview

### 1. **User**
- Represents users of the platform (students/customers, possibly admins).
- Stores personal information, contact details, address, and role.
- Relationships:
  - Can have many orders, enrollments.
  - Can have one associated business info record.

### 2. **Course**
- Represents individual courses offered.
- Stores name, description, duration, pricing, and difficulty level.
- Relationships:
  - Can have many features and marketplace listings.
  - Can have many associated orders and enrollments.

### 3. **CourseFeature**
- Represents individual features of a course (e.g., "Certificate on completion").
- Linked to courses (many features per course).

### 4. **CourseMarketplace**
- Represents external marketplaces where the course is available (e.g., Udemy).
- Linked to courses (many marketplaces per course).

### 5. **Order**
- Represents an order placed by a user for a course.
- Stores order number, user and course references, amount, currency, status, and payment integration IDs.
- Relationships:
  - Linked to one user, course.
  - Can have multiple payment records and enrollments.

### 6. **Payment**
- Represents individual payment attempts or receipts.
- Tied to an order.
- Stores payment integration data and status.

### 7. **Enrollment**
- Represents a user's enrollment in a course via an order.
- Stores enrollment status and relevant dates.
- Ensures uniqueness per user and course.
- Linked to user, course, and order.

### 8. **UserBusinessInfo**
- Optional extended profile for user’s business or education background.
- Linked one-to-one with a user.

---

## Key Relationships

- **User ↔️ Orders ↔️ Courses**: Users place orders for courses.
- **Order ↔️ Payment**: An order can have multiple associated payment entries.
- **User, Course, Order ↔️ Enrollment**: Enrollments link users, courses, and their purchase orders.
- **Course ↔️ CourseFeature/CourseMarketplace**: Courses list their features and available marketplaces.
- **User ↔️ UserBusinessInfo**: Users may optionally have detailed business profiles.

---

## Additional Notes

- Field names often use explicit database column mappings (e.g., `first_name`, `created_at`).
- Decimal types are used for prices and fees.
- Timestamps track entity creation and updates.
- Enums and constants are managed through strings (e.g., role, status).
- All foreign keys are explicit and mapped for relational integrity.

---

## Typical Use Cases

- **User registration and profile management**
- **Creating and listing courses with detailed features and pricing**
- **Order processing and payment management**
- **Tracking user enrollments and progress**
- **Integrating with external course marketplaces**

---

**This schema is designed for extensibility, scalability, and robust relationship modeling in a modern course selling or e-learning application.**