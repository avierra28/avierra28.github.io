import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';


@Component({
  selector: 'app-read-products',
  templateUrl: './read-products.component.html',
  styleUrl: './read-products.component.css'
})
export class ReadProductsComponent implements OnInit {

  products: any[] | undefined;

  constructor(private productService: ProductListService) {

  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;

      console.log(products);
    });

  }

}
