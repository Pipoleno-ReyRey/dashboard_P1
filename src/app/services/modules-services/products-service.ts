import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  products!: Subject<Product[]>;
  product!: BehaviorSubject<Product>;
  productsCount!: BehaviorSubject<number>;

  constructor(){
    this.products = new Subject();
    this.product = new BehaviorSubject(new Product())
    this.productsCount = new BehaviorSubject(0);
  }
}
