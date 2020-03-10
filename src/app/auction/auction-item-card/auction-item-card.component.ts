import { Component, OnInit, Inject, Input } from '@angular/core';
import { AuctionItem } from './../auction-item';

@Component({
  selector: 'app-auction-item-card',
  templateUrl: './auction-item-card.component.html',
  styles: []
})
export class AuctionItemCardComponent implements OnInit {

@Input() auction: AuctionItem;

  r: string = '23%';

  constructor() { }

  ngOnInit(): void {
      //this.r = (Math.random() * 6) + 1;
  }

}
