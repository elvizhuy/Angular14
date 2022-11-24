import { Directive, ElementRef ,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
@Input() appHighlight = 'red';

@HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
  constructor(private el: ElementRef) { }

}
