import { createModule } from 'tiny-invert';
import { AdminClientEntityBuilderContainer } from './_container';
import { useEffect } from 'react';

const EntryProvider = AdminClientEntityBuilderContainer.provider((ctx) => {
	return {
        CreateEntityForm() {
            useEffect(() => {
                console.log('log', ctx.deps.config);
                ctx.deps.action()
            }, [])
            return <div></div>
        }
    };
}, {});

export const EntityClientSchemaBuilder = createModule(EntryProvider);
