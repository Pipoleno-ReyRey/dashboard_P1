import { Component } from '@angular/core';
import { ModulesStatus } from '../services/modules-status';

@Component({
  selector: 'app-components',
  imports: [],
  templateUrl: './components.html',
  styleUrl: './components.scss',
})
export class Components {

  status: boolean = false;

  constructor(private readonly modulesService: ModulesStatus){
    this.modulesService.profile.subscribe( status => {
      this.status = status;
    });
  }

}
