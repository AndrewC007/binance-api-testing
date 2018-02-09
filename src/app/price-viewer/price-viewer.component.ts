import { Component, OnInit } from '@angular/core';
import { PriceService } from '../price.service';
import { ExchangeInfo, Symbol } from '../exchangeInfo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-price-viewer',
  templateUrl: './price-viewer.component.html',
  styleUrls: ['./price-viewer.component.css']
})
export class PriceViewerComponent implements OnInit {

  symbols$: Observable<Symbol[]>;

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    this.getPrices();
  }

  getPrices() {
    this.symbols$ = this.priceService.getPrices()
        .map(exchangeInfo => exchangeInfo.symbols)
  }

}
