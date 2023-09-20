import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { NotpagesfoundComponent } from './notpagesfound/notpagesfound.component';
import { PagesComponent } from './pages/pages.component';

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

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NotpagesfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
