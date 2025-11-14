import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  param!: BehaviorSubject<string>;
  products!: BehaviorSubject<Product[]>;
  product!: BehaviorSubject<Product>;
  productsCount!: BehaviorSubject<number>;

  constructor(private readonly http: HttpClient){
    this.products = new BehaviorSubject([new Product()]);
    this.product = new BehaviorSubject(new Product());
    this.productsCount = new BehaviorSubject(0);
    this.param = new BehaviorSubject("");
  }

  getCount(){
    this.http.get<number>("http://localhost:6512/products/count").subscribe(data => {
      this.productsCount.next(data);
      console.log(data);
      this.productsCount.next(data);
    });
  }

  search(){
    this.http.get<Product[]>(`http://localhost:6512/products/${this.param.getValue()}`).subscribe(products => {
      this.products.next(products);
    });

    console.log(this.products.getValue().length);
  }
}
