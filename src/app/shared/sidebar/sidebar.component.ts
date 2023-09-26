import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menuItems: any[] ;

constructor(private sidebarService: SidebarService){
  this.menuItems = sidebarService.menu
  console.log(this.menuItems)
}
}
