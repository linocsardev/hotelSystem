import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { NgChartsModule } from 'ng2-charts';

import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ClientesComponent,
    HabitacionesComponent,
    PagesComponent,
    ProgressComponent,
    Grafica1Component
  ],
  exports : [
    DashboardComponent,
    ClientesComponent,
    HabitacionesComponent,
    PagesComponent,
    ProgressComponent,
    Grafica1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
