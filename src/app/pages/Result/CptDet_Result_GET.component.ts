import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailComponent } from '../../base-components/detail-component';
import { AuthenticationService } from '../../services/authentication.service';
import { NotificationService } from '../../services/notification.service';
import { ResultService } from 'src/app/services/result.service';
import { ResultGroup } from 'src/app/model/result.model';


@Component({
    selector: 'CptDet-Result-GET',
    templateUrl: './CptDet_Result_GET.component.html',
    styleUrls: ['./CptDet_Result_GET.component.css']
})
export class CptDet_Result_GET extends DetailComponent implements OnInit {
    public data: ResultGroup[] = [];
    constructor(protected router: Router,
        public authenticationService: AuthenticationService,
        public resultService: ResultService,
        protected notificationService: NotificationService) {
        super();
    }

    ngOnInit() {
        this.data = this.resultService.groupResult();
    }

    public trackByFn(index, item) {
        return index;
    }

    public getData() {
        this.data = this.resultService.groupResult();
    }

    public toResultEdit(data) {
        if (data != undefined) {
            this.actionPerformed2.emit({ name: 'EditResult', data: { value: data } });
        }
    }

}

