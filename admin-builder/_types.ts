type Options = {
	label: string;
	value: string;
};

type TextField = {
	type: 'text';
	name: string;
	title: string;
};

type SelectField = {
	type: 'select';
	name: string;
	title: string;
	options: Options[];
};

export type GetEntitiesParams = {
	type: 'get';
};

export type CreateEntitiesParams = {
	type: 'create';
	data: {
		[key: string]: string | number | boolean | null | Date;
	};
};
export type UpdateEntitiesParams = {
	type: 'update';
	id: number;
	data: {
		[key: string]:string | number | boolean | null | Date;
	};
};

export type DeleteEntityParams = {
	type: 'delete';
	id: number;
};

export type GetEntitiesResult = {
	id: number;
	[key: string]: string | number | boolean | null | Date;
};

export type ActionParams =
	| GetEntitiesParams
	| CreateEntitiesParams
	| UpdateEntitiesParams
	| DeleteEntityParams;


export type AdminBuilderAction = (params: ActionParams) => Promise<GetEntitiesResult[] | null>

export type AdminBuilderField = TextField | SelectField;

export type AdminEntityConfig = {
	name: string;
	title: string;
	fields: AdminBuilderField[];
};
