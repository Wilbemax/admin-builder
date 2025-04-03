'use server';
import { dbClient } from './../../shared/db-client';
import { EntityActionSchemaBuilder } from '@/admin-builder/entity-action';
import { entityConfig } from './config';

export const userAction = EntityActionSchemaBuilder.init({
	config: entityConfig,
	dbClient,
});
