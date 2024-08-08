import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import testComponent from './test-component/test-component.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponentComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  textValue = "";
  receivedData = "";

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
