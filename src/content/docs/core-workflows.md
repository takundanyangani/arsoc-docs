---
title: "Core Business Workflows"
description: "End-to-end processes for inventory acquisition, loan applications, and commission tracking"
---

Understanding the key end-to-end business processes will help stakeholders appreciate how ALPHA components work together.

## Workflow 1: Inventory Acquisition & Agent Assignment

### Overview

This workflow describes how new inventory is purchased, recorded in the system, and distributed to field agents.

### Process Steps

1. **Purchase Decision**: Management decides new inventory is needed based on sales pipeline and agent demand.

2. **Supplier Procurement**: Goods are ordered from suppliers (already configured in Stock > Supplies).

3. **Batch Creation**: Stock manager creates a new batch in the system, specifying category, manufacturer, models, quantities, and prices. Supporting documents (invoices, delivery notes) are attached.

4. **Batch Approval**: Operations manager reviews supporting documents and either approves or rejects the batch.

5. **Random Agent Assignment**: Once approved, the system automatically assigns individual units to agents within the target branch, randomly distributing inventory for fairness.

6. **Serial Number Assignment**: Each unit receives a unique serial number for tracking through the entire sales lifecycle.

7. **Agent Notification**: Agents are informed of newly assigned inventory and can begin selling.

:::note
Serial numbers are permanent identifiers and are used throughout the entire sales lifecycle for tracking, transfers, and commission calculation.
:::

## Workflow 2: Loan Application & Approval (Agent to Disbursement)

### Overview

This is the core value-add workflow where an agent finds a customer, collects information, submits it via WhatsApp, and the system processes it through approval and disbursement.

### Process Steps

1. **Customer Discovery**: Agent identifies a potential customer (typically a civil servant with stable income) who is interested in purchasing on credit.

2. **Product Selection**: Agent shows customer the product options and pricing available through ALPHA (via the chatbot pricing display or product catalog).

3. **WhatsApp Application**: Agent opens WhatsApp chatbot, navigates through branch/partner/currency/product selection, and submits customer details. Chatbot returns an application reference number.

4. **Automated Validation**: System validates customer data for completeness and format. If errors are detected, agent is prompted to resubmit corrected information.

5. **Sales Team Review**: Application enters Approval Queue. Sales team reviews submitted details against supporting documentation (ID copies, employment letters, proof of address).

6. **Approval Decision**: Application is approved or rejected. If approved, application moves to Disbursement Queue. If rejected, agent is notified of required corrections.

7. **Disbursement Processing**: Finance team batches approved applications and processes disbursement through the partner bank. Funds are transferred to customer's bank account, deducting the partner's commission.

8. **Completion**: Loan record moves to Completed Loans. Customer receives funds and begins installment payments.

:::tip
Applications spend time in the Approval Queue for document verification. To expedite approvals, ensure customers provide all supporting documents (ID, employment verification) promptly.
:::

:::caution
Applications with incomplete or incorrect information will be rejected and must be resubmitted with corrections. This can delay customer fund access.
:::

## Workflow 3: Commission Tracking & Agent Performance

### Overview

Agents are compensated based on sales volume and successful loan closures. The system tracks these metrics to calculate commissions and identify top performers.

### Key Metrics

- **Units Sold**: Number of items sold (tracked via serial numbers and transfer records)
- **Successful Applications**: Number of approved loans attributed to the agent
- **Commission Rate**: Percentage of loan value earned by agent
- **Total Commission**: Sum of all commissions earned in a period

### Accessing Agent Performance

Stock managers and administrators can view agent performance data by navigating to Stock > Agents and selecting an agent to view their assignment, sales, and commission summary.

:::note
Commission calculations depend on accurate tracking of serial numbers through sales and transfers. Ensure all stock transfers are recorded in the system to maintain commission accuracy.
:::
