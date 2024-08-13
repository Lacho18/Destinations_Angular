import { Component } from '@angular/core';
import users from '../../data/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: '../log-in/log-in.component.css',
})
export class SignInComponent {
  newUser: any = {};

  constructor(private router: Router) {}

  changeHandler(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.newUser[target.name] = target.value;
  }

  submitHandler(event: Event): void {
    event.preventDefault();
    this.newUser.dateOfCreation = new Date();
    this.newUser.id = users.length;

    console.log(this.newUser);

    users.push(this.newUser);
    this.router.navigate(['/logIn']);
  }
}
