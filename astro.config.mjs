// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ALPHA System Documentation',
			logo: {
				src: "C:\\Users\\takun\\Documents\\books\\arsoc-docs\\public\\arsoc-logo.png",
				alt: 'ARSOC Logo',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/takundanyangani/arsoc-docs' }
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Admin',
					collapsed: false,
					items: [
						{
							label: 'Administrator Portal',
							collapsed: true,
							items: [
								{ label: 'User Management', slug: 'admin-portal' },
								{ label: 'Branch Management', slug: 'admin-portal' },
								{ label: 'Modules & Licenses', slug: 'admin-portal' },
								{ label: 'System Settings', slug: 'admin-portal' },
							]
						},
					]
				},
				{
					label: 'Operations',
					collapsed: true,
					items: [
						{
							label: 'Stock Module',
							collapsed: true,
							items: [
								{ label: 'Batches', slug: 'stock-module' },
								{ label: 'Agent Management', slug: 'stock-module' },
								{ label: 'Stock Transfers', slug: 'stock-module' },
								{ label: 'Inventory Master Data', slug: 'stock-module' },
							]
						},
						{
							label: 'Loan Module',
							collapsed: true,
							items: [
								{ label: 'Client Records', slug: 'loan-module' },
								{ label: 'Partner Banks', slug: 'loan-module' },
								{ label: 'Approval Queue', slug: 'loan-module' },
								{ label: 'Disbursement', slug: 'loan-module' },
								{ label: 'Pricing & Installments', slug: 'loan-module' },
							]
						},
					]
				},
				{
					label: 'Agent Tools',
					collapsed: true,
					items: [
						{
							label: 'WhatsApp Chatbot',
							collapsed: true,
							items: [
								{ label: 'Application Workflow', slug: 'whatsapp-chatbot' },
								{ label: 'Status Checking', slug: 'whatsapp-chatbot' },
							]
						},
					]
				},
				{
					label: 'Workflows & Access',
					collapsed: true,
					items: [
						{
							label: 'Core Workflows',
							collapsed: true,
							items: [
								{ label: 'Inventory Acquisition', slug: 'core-workflows' },
								{ label: 'Loan Processing', slug: 'core-workflows' },
								{ label: 'Commission Tracking', slug: 'core-workflows' },
							]
						},
						{
							label: 'User Roles & Permissions',
							collapsed: true,
							items: [
								{ label: 'Role Definitions', slug: 'user-roles' },
								{ label: 'Permission Management', slug: 'user-roles' },
								{ label: 'Best Practices', slug: 'user-roles' },
							]
						},
					]
				},
				{
					label: 'Reference',
					collapsed: false,
					items: [
						{ label: 'System Overview', slug: 'overview' },
						{ label: 'Getting Started', slug: 'getting-started' },
						{ label: 'Step-by-Step Guides', slug: 'step-by-step-guides' },
						{
							label: 'Support & Resources',
							collapsed: true,
							items: [
								{ label: 'Troubleshooting', slug: 'troubleshooting' },
								{ label: 'Glossary & Requirements', slug: 'appendices' },
							]
						},
					]
				},
			]
		}),
	],
});
