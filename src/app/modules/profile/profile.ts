import { Component, OnInit } from '@angular/core';
import { ModulesStatus } from '../../services/modules-status';
import { ModulePermission } from '../../classes/module-permission';
import { ModulesPermissionsService } from '../../services/modules-permissions-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit{

  username!: string | null;
  role!: string;
  status: boolean = false;
  welcome: boolean = false
  modules!: ModulePermission[];
  
  constructor(private readonly statusModule: ModulesStatus, private readonly permissionService: ModulesPermissionsService){
    this.statusModule.profile.subscribe(status => {
      this.status = status;
      this.welcome = status;
    });
    this.permissionService.modules.subscribe(modules => {
      this.modules = modules;
    });
    this.permissionService.username.subscribe( username => {
      this.username = username;
    });
  }

  ngOnInit(): void {
  }

}
