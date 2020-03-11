import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { AuctionItem } from './../auction-item';

@Component({
  selector: 'app-shopping-cart-site',
  templateUrl: './shopping-cart-site.component.html',
  styles: []
})
export class ShoppingCartSiteComponent implements OnInit {


  cartItems: AuctionItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.cartService.getItems()
    .subscribe((auction: AuctionItem[]) => {
      this.cartItems = auction;
    },
    (error: Error) => {
      console.log('jest błąd', error);
    },
    () => {
      console.log('Aukcje pobrano');
    }
    );
  }


}
