import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

import { NotpagesfoundComponent } from './notpagesfound/notpagesfound.component';


const routes: Routes = [

  //path : '/dashboard' PagesRouting
  //path : '/auth' AuthRouting


  { path: '**', component: NotpagesfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
