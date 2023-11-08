import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../models/product';

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

  deleteProduct(product: Product) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't delete this Product",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#9badbf",
      confirmButtonText: "Confirm"
    }).then((result) => {
      if (result.isConfirmed) {

            let index = this.products.indexOf(product)
    
            if(index != -1) {
              this.products.splice(index, 1)
            }

        Swal.fire({
          title: "Product Deleted!",
          text: `Product ${product.title} is deleted`,
          icon: "success",
          timer: 3000,
          timerProgressBar: true
        });
      }
    });

    // if(!confirm("Are you sure to delete this Product: "+product.title+" ?" )) {
    //   return
    // }
    //     let index = this.products.indexOf(product)
    
    //     if(index != -1) {
    //       this.products.splice(index, 1)
    //     }
   
  }

}
