import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

//component imports
import { CptDet_Result_GET } from './CptDet_Result_GET.component';

@Component({
    selector: 'Result',
    templateUrl: './Result.component.html'
})
export class Result implements OnInit, OnDestroy {

    // The components on this page
    @ViewChild("CptDet_Result_GET", { static: true }) CptDet_Result_GET: CptDet_Result_GET;

    constructor(protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location,
        private titleService: Title,
        public authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        this.titleService.setTitle("All Results");
        this.CptDet_Result_GET.actionPerformed2.subscribe(data => {
            switch (data.name) {
                //cases
            }
        });

    }

    ngOnDestroy() {

    }
}
