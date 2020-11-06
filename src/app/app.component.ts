import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'formation-novembre';

  isLogged($event: boolean): void {
    console.log($event);
  }

  log($event: boolean): void {
    console.log($event);
  }
}
