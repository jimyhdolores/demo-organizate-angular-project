import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{
		path: 'login',
		loadChildren: () =>
			import('./businnes/access/view/login/login.module').then((m) => m.LoginModule)
	},
	{
		path: 'principal',
		loadChildren: () =>
			import('./businnes/principal/view/container/container.module').then((m) => m.ContainerModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
