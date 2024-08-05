import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import testComponent from './test-component/test-component.component';
import { TestComponentComponent } from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
