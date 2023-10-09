import { Component } from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Course';

  receivedProducts: Product[] = []

  onSubmitProduct(product: Product) {
    // Handle the submitted Product object in the parent component
    this.receivedProducts.push(product);
    console.log(this.receivedProducts);

  }
}
