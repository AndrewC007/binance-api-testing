import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PriceViewerComponent } from './price-viewer/price-viewer.component';
import { PriceService } from './price.service';


@NgModule({
  declarations: [
    AppComponent,
    PriceViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
