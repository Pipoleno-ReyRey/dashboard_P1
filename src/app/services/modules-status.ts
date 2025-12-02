import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulesStatus {
  
  details: BehaviorSubject<boolean> = new BehaviorSubject(false);
  productsModule: BehaviorSubject<boolean> = new BehaviorSubject(true);
  ordersModule: BehaviorSubject<boolean> = new BehaviorSubject(true);
  setsModule: BehaviorSubject<boolean> = new BehaviorSubject(true);
  signIn: BehaviorSubject<boolean> = new BehaviorSubject(true);
  
  constructor(){
    
  }

  changeStatus(newStatus: boolean, module: string){
    switch(module){
      case "signIn": 
        this.signIn.next(newStatus);
        break;
      case "profile": 
        break;
      case "details":
        this.details.next(newStatus);
        break;
      case "products":
        this.productsModule.next(newStatus);
        this.ordersModule.next(false);
        this.setsModule.next(false);
        break;
    }
    
  }
}
