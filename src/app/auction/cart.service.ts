import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private autions$ = new BehaviorSubject<AuctionItem[]>([
    //{title: 'hello koszyk'} as AuctionItem
  ]);

  constructor() { }

  addItem(auction: AuctionItem){
    const auctions = this.autions$.getValue();
    const  founded = auctions.find((x) =>  x.id === auction.id );
    console.log('CartService -> addItem -> ' + auction.id);
    if(founded) { 
      console.log('CartService -> addItem -> Hola Hola jest juz taki obiekt w koszyku');
    } else
    {
      auctions.push(auction);
      this.autions$.next(auctions);
    }
  }

  getItems(): Observable<AuctionItem[]> {
    //observable, tak trzeba zeby to było cały czas jedyne źródło prawdy
    return this.autions$.asObservable();
  }

  countItems(): Observable<number> {
    return this.autions$.pipe(map((auctions: AuctionItem[] ) => auctions.length));
  }
}
