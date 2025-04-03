import { createModule } from 'tiny-invert';
import { AdminDbEntityBuilderContainer } from './_container';
import { DbProvider } from './_db';

const EntryProvider = AdminDbEntityBuilderContainer.provider(
    (ctx) => ({
        EntityPage: ctx.innerDeps.EntityPage,
    }),
    {
        EntityPage: DbProvider,
    }
);


export const EntityDbSchemaBuilder = createModule(EntryProvider);
