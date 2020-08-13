import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { POKEMON_LIST } from '../constants/url-http';
import { IPokemon } from './models/pokemon';
import { POKEMON_LIST } from '../constants/url-http';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	constructor(private http: HttpClient) {}

	getPokemons(): Observable<IPokemon[]> {
		return this.http.get<IPokemon[]>(POKEMON_LIST);
	}
}
