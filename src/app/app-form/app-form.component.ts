import { Component } from '@angular/core';
import { Product } from "../product.model";

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent {
  formData: Product = new Product(0, '', 0, 0);

  productList: Product[] = [];

  onSubmit() {
    const newProduct = new Product(
      this.formData.id,
      this.formData.name,
      this.formData.quantity,
      this.formData.price
    );

    this.productList.push(newProduct)

    this.formData = new Product(0, '', 0, 0);
  }
}
