import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/modules-services/products-service';
import { Product } from '../../../models/product';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, FormsModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard implements OnInit{

  @Input("product") product!: Product;
  status: boolean = true;

  constructor(private readonly productService: ProductsService){}

  ngOnInit(): void {
    if(this.product.borrado == 0){
      this.status = true;
    } else {
      this.status = false;;
    }
  }


  async update(){
    this.product.borrado = this.status ? 0 : 1;
    console.log(this.product);
    await this.productService.updateProduct(this.product);
  }
}
