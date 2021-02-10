
import { Component,  OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from '../../services/authentication.service';


@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit,OnDestroy {


    constructor(public authenticationService: AuthenticationService,
        public router: Router,
        public route: ActivatedRoute,
        public ref: ChangeDetectorRef) {
            
    }

    ngOnInit() {
    }

    public ngAfterViewInit(): void {

    }
    public today: number = Date.now();

    getDate() {
        return Date.now();
    }

    ngOnDestroy(){
        
    }


}

