import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions-site',
  templateUrl: './promotions-site.component.html',
  styleUrls: ['./promotions-site.component.css']
})
export class PromotionsSiteComponent implements OnInit {

  user = {name: 'Radek'};
  todaysDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
