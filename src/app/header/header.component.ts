import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // encapsulation: ViewEncapsulation.None // wyłącza przykrywanie styli
})
export class HeaderComponent implements OnInit {

  title = 'Aukcyjny portal dla niezabogatych';
  myTitle = 'one-way databidning with [ ]';
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.title += '.';
    }, 2000);
  }
  changeTitle(ev){
    this.title += '!';
    console.log(ev);
  }

}
