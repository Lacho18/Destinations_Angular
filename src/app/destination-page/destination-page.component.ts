import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-page.component.html',
  styleUrl: './destination-page.component.css',
})
export class DestinationPageComponent {
  @Input() data: any;
  @Output() back = new EventEmitter<boolean>();

  backgroundStyle: any = {};

  ngOnInit() {
    if (this.data?.themeColors && this.data.themeColors.length >= 2) {
      const themeColor1 = this.data.themeColors[0];
      const themeColor2 = this.data.themeColors[1];

      // Set the background style dynamically based on themeColors
      this.backgroundStyle = {
        'background-image': `linear-gradient(to right, ${themeColor1}, ${themeColor2})`,
      };
    }
  }

  onBack() {
    this.back.emit(true);
  }
}
