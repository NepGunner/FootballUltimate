import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DetailComponent } from '../../base-components/detail-component';
import { AuthenticationService } from '../../services/authentication.service';
import { NotificationService } from '../../services/notification.service';
import { Location } from '@angular/common';

import { Result } from '../Result/Result.component';
import { ResultAction } from '../ResultAction/ResultAction.component';
import { LeagueTable } from '../LeagueTable/LeagueTable.component';


@Component({
    selector: 'CptDet-Dashboard-Child-GET',
    templateUrl: './CptDet_Dashboard_Child_GET.component.html'
})
export class CptDet_Dashboard_Child_GET extends DetailComponent implements OnInit {

    public activeTab: string = 'Result';

    @ViewChild("Result", { static: true }) Result: Result;
    @ViewChild("ResultAction", { static: true }) ResultAction: ResultAction;
    @ViewChild("LeagueTable", { static: true }) LeagueTable: LeagueTable;

    constructor(protected router: Router,
        public authenticationService: AuthenticationService,
        protected location: Location,
        protected notificationService: NotificationService) {
        super();
    }

    ngOnInit() {
        this.Result.CptDet_Result_GET.actionPerformed2.subscribe(data => {
            switch (data.name) {
                case 'EditResult': {
                    this.activeTab = 'ResultAction';
                    this.ResultAction.CptEdit_Result_PUT.resultObj = data.data.value;
                    this.ResultAction.CptEdit_Result_PUT.teamA = this.ResultAction.CptEdit_Result_PUT.resultObj.team1name;
                    this.ResultAction.CptEdit_Result_PUT.teamB = this.ResultAction.CptEdit_Result_PUT.resultObj.team2name;
                    this.ResultAction.CptEdit_Result_PUT.isEditResult = true;
                    break;
                }
            }
        });

    }

    public setActiveTab(tabName: string) {
        if (tabName != undefined && tabName != '') {
            this.activeTab = tabName;
        }
        if (this.activeTab == 'Result') {
            this.Result.CptDet_Result_GET.getData();
        }
        else if (this.activeTab == 'Table') {
            this.LeagueTable.CptLst_LeagueTable_LIST.getData();
        }
    }

}

