import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModulePermission } from '../models/module-permission';
import { user } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class ModulesPermissionsService {
  
  user!: BehaviorSubject<user>;

  constructor(){
    this.user = new BehaviorSubject(new user("", "", []));
  }

  SignInUser(username: string){
    this.user.next(new user(username, "desarrollador", [
      new ModulePermission("products.png", "products"),
      new ModulePermission("orders.png", "orders"),
      new ModulePermission("sets.png", "sets")
    ]));
  }
}
