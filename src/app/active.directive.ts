import { Directive, HostBinding, HostListener, Input, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  @Input('appActive') color = 'red';

  @Output() readonly hovered = new EventEmitter<boolean>();

  @Input()
  @HostBinding('class.active')
  isActive = true;

  @Input()
  @HostBinding('title')
  title = 'Hello there';

  @HostBinding('style.backgroundColor')
  backgroundColor = 'white';

  @HostListener('mouseover')
  setBackgroundInRed(): void {
    this.backgroundColor = this.color;
    this.hovered.emit(true);
  }

  @HostListener('mouseleave')
  setBackgroundInTransparent(): void {
    this.backgroundColor = 'transparent';
    this.hovered.emit(false);
  }

  constructor() {
  }

}
