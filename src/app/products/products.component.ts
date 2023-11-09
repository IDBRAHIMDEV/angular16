import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  list: boolean = true
  edit: boolean = false

  showForm: boolean = false
  
  myProduct: Product = {
    id: 0,
    title: '',
    image: '',
    description: '',
    price: 0
  }

  products: Product[] = [
    {
      id: 1,
      title: "Iphone 15",
      description: '',
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/VXYNEvjqRvaVy7cvy0he',
      price: 237
    },
    {
      id: 2,
      title: "Samsung 19 note",
      description: 'lorem ipsum calc',
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/ndgpEj1YRAqrlS0gNZBb',
      price: 987
    },
    {
      id: 2,
      title: "Vivo phone",
      description: 'lorem ipsum calc',
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/qq7I5yr4QvqfVAMKQG1K',
      price: 123
    }
  ]

  toggleList(toggle: boolean) {
    this.list = toggle
  }

  toggleForm() {
    this.showForm = !this.showForm
  }

  addProduct() {
    this.products = [...this.products, this.myProduct]

    this.myProduct = {
      id: 0,
      title: '',
      image: '',
      description: '',
      price: 0
    }

    this.showForm = false
  }

  textButtonShowForm() {
    return this.showForm ? 'Hide' : 'Show'
  }

  editProduct(product: Product) {
    this.showForm = true
    this.edit = true
    this.myProduct = product
  }

  updateProduct() {

    this.edit = false
    this.myProduct = {
      id: 0,
      title: '',
      image: '',
      description: '',
      price: 0
    }

    this.showForm = false

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
