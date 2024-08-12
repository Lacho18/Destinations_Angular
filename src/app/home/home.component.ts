import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
//import testComponent from './test-component/test-component.component';

//components
import { TestComponentComponent } from '../test-component/test-component.component';
import { HeaderComponent } from '../header/header.component';
import { DestinationCardComponent } from '../destination-card/destination-card.component';
import { DestinationPageComponent } from '../destination-page/destination-page.component';

//data for the cards
import destinations from '../../data/destinations';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TestComponentComponent,
    HeaderComponent,
    DestinationCardComponent,
    DestinationPageComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: '../app.component.css',
})
export class HomeComponent {
  title = 'my-app';
  textValue = '';
  receivedData = '';
  destinationID = 0;
  userInput = '';
  destinationsArray = destinations;

  user = {};

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

  receivedInput(input: string) {
    console.log('From app component : ' + input);
    this.userInput = input.trim();

    if (input !== '') {
      this.destinationsArray = destinations.filter((indexValue) => {
        let name = indexValue.name as string;
        let trimmedName = name.trim();
        return this.checkForMatches(trimmedName, this.userInput);
      });
    } else {
      this.destinationsArray = destinations;
    }
  }

  checkForMatches(title: string, word: string) {
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`${escapedWord}`, 'i');

    return regex.test(title);
  }
}
