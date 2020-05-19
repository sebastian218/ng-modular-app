import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModAComponent } from './pages/home-mod-a/home-mod-a.component';


const ModARoutes: Routes = [
    { path: '', component: HomeModAComponent}
    
];

@NgModule({
    imports: [RouterModule.forChild(ModARoutes)],
    exports: [RouterModule]
})
export class ModARoutingModule { }