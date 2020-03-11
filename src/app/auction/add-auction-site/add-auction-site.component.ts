import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuctionsService } from './../auctions.service';
import { AuctionItem } from './../auction-item';

@Component({
  selector: 'app-add-auction-site',
  templateUrl: './add-auction-site.component.html',
  styles: [`
    .ng-touched.ng-invalid{
      border-color: darkred;
    }
  `]
})
export class AddAuctionSiteComponent implements OnInit {

  imgId = 1;

  constructor(private auctionsService: AuctionsService) { }

  ngOnInit(): void {
  }

  handleFormSubmit(form: NgForm){
    console.log(form);
    const auction = form.value as AuctionItem;
    auction.imgUrl = 'https://i.picsum.photos/id/' + this.imgId + '/200/200.jpg';
    console.log('handleFormSubmit');
    this.auctionsService
    .add(auction)
    .subscribe(() => {
      form.reset();
      this.imgId = 1;
      console.log(form);
    });
  }

}
