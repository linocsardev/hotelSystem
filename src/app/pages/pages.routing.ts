import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HabitacionesComponent } from "./habitaciones/habitaciones.component";
import { ClientesComponent } from "./clientes/clientes.component";

const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children : [
          { path: 'dashboard', component: DashboardComponent},
          { path: 'habitaciones', component: HabitacionesComponent },
          { path: 'clientes', component: ClientesComponent },
          { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
        ]
      },

]
@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}