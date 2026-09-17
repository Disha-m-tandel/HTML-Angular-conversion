import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',//means Angular looks for an HTML element containing: appTooltip So Angular sees: <a appTooltip="View user details"> and says: "I need to attach TooltipDirective to this <a>."
  standalone: true
}) 
export class TooltipDirective {

  @Input() appTooltip = '';//The empty string means: "By default, there is no tooltip message. The HTML will provide the message."
  //This makes your directive reusable.
  //for example if we have 3 options like edit, delete, view then we should hardcode for 3 time by writing as  @Input() appTooltip = 'view message'; something like this
  //so inorder avoid that we are using keeping it as empty string so that html will pass the data to the directive 
  private tooltip!: HTMLElement; // HTMLElement This tells TypeScript: The tooltip variable will contain an HTML element.
//HTMLElement is a TypeScript type representing HTML elements such as: <div> <span> <button> <a> <p>
//! "I promise that I will assign a value to this variable before I actually use it."

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.tooltip = this.renderer.createElement('span'); //This creates a new HTML element: <span></span> And stores it in: this.tooltip
    //So think: this.tooltip = <span></span> It exists now, but it isn't inside your HTML yet.


    this.renderer.setProperty( //This puts the tooltip text inside the <span>. Remember: this.appTooltip contains: "View user details" 
      //So we are effectively doing: <span> View user details </span>
      this.tooltip, //  WHAT_ELEMENT or which element
      'textContent',//  WHICH_PROPERTY 
      this.appTooltip // WHAT_VALUE
    );

    this.renderer.addClass(//This adds a CSS class to our span.
      //Before: <span> View user details </span>
      //After: <span class="custom-tooltip"> View user details </span> So the CSS makes the span look like a tooltip.
      this.tooltip,
      'custom-tooltip'
    );

    this.renderer.appendChild(//This actually puts the tooltip into the DOM.
      this.el.nativeElement,//Remember: this.el.nativeElement is your <a>. And: this.tooltip is your <span>.
      this.tooltip
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.tooltip) {//This means: "Does the tooltip exist?" If yes, continue.
      //Why check? Because you shouldn't try to remove something that doesn't exist.
      this.renderer.removeChild(
        this.el.nativeElement,
        this.tooltip
      );
    }
  }
}


          //       MOUSE ENTER
          //            ↓
          // @HostListener('mouseenter')
          //            ↓
          //     onMouseEnter()
          //            ↓
          //    createElement()
          //            ↓
          //         <span>
          //            ↓
          //     setProperty()
          //            ↓
          // "View user details"
          //            ↓
          //      addClass()
          //            ↓
          // class="custom-tooltip"
          //            ↓
          //     appendChild()
          //            ↓
          //     TOOLTIP SHOWS


          //       MOUSE LEAVE
          //            ↓
          // @HostListener('mouseleave')
          //            ↓
          //     onMouseLeave()
          //            ↓
          //    removeChild()
          //            ↓
          //    TOOLTIP REMOVED