import { drizzle } from 'drizzle-orm/postgres-js';
import { AdminEntityBuilderContainer } from './_container';
import { EntitySchemaProvider } from './_entity-schema';

export const DbProvider = AdminEntityBuilderContainer.provider(
	(ctx) => {
		const db = drizzle(ctx.deps.dbClient, {
			schema: {
				entitySchema: ctx.innerDeps.entitySchema,
			},
		});

		return db;
	},
	{
		entitySchema: EntitySchemaProvider,
	}
);
