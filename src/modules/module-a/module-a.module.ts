import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModAComponent } from './pages/home-mod-a/home-mod-a.component';
import { ModARoutingModule } from './module-a-routing.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [HomeModAComponent],
  imports: [
    CommonModule,
    ModARoutingModule,
    MaterialModule
  ]
})
export class ModuleAModule { }
