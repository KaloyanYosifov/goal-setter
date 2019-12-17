import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appTodosAutofocusElement]',
})
export class AutofocusElementDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    public ngOnInit(): void {
        this.elementRef.nativeElement.focus();
    }
}
