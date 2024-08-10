import { Component, Input, Output, EventEmitter } from '@angular/core';

import Destination from '../../data/destinationStructure';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css'
})
export class DestinationCardComponent {
  @Input() data:any;
  @Output() dataEmitter = new EventEmitter<number>()

  constructor() {
    this.log();
  }

  log():void {
    console.log(this.data);
  }

  sendId(id:number) {
    console.log(id);
    this.dataEmitter.emit(id);
  }
}
