import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './componentes/table/table.component';
import { UiRoutingModule } from './ui-routing.module';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TableComponent, DetalleComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    MaterialModule
  ]
})
export class UiModule { }
