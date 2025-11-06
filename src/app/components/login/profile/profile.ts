import { Component, input, Input, OnInit } from '@angular/core';
import { ModulesStatus } from '../../../services/modules-status';
import { ModulePermission } from '../../../models/module-permission';
import { ModulesPermissionsService } from '../../../services/modules-permissions-service';
import { Products } from '../../user-pages/products/products';
import { user } from '../../../models/users';
import { Orders } from "../../user-pages/orders/orders";
import { Sets } from "../../user-pages/sets/sets";


@Component({
  selector: 'app-profile',
  imports: [Products, Orders, Sets],
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
    })
  }

  ngOnInit(): void {
  }

  viewModules(module: string){
    this.statusModule.changeStatus(true, module);
    this.module = module;
    this.welcome = false;
  }
}
