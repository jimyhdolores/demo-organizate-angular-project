import { Component, OnInit, Input } from '@angular/core';
import { IEvolution } from '../../services/models/pokemon';

@Component({
	selector: 'app-evolutions',
	templateUrl: './evolutions.component.html',
	styleUrls: ['./evolutions.component.scss']
})
export class EvolutionsComponent implements OnInit {
	@Input() evolutions: IEvolution[];

	constructor() {}

	ngOnInit(): void {}
}
