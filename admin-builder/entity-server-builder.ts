import { createModule } from 'tiny-invert';
import { AdminServerEntityBuilderContainer } from './_container';

export type { AdminBuilderField, AdminEntityConfig } from './_types';

const EntryProvider = AdminServerEntityBuilderContainer.provider(() => ({}));

export const EntityServerBuilder = createModule(EntryProvider);
