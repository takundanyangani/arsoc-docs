// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ALPHA System Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'ALPHA System',
					items: [
						{ label: 'Getting Started', slug: 'getting-started' },
						{ label: 'Step-by-Step Guides', slug: 'step-by-step-guides' },
						{ label: 'Overview', slug: 'overview' },
						{ label: 'Administrator Portal', slug: 'admin-portal' },
						{ label: 'Stock Module', slug: 'stock-module' },
						{ label: 'Loan Module', slug: 'loan-module' },
						{ label: 'WhatsApp Chatbot', slug: 'whatsapp-chatbot' },
						{ label: 'Core Workflows', slug: 'core-workflows' },
						{ label: 'User Roles & Permissions', slug: 'user-roles' },
						{ label: 'Troubleshooting', slug: 'troubleshooting' },
						{ label: 'Appendices', slug: 'appendices' },
					]
				}
			]
		}),
	],
});
