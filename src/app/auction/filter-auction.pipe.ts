import { Pipe, PipeTransform } from '@angular/core';
import { AuctionItem } from './auction-item';

@Pipe({
  name: 'filterAuction',
  //pure: false, 
})
export class FilterAuctionPipe implements PipeTransform {

  transform(auctions: AuctionItem[], filterText = ''): AuctionItem[] {
    const lowerFilterText = filterText.toLowerCase();
    return auctions.filter((auction: AuctionItem) => {
      return auction.title.toLowerCase().includes(lowerFilterText);
    });
  }

}
