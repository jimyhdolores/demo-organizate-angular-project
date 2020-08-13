import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../../../../common/services/pokemon.service';
import { Subscription } from 'rxjs';
import { IPokemon } from '../../../../common/services/pokemon';

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {
	pokemonOberver: Subscription;
	pokemonList: IPokemon[] = [];
	pokemonSelected: IPokemon = {};

	constructor(private pokemonService: PokemonService) {}

	ngOnInit(): void {
		this.pokemonOberver = this.pokemonService.getPokemons().subscribe((data) => {
			if (data) {
				this.pokemonList = data;
			}
		});
	}

	ngOnDestroy(): void {
		this.pokemonOberver.unsubscribe();
	}

	loadPokemonSelected(pokemon: IPokemon) {
		this.pokemonSelected = pokemon;
	}
}
