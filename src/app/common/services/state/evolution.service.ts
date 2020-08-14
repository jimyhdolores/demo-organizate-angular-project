import { Injectable } from '@angular/core';
import { IEvolution } from '../models/pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EvolutionService {
	evolutions: IEvolution[] = [];

	private loaderSubject = new BehaviorSubject<IEvolution[]>(this.evolutions);
	loader$ = this.loaderSubject.asObservable();

	constructor() {}
	getEvolutions() {
		return this.loaderSubject;
	}

	setEvolutions(evolutions: IEvolution[]) {
		this.loaderSubject.next(evolutions);
	}
}
