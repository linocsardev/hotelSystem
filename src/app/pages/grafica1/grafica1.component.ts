import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.scss']
})
export class Grafica1Component {

  public data1: number[] = [120, 10, 50]
  public dona1Labels: string[] = ['Facturador', 'Logistico', 'Finanzas']
  public dona1Background: string[] = ['#f44336', '#ffd966', '#16537e']
  }

