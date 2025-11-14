import { Component, Input, Output } from '@angular/core';
import { ProductsService } from '../../../services/modules-services/products-service';
import { OrdersService } from '../../../services/modules-services/orders-service';
import { Product } from '../../../models/product';
import { Order } from '../../../models/order';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-searching-bar',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './searching-bar.html',
  styleUrl: './searching-bar.scss',
})
export class SearchingBar {
  @Input("module") moduleBar!: string;
  @Input("placeholder") placeholder!: string;
  searchParam!: string;
  @Output("data") data!: Product[] | Order[];
  form!: FormGroup;

  constructor(
    private readonly productService: ProductsService, 
    private readonly orderService: OrdersService){
    
    this.productService.param.subscribe( param => {
      this.searchParam = param;
    })

  }

  search(){
    this.productService.param.next(this.searchParam);
    this.productService.search();
  }
}
