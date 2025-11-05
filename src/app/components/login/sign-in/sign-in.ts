import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModulesStatus } from '../../services/modules-status';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ModulesPermissionsService } from '../../services/modules-permissions-service';

@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgbModule
],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {

  status!: boolean;
  form!: FormGroup;
  username!: string;
  password!: string;

  constructor(private readonly serviceStatus: ModulesStatus, private readonly modules: ModulesPermissionsService){
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

    this.modules.username.next(this.username);
  }
}
