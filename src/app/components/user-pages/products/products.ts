import { Component } from '@angular/core';
import { ProductsService } from '../../../services/modules-services/products-service';
import { Product } from '../../../models/product';
import { SearchingBar } from "../../generyc-components/searching-bar/searching-bar";
import { timeInterval } from 'rxjs';
import { ProductCard } from "../../generyc-components/product-card/product-card";
import { ModulesStatus } from '../../../services/modules-status';
import { Details } from "../details/details";

@Component({
  selector: 'app-products',
  imports: [SearchingBar, ProductCard, Details],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  status!: boolean;
  productsList!: Product[];
  searchParam!: string;
  productsCount!: number;

  constructor(private readonly productsService: ProductsService, private readonly modules: ModulesStatus){
    this.productsService.productsCount.subscribe( count => {
      this.productsCount = count;
    });

    this.productsService.getCount();

    this.productsService.products.subscribe( products => {
      this.productsList = products;
    });

    this.modules.productsModule.subscribe( status => {
      this.status = status;
    });

  }
}
