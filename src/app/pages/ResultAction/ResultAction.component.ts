import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

//component imports
import { CptEdit_Result_PUT } from './CptEdit_Result_PUT.component';

@Component({
    selector: 'ResultAction',
    templateUrl: './ResultAction.component.html'
})
export class ResultAction implements OnInit, OnDestroy {

    // The components on this page
    @ViewChild("CptEdit_Result_PUT", { static: true }) CptEdit_Result_PUT: CptEdit_Result_PUT;

    constructor(protected router: Router,
        protected route: ActivatedRoute,
        private titleService: Title,
        public authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        this.titleService.setTitle("Result Action");

        this.CptEdit_Result_PUT.actionPerformed2.subscribe(data => {

            switch (data.name) {
                //cases
            }
        });

    }

    ngOnDestroy() {

    }
}
