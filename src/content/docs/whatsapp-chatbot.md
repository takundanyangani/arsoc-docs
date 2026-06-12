---
title: "Agent Mobile App & WhatsApp Chatbot"
description: "Field agent interface for submitting loan applications and checking status via WhatsApp"
---

Field agents interact with the ALPHA system primarily through the WhatsApp chatbot, which replaces the traditional mobile app. This interface is designed for simplicity and accessibility in the field.

## Why WhatsApp?

Previously, agents would capture customer details and send them to a small sales team (typically 2 people) who would manually enter the information into the system. With 30+ agents in the field, this created:

- Processing bottlenecks and slow application approval
- Data entry errors due to pressure and manual transcription
- Difficulty in scaling operations

**The WhatsApp chatbot solves this by allowing agents to submit applications directly in real-time, with automated validation and instant feedback.**

## Chatbot Workflow

### Step 1: Initial Contact

Agent sends a message to the ALPHA chatbot (via WhatsApp).

### Step 2: Main Menu

The chatbot responds with a menu offering three options:

- **Create Application**: Start a new customer loan application
- **Check Status**: Check if a submitted application has been approved/rejected
- **My Applications**: View all applications submitted by the agent

### Step 3: Application Creation - Select Branch

If the agent selects 'Create Application', the chatbot asks which branch the customer is from (or which branch the agent is representing).

Example response: Select a branch from the list below:

- Main Branch (HQ)
- Gweru Branch
- Kariba Branch

### Step 4: Select Partner Bank

Agent selects which partner bank will be used for financing. Example:

- ZB Bank
- CBZ Bank
- Old Mutual

### Step 5: Select Currency

Agent indicates preferred payment currency:

- USD (United States Dollar)
- ZWL (Zimbabwean Dollar)

### Step 6: View Available Products & Pricing

The chatbot displays all available products for the selected partner and currency, showing loan options and installment plans. Example:

**Available Products (ZB Bank - USD):**

- Samsung S23 Ultra - $800 (2/3/6/12 months)
- iPhone 15 - $1200 (3/6/12 months)
- Sofa Set - $500 (6/12 months)

:::tip
Product availability and pricing depend on configuration in the Pricing List. Ensure pricing is configured for the partner and currency before customers can view products in the chatbot.
:::

### Step 7: Select Product & Installment

Agent selects the desired product and installment term. Chatbot confirms the selection and loan terms.

### Step 8: Submit Customer Information

Chatbot collects customer details and application is submitted to the system:

- Customer full name
- National ID number
- Phone number
- Employer name
- Monthly income
- Residential address

:::caution
All customer information must be entered accurately. Incomplete or incorrect data may cause the application to be rejected in the approval queue.
:::

### Step 9: Application Confirmation

Application is submitted and agent receives confirmation with application reference number for tracking.

:::note
The application reference number is essential for tracking and checking status. Agents should record this number and provide it to the customer.
:::

## Checking Application Status

Agents can check the status of submitted applications at any time by sending a message with the application reference number or by selecting 'Check Status' from the main menu.
