import { AdminEntityConfig } from '@/admin-builder/entity-server-builder';

export const entityConfig: AdminEntityConfig = {
	name: 'user',
	title: 'Users',
	fields: [
		{
			type: 'text',
			name: 'name',
			title: 'Name',
		},
		{
			type: 'select',
			name: 'role',
			title: 'Role',
			options: [
				{
					label: 'Admin',
					value: 'admin',
				},
				{
					label: 'User',
					value: 'user',
				},
			],
		},
	],
};
