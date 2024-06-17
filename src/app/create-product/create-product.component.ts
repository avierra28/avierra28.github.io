import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  product = {
    name: '',
    description: '',
    price: 0
  };

  constructor(private router: Router, private productService: ProductListService) { }

  onSubmit() {
    this.productService.createProduct(this.product).subscribe(response => {
      console.log("Product created successfully", response); // Handle form submission logic here
    },
      error => {
        console.log("Error creating product", error);
      })


    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 2000);
  }
}
