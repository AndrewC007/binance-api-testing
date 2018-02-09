import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ExchangeInfo } from './exchangeInfo';

@Injectable()
export class PriceService {

  constructor(private http: HttpClient) { }

  getPrices(): Observable<ExchangeInfo> {
    return this.http.get<ExchangeInfo>('/api/v1/exchangeInfo');
  }
}
