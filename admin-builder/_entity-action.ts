import { AdminActionEntityBuilderContainer } from './_container';

export const ActionProvider = AdminActionEntityBuilderContainer.provider(
	(ctx) => async () => {
		console.log('Server component', ctx.deps.config);
	}
);
