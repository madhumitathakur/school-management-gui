import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTyped]'
})
export class TypedDirective {

    i =0;
    constructor(private elementRef: ElementRef) {
    let txt = elementRef.nativeElement;
    this.typeWriter(txt,"Student Academic Management System");
  }

  private typeWriter(element: { innerHTML: string; }, txt: string) : void{

    if (this.i < txt.length) {
      element.innerHTML += txt.charAt(this.i);
      this.i++;
      setTimeout(()=>{this.typeWriter(element,txt)}, 50);
    }
  }
}
