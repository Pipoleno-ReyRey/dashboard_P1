import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulesStatus {
  
  profile: BehaviorSubject<boolean> = new BehaviorSubject(false);
  details: BehaviorSubject<boolean> = new BehaviorSubject(false);
  signIn: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(){
    
  }

  changeStatus(newStatus: boolean, module: string){
    switch(module){
      case "signIn": 
        this.signIn.next(newStatus);
        break;
      case "profile": 
        this.profile.next(newStatus);
        break;
      case "details":
        this.details.next(newStatus);
        break;
    }
    
  }
}
