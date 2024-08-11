import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import testComponent from './test-component/test-component.component';

//components
import { TestComponentComponent } from './test-component/test-component.component';
import { HeaderComponent } from './header/header.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { DestinationPageComponent } from './destination-page/destination-page.component';

//data for the cards
import destinations from '../data/destinations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TestComponentComponent,
    HeaderComponent,
    DestinationCardComponent,
    DestinationPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
  textValue = '';
  receivedData = '';
  destinationID = 0;
  destinationsArray = destinations;

  onChange(e: Event) {
    e.preventDefault();
    const inputElement = e.target as HTMLInputElement;
    this.textValue = inputElement.value;
    console.log(this.textValue);
  }

  handleChildEvent(data: string) {
    this.receivedData = data;
    console.log(this.destinationsArray);
  }

  receivedId(id: number) {
    this.destinationID = id;
  }

  backHandler(isClicked: boolean) {
    this.destinationID = 0;
  }
}
