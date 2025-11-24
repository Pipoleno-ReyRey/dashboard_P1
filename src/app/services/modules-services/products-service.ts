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
    this.products = new BehaviorSubject<Product[]>([]);
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

  async search(param: string){
    await this.http.get<Product[]>(`http://localhost:6512/products/${param}`).subscribe(products => {

      this.products.next(products);;
      
      console.log(this.products.getValue());
    });

    console.log(this.products.getValue().length);
  }
}
