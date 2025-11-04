import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModulePermission } from '../classes/module-permission';

@Injectable({
  providedIn: 'root',
})
export class ModulesPermissionsService {
  
  modules!: BehaviorSubject<ModulePermission[]>;
  username!: BehaviorSubject<string>;

  constructor(){
    this.modules = new BehaviorSubject([
      new ModulePermission("public/products.png","product")
    ]);

    this.username = new BehaviorSubject("");
  }

  
}
