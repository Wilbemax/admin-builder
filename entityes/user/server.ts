import { EntityServerBuilder } from '@/admin-builder/entity-server-builder';
import { entityConfig } from './config';
import { dbClient } from '@/shared/db-client';
import { userClient } from './client';

export const UserEntity = EntityServerBuilder.init({
	config: entityConfig,
	dbClient,
	client: userClient,
});
