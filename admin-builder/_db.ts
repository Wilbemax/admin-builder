import { drizzle } from 'drizzle-orm/postgres-js';
import { ConfigContainer, DbClientContainer } from './_container';
import { EntitySchemaProvider } from './_entity-schema';
import { mergeContainers } from 'tiny-invert';

export const DbProvider = mergeContainers([
    DbClientContainer,
    ConfigContainer,
]).provider(
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