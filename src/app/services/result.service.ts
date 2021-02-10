import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from '../controls/spinner/spinner.service';
import { resultList, teamList } from '../model/data';
import { Result, ResultGroup } from '../model/result.model';
import { TeamService } from './team.service';
import { Team } from '../model/team.model';
import { NotificationService } from './notification.service';

@Injectable()
export class ResultService implements OnInit {

  public resultList: Result[] = resultList;
  public teamList: Team[] = teamList;

  constructor(protected http: HttpClient, private spinnerService: SpinnerService, public teamService: TeamService,
    private notificationService: NotificationService
  ) {

  }

  ngOnInit() {
    this.resultList = []
  }

  create(result: Result) {
    const itemIndex = this.resultList.length;
    result.resultId = this.getnextId();
    result.team1Id = result.team1Id;
    result.team2Id = result.team2Id;
    this.resultList[itemIndex] = result;
    this.notificationService.displayToast('Ok', 'Result have been created', 'success');
    this.updateTeam();
  }

  public updateTeam(): Team[] {
    this.teamList.forEach(team => {
      let teamResults = this.resultList.filter(result => (result.team1Id == team.teamId) || ((result.team2Id == team.teamId)));
      team['result'] = teamResults;
    });
    return this.teamList;
  }

  delete(result: Result) {
    this.resultList.splice(this.resultList.indexOf(result), 1);
  }

  update(result: Result) {
    const itemIndex = this.resultList.findIndex(item => item.resultId === result.resultId);
    this.resultList[itemIndex] = result;
    this.notificationService.displayToast('Ok', 'Result have been updated', 'success');
    this.updateTeam();
  }

  getall(): Result[] {
    if (this.resultList.length > 1) {
      this.sortResults();
    }
    return this.resultList;
  }

  public groupResult(): ResultGroup[] {
    const groups = this.resultList.reduce((groups, game) => {
      const date = game.date.toString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(game);
      return groups;
    }, {});

    let groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        games: groups[date]
      };
    });
    groupArrays = this.sortGroupResult(groupArrays);
    return groupArrays;
  }

  sortGroupResult(groupArrays): ResultGroup[] {
    return groupArrays
      .sort((a, b) => {
        return <any>new Date(b.date) - <any>new Date(a.date)
      }
      );
  }


  sortResults() {
    this.resultList = this.resultList
      .sort((a, b) => {
        return <any>new Date(b.date) - <any>new Date(a.date)
      }
      );
  }

  getResultById(resultId: number) {
    const itemIndex = this.resultList.findIndex(item => item.resultId === resultId);
    return this.resultList[itemIndex];
  }

  getnextId(): number {
    let highest = 21;
    this.resultList.forEach(function (item) {
      if (highest === 0) {
        highest = item.resultId;
      }
      if (highest < item.resultId) {
        highest = item.resultId;
      }
    });
    return highest + 1;
  }

  getId(teamName: string): number {
    if (teamName != undefined && teamName != '') {
      let check = this.teamList.filter(team => team.name.toLowerCase().includes(teamName.toLowerCase()));
      if (check.length > 0) {
        return check[0].teamId;
      }
      else {
        this.getnextId();
      }
    }
    else {
      this.getnextId();
    }
    return
  }

}
