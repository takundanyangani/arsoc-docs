---
title: "ALPHA System Overview"
description: "Executive summary, introduction, and system architecture for the ALPHA credit sales management platform"
---

## Executive Summary

The ALPHA System is a comprehensive credit sales and loan management platform designed to streamline operations for companies selling consumer goods on credit. Built to connect three key stakeholders: administrators, clients (suppliers), and agents (field sales personnel) ALPHA automates inventory management, agent commission tracking, and loan processing workflows.

The system addresses a critical operational challenge: traditional manual entry of client applications by agents creates bottlenecks, increases error rates, and limits scalability. ALPHA's integrated approach eliminates these inefficiencies through:

- Direct agent input via WhatsApp chatbot for rapid application submission
- Automated validation and approval workflows for loan applications
- Centralized inventory management with random agent assignment
- Real-time commission and performance tracking
- Multi-currency support and partner bank integration
- Hierarchical branch management for geographically distributed operations

This documentation provides comprehensive guidance for all system users from administrators managing permissions and branch structures to stock managers coordinating inventory, sales teams processing loans, and field agents submitting applications. Together, these components create an efficient, scalable ecosystem for credit-based commerce.

## Purpose of the ALPHA System

ALPHA is a purpose-built software ecosystem for companies engaged in high-volume consumer credit sales. The system connects inventory management, agent coordination, and loan processing into a single integrated platform. Whether managing phones, furniture, electronics, or other consumer goods sold on instalment plans, ALPHA provides the infrastructure needed to scale operations while maintaining control and visibility.

## Key System Capabilities

- **Stock Management**: Create batches of inventory, assign units to agents, track transfers and returns
- **Agent Commission Tracking**: Monitor individual agent sales performance and commission calculations
- **Loan Processing**: Streamlined approval workflows with bank partner integration
- **Pricing Management**: Dynamic pricing lists per partner/currency combination
- **Mobile-First Agent Experience**: WhatsApp-based application submission for field agents
- **Multi-Tier Branch Structure**: Support for main branches and sub-branches
- **Role-Based Access Control**: Fine-grained permissions for administrators, managers, and agents

## Target Audience

This documentation is designed for multiple stakeholder groups:

- **System Administrators**: Responsible for user account management, branch configuration, permissions, and overall system health.
- **Stock Managers**: Manage inventory batches, assign stock to agents, handle transfers and returns, and track warehouse data.
- **Sales & Loan Officers**: Process loan applications, manage approvals, configure partnerships with financial institutions, and manage client records.
- **Field Agents**: Use the mobile app or WhatsApp chatbot to submit new client applications and check application status.
- **Operations & Senior Leadership**: Monitor system usage, review operational reports, and ensure system alignment with business objectives.

## Expected Technical Expertise

No prior technical experience is required. ALPHA is designed with an intuitive interface suitable for users with varying levels of technical proficiency. Field agents accessing the system via WhatsApp only need basic messaging skills. Back-office users will benefit from familiarity with web-based systems and standard business software.

## System Architecture Overview

ALPHA operates as an integrated ecosystem consisting of three primary interfaces, each serving different user groups and business functions:

### 1. Administrator Portal

A dedicated administrative interface for system configuration and user management. This portal is used exclusively by system administrators to:

- Manage user accounts and assign roles (Admin, Agent, User)
- Configure branch structures (main and sub-branches)
- Control permissions for all system features
- Manage system modules and licenses
- Configure global settings

### 2. Client Management Website

A comprehensive web application for the client organization (the company selling on credit) with two main operational modules:

- **Stock Module**: Manage inventory batches, products, categories, manufacturers, warehouses, and agent assignments.
- **Loan Module**: Manage client records, loan applications, partner banks, approval workflows, disbursements, and pricing configurations.

### 3. Agent-Facing Interface

Field agents interact with ALPHA through two primary interfaces:

- **Mobile App**: A native or web-based mobile application for submitting client applications and checking status (being transitioned to WhatsApp).
- **WhatsApp Chatbot**: An automated conversational interface accessible via WhatsApp for direct application submission and status checks.
