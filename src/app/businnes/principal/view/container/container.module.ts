import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PrincipalRoutingModule } from './container-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PokemonModule } from '../../../../common/components/pokemon/pokemon.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EvolutionsModule } from '../../../../common/components/evolutions/evolutions.module';

@NgModule({
	declarations: [ContainerComponent],
	imports: [
		CommonModule,
		PrincipalRoutingModule,
		MatButtonModule,
		ClipboardModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		PokemonModule,
		FlexLayoutModule,
		EvolutionsModule
	]
})
export class ContainerModule {}
