import {Component, Input} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css']
})
export class AppProductComponent {
  @Input() product: Product = new Product(0, '', 0, 0);
}
