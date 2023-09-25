import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HabitacionesComponent } from "./habitaciones/habitaciones.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children : [
          { path: '', component: DashboardComponent},
          { path: 'habitaciones', component: HabitacionesComponent },
          { path: 'clientes', component: ClientesComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'grafica1', component: Grafica1Component },
        ]
      },

]
@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}
