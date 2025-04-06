import { createContainer, mergeContainers } from 'tiny-invert';
import { AdminBuilderAction, AdminEntityConfig } from './_types';
import { Sql } from 'postgres';
import { JSX } from 'react';

export const DbClientContainer = createContainer<{
	dbClient: Sql;
}>();

export const ConfigContainer = createContainer<{
	config: AdminEntityConfig;
}>();

export const AdminDbEntityBuilderContainer = mergeContainers([
	DbClientContainer,
	ConfigContainer,
]);

export const AdminServerEntityBuilderContainer = mergeContainers([
	DbClientContainer,
	ConfigContainer,
]).extend<{
	client: {
		CreateEntityForm: () => JSX.Element;
	};
}>('AdminServerEntityBuilderContainer');

export const AdminActionEntityBuilderContainer = mergeContainers([
	DbClientContainer,
	ConfigContainer,
]);

export const AdminClientEntityBuilderContainer = mergeContainers([
	ConfigContainer,
]).extend<{
	action: AdminBuilderAction;
}>('AdminClientEntityBuilderContainer');
