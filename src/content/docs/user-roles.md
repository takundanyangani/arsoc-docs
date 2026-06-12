---
title: "User Roles & Permissions"
description: "Access levels and capabilities for different user roles in the ALPHA system"
---

ALPHA supports multiple user roles with different access levels. This section outlines who does what and what they can access.

| **Role** | **Primary Function** | **Key Modules** | **Permissions** |
|---|---|---|---|
| <Badge text="System Admin" variant="success" /> | System configuration & user management | Admin Portal | Full system access |
| <Badge text="Stock Manager" variant="blue" /> | Manage inventory & agent assignments | Stock Module | Create/approve batches, view agents, transfers, returns |
| <Badge text="Sales Officer" variant="blue" /> | Process loans & approvals | Loan Module | Approve/reject applications, manage disbursements |
| <Badge text="Field Agent" variant="note" /> | Submit loan applications | WhatsApp Chatbot | Create applications, check status |

## Role Descriptions

### System Admin

**Primary Responsibilities:**
- Create and manage user accounts
- Configure branch structures
- Assign and revoke user permissions
- Manage system modules and licenses
- Configure global system settings
- Monitor system health and usage

**Access:**
- Full access to Admin Portal
- Ability to view all system data
- Can delegate permissions to other users

### Stock Manager

**Primary Responsibilities:**
- Create and manage inventory batches
- Assign stock to field agents
- Track stock transfers between agents
- Record returned inventory
- Maintain supplier, category, manufacturer, model, and warehouse data
- View agent inventory assignments and performance metrics

**Access:**
- Stock Module (all features)
- Batch creation and approval workflows
- Agent assignment and tracking
- Transfer and return management

### Sales Officer

**Primary Responsibilities:**
- Review pending loan applications
- Approve or reject customer applications
- Process loan disbursements
- Manage client records
- Configure partner banks
- Upload and manage pricing lists
- Configure installment terms

**Access:**
- Loan Module (all features)
- Approval Queue
- Disbursement Queue
- Client records
- Partner management
- Pricing and installment configuration

### Field Agent

**Primary Responsibilities:**
- Identify and screen potential customers
- Submit customer information via WhatsApp chatbot
- Check application status
- Provide customer support and follow-up

**Access:**
- WhatsApp Chatbot interface (limited)
- Create new loan applications
- Check application status
- View own application history

:::note
Field Agents do not have access to the web portal. All agent interactions occur through the WhatsApp chatbot interface.
:::

## Permission Management Workflow

1. **Admin creates user account** - System Admin navigates to Admin Portal > Users > Add New User
2. **Role assignment** - Select appropriate role (Admin, Agent, or User)
3. **Branch assignment** - Assign user to relevant branch(es)
4. **Permission configuration** - For User role, configure specific module and feature permissions
5. **Activation** - User receives activation email or password is set manually
6. **Periodic review** - Periodically review permissions to ensure alignment with current responsibilities

:::caution
Only System Admins can create user accounts and assign permissions. Other users cannot modify their own permissions or create additional users. Contact your System Admin to request permission changes.
:::

## Best Practices

- **Principle of Least Privilege**: Assign only the minimum permissions necessary for each user's role
- **Branch Restriction**: Use branch assignments to limit data visibility and prevent cross-branch access
- **Regular Review**: Periodically review active users and permissions to remove unused accounts
- **Role Segregation**: Ensure approvers (Stock Managers approving batches, Sales Officers approving loans) are different from creators where possible
- **Documentation**: Maintain records of permission changes for audit and compliance purposes
