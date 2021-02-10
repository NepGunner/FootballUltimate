import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetailComponent } from '../../base-components/detail-component';
import { AuthenticationService } from '../../services/authentication.service';
import { NotificationService } from '../../services/notification.service';
import { Location } from '@angular/common';

@Component({
    selector: 'CptDet-Dashboard-GET',
    templateUrl: './CptDet_Dashboard_GET.component.html',
    styleUrls:['./CptDet_Dashboard_GET.component.css']
})
export class CptDet_Dashboard_GET extends DetailComponent{

    constructor(protected router: Router,
        public authenticationService: AuthenticationService,
        protected location: Location,
        protected notificationService: NotificationService) {
        super();
    }

}

