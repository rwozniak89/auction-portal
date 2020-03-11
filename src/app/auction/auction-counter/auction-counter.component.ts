import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-auction-counter',
  template: `
    <p>
      Liczba  {{amount}} elementów w koszyku.
    </p>
  `,
  styles: []
})
export class AuctionCounterComponent implements OnInit {


  amount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log('AuctionCounterComponent');
    this.cartService.countItems().subscribe((value) => { this.amount = value; } );
  }



}
