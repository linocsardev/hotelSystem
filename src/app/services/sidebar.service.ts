import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/'},
        {titulo: 'ProgressBar', url: 'progress'},
        {titulo: 'Grafica', url: 'grafica1'},
        {titulo: 'Clientes', url: 'clientes'},
        {titulo: 'Habitaciones', url: 'habitaciones'},

      ]
    }
  ]
  constructor() { }
}
