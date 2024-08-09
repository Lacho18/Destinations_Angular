import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import testComponent from './test-component/test-component.component';

//components
import { TestComponentComponent } from './test-component/test-component.component';
import { HeaderComponent } from './header/header.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';

//data for the cards
import destinations from '../data/destinations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponentComponent, HeaderComponent, DestinationCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  textValue = "";
  receivedData = "";
  destinationsArray = destinations;

  onChange(e: Event) {
    e.preventDefault();
    const inputElement = e.target as HTMLInputElement;
    this.textValue = inputElement.value;
    console.log(this.textValue);
  }

  handleChildEvent(data: string) {
    this.receivedData = data;
  }
}
