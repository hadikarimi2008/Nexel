# Nexel

**Version:** v2.0.0  
**Status:** Active development  
**Owner:** Hadi Karimi  
**GitHub Account:** [hadikarimi2008](https://github.com/hadikarimi2008)

---

## 1. Project Overview

Nexel is a full-stack web application for discovering and browsing technology products. The platform presents smartphones, laptops, and related consumer electronics through a structured storefront, supported by authenticated user accounts and an administrative management area.

The product experience is designed around clarity, organized product information, and a consistent visual identity. Public visitors may browse the catalog. Registered users may manage their profiles. Authorized administrators may manage catalog content and user records through protected interfaces.

This release, **v1.1.0**, represents the first formal milestone of the project. The codebase remains under active development, and subsequent versions are expected to refine architecture, security posture, user experience, and operational readiness.

---

## 2. Ownership and Attribution

| Item | Detail |
| --- | --- |
| Project name | Nexel |
| Legal and intellectual owner | Hadi Karimi |
| GitHub account | hadikarimi2008 |
| Primary author attribution | Hadi Karimi |

All original source code, branding assets, documentation, and related materials created for this project are the property of **Hadi Karimi**, unless otherwise stated for third-party open-source dependencies.

Unauthorized reproduction, redistribution, commercial use, or misrepresentation of ownership is prohibited without prior written permission from the owner.

---

## 3. Version and Development Status

- **Current version:** `v1.1.0`
- **Release classification:** Initial production-oriented milestone
- **Development state:** Ongoing

Nexel v1.0.0 delivers a working end-to-end foundation for storefront browsing, account workflows, and administrative product management. Features, interfaces, and internal services may change as the project continues to mature. Breaking changes, migrations, and documentation updates should be expected in later releases.

---

## 4. Application Scope

### 4.1 Public experience

- Home page introducing the Nexel brand and product philosophy
- Store catalog with product listings
- Product detail pages resolved by product slug
- About page describing mission and shopping experience
- Location and contact presentation section

### 4.2 Account experience

- User registration
- User authentication (login / logout)
- Authenticated user dashboard
- Profile viewing and profile editing, including optional profile image upload

### 4.3 Administrative experience

- Protected administration area
- User listing and administrative user management actions
- Product creation, editing, and removal
- Product image upload for catalog entries

---

## 5. System Architecture

Nexel is organized as a two-tier application:

| Layer | Directory | Role |
| --- | --- | --- |
| Frontend | `frontEnd/` | Client application and user interface |
| Backend | `backEnd/` | Application programming interface, authentication middleware, file handling, and data access |

### 5.1 Frontend

The frontend is a **Next.js** application using **React**, **TypeScript**, and **Tailwind CSS**. It provides:

- App Router based page structure
- Shared layout components (header, container, footer)
- Client-side authentication helpers for session awareness
- Route-level guards for authenticated and administrative views
- Integration with the backend HTTP API for users and products

Principal frontend routes include:

- `/` — Home
- `/store` — Product catalog
- `/store/[slug]` — Product detail
- `/about` — About
- `/login` — Sign in
- `/register` — Account creation
- `/dashboard` — Authenticated user area
- `/dashboard/edit` — Profile editing
- `/admin` — Administrative console
- `/admin/add` — Create product
- `/admin/edit/[id]` — Edit product

### 5.2 Backend

The backend is a **Node.js** service built with **Express**. It exposes RESTful API endpoints under `/api/users` and `/api/products`, serves uploaded media from a static uploads path, and connects to a **MySQL** database through a connection pool.

Core backend concerns include:

- Request routing and controller separation
- JSON request handling and cross-origin configuration for local frontend development
- Token-based authentication middleware
- Administrative authorization checks
- Multipart upload handling for user and product images
- Input validation for selected account workflows
- Environment-based configuration for runtime settings

### 5.3 Data model (conceptual)

The application currently centers on two primary entities:

- **Users** — account identity and profile fields
- **Products** — catalog items with title, slug, description, pricing, discount, category, brand, rating, stock, and image metadata

Exact database credentials and connection values are intentionally excluded from this document and must be supplied through private environment configuration.

---

## 6. Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React (iconography)
- ESLint

### Backend

- Node.js
- Express
- MySQL (`mysql2`)
- JSON Web Tokens for authenticated sessions
- Joi for selected request validation
- Multer for file uploads
- CORS
- dotenv for environment configuration

### Infrastructure assumptions (local development)

- Frontend development server commonly on port `3000`
- Backend API service configurable via environment settings
- MySQL available as the persistence layer

---

## 7. Repository Structure

```text
Nexel/
├── frontEnd/          # Next.js client application
│   ├── public/        # Static public assets
│   └── src/           # Application source (pages, components, types, auth helpers)
├── backEnd/           # Express API service
│   ├── controller/    # Business handlers
│   ├── database/      # Database pool configuration
│   ├── middlewares/   # Authentication, authorization, uploads
│   ├── router/        # HTTP route definitions
│   └── uploads/       # Uploaded media storage
└── README.md          # Project documentation (this file)
```

Third-party dependency directories (`node_modules`) and local build artifacts are excluded from meaningful project documentation and should not be treated as source of truth for ownership or design.

---

## 8. Configuration and Secrets Policy

Sensitive values are managed through environment files and are **not** documented in this repository overview.

Examples of configuration categories (names only):

- Application listen port
- Database host, user, password, and database name
- Token signing secret

Operators and contributors must:

1. Keep environment files private
2. Never commit credentials, secrets, or production connection strings
3. Rotate credentials when exposure is suspected
4. Use separate configuration per environment (development, staging, production)

This document intentionally omits exploit-relevant operational details, credential material, and attack guidance.

---

## 9. Security Posture (High Level)

Nexel v1.0.0 includes foundational access controls:

- Authenticated routes protected by token verification
- Administrative actions restricted to authorized operators
- Validation on selected registration inputs
- Separated upload destinations for user and product media

As an early-stage release still under active development, security hardening remains a continuing priority. Future work is expected to strengthen credential handling, authorization consistency, input validation coverage, operational logging, and deployment safeguards. Readers should treat the current implementation as an evolving foundation rather than a finalized enterprise security baseline.

No vulnerability exploitation instructions, bypass methods, or sensitive internal credentials are provided in this documentation.

---

## 10. Artificial Intelligence Assistance Notice

Portions of the **backend** implementation were developed with the assistance of artificial intelligence tooling.

AI assistance was used as a productivity aid under the direction, review, and responsibility of the project owner. Final design decisions, acceptance of generated code, integration into the product, and ongoing maintenance remain the responsibility of **Hadi Karimi**.

AI assistance does not transfer ownership, authorship, or licensing rights of the Nexel project. All project intellectual property remains with the stated owner, subject to the licenses of incorporated third-party open-source packages.

---

## 11. Third-Party Dependencies

Nexel relies on publicly available open-source libraries distributed under their respective licenses (for example, MIT, Apache, ISC, and related permissive licenses, depending on each package).

Use of those packages is governed by the license terms published by their respective maintainers. Nexel does not claim ownership of third-party libraries. Dependency license obligations should be reviewed before redistribution or commercial packaging.

---

## 12. License

### Project license declaration

Unless a separate written agreement states otherwise, the original Nexel source code and original project assets are proprietary to **Hadi Karimi**.

The backend package metadata currently declares an `ISC` license field for package identity purposes. For clarity regarding this project as a whole:

- Original Nexel application code and branding are owned by Hadi Karimi
- Redistribution, sublicensing, and commercial exploitation of the original work require explicit permission from the owner
- Third-party packages retain their own licenses

If a formal open-source release is published in the future, the owner may replace this declaration with a dedicated `LICENSE` file and corresponding repository notice.

### Copyright notice

```text
Copyright (c) 2026 Hadi Karimi. All rights reserved.
```

---

## 13. Trademark and Branding

The name **Nexel**, associated logos, visual identity, and related brand materials are used to identify this project and its owner. No rights to brand assets are granted by this document beyond what is necessary to identify the project in good faith.

---

## 14. Disclaimer of Warranty

THE SOFTWARE AND DOCUMENTATION ARE PROVIDED ON AN “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

Because the project is under active development, features may be incomplete, interfaces may change, and defects may exist. Use in production environments is at the operator’s own risk unless and until the owner issues a separately stated production support commitment.

---

## 15. Limitation of Liability

To the maximum extent permitted by applicable law, Hadi Karimi shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, goodwill, or business opportunity, arising out of or related to the use of, or inability to use, this software.

---

## 16. Acceptable Use

Users and operators of this project must not:

- Attempt unauthorized access to accounts, administrative functions, or infrastructure
- Misuse uploaded content features for unlawful material
- Reverse engineer the service for the purpose of circumventing access controls
- Represent the project as owned by any party other than Hadi Karimi without authorization

Violation of these terms may result in access revocation and, where applicable, legal action.

---

## 17. Contribution and Contact

This repository is associated with the GitHub account **hadikarimi2008** and is owned by **Hadi Karimi**.

For collaboration requests, licensing inquiries, or ownership questions, contact should be directed through the owner’s GitHub account or other channels expressly published by the owner.

Unsolicited pull requests or contributions should not be assumed accepted unless the owner confirms contribution terms in writing.

---

## 18. Document Control

| Field | Value |
| --- | --- |
| Document | Project README |
| Product | Nexel |
| Version covered | v1.0.0 |
| Language | English |
| Classification | Public project overview |
| Owner | Hadi Karimi |
| GitHub account | hadikarimi2008 |
| Last updated | 2026 |

This document provides an organizational overview of the Nexel project. It is intentionally limited to non-sensitive, high-level information suitable for professional presentation and repository orientation.
