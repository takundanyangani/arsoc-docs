---
title: "Administrator Portal"
description: "System configuration and user management for ALPHA administrators"
---

The Administrator Portal is the central hub for system configuration and user management. Only users with the Admin role can access these functions.

## Access and Navigation

The main menu of the Administrator Portal contains the following options:

- Users
- Branches
- Modules
- Licenses
- Settings

## 1. User Management

### Overview

The Users section allows administrators to manage all system user accounts, assign roles, and control permissions across the organization.

### User Roles

- **Admin**: Full system access; manages configuration, users, branches, and permissions.
- **Agent**: Field sales personnel; access restricted to creating and checking client applications via mobile app or WhatsApp chatbot.
- **User**: Back-office personnel; access to Stock and Loan modules based on permissions assigned by Admin.

### Creating a New User

- Navigate to Users > Add New User
- Enter user details: Full Name, Email Address, Phone Number, Username
- Assign role: Admin, Agent, or User
- Select branch(es) the user will be associated with
- Set initial password or send activation email
- Click Save

### Managing Permissions

Permissions define what features and modules each user can access. To configure permissions:

- Select a user from the Users list
- Click Edit Permissions
- Review available modules and features
- Check boxes for features the user should access
- Click Save

## 2. Branch Management

### Overview

ALPHA supports a hierarchical branch structure to accommodate geographically distributed operations. The system allows creation of a main branch with sub-branches underneath.

### Branch Hierarchy

Branches are organized by location and can be nested up to multiple levels. Each branch is identified by a unique code. For example:

- Main Branch (Code: HQ)
- Gweru Branch (Code: GW)
- Kariba Branch (Code: KB)

### Creating a New Branch

- Navigate to Branches
- Click Add New Branch
- Enter Branch Name (e.g., Gweru)
- Enter Branch Code (e.g., GW) - must be unique
- Select Parent Branch (if this is a sub-branch)
- Click Save

### Assigning Users to Branches

When creating or editing a user, assign them to one or more branches. Users can only see data and perform actions within their assigned branches.

## 3. Modules Management

### Overview

The Modules section allows administrators to enable or disable specific system modules for your organization. This controls which features are available across the system.

### Available Modules

- **Stock Module**: Inventory management, batch creation, agent assignment, stock transfers
- **Loan Module**: Loan processing, partner management, client records, disbursement

## 4. Licenses

The Licenses section displays your current ALPHA subscription details, including active dates and available features. Contact ARSOC support for license updates or modifications.

## 5. Settings

### System Configuration

The Settings area contains global system configuration options used across both the Stock and Loan modules.

#### Font Colour

Select between white and black font for system-wide text rendering.
