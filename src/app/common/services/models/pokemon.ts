export interface IPokemon {
	name?: string;
	type?: string;
	species?: string;
	image?: string;
	description?: string;
	habitat?: IHabitat;
	evolutions?: IEvolution[];
}

export interface IEvolution {
	name?: string;
	image?: string;
}

export interface IHabitat {
	description?: string;
	image?: string;
}
