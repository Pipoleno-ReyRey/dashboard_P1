import { Component, input, Input, OnInit } from '@angular/core';
import { ModulesStatus } from '../../../services/modules-status';
import { ModulesPermissionsService } from '../../../services/modules-permissions-service';
import { Products } from '../../user-pages/products/products';
import { user } from '../../../models/users';
import { Orders } from "../../user-pages/orders/orders";
import { Sets } from "../../user-pages/sets/sets";
import { UserPages } from "../../user-pages/user-pages";


@Component({
  selector: 'app-profile',
  imports: [UserPages],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit{

  @Input() signIn: boolean = false;
  user!: user;
  welcome: boolean = true;
  module!: string;
  
  constructor(private readonly statusModule: ModulesStatus, private readonly permissionService: ModulesPermissionsService){
    this.permissionService.user.subscribe( user => {
      this.user = user;
      if(user.username != null){
        this.signIn = true;
      }
    });

    

  }

  ngOnInit(): void {
  }

  viewModules(module: string){
    this.module = module;
    this.welcome = false;
    this.statusModule.details.next(false);
  }
}
