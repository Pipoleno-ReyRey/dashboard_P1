import { Component, Input, Output } from '@angular/core';
import { ProductsService } from '../../../services/modules-services/products-service';
import { OrdersService } from '../../../services/modules-services/orders-service';
import { Product } from '../../../models/product';
import { Order } from '../../../models/order';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-searching-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './searching-bar.html',
  styleUrl: './searching-bar.scss',
})
export class SearchingBar {
  @Input("module") moduleBar!: string;
  @Input("placeholder") placeholder!: string;
  searchParam!: string;
  @Output("data") data!: Product[] | Order[];
  form!: FormGroup;

  constructor(private readonly productService: ProductsService, private readonly orderService: OrdersService){

    this.form = new FormGroup({
      param: new FormControl("", [Validators.required, Validators.minLength(1)])
    });
    
  }
}
