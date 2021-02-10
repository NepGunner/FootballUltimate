import { Output, EventEmitter,Directive } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Directive()
export abstract class BasePopup {

    public authenticationService:AuthenticationService;
   
    constructor() {
    }

    
    @Output() public onRequestClose = new EventEmitter<any>();

    public raiseRequestClose(dataRelay) {
        this.onRequestClose.emit(dataRelay);
    }
    protected abstract loadPopup({ })
    
    
}