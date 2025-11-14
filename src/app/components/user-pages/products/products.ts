import { Component } from '@angular/core';
import { ProductsService } from '../../../services/modules-services/products-service';
import { Product } from '../../../models/product';
import { SearchingBar } from "../../generyc-components/searching-bar/searching-bar";
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [SearchingBar],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  status: boolean = true;
  productsList!: Product[];
  searchParam!: string;
  productsCount!: number;

  constructor(private readonly productsService: ProductsService){
    this.productsService.productsCount.subscribe( count => {
      this.productsCount = count;
    });

    this.productsService.getCount();

  }
}
