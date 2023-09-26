import { Component, OnInit } from '@angular/core';
declare function customSideBar():void;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
    customSideBar()
  }

}
