import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvolutionsRoutingModule } from './evolutions-routing.module';
import { EvolutionsComponent } from './evolutions.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [EvolutionsComponent],
  imports: [
    CommonModule,
    EvolutionsRoutingModule,
    MatCardModule
  ],
  exports: [EvolutionsComponent]
})
export class EvolutionsModule { }
