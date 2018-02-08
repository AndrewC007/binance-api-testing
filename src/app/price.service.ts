import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Price } from './price';

@Injectable()
export class PriceService {

  constructor(private http: HttpClient) { }

  getPrices(): Observable<Price[]> {
    return this.http.get<Price[]>('/api/v3/ticker/price?symbol=OMGBTC');
  }
}
