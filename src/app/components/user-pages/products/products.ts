import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products-service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  status: boolean = false;
  productsList!: Product[];
  searchParam!: string;
  productsCount!: number;

  constructor(private readonly productsService: ProductsService){
    this.productsService.productsCount.subscribe( count => {
      this.productsCount = count;
    })
  }

  

}
