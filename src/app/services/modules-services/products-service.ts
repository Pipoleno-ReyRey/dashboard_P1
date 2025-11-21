import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  products!: BehaviorSubject<Product[]>;
  product!: BehaviorSubject<Product>;
  productsCount!: BehaviorSubject<number>;

  constructor(private readonly http: HttpClient){
    this.products = new BehaviorSubject([new Product()]);
    this.product = new BehaviorSubject(new Product());
    this.productsCount = new BehaviorSubject(0);
  }

  getCount(){
    this.http.get<number>("http://localhost:6512/products/data/count").subscribe(data => {
      this.productsCount.next(data);
      console.log(data);
      this.productsCount.next(data);
    });
  }

  search(param: string){
    this.http.get<string[]>(`http://localhost:6512/products/${param}`).subscribe(products => {
      let searchedProducts: Product[] = [];

      products.map((p) => {
        let product: Product = new Product();
        product.title = p; 
        searchedProducts.push(product)});

      this.products.next(searchedProducts);;
      
      console.log(this.products.getValue());
    });

    console.log(this.products.getValue().length);
  }
}
