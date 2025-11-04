import { Component, OnInit } from '@angular/core';
import { ModulesStatus } from '../../services/modules-status';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit{

  username!: string | null;
  status: boolean = false;
  
  constructor(private readonly statusModule: ModulesStatus){
    this.statusModule.profile.subscribe(status => {
      this.status = status;
    })
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

}
