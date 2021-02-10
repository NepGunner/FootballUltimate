import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ListComponent } from '../../base-components/list-component';
import { NotificationService } from '../../services/notification.service';
import { LeagueTableService } from 'src/app/services/league-table.service';
import { LeagueTable } from 'src/app/model/leagueTable.model';

@Component({
    selector: 'CptLst-LeagueTable-LIST',
    templateUrl: './CptLst_LeagueTable_LIST.component.html'
})
export class CptLst_LeagueTable_LIST extends ListComponent implements OnInit {
    public mode: string = 'normal';
    public layout: string = 'normal';
    public data: LeagueTable[] = [];
    constructor(protected router: Router,
        protected notificationService: NotificationService,
        public authenticationService: AuthenticationService,
        public leagueTableService: LeagueTableService
    ) {
        super();
    }
    ngOnInit() {
        this.data = this.leagueTableService.getall();
    }

    public getData() {
        this.leagueTableService.updateTable();
    }

}
