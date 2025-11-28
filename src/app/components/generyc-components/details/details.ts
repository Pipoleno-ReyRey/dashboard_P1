import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/modules-services/products-service';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {

  @Input("product") product: Product = new Product();
  formData!: FormGroup;

  constructor(private readonly productService: ProductsService){
    this.formData = new FormGroup({
      title: new FormControl(this.product.title, [Validators.required, Validators.minLength(10)]),
      description: new FormControl(this.product.description, [Validators.required, Validators.minLength(20)]),
      undefinedStock: new FormControl(this.product.undefinedStock, [Validators.required, Validators.min(1)]),
      securityStock: new FormControl(this.product.securityStock, [Validators.required, Validators.min(1)]),
      desactivadedStores: new FormControl(this.product.desactivatedStores),
    });
  }

  
}
