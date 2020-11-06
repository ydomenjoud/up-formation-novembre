import { Component } from '@angular/core';
import { Log, LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'formation-novembre';

  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getLogs(): Log[] {
    return this.logService.history;
  }

  isLogged($event: boolean): void {
    console.log($event);
  }

  log($event: boolean): void {
    console.log($event);
  }
}
