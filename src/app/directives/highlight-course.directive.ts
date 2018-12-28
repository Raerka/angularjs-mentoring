import {Directive, Renderer2, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlightCourse]'
})
export class HighlightCourseDirective implements OnInit {
  @Input('appHighlightCourse') creationDate: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const currentDate = new Date();
    const creationDate = new Date(this.creationDate);
    const freshDate = new Date();
    freshDate.setDate(currentDate.getDate() - 14);

    if (creationDate < currentDate && creationDate >= freshDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid green');
      return;
    }

    if (creationDate > currentDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid blue');
      return;
    }
  }
}
