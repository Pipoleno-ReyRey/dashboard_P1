import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { ModulesStatus } from '../../services/modules-status';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    NgIf
],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {

  status!: boolean;
  form!: FormGroup;
  username!: string;
  password!: string;

  constructor(private readonly serviceStatus: ModulesStatus){
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(1)]),
      password: new FormControl("", [Validators.required, Validators.minLength(1)])
    });

    this.serviceStatus.signIn.subscribe(status => {
      this.status = status;  
    })
  }

  SignIn(){
    this.username = this.form.get("username")?.value;
    this.password = this.form.get("password")?.value;

    this.serviceStatus.changeStatus(false, "signIn");

    console.log(`usuario: ${this.username} | password: ${this.password} y el status paso: ${this.status}`);
  }
}
