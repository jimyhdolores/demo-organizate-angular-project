import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitatRoutingModule } from './habitat-routing.module';
import { HabitatComponent } from './habitat.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [HabitatComponent],
  imports: [
    CommonModule,
    HabitatRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [HabitatComponent]
})
export class HabitatModule { }
