import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { AuctionItemCardComponent } from './auction-item-card/auction-item-card.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';
import { FilterAuctionPipe } from './filter-auction.pipe';
import { AddAuctionSiteComponent } from './add-auction-site/add-auction-site.component';
import { ShoppingCartSiteComponent } from './shopping-cart-site/shopping-cart-site.component';
import { AuctionCounterComponent } from './auction-counter/auction-counter.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuctionsSiteComponent,
    AuctionItemCardComponent,
    PromotionsSiteComponent,
    FilterAuctionPipe,
    AddAuctionSiteComponent,
    ShoppingCartSiteComponent,
    AuctionCounterComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    AuctionsSiteComponent,
  ]
})
export class AuctionModule { }
