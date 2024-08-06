import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
  @Input() someData = "";
  @Output() dataToTheParent = new EventEmitter<string>();
  dataArray = [
    {
      id: 0,
      name: "Lachezar",
      age: 22,
      height: 1.81
    },
    {
      id: 1,
      name: "Ivan",
      age: 18,
      height: 1.85
    },
    {
      id: 2,
      name: "Anq",
      age: 23,
      height: 1.67
    },
  ];


  clickHandler() {
    console.log("Clicked");
    this.dataToTheParent.emit("You have clicked a button :O");
  }
}
