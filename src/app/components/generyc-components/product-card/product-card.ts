import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/modules-services/products-service';
import { Product } from '../../../models/product';
import { ɵInternalFormsSharedModule, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModulesStatus } from '../../../services/modules-status';
import { Details } from "../../user-pages/details/details";

@Component({
  selector: 'app-product-card',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, FormsModule, Details],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard implements OnInit{

  @Input("product") product!: Product;
  status: boolean = true;
  detailsActive: boolean = false;

  constructor(private readonly productService: ProductsService, private readonly modules: ModulesStatus){}

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

  details(){
    console.log(this.modules.details.getValue());

    this.modules.productsModule.next(false);
    this.productService.product.next(this.product);
    this.modules.details.next(true);

    console.log(this.modules.details.getValue());
  }
}
