import { Directive, HostBinding, HostListener, Input, EventEmitter, Output } from '@angular/core';

/**
 * <div
 *     appHighlight="green"
 *     baseColor="black"
 *     (hover)="onHovered($event)"
 *     >Text To Highlight</div>
 */
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() baseColor = 'transparent';
  @Input('appHighlight') color = 'yellow';

  @Output() readonly hover = new EventEmitter<boolean>();

  @HostBinding('style.backgroundColor')
  backgroundColor = this.baseColor;

  @HostListener('mouseover')
  onMouseOver(): void {
    this.backgroundColor = this.color;
    this.hover.emit(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.backgroundColor = this.baseColor;
    this.hover.emit(false);
  }

}
