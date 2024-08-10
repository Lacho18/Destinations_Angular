import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-destination-page',
  standalone: true,
  imports: [],
  templateUrl: './destination-page.component.html',
  styleUrl: './destination-page.component.css'
})
export class DestinationPageComponent {
  @Input() id = 0;
  @Output() back = new EventEmitter<boolean>();

  onBack() {
    this.back.emit(true);
  }
}
