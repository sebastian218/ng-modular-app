import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './componentes/table/table.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';


const UiRoutes: Routes = [
    { path: '', component: TableComponent,children:[
        {path:'detalle', component: DetalleComponent}
    ],
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(UiRoutes)],
    exports: [RouterModule]
})
export class UiRoutingModule { }