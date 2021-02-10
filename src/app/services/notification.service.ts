import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {

    dialogMessageDisplayed = new EventEmitter<Notification>();
    toastMessageDisplayed = new EventEmitter<Notification>();

    displayNotification(title: string, message: string, severity: string){
        let notification = new Notification(title, message, severity);
        this.dialogMessageDisplayed.emit(notification);
    }

    displayToast(title: string, message: string, severity: string){
        let notification = new Notification(title, message, severity);
        this.toastMessageDisplayed.emit(notification);
    }
    comingSoon(){
        let notification = new Notification("Notification!", "Coming soon ...", "success");
        this.toastMessageDisplayed.emit(notification);
    } 
}

export class Notification {

    constructor(public title: string, public message: string, public severity: string){}

}