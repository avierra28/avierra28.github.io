import { Component } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {

  productId: number = 0;
  product: any;
  message: string = "";

  constructor(private productService: ProductListService) {}

  onSearch() {
    this.productService.getdeleteProductURL(this.productId).subscribe(
      (product) => {
        this.product = product;
        this.message = '';
      },
      (error) => {
        this.product = null;
        this.message = 'Product not found.';
      }
    );
  }

  confirmDelete() {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(this.productId).subscribe(
        () => {
          this.message = 'Product deleted successfully.';
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
