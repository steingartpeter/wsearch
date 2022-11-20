import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  getTerm(term: string) {
    console.log('Im the app, and the term arrived is: ' + term);
  }
}
