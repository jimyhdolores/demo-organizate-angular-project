import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoModule } from '../../../../common/components/logo/logo.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		LoginRoutingModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		FlexLayoutModule,
		ReactiveFormsModule,
		FormsModule,
		LogoModule
	]
})
export class LoginModule {}
