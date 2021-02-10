import { Component, OnInit,OnDestroy, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

//components import
import {CptDet_Dashboard_GET} from './CptDet_Dashboard_GET.component';
import {CptDet_Dashboard_Child_GET} from './CptDet_Dashboard_Child_GET.component';

@Component({
    selector: 'Dashboard',
    templateUrl: './Dashboard.component.html'
})
export class Dashboard implements OnInit,OnDestroy {

    @ViewChild("CptDet_Dashboard_GET", {static: true}) CptDet_Dashboard_GET: CptDet_Dashboard_GET;
    @ViewChild("CptDet_Dashboard_Child_GET", {static: true}) CptDet_Dashboard_Child_GET: CptDet_Dashboard_Child_GET;
    

    constructor(protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location,
        private titleService: Title,
        public authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        this.titleService.setTitle("Dashboard");
        this.authenticationService.currentPage = 'Dashboard';
    }

    ngOnDestroy() {
        
    }
}
