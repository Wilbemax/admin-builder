import { eq } from 'drizzle-orm';
import { AdminActionEntityBuilderContainer } from './_container';
import { DbProvider } from './_db';
import { EntitySchemaProvider } from './_entity-schema';
import { ActionParams, AdminBuilderAction, GetEntitiesResult } from './_types';

export const ActionProvider = AdminActionEntityBuilderContainer.provider(
	({ innerDeps: { db, entitySchema } }): AdminBuilderAction =>
		async (params: ActionParams): Promise<GetEntitiesResult[] | null> => {
			if (params.type === 'get') {
				return await db.query.entitySchema.findMany();
			}

			if (params.type === 'create') {
				await db.insert(entitySchema).values({
					...params.data,
				});
				return null;
			}

			if (params.type === 'update') {
				await db
					.update(entitySchema)
					.set({ ...params.data })
					.where(eq(entitySchema.id, params.id));
				return null;
			}

			if (params.type === 'delete') {
				await db.delete(entitySchema).where(eq(entitySchema.id, params.id));
				return null;
			}

			return null;
		},
	{
		db: DbProvider,
		entitySchema: EntitySchemaProvider,
	}
);
