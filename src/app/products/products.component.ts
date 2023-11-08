import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  myProduct = {
    id: 0,
    title: ''
  }

  products = [
    {
      id: 1,
      title: "Iphone 15"
    },
    {
      id: 2,
      title: "Samsung 19 note"
    },
    {
      id: 2,
      title: "Vivo phone"
    }
  ]

  addProduct() {
    this.products = [...this.products, this.myProduct]

    this.myProduct = {
      id: 0,
      title: ''
    }
  }

  deleteProduct(product: any) {

    if(confirm("Are you sure to delete this Product: "+product.title+" ?" )) {

        let index = this.products.indexOf(product)
    
        if(index != -1) {
          this.products.splice(index, 1)
        }
    }

  }

}
