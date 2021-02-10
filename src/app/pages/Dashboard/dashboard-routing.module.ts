import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard } from './Dashboard.component';
import {LeagueTable} from '../LeagueTable/LeagueTable.component';
import {Result} from '../Result/Result.component';
import {ResultAction} from '../ResultAction/ResultAction.component';

const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'LeagueTable', component: LeagueTable },
  { path: 'Result', component: Result },
  { path: 'ResultAction', component: ResultAction }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }