import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionItemCardComponent } from './auction-item-card.component';
import { AuctionItem } from './../auction-item';
//import { RouterTestingModule } from '@angular/router/testing';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

fdescribe('AuctionItemCardComponent', () => {
  let component: AuctionItemCardComponent;
  let fixture: ComponentFixture<AuctionItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
      declarations: [ AuctionItemCardComponent ],
      imports: [
        //RouterTestingModule
      ],
      schemas: [
        //CUSTOM_ELEMENTS_SCHEMA
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should', () => {
  //   //GIVEN (ARRANGE)
  //   //WHEN (ACT)
  //   //THEN (ASSERT)
  // });
  it('should emit auction when handleAddToCartClick()', () => {
    //GIVEN (ARRANGE)
    const auction: AuctionItem = {title: 'hello Auction'} as AuctionItem;
    component.auction = auction;
    const spyAddToCart = spyOn(component.addToCart, 'emit');

    //WHEN (ACT)
    component.handleAddToCardClick();

    //THEN (ASSERT)
    expect(spyAddToCart).toHaveBeenCalledWith(auction);
  });
  it('should emit auction when button clicked handleAddToCartClick()', () => {
    //GIVEN (ARRANGE)
    const auction: AuctionItem = {title: 'hello Auction'} as AuctionItem;
    component.auction = auction;
    const spyAddToCart = spyOn(component.addToCart, 'emit');

    //WHEN (ACT)
    fixture.detectChanges();
    fixture.nativeElement.querySelector('.btn.btn-primary').click();

    //THEN (ASSERT)
    expect(spyAddToCart).toHaveBeenCalledWith(auction);
  });

});
