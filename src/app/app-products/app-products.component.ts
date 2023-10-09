import {Component, Input} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'app-products',
  templateUrl: './app-products.component.html',
  styleUrls: ['./app-products.component.css']
})
export class AppProductsComponent {
  @Input() receivedProducts: Product[] = [];
}
