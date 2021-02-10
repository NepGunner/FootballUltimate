import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from '../controls/spinner/spinner.service';

import { LeagueTable } from '../model/leagueTable.model';
import { leagueTableList, resultList, teamList } from '../model/data';
import { Result } from '../model/result.model';
import { Team } from '../model/team.model';
import { TeamService } from './team.service';
import { ResultService } from './result.service';


@Injectable()
export class LeagueTableService {

  leagueTableList: LeagueTable[] = leagueTableList;
  resultList: Result[] = resultList;
  teamList: Team[] = teamList;

  constructor(protected http: HttpClient, private spinnerService: SpinnerService, public teamService: TeamService, public resultService: ResultService
  ) {
  }

  getall(): LeagueTable[] {
    this.sortResults();
    return this.leagueTableList;
  }

  updateTable(): LeagueTable[] {
    let teamList = this.teamService.getall();

    this.leagueTableList.forEach(teamInLeague => {
      let team = teamList.filter(team => team.teamId == teamInLeague.teamId);

      teamInLeague.teamId = team[0].teamId;
      teamInLeague.name = team[0].name;
      teamInLeague.matchPlayed = this.getTotalMatch(team[0]);
      teamInLeague.win = this.getWin(team[0]);
      teamInLeague.draw = this.getDraw(team[0]);
      teamInLeague.loss = this.getLoss(team[0]);
      teamInLeague.points = this.getPoint(teamInLeague);
    })
    this.sortResults();
    return this.leagueTableList;
  }


  getTotalMatch(team: Team): number {
    let count: number = 0;
    count = team.result.length;
    return count;
  }

  getWin(team: Team): number {
    let wins: number = 0;
    team.result.forEach(result => {
      if (team.teamId == result.team1Id) {
        if (result.score1 > result.score2) {
          wins++;
        }
      }
      else {
        if (result.score2 > result.score1) {
          wins++;
        }
      }
    })

    return wins;
  }

  getDraw(team: Team): number {
    let draw: number = 0;
    team.result.forEach(result => {
      if (team.teamId == result.team1Id) {
        if (result.score1 == result.score2) {
          draw++;
        }
      }
      else {
        if (result.score2 == result.score1) {
          draw++;
        }
      }
    })

    return draw;
  }

  getLoss(team: Team): number {
    let loss: number = 0;
    team.result.forEach(result => {
      if (team.teamId == result.team1Id) {
        if (result.score1 < result.score2) {
          loss++;
        }
      }
      else {
        if (result.score2 < result.score1) {
          loss++;
        }
      }
    })

    return loss;
  }


  public winPoint: number = 3;
  public drawPoint: number = 1;
  public lossPoint: number = 0;
  getPoint(teamInLeague: LeagueTable): number {
    let points: number = 0;

    points = points + teamInLeague.win * this.winPoint;
    points = points + teamInLeague.draw * this.drawPoint;

    return points;
  }

  sortResults() {
    this.leagueTableList = this.leagueTableList
      .sort((a, b) => (b.points) - (a.points));
  }

}
