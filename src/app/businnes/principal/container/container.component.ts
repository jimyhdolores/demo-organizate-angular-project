import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPokemon } from '@demo-service/models/pokemon';
import { PokemonService } from '@demo-service/http/pokemon.service';

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {
	pokemonOberver: Subscription;
	pokemonList: IPokemon[] = [];
	pokemonSelected: IPokemon = {};
	namePokemon = '';
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
		this.namePokemon = this.pokemonSelected.name;
	}
}
