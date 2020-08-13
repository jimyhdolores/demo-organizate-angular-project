import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvolutionsRoutingModule } from './evolutions-routing.module';
import { EvolutionsComponent } from './evolutions.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [EvolutionsComponent],
	imports: [CommonModule, EvolutionsRoutingModule, MatCardModule, FlexLayoutModule],
	exports: [EvolutionsComponent]
})
export class EvolutionsModule {}
