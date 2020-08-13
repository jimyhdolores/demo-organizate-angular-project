import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitatComponent } from './habitat.component';


const routes: Routes = [{ path: '', component: HabitatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitatRoutingModule { }
