import { Component, Input, Output, EventEmitter, OnInit   } from '@angular/core';

import destinations from '../../data/destinations';

@Component({
  selector: 'app-destination-page',
  standalone: true,
  imports: [],
  templateUrl: './destination-page.component.html',
  styleUrl: './destination-page.component.css'
})
export class DestinationPageComponent {
  @Input() data:any;
  @Output() back = new EventEmitter<boolean>();
  //objectData = destinations[this.id - 1];

  ngOnInit() {
    //this.objectData = destinations[this.id - 1];
    //console.log(this.objectData);
    console.log(this.data);
  }

  onBack() {
    this.back.emit(true);
  }
}
