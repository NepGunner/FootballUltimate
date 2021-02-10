import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

//component imports
import { CptDet_LeagueTable_GET } from './CptDet_LeagueTable_GET.component';
import { CptLst_LeagueTable_LIST } from './CptLst_LeagueTable_LIST.component';

@Component({
    selector: 'LeagueTable',
    templateUrl: './LeagueTable.component.html'
})
export class LeagueTable implements OnInit, OnDestroy {

    // The components on this page
    @ViewChild("CptDet_LeagueTable_GET", { static: true }) CptDet_LeagueTable_GET: CptDet_LeagueTable_GET;
    @ViewChild("CptLst_LeagueTable_LIST", { static: true }) CptLst_LeagueTable_LIST: CptLst_LeagueTable_LIST;

    constructor(protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location,
        private titleService: Title,
        public authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        this.titleService.setTitle("League Table");

        this.CptDet_LeagueTable_GET.actionPerformed2.subscribe(data => {

            switch (data.name) {
                case 'Mode': {
                    this.CptLst_LeagueTable_LIST.mode = data.data.value || 'normal';
                    break;
                }
                case 'TableLayout': {
                    this.CptLst_LeagueTable_LIST.layout = data.data.value || 'normal';
                    break;
                }
            }
        });

    }

    ngOnDestroy() {

    }
}
