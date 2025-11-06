import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ModulesPermissionsService } from '../../../services/modules-permissions-service';
import { ModulesStatus } from '../../../services/modules-status';
import { Profile } from "../profile/profile";

@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    Profile
],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {

  @Output("signIn") signIn: boolean = false;
  form!: FormGroup;
  username!: string;
  password!: string;

  constructor(private readonly servicesignIn: ModulesStatus, private readonly modules: ModulesPermissionsService){
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(1)]),
      password: new FormControl("", [Validators.required, Validators.minLength(1)])
    });
  }

  SignIn(){
    this.username = this.form.get("username")?.value;
    this.password = this.form.get("password")?.value;

    this.signIn = true;
    //this.servicesignIn.changeStatus(false, "signIn");

    this.modules.SignInUser(this.username);
  }
}
