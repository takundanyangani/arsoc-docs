---
title: "Stock Module"
description: "Inventory management, batch creation, agent assignment, transfers, and warehouse operations"
---

The Stock Module manages inventory from purchase through assignment to agents, tracking transfers and returns. It is the operational backbone for managing physical goods.

## 1. Batches

### Purpose

Batches group multiple product units purchased together from a supplier. A single batch may contain different product models (e.g., Samsung S23 Ultra, Samsung S10, Samsung A15 in one phone batch).

### Creating a New Batch

When new inventory is received, a batch must be created in the system. This involves:

- Navigate to Stock > Batches
- Click Create New Batch
- Add description
- Select Supplier (company that provided the items)
- Select Warehouse
- Add one or more Models with:
  - Model Description (e.g., Samsung S23 Ultra)
  - Quantity (number of units)
  - Buying Price (cost from supplier)
  - Retail Price (selling price to end customer)
- Add supporting documents (invoices, delivery notes, etc.) - required for batch approval
- Click Submit for Approval

:::caution
Supporting documents are required for batch approval. Ensure all invoices and delivery notes are attached before submission.
:::

### Batch Status Workflow

- **Pending**: Batch created but awaiting approval by Operations Manager
- **Approved**: Operations Manager verified supporting documents; batch is ready for agent assignment
- **Rejected**: Supporting documents were incomplete or incorrect; batch must be corrected or resubmitted

:::tip
Monitor batch status regularly to ensure timely approval and agent assignment. Rejected batches must be resubmitted with corrected documentation.
:::

## 2. Agents

### Purpose

The Agents section displays all field sales agents and the inventory assigned to them. Stock managers use this section to view which agents have which products available for sale.

### Viewing Agent Assignments

- Navigate to Stock > Agents
- View list of all agents in the organization
- Click on an agent name to see detailed inventory assigned to that agent
- Filter by branch, product category, or availability

### Agent Assignment

When an approved batch is ready, the operations manager randomly assigns individual units to agents within the specified branch. This ensures balanced distribution. The system assigns each unit a serial number which becomes the permanent identifier for tracking through sales and commission.

:::note
Serial numbers are automatically generated during agent assignment and become the permanent identifier for each unit throughout its lifecycle.
:::

## 3. Transfer Stock

### Purpose

Occasionally, an agent may wish to sell an item that has been assigned to a different agent. Rather than informal exchanges, the Transfer Stock feature formalizes the process in the system. This maintains accurate inventory records and ensures proper commission attribution.

### Creating a Stock Transfer

- Navigate to Stock > Transfer Stock
- Select item(s) to transfer by serial number
- Select from Agent (current holder)
- Select to Agent (new holder)
- Click Submit

:::note
Agents typically agree to transfers amongst themselves, but the system must be updated to maintain accurate records.
:::

## 4. Returned Stock

### Purpose

When customers return items or agents return unsold inventory, the system tracks these returns to update available stock and reconcile inventory.

### Recording a Return

- Navigate to Stock > Returned Stock
- Click Record Return
- Review details and confirm

## 5. Supplies (Suppliers)

### Purpose

Maintain a database of all suppliers from which inventory is sourced. This information is required when creating new batches.

### Adding a Supplier

- Navigate to Stock > Supplies
- Click Add New Supplier
- Enter Supplier Name
- Enter contact details (phone, email, address)
- Click Save

:::tip
Maintain up-to-date supplier contact information for efficient procurement and communication.
:::

## 6. Category

### Purpose

Define product categories (phones, furniture, electronics, etc.). These categories help organize inventory and are required when creating batches.

### Adding a Category

- Navigate to Stock > Category
- Click Add New Category
- Enter Category description (e.g., Mobile Phones, Furniture)
- Click Create

## 7. Manufacturer

### Purpose

For categorized products (phones, electronics), record manufacturers. For example, if the category is Mobile Phones, manufacturers might be Samsung, Apple, Huawei, etc.

### Adding a Manufacturer

- Navigate to Stock > Manufacturer
- Click Add New Manufacturer
- Enter Manufacturer Description (e.g., Samsung)
- Click Create

## 8. Model

### Purpose

Define specific product models. A model is the specific variant (e.g., Samsung S23 Ultra is a model within the Samsung manufacturer). Models are created at the configuration level and are then selected when adding items to batches.

### Adding a Model

- Navigate to Stock > Model
- Click Add New Model
- Enter Model Description (e.g., Samsung S23 Ultra)
- Select Manufacturer (e.g., Samsung)
- Select Category (inherited from manufacturer)
- Click Create

## 9. Warehouse

### Purpose

Record physical warehouse locations where inventory is stored before distribution to agents.

### Adding a Warehouse

- Navigate to Stock > Warehouse
- Click Add New Warehouse
- Enter Warehouse Shortcode, Description, Location and Type
- Click Create

:::tip
Assign unique shortcodes to warehouses for easy identification in batch creation and inventory tracking.
:::

## 10. Reports

The Reports section is reserved for future development. Once implemented, it will provide analytics and insights on stock movements, agent performance, and inventory metrics.
