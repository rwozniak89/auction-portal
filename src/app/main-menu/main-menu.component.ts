import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styles: []
})
export class MainMenuComponent implements OnInit {


  //[ngStyle] = "buttonStyle"
  // buttonStyle = {
  //   color : 'red',
  //   backgroundColor : 'lightblue'
  // };

  showMenu = false;
  innaZmienna = false;
  menuItems: MenuItem[] = [
    { name: 'Aukcje', link: 'auctions'},
    { name: 'Promocje', link: 'promotions'},
    { name: 'Podpowiadamy', link: 'advices'},
    { name: 'Test-1', link: 'test1'},
    { name: 'Test-2', link: 'test2'},
  ];

  constructor() { }

  ngOnInit(): void {
  }


  handleToggleMenu(){
    this.showMenu = !this.showMenu;
  }

  // isShown(name: string): boolean{
  //   return name !== 'Promocje';
  // }

}
