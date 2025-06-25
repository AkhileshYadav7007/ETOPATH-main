# High-Level Documentation

This configuration file defines key server, database, security, and application parameters for a Spring Boot backend project (likely for an e-commerce or payment system). Here’s an overview of its components:

---

## Server Settings
- **Port & Context:** The server runs on port `8080` with API endpoints available under `/api`.

## Database Integration
- **MySQL Setup:** Connects to a local MySQL database named `EPath`, with auto-creation enabled if the database doesn't exist.
- **Credentials:** Uses the username and password `Akhilesh`.
- **Driver:** MySQL Connector/J driver specified.

## JPA/Hibernate ORM
- **Schema Validation:** Schema updates are strictly validated.
- **SQL Visibility:** SQL statements are logged in a readable (formatted) manner.
- **Dialect:** Uses MySQL dialect for compatibility.

## Migration Management
- **Flyway Enabled:** Database migration is managed via Flyway, with migrations located in `classpath:db/migration`.
- **Baseline Migration:** Supports migration even on non-empty databases.

## Payment Gateway (Razorpay)
- **Integration Keys:** Contains Razorpay test keys for integration.
- **Currency & Branding:** Defaults transactions to INR and associates them with the company `Path2Ecom`.

## Security (JWT)
- **JWT Keys:** Uses an environment-provided or default secret key for JWT signing and validation.
- **Token Lifetime:** JWT tokens expire after 24 hours.
- **HTTP Header:** Expects JWT in the `Authorization` header with the prefix `Bearer`.

## Logging
- **Log Levels:** 
  - General web requests logged at `INFO`.
  - Hibernate internal logs at `ERROR`.
  - Application-specific (`com.etopath`) logs at `DEBUG`.

## Cross-Origin Resource Sharing (CORS)
- **Allowed Origins:** Accepts requests from `http://localhost:3000` (typical for React frontend).
- **Methods & Headers:** Allows common HTTP methods and specific headers including Authorization.
- **Preflight Cache:** CORS preflight requests cached for 3600 seconds.

## File Uploads
- **Limits:** Accepts individual file uploads and requests up to 10MB in size.

---

**Summary**:  
This file centralizes essential backend configurations, ensuring smooth integration with databases, secure user authentication (JWT), safe file uploads, and communication with a frontend client and payment processor. It's suitable for a full-stack application with secure REST APIs interfacing with databases and external services.