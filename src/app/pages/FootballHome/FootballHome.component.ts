import { Component, OnInit,OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'FootballHome',
    templateUrl: './FootballHome.component.html',
    styleUrls:['./FootballHome.component.css']
})
export class FootballHome implements OnInit,OnDestroy {

    constructor(protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location,
        private titleService: Title,
        public authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        this.titleService.setTitle("Football Home");
        this.authenticationService.currentPage = 'FootBallHome';
    }


    goToDashboard(){
        this.router.navigate(['/Dashboard']);
    }

    ngOnDestroy() {
        
    }
}
