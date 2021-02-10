import {Directive, ElementRef, HostListener} from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
 
@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    constructor(private _elementRef : ElementRef, public authenticationService: AuthenticationService) {
    }
 
    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        let clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if(targetElement.className == 'fa fa-bars'){
            clickedInside = true;
        }
        if (!clickedInside) {
            this.authenticationService.actionChanged.emit({name:'ClickOutside'});
        }
    }
}