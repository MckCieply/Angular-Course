import {Component, EventEmitter, Output} from '@angular/core';
import { Product } from "../product.model";

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent {
  formData: Product = new Product(0, '', 0, 0);


  @Output() submitData = new EventEmitter<Product>();
  onSubmit() {
    const newProduct = new Product(
      this.formData.id,
      this.formData.name,
      this.formData.quantity,
      this.formData.price
    );


    this.submitData.emit(newProduct)
    this.formData = new Product(0, '', 0, 0);
  }
}
