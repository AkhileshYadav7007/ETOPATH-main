# High-Level Documentation

This codebase defines the schema for a learning platform's relational database, with tables and relationships to manage users, courses, enrollments, payments, and related infrastructure.

---

## Entity Overview

### 1. **Users**
- **Purpose:** Store personal and account information about platform users.
- **Fields:** Names, email, password, contact details, address, role, and timestamps.
- **Constraints:** Email is unique. Each user has a role (default: 'USER').

### 2. **Courses**
- **Purpose:** Contain course offerings.
- **Fields:** Name, description, duration, fees, original price, level, and timestamps.
- **Identifiers:** Unique string ID for each course.

### 3. **Course Features**
- **Purpose:** Store individual features or highlights of courses.
- **Relationship:** Linked to a course (foreign key, cascades on delete/update).

### 4. **Course Marketplaces**
- **Purpose:** Indicate marketplaces where a course is available.
- **Relationship:** Linked to a course (foreign key, cascades on delete/update).

### 5. **Orders**
- **Purpose:** Record purchase orders for courses by users.
- **Fields:** Order number, user and course references, amount, currency, status, payment gateway details, and timestamps.
- **Constraints:** Unique order number.

### 6. **Payments**
- **Purpose:** Track payment transactions for orders.
- **Fields:** References to orders, payment identifiers, signature, amount, status, payment method, and timestamps.

### 7. **Enrollments**
- **Purpose:** Track user enrollments in courses, typically post-purchase.
- **Fields:** User, course, and order references, status (e.g., 'ACTIVE'), dates, and timestamps.
- **Constraints:** One enrollment per user and course (unique index).

### 8. **User Business Info**
- **Purpose:** Store additional info about a user's business background and goals.
- **Relationship:** Each user can have only one such record.

---

## Relationships & Constraints

- **Foreign Keys:** Enforce referential integrity between users, courses, orders, enrollments, payments, and related tables.
- **Cascade/Restrict Policies:** Ensure consistency when referenced records are updated or deleted.
- **Unique Indexes:** Prevent duplicate emails, order numbers, enrollments per user/course, and business info per user.

---

## Key Features Supported

- User registration with role-based access.
- Course catalog with extended features and marketplace availability.
- Purchase workflow: orders, payments, and course enrollments (with status tracking).
- Associating business-related details with users for personalization or segmentation.

---

## Usage Scenario (Typical Flow)
1. **User Registration:** Users sign up and provide personal details.
2. **Course Exploration:** Users browse available courses and features.
3. **Order Placement:** Users create an order to purchase a course.
4. **Payment Processing:** Payment details are recorded and linked to the order.
5. **Enrollment:** Upon successful payment/order, the user is enrolled in the chosen course.
6. **Business Info:** Users may optionally provide extra information about their professional background.

---

## Integrity and Consistency
- **Referential Integrity:** Strict use of foreign keys with well-defined update/delete behaviors.
- **Auditability:** Timestamps track creation and updates across all records.
- **Scalability:** Use of indexed and constrained relationships promotes efficient queries and data integrity as the platform grows.