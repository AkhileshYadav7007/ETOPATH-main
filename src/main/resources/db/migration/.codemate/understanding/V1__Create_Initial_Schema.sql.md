# High-Level Documentation of the Database Schema

This database schema is designed for a course-selling platform that manages users, courses, orders, payments, and enrollments, along with supporting features and business information.

---

## 1. **Users Table (`users`)**
Captures user profiles and authentication details.
- Fields include personal information (name, email, phone, address), login info (password), contact methods (whatsapp), location (city, state, pincode), user role, and timestamps.
- Enforces unique email and assigns user roles.

---

## 2. **Courses Table (`courses`)**
Defines course offerings available on the platform.
- Each course has a unique ID, name, description, duration, fee, original price, level, and timestamps.
- Courses are central to related tables (features, marketplaces, enrollments, and orders).

---

## 3. **Course Features Table (`course_features`)**
Lists features or highlights of a course.
- Each entry links a course (via `course_id`) to a specific feature description.
- Supports multiple features per course and cascades deletions with the parent course.

---

## 4. **Course Marketplaces Table (`course_marketplaces`)**
Specifies external or internal marketplaces where a course is available.
- Links courses to marketplace names.
- Supports multiple marketplaces per course and cascades deletions.

---

## 5. **Orders Table (`orders`)**
Represents purchases of courses by users.
- Contains details such as order number, purchasing user, course purchased, payment amount, currency, order status, and external payment IDs.
- Links users and courses through foreign keys.

---

## 6. **Payments Table (`payments`)**
Logs payment transactions against orders.
- Stores order linkage, payment IDs (e.g., Razorpay), amounts, status, method, and payment timestamps.
- Each payment is associated with a specific order.

---

## 7. **User Course Enrollments Table (`enrollments`)**
Tracks which users are enrolled in which courses.
- Each record links a user, a course, and the associated order.
- Maintains enrollment status, dates, and completion details.
- Ensures a user cannot enroll in the same course multiple times (unique pair).

---

## 8. **User Business Information Table (`user_business_info`)**
Captures additional business-related information about users.
- Records experience level, current business, and goals.
- Each user can have one business info record, and deleting the user deletes associated business info.

---

### **Relationships and Integrity**
- Most tables reference users or courses via foreign keys, ensuring referential integrity.
- Cascade rules are set where appropriate to clean up related records automatically.
- Unique constraints on key fields (e.g., user email, order numbers, enrollments) ensure data consistency.

---

### **Intended Usage**
- **User Management**: Storing and authenticating users, managing their profiles, and business information.
- **Course Management**: Creating, organizing, and marketing courses with features and available marketplaces.
- **E-commerce Flow**: Handling course purchases via orders and payments, including the integration of payment gateways.
- **Enrollment Tracking**: Managing which users have enrolled in which courses, with order linkage for accountability.

---

**In summary, this schema is optimized for an online course marketplace that wants to handle user accounts, detailed course offerings, flexible marketing channels, purchase processes, payment verification, and user progression tracking.**