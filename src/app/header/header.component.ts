import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() sendInput = new EventEmitter<string>();
  @Input() hasLoggedIn = false;
  @Input() user: any;
  showMenu = false;

  changeHandler(event: Event): void {
    let target = event.target as HTMLInputElement;
    console.log(target.value);

    this.sendInput.emit(target.value);
  }

  showLogInMenu() {
    this.showMenu = !this.showMenu;
  }

  loggingOut() {
    this.sendInput.emit('User ' + this.user.username + ' has logged out');
  }
}
