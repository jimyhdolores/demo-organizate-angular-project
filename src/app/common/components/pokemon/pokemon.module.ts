import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EvolutionsModule } from '../../../common/components/evolutions/evolutions.module';
import { EvolutionService } from '../../services/state/evolution.service';

@NgModule({
	declarations: [PokemonComponent],
	imports: [
		CommonModule,
		PokemonRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDialogModule,
		EvolutionsModule
	],
	exports: [PokemonComponent],
	providers: [EvolutionService]
})
export class PokemonModule {}
