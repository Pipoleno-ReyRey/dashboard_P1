import { Component, Input } from '@angular/core';
import { Products } from "./products/products";
import { Orders } from "./orders/orders";
import { Sets } from "./sets/sets";
import { Details } from './details/details';

@Component({
  selector: 'app-user-pages',
  imports: [Products, Orders, Sets, Details],
  templateUrl: './user-pages.html',
  styleUrl: './user-pages.scss',
})
export class UserPages {

  @Input() welcome: boolean = true;
  @Input() module!: string;
}
