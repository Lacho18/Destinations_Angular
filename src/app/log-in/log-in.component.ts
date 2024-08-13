import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import users from '../../data/users';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  userValidation = {
    username: '',
    password: '',
  };
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  changeHandler(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (target.name === 'username' || target.name === 'password') {
      this.userValidation[target.name] = target.value;
    }
  }

  submitHandler(event: Event) {
    event.preventDefault();
    let validInput = false;

    users.forEach((indexValue) => {
      if (
        indexValue.username === this.userValidation.username &&
        indexValue.password === this.userValidation.password
      ) {
        validInput = true;
      }
    });

    if (validInput) {
      this.router.navigate(['/home', { user: this.userValidation.username }]);
    } else {
      this.errorMessage = 'Wrong username or password';

      setTimeout(() => {
        this.errorMessage = '';
      }, 2000);
    }
  }
}
