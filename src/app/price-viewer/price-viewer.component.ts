import { Component, OnInit } from '@angular/core';
import { Price } from '../price';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-price-viewer',
  templateUrl: './price-viewer.component.html',
  styleUrls: ['./price-viewer.component.css']
})
export class PriceViewerComponent implements OnInit {

  prices: Price[];

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    this.priceService.getPrices().subscribe(prices => this.prices = prices);
  }

}
