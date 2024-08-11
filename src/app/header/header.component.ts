import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() sendInput = new EventEmitter<string>();

  changeHandler(event: Event): void {
    let target = event.target as HTMLInputElement;
    console.log(target.value);

    this.sendInput.emit(target.value);
  }
}
