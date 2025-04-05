'use client';
import { EntityClientSchemaBuilder } from '@/admin-builder/entity-client';
import { entityConfig } from './config';
import { userAction } from './action';

export const userClient = EntityClientSchemaBuilder.init({
	config: entityConfig,
	action: userAction,
});
