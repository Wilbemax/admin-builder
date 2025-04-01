import { AdminEntityBuilderContainer } from './_container';
import { serial, timestamp, pgTable, text } from 'drizzle-orm/pg-core';
import _ from 'lodash';

export const EntitySchemaProvider = AdminEntityBuilderContainer.provider(
	(ctx) => {
		const fields = Object.fromEntries(
			ctx.deps.config.fields.map((field) => {
				return [field.name, text(_.snakeCase(field.name))];
			})
		);

		const entitySchema = pgTable(ctx.deps.config.name, {
			id: serial('id'),
			...fields,
			createdAt: timestamp('created_at'),
			updatedAt: timestamp('updated_at'),
		});

		return entitySchema;
	}
);
