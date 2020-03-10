import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-footer',
  template: `
  <nav class="navbar fixed-bottom navbar-expand navbar-light bg-light mt-5 p-3">
  <ul class="navbar-nav">
    <li class="nav-item " *ngFor="let item of menuItems"  >
          <a class="nav-link fa fa-user"  [href]="item.link" >{{item.name}} </a>
        </li>
  </ul>
</nav>
  `,
  styles: []
})
export class FooterComponent implements OnInit {


  //[ngClass] ="{[item.cssClass] : true}"  
  menuItems: MenuItem[] = [
    { name: 'Polityka prywatności', link: 'politycs'},
    { name: 'Regulamin', link: 'regulamin'},
    { name: 'Pomoc', link: 'help'},
  ];

 

  constructor() { }

  ngOnInit(): void {
  }

}
