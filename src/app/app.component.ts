import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Message } from 'primeng/primeng';
import { NotificationService } from './services/notification.service';
import { SpinnerComponent } from './controls/spinner/spinner.component';
import { AuthenticationService } from './services/authentication.service';
import { WindowRefService } from './services/windowRef.Service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'Football Ultimate';

  messages: Message[] = [];
  // Messages for the dialog
  displayDialog = false;
  dialogMessage = "";
  dialogTitle = "";
  private spinTimeout: number = 1;

  constructor(public titleService: Title,
    public notificationService: NotificationService,
    public router: Router,
    public authenticationService: AuthenticationService,
    private messageService: MessageService) {

  }
  
  
  
  ngOnInit() {
    this.notificationService.toastMessageDisplayed.subscribe(notification => {
      let summary = notification.title;
      let detail = notification.message;
      this.messages =[];
      this.messageService.add({severity:notification.severity, summary:summary, detail:detail});
      this.messages.push({ severity: notification.severity, summary: summary, detail: detail });
    });
  }
  getTitle() {
    return this.titleService.getTitle();
  }
}
