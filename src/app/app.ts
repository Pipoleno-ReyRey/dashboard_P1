import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignIn } from "./modules/sign-in/sign-in";

@Component({
  selector: 'app-root',
  imports: [SignIn],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'dashboard_P1';
}
