import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulesStatus {
  
  profile: BehaviorSubject<boolean> = new BehaviorSubject(false);
  details: BehaviorSubject<boolean> = new BehaviorSubject(false);
  productsModule: BehaviorSubject<boolean> = new BehaviorSubject(false);
  ordersModule: BehaviorSubject<boolean> = new BehaviorSubject(false);
  setsModule: BehaviorSubject<boolean> = new BehaviorSubject(false);
  signIn: BehaviorSubject<boolean> = new BehaviorSubject(true);
  
  constructor(){
    
  }

  changeStatus(newStatus: boolean, module: string){
    switch(module){
      case "signIn": 
        this.signIn.next(newStatus);
        this.profile.next(true)
        break;
      case "profile": 
        this.profile.next(newStatus);
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
