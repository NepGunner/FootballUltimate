import { Injectable, ErrorHandler } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  constructor(private notificationService: NotificationService) {
  }

  handleError(error) {
    setTimeout(() => {
      if (!error.message.includes('ExpressionChangedAfterItHasBeenCheckedError')) {
        this.notificationService.displayToast("AppComponent.ErrorHandlerServiceErrorTitle", "AppComponent.ErrorHandlerServiceErrorMessage", "error");
      }
    }, 1500);
    console.log(`error:${error.message}`);
  }

}
