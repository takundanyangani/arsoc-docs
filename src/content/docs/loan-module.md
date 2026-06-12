---
title: "Loan Module"
description: "Client records, loan applications, partner banks, approvals, disbursements, and pricing configuration"
---

The Loan Module manages the credit and financing side of the business. It tracks customer credit applications, partner bank integrations, approval workflows, and disbursement processing.

## 1. Clients

### Purpose

The Clients section maintains records of all customers seeking credit. Client records can be created either through the web interface or via the WhatsApp chatbot by agents. Client records include personal information, employment details, and credit preferences.

### Creating a Client Record (Web)

- Navigate to Loan > Clients
- Click Add New Client
- Enter Personal Information:
  - Full Name
  - National ID / Document Number
  - Phone Number
  - Email Address
  - Residential Address
- Enter Employment Information:
  - Employer Name
  - Job Title
  - Monthly Income
  - Employment Status (Permanent/Contract/Self-employed)
- Click Create

:::note
Client records can be created either manually through the web interface or automatically when agents submit applications via WhatsApp chatbot.
:::

## 2. Partners (Financial Institutions)

### Purpose

Partners are financial institutions (banks) through which credit is provided and managed. Each partner may have different terms, commissions, and requirements. The system tracks partner configurations including commission percentages and supported currencies.

### Adding a Partner

- Navigate to Loan > Partners
- Click Add New Partner
- Enter Partner Name (e.g., ZB Bank, CBZ, Old Mutual)
- Enter contact information
- Enter address
- Click Create

:::tip
Configure all partner details accurately as these directly impact pricing, commission calculations, and disbursement processing.
:::

## 3. Approval Queue

### Purpose

The Approval Queue displays all client applications that have been submitted but are awaiting review and approval. Applications typically require verification that customer details are correctly entered before proceeding to disbursement.

### Reviewing Applications

- Navigate to Loan > Approval Queue
- Review list of pending applications
- Click on an application to review details
- Verify customer information is complete and correctly entered

:::caution
Applications may remain pending if supporting documents (ID copies, proof of employment) are missing or unclear. Request missing documents from the agent and ensure all details are verified before approval.
:::

## 4. Disbursement Queue

### Purpose

Approved applications move to the Disbursement Queue, where loan amounts are processed and transferred to customers' partner bank accounts. This queue tracks all loans ready for fund transfer.

### Processing Disbursements

- Navigate to Loan > Disbursement Queue
- Review list of loans ready for disbursement
- Select loans to disburse (can batch multiple loans)

:::note
Applications must be approved in the Approval Queue before they appear in the Disbursement Queue.
:::

## 5. Completed Loans

### Purpose

Archive of all loans that have been successfully disbursed. This serves as a historical record for reporting and auditing.

### Viewing Completed Loans

- Navigate to Loan > Completed Loans
- Browse list of successfully disbursed loans
- Filter by date range, partner, or agent
- Click on a loan to view detailed transaction record

## 6. Pricing List

### Purpose

The Pricing List defines the cost/loan amount for each product model when sold through each partner in each supported currency. This allows different pricing for different partners and currencies while maintaining a single inventory.

### Uploading a Pricing List

- Navigate to Loan > Pricing List
- Click Download Template
- Select Partner (e.g., ZB Bank)
- Select Currency (e.g., USD, ZWL)
- Download template spreadsheet
- Fill in pricing for each model:
  - Model Code/Name
  - Installment Options
- Upload completed pricing list back to the system
- System validates and confirms upload

:::caution
Pricing lists must be configured for each partner-currency combination before customers can apply for loans through that partner. Without pricing configured, products will not appear in the chatbot.
:::

:::tip
Keep pricing lists updated regularly to reflect current market conditions, partner commissions, and product availability.
:::

## 7. Model Installments

### Purpose

Defines installment options available for purchase (2-month, 3-month, 6-month, up to 24-month terms). This configuration determines what payment plans customers can choose when applying for credit.

### Configuring Installment Terms

- Navigate to Loan > Model Installments
- Enter the filters
- Click Load Installments
