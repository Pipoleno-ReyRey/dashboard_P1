import { Component, Input, OnInit, twoWayBinding } from '@angular/core';
import { Product } from '../../../models/product';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { ProductsService } from '../../../services/modules-services/products-service';
import { ModulesStatus } from '../../../services/modules-status';
import { Order } from '../../../models/order';
import { Set } from '../../../models/set';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit{

  product!: Product;
  order!: Order;
  set!: Set;
  formData!: FormGroup;
  status!: boolean;
  undefinedStock!: boolean;

  constructor(private readonly productService: ProductsService, private readonly module: ModulesStatus){

    this.productService.product.subscribe( product => {
      this.product = product;
    });

    this.module.details.subscribe( status => {
      this.status = status;
    });

    if(this.product.undefinedStock === 0){
      this.undefinedStock = false;
    } else {
      this.undefinedStock = true;
    }
    console.log(this.status);
  }

  ngOnInit(): void {

    this.formData = new FormGroup({
      title: new FormControl(this.product.title, [Validators.required, Validators.minLength(10)]),
      description: new FormControl(this.product.description, [Validators.required, Validators.minLength(20)]),
      undefinedStock: new FormControl(this.product.undefinedStock, [Validators.required, Validators.min(1)]),
      securityStock: new FormControl(this.product.securityStock, [Validators.required, Validators.min(1)]),
      disabledStores: new FormControl(this.product.disabledShops)
    });
    
  }

  updateProduct(): void {
    let updatedProduct: object = {
      title: this.formData.get('title')?.value,
      description: this.formData.get('description')?.value,
      undefinedStock: this.formData.get('undefinedStock')?.value,
      securityStock: this.formData.get('securityStock')?.value,
      disabledShops: this.formData.get('disabledStores')?.value
    };

    this.productService.updateProduct(updatedProduct);
  }
  
}
