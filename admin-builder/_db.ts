import { drizzle } from 'drizzle-orm/postgres-js';
import { AdminDbEntityBuilderContainer} from './_container';
import { EntitySchemaProvider } from './_entity-schema';

export const DbProvider = AdminDbEntityBuilderContainer.provider(
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
)