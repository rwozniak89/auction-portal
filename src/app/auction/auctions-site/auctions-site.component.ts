import { Component, OnInit } from '@angular/core';
import { AuctionItem } from '../auction-item';
import { AuctionsService } from './../auctions.service';


@Component({
  selector: 'app-auctions-site',
  templateUrl: './auctions-site.component.html',
  styles: []
})
export class AuctionsSiteComponent implements OnInit {


  auctions: AuctionItem[] = [];

  constructor(private auctionsService: AuctionsService) { }

  ngOnInit(): void {
    this.auctionsService.getAll()
    .subscribe(
      (auction: AuctionItem[]) => {
      this.auctions = auction;
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
