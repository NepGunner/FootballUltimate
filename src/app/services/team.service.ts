import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { teamList } from '../model/data';
import { Team } from '../model/team.model';

@Injectable()
export class TeamService {

    teamList: Team[] = teamList;

    constructor(protected http: HttpClient) {
    }

    getall(): Team[] {
        return this.teamList;
    }

}
