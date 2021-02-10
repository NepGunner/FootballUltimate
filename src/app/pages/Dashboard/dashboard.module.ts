import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Dashboard } from './Dashboard.component';
import {CptDet_Dashboard_GET} from './CptDet_Dashboard_GET.component';
import {CptDet_Dashboard_Child_GET} from './CptDet_Dashboard_Child_GET.component';

import {LeagueTable} from '../LeagueTable/LeagueTable.component';
import {CptLst_LeagueTable_LIST} from '../LeagueTable/CptLst_LeagueTable_LIST.component';
import {CptDet_LeagueTable_GET} from '../LeagueTable/CptDet_LeagueTable_GET.component';

import {Result} from '../Result/Result.component';
import {CptDet_Result_GET} from '../Result/CptDet_Result_GET.component';

import {ResultAction} from '../ResultAction/ResultAction.component';
import {CptEdit_Result_PUT} from '../ResultAction/CptEdit_Result_PUT.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

import {NavbarComponent} from  '../../controls/navbar/navbar.component';
import {TableCustom} from '../../controls/table-custom/table-custom.component';
import { FormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from "ngx-typeahead";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DashboardRoutingModule,
    NgxTypeaheadModule
  ],
  exports: [
    Dashboard,
    CptDet_Dashboard_GET,
    CptDet_Dashboard_Child_GET,

    LeagueTable,
    CptLst_LeagueTable_LIST,
    CptDet_LeagueTable_GET,

    Result,
    CptDet_Result_GET,

    ResultAction,
    CptEdit_Result_PUT,

    NavbarComponent,
    TableCustom
  ],
  declarations: [
    Dashboard,
    CptDet_Dashboard_GET,
    CptDet_Dashboard_Child_GET,

    LeagueTable,
    CptLst_LeagueTable_LIST,
    CptDet_LeagueTable_GET,

    Result,
    CptDet_Result_GET,

    ResultAction,
    CptEdit_Result_PUT,

    NavbarComponent,
    TableCustom
  ],
  providers: [
  ],
})
export class DashboardModule { }