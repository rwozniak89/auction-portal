import { Injectable} from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  private baseURL = environment.baseURL;

  constructor(private  httpClient: HttpClient) { }


  //http://localhost:3000/auctions
  getAll(): Observable<AuctionItem[]>{
    //return of([]);
    return  this.httpClient.get<AuctionItem[]>(`${this.baseURL}auctions`);
  }
}
