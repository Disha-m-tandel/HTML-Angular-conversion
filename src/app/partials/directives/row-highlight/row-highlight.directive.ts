import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ //Just like: @Component() is used to tell Angular: "This class is a component."
  //@Directive() tells Angular: "This class is a directive."
  selector: '[appRowHighlight]', //This tells Angular where the directive should be applied.
  //Because we have square brackets: [appRowHighlight] we use it as an HTML attribute : <tr appRowHighlight>
  standalone: true
})
export class RowHighlightDirective {
//This is simply the TypeScript class that contains the directive's behavior.
//We need to tell it : When the mouse enters the row → do something.

originalColor = '';

  constructor(private el : ElementRef) {

     this.originalColor = this.el.nativeElement.style.backgroundColor;
   }
//el is an ElementRef: ElementRef has a property called: nativeElement 
//So: this.el.nativeElement means: Get the actual HTML element.
//For example, if you have: <tr appRowHighlight> then: this.el.nativeElement refers to that <tr>.



  @HostListener('mouseenter')//First understand the word Host. Suppose we have: <tr appRowHighlight>
  //The element where our directive is attached: <tr> is called the host element.
  //So: <tr appRowHighlight>
    //   ↑
    //  Host element Therefore: HostListener Listen for an event happening on the element where the directive is attached.
    // For example:@HostListener('mouseenter') means: Listen for the mouseenter event on my host element.
  onMouseEnter(){//method name given by us
    this.el.nativeElement.style.backgroundColor = '#eef4ff'
//is a property-access / object-property syntax in JavaScript/TypeScript.
  }
  @HostListener('mouseleave')
     onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = this.originalColor;
  }
  
}

//Angular gets the host DOM element and provides an ElementRef containing a reference to it.
// We store that ElementRef in el.
//And then: this.el.nativeElement 
//means: Give me the actual DOM element that el is referring to.


//Angular gets the host DOM element and provides an ElementRef containing a reference to it. 
//We store that ElementRef in el.