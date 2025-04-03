import { dbClient } from '@/shared/db-client';
import { entityConfig } from './config';
import { EntityDbSchemaBuilder } from '@/admin-builder/entity-db-builder';

export const UserSchemaEntity = EntityDbSchemaBuilder.init({
	config: entityConfig,
	dbClient,
});
