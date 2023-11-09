
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
   @Input() product: Product | null = null
   @Output() removeOneProduct = new EventEmitter()
   @Output() editOneProduct = new EventEmitter()

   wantDeleteProduct(product: Product) {
      this.removeOneProduct.emit(product)
   }

   wantEditProduct(product: Product) {
    this.editOneProduct.emit(product)
   }
}
