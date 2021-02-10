import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { NotificationService } from '../../services/notification.service';
import { Location } from '@angular/common';
import { ResultService } from 'src/app/services/result.service';
import { Result } from 'src/app/model/result.model';
import { EditComponent } from 'src/app/base-components/edit-component';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/model/team.model';
import { teamList } from 'src/app/model/data';


@Component({
    selector: 'CptEdit-Result-PUT',
    templateUrl: './CptEdit_Result_PUT.component.html',
    styleUrls: ['./CptEdit_Result_PUT.component.css']
})
export class CptEdit_Result_PUT extends EditComponent implements OnInit {
    public data: Result[] = [];
    public resultObj: Result = new Result();
    public teamList: Team[] = [];
    public isEditResult: boolean = false;
    public teamA: string = '';
    public teamB: string = '';
    constructor(protected router: Router,
        public authenticationService: AuthenticationService,
        protected location: Location,
        public resultService: ResultService,
        public teamService: TeamService,
        protected notificationService: NotificationService) {
        super();
    }

    ngOnInit() {
        this.teamList = teamList;
        if (this.resultObj.team1name == undefined || this.resultObj.team2name == undefined) {
            this.resultObj['team1name'] = '';
            this.resultObj['team2name'] = '';
            this.resultObj['date'] = '';
        }
    }

    public saveResult() {
        if (this.resultObj.team1Id != undefined && this.resultObj.team2Id != undefined) {
            if (this.resultObj.team1Id != this.resultObj.team2Id) {
                this.resultService.create(this.resultObj);
                this.resetForm();
            }
            else {
                this.notificationService.displayToast('Warning', 'Both teams are same, select different teams', 'warning');
            }

        }
        else {
            this.notificationService.displayToast('Warning', 'Select proper team', 'warning');
        }
    }

    public updateResult() {
        if (this.resultObj.team1Id != undefined && this.resultObj.team2Id != undefined) {
            if (this.resultObj.team1Id != this.resultObj.team2Id) {
                this.resultService.update(this.resultObj);
                this.resetForm();
            }
            else {
                this.notificationService.displayToast('Warning', 'Both teams are same, select different teams', 'warning');
            }
        }
        else {
            this.notificationService.displayToast('Warning', 'Select proper team', 'warning');
        }
    }

    public resetForm() {
        this.resultObj = new Result();
        this.resultObj.team1name = '';
        this.resultObj.team2name = '';
        this.teamA = '';
        this.teamB = '';
        this.isEditResult = false;
    }

    public addResult() {
        this.resetForm();
    }


    public handleStaticResultSelected(selectedTeam) {
        this.teamA = selectedTeam.name;
        this.resultObj.team1name = selectedTeam.name;
        this.resultObj.team1Id = selectedTeam.teamId;
    }

    public handleStaticResultSelected2(selectedTeam) {
        this.teamB = selectedTeam.name;
        this.resultObj.team2name = selectedTeam.name;
        this.resultObj.team2Id = selectedTeam.teamId;
    }

}

