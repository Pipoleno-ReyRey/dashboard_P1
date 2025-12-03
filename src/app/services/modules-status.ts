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
  
}
