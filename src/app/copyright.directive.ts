import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(element: ElementRef, renderer: Renderer2) {
    renderer.addClass(element.nativeElement, 'copyright');
    renderer.setProperty(
      element.nativeElement,
      'textContent',
      `Copyright ©${new Date().getFullYear()} All Rights Reserved.`
    )
  }

}
