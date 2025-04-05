import { createModule } from 'tiny-invert';
import { AdminActionEntityBuilderContainer } from './_container';
import { EntityPageProvider } from './_entity_page';

export type { AdminBuilderField, AdminEntityConfig } from './_types';

const EntryProvider = AdminActionEntityBuilderContainer.provider(
	(ctx) => ({
		EntityPage: ctx.innerDeps.EntityPage,
	}),
	{
		EntityPage: EntityPageProvider,
	}
);

export const EntityServerBuilder = createModule(EntryProvider);
