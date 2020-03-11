import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuctionItem } from '../auction-item';
import { AuctionsService } from './../auctions.service';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-auctions-site',
  templateUrl: './auctions-site.component.html',
  styles: []
})
export class AuctionsSiteComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  auctions: AuctionItem[] = [];

  constructor(private auctionsService: AuctionsService, private cartService: CartService) { }
  ngOnDestroy(): void {
    console.log('AuctionsSiteComponent ->ngOnDestroy()');
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.auctionsService.getAll()
    .subscribe(
      (auction: AuctionItem[]) => {
      this.auctions = auction;
      console.log('jest subs');
    },
    (error: Error) => {
      console.log('jest błąd', error);
    },
    () => {
      console.log('Aukcje pobrano');
    }
    );
  }

  handleAddToCart(item: AuctionItem){
    console.log('AuctionsSiteComponent ->handleAddToCart');
    //console.log(item);
    this.cartService.addItem(item);

  }
}
