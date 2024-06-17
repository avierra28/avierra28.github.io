import { Component } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  productId: number = 0;
  product: any;
  message: string = "";

  object = {
    name: '',
    description: '',
    price: 0
  };

  constructor(private productService: ProductListService) { }

  onSearch() {
    this.productService.getdeleteProductURL(this.productId).subscribe(
      (product: any) => {
        this.product = product;
        this.message = '';
      },
      (error) => {
        this.product = null;
        this.message = 'Product not found.';
      }
    );
  }

  confirmUpdate() {
    if (confirm('Are you sure you want to update this product?')) {
      this.productService.updateProduct(this.object, this.productId).subscribe(
        () => {
          this.message = 'Product Updated successfully.';
          this.product = null;
          this.productId = 0;
        },
        (error) => {
          this.message = 'Error deleting product.';
        }
      );
    }
  }
}
