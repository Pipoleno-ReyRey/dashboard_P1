import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/modules-services/products-service';
import { ModulesStatus } from '../../../services/modules-status';
import { Order } from '../../../models/order';
import { Set } from '../../../models/set';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit{

  product!: Product;
  order!: Order;
  set!: Set;
  formData!: FormGroup;
  status!: boolean;

  constructor(private readonly productService: ProductsService, private readonly module: ModulesStatus){

    this.productService.product.subscribe( product => {
      this.product = product;
    });

    this.module.details.subscribe( status => {
      this.status = status;
    });

    console.log(this.status);
  }

  ngOnInit(): void {

    this.formData = new FormGroup({
      title: new FormControl(this.product.title, [Validators.required, Validators.minLength(10)]),
      description: new FormControl(this.product.description, [Validators.required, Validators.minLength(20)]),
      undefinedStock: new FormControl(this.product.undefinedStock, [Validators.required, Validators.min(1)]),
      securityStock: new FormControl(this.product.securityStock, [Validators.required, Validators.min(1)]),
      desactivadedStores: new FormControl(this.product.desactivatedStores)
    });
    
  }

  
  
}
