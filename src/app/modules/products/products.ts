import { Component } from '@angular/core';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  status: boolean = false;
  products!: Products[];
  searchParam!: string;

  constructor(private readonly productsService: ProductsService){
    
  }

}
