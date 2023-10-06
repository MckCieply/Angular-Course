import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppProductComponent } from './app-product/app-product.component';
import { AppProductRowComponent } from './app-product-row/app-product-row.component';
import { AppProductsComponent } from './app-products/app-products.component';
import {AppFormComponent} from "./app-form/app-form.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AppProductComponent,
    AppProductRowComponent,
    AppProductsComponent,
    AppFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
