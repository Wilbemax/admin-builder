import { EntityBuilder } from '@/admin-builder/entity-builder';
import { entityConfig } from './config';
import { dbClient } from '@/shared/db-client';

export const UserEntity = EntityBuilder.init({
	config: entityConfig,
	dbClient
});
