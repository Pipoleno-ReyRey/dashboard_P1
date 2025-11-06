import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from "./components/login/profile/profile";
import { SignIn } from './components/login/sign-in/sign-in';

@Component({
  selector: 'app-root',
  imports: [SignIn, Profile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard_P1');
}
