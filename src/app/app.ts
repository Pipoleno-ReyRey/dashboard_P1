import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignIn } from "./modules/sign-in/sign-in";
import { Profile } from "./modules/profile/profile";

@Component({
  selector: 'app-root',
  imports: [SignIn, Profile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard_P1');
}
