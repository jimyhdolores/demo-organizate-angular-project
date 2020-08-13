import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [PokemonComponent]
})
export class PokemonModule { }
