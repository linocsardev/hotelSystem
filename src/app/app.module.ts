import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotpagesfoundComponent } from './pages/notpagesfound/notpagesfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotpagesfoundComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    ClientesComponent,
    HabitacionesComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
