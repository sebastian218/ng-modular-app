import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'uiM', loadChildren: () => import('src/modules/ui/ui.module').then(m => m.UiModule) },
  { path: 'modA', loadChildren: () => import('src/modules/module-a/module-a.module').then(m => m.ModuleAModule) },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
