import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgHighlight]'
})

export class BgHighlightDirective {

  @Input() appBgHighlight;
  @HostBinding('style.backgroundColor') bgColor = '';
  //@HostBinding('class.active') xxxbgColor = '';
  constructor() { }

  @HostListener('mouseover')
  mouseOver(){
    this.bgColor = this.appBgHighlight || 'yellow';
  }
  @HostListener('mouseout')
  mouseOut() {
    this.bgColor = '';
  }

}
