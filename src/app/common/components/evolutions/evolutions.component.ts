import { Component, OnInit, Input } from '@angular/core';
import { IEvolution } from '../../services/models/pokemon';
import { EvolutionService } from '../../services/state/evolution.service';

@Component({
	selector: 'app-evolutions',
	templateUrl: './evolutions.component.html',
	styleUrls: ['./evolutions.component.scss']
})
export class EvolutionsComponent implements OnInit {
	evolutions: IEvolution[];

	constructor(private evolutionService: EvolutionService) {}

	ngOnInit(): void {
		this.evolutionService.getEvolutions().subscribe((data) => {
			this.evolutions = data;
		});
	}
}
