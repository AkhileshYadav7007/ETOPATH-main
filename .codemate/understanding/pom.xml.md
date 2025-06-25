# High-Level Documentation: Maven Build Configuration (pom.xml) for Etopath Backend

## Overview

This file (`pom.xml`) defines the Maven project setup for the "Etopath Backend," which serves as the backend component of an E-commerce Training Platform. It leverages the Spring Boot framework and various technologies to provide web, security, data access, payment processing, and more.

---

## Key Features

### 1. **Project Inheritance & Metadata**
- **Inherits** from `spring-boot-starter-parent` (version 3.2.0), ensuring consistent dependency and plugin versions.
- **Project Identifiers:** 
  - `groupId`: com.etopath
  - `artifactId`: backend
  - `version`: 0.0.1-SNAPSHOT
- **Description:** Clearly tags the project as the backend for an E-commerce learning platform.

### 2. **Java & Library Version Management**
- Sets **Java version 17**.
- Centralizes dependency versions for **Razorpay SDK** and **JJWT (Java JWT library)**.

### 3. **Key Dependencies**
- **Spring Boot Starters**:
  - **Web**: RESTful API development.
  - **Data JPA**: ORM/database abstraction.
  - **Validation**: Standardizes entity validation.
  - **Security**: Implements authentication/authorization.

- **Database Support**:
  - **PostgreSQL**: Runtime driver for production database.
  - **Flyway (MySQL flavor)**: Database schema migrations (note: even though using PostgreSQL, "flyway-mysql" is referenced).

- **Lombok**: Reduces boilerplate via annotations.

- **JWT Support**:
  - Full JWT ecosystem (API, implementation, Jackson support) for token-based authentication.

- **Payment Integration**:
  - **Razorpay Java SDK**: Integrates payment gateway support.

- **Testing**:
  - Spring Boot and Spring Security test support.

- **Developer Tools**:
  - Spring Boot Devtools for hot-reloading.
  - Lombok is marked as optional and excluded from final artifacts.

### 4. **Build and Plugins**
- Configures the **Spring Boot Maven plugin** for packaging and running the application.
- Explicitly excludes Lombok from packaged artifacts to avoid inclusion in production builds.

---

## Summary

This Maven configuration sets up a Spring Boot–based backend for a modern, secure, scalable E-commerce platform. It integrates essential technologies for web services, security, persistence, payment processing (Razorpay), schema migrations, and testing. The build is optimized for contemporary Java versions and best practices (e.g., optional dev tools, explicit dependency management).