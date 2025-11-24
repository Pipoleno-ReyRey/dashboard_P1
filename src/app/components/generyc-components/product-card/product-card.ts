import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  @Input("img") img!: string;
  @Input("sku") sku!: string;
  @Input("title") title!: string;
  @Input("price") price!: number;
  @Input("status") status!: boolean;
}
