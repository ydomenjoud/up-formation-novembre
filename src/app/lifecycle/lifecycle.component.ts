import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { LogLevel, LogService } from '../log.service';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.sass']
})
export class LifecycleComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() title = 'hello there';

  private timeout: number;

  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  private log(name: string): void {
    this.logService.addLog({
      date: new Date(),
      message: name,
      level: LogLevel.DEBUG
    });
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
    if (this.timeout) {
      clearTimeout(this.timeout);
      console.log('timeout cleared');
    }
  }

  ngOnInit(): void {
    this.log('ngOnInit');

    this.timeout = setTimeout(() => {
      console.log('ok');
    }, 5000);
  }

  storeValue(value: string): void {

  }
}
