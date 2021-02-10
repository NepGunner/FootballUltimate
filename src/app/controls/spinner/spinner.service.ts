import { Injectable } from '@angular/core';
import { Observable ,  Observer } from 'rxjs';

@Injectable()
export class SpinnerService {

    private pendingRequests: number = 0;
    private spinnerObserver: Observer<boolean>;
    public spinnerObservable: Observable<boolean>;

    constructor() {
        this.spinnerObservable = new Observable<boolean>(observer => {
            this.spinnerObserver = observer;
        }
        );//.share();
    }
    addPendingRequest() {
        this.pendingRequests++;
        this.updateVisibility();
    }

    removePendingRequest() {
        this.pendingRequests--;
        this.updateVisibility();
    }
    updateVisibility() {
        if (this.pendingRequests > 0) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    show() {
        try {
            if (this.spinnerObserver) {
                this.spinnerObserver.next(true);
            }
        }
        catch (ex) {
            console.log("show error:" + ex.toString());
        }
    }

    hide() {
        try {
            if (this.spinnerObserver) {
                this.spinnerObserver.next(false);
            }
        }
        catch (ex) {
            console.log("hide error:" + ex.toString());
        }
    }


   
}
