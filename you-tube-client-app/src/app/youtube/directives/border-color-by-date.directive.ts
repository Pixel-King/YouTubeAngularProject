import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[borderColorByDate]',
})
export class BorderColorByDateDirective implements OnInit {
  @Input('borderColorByDate') date: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit():void {
    const videoDate = new Date(this.date);

    const currentDate = new Date();

    const monthsPassed = (currentDate.getFullYear() - videoDate.getFullYear()) * 12 +
    (currentDate.getMonth() - videoDate.getMonth());

    const daysPassed  = Math.floor(currentDate.getTime() - videoDate.getTime() / (1000 * 60 * 60 * 24));

    this.renderer.setStyle(this.el.nativeElement, 'border-color', monthsPassed >= 6 ? 'red' : monthsPassed >= 1 ? 'yellow' : daysPassed <= 7 ? 'blue' : 'green');
  }
}
