import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EvolutionsComponent } from '../evolutions/evolutions.component';
import { IEvolution } from '../../services/models/pokemon';
import { EvolutionService } from '../../services/state/evolution.service';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
	@Input() name: string;
	@Input() description: string;
	@Input() type: string;
	@Input() image: string;
	@Input() evolutions: IEvolution[];

	srcImage: string;
	constructor(public dialog: MatDialog, private evolutionService: EvolutionService) {}

	ngOnInit(): void {
		this.srcImage = 'assets/img/' + this.image;
	}
	openDialog() {
		this.evolutionService.setEvolutions(this.evolutions);
		this.dialog.open(EvolutionsComponent);
	}
}
