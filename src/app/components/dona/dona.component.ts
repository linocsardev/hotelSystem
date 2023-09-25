import { Component, Input, Output } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent {
  @Input() title:string = 'Sin titulo'
  @Input('labels') doughnutChartLabels: string[]=[];
  @Input('data') dataDonut:number[]= [];
  @Input('backgroundColor') backgroundColorDonut: string[]= [];

  constructor(){
    //Valores por defecto en caso no se tiene nada de otros componentes
    this.dataDonut = [350,450,100]
    this.doughnutChartLabels= ['label1', 'label2', 'label3']
    this.backgroundColorDonut= ['#6857e6', '#009FEE', '#F02059']
  }
  ngOnInit() : void {
    // Aca seteamos los valores que vienen como @Input(), al objeto doughnutChartData
    this.doughnutChartData.datasets[0].data = this.dataDonut;
    this.doughnutChartData.datasets[0].backgroundColor = this.backgroundColorDonut;
    this.doughnutChartData.labels = this.doughnutChartLabels;
  }

  public doughnutChartData: ChartData <'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.dataDonut,
        backgroundColor: this.backgroundColorDonut
      }
    ]
  }

  public doughnutChartType: ChartType = 'doughnut'

}
