import { createModule } from 'tiny-invert';
import { AdminClientEntityBuilderContainer } from './_container';
import { EntityPageProvider } from './_entity_page';

const EntryProvider = AdminClientEntityBuilderContainer.provider((ctx) => {
	return ctx.innerDeps
}, {
    EntityPage: EntityPageProvider
});

export const EntityClientSchemaBuilder = createModule(EntryProvider);
