import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetailComponent } from '../../base-components/detail-component';
import { AuthenticationService } from '../../services/authentication.service';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'CptDet-LeagueTable-GET',
    templateUrl: './CptDet_LeagueTable_GET.component.html'
})
export class CptDet_LeagueTable_GET extends DetailComponent {

    constructor(protected router: Router,
        public authenticationService: AuthenticationService,
        protected notificationService: NotificationService) {
        super();
    }

    public modeChange(event) {
        if (event != undefined && event.target.checked == true) {
            this.actionPerformed2.emit({name:'Mode',data:{value:'dark'}});
        }
        else {
            this.actionPerformed2.emit({name:'Mode',data:{value:'normal'}});
        }
    }

    public tableLayoutChange(event) {
        if (event != undefined && event.target.checked == true) {
            this.actionPerformed2.emit({name:'TableLayout',data:{value:'collapsed'}});
        }
        else {
            this.actionPerformed2.emit({name:'TableLayout',data:{value:'normal'}});
        }
    }
}

