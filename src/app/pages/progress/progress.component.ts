import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  progreso1: number = 30
  progreso2: number = 30
  progreso3: number = 30
  progreso4: number = 30
  progreso5: number = 30
  progreso6: number = 30
  progreso7: number = 30
  progreso8: number = 30

  get getProgreso1() {
    return `${this.progreso1}%`;
  }
  get getProgreso2() {
    return `${this.progreso2}%`;
  }
  get getProgreso3() {
    return `${this.progreso3}%`;
  }
  get getProgreso4() {
    return `${this.progreso4}%`;
  }
  get getProgreso5() {
    return `${this.progreso5}%`;
  }
  get getProgreso6() {
    return `${this.progreso6}%`;
  }
  get getProgreso7() {
    return `${this.progreso7}%`;
  }
  get getProgreso8() {
    return `${this.progreso8}%`;
  }
}
