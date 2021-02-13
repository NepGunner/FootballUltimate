
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from "../environments/environment";
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


import { NgxTypeaheadModule } from "ngx-typeahead";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//directive module
import { ClickOutsideModule } from './directives/clickoutside.module';
import { PrimeDragulaModule } from './directives/primeDragula.module';
import { DragulaService, DragulaModule } from 'ng2-dragula';

// Controls
import { EvoDateField } from './controls/evo-date-field/evo-date-field.component';
// import {NavbarComponent} from './controls/navbar/navbar.component';
import { EvoCalendar } from './controls/evo-calendar/evo-calendar.component';
import { SpinnerComponent } from './controls/spinner/spinner.component';
// import {TableCustom} from './controls/table-custom/table-custom.component';

// Services
import { AuthenticationService } from './services/authentication.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { SpinnerService } from './controls/spinner/spinner.service';
import { NotificationService } from './services/notification.service';
import { ObjectReferenceCollection } from './services/object-reference-collection.service';

// import {TeamService} from './services/team.service';
// import {ResultService} from './services/result.service';
// import {LeagueTableService} from './services/league-table.service';
// Pipes
import { StringToDatePipe } from './pipes/string-to-date-pipe';
import { EvoDateStringToDatePipe } from './pipes/evo-date-string-to-date-pipe';
import { FormatTextPipe } from './pipes/format-text-pipe';
import { EvoCurrencyPipe } from './pipes/evo-currency-pipe';
import { EvoCurrencyPipeList } from './pipes/evo-currency-pipe-list';
import { EvoCurrencyPipeList2 } from './pipes/evo-currency-pipe-list2';
import { StripHtmlPipe } from './pipes/strip-html-pipe';
// Pages

import { FootballHome } from './pages/FootballHome/FootballHome.component';
// import {LeagueTable} from './pages/LeagueTable/LeagueTable.component';
// import {CptDet_LeagueTable_GET} from './pages/LeagueTable/CptDet_LeagueTable_GET.component';
// import {CptLst_LeagueTable_LIST} from './pages/LeagueTable/CptLst_LeagueTable_LIST.component';

// import {Dashboard} from './pages/Dashboard/Dashboard.component';
// import {CptDet_Dashboard_GET} from './pages/Dashboard/CptDet_Dashboard_GET.component';
// import {CptDet_Dashboard_Child_GET} from './pages/Dashboard/CptDet_Dashboard_Child_GET.component';

// import {Result} from './pages/Result/Result.component';
// import {CptDet_Result_GET} from './pages/Result/CptDet_Result_GET.component';

// import {ResultAction} from './pages/ResultAction/ResultAction.component';
// import {CptEdit_Result_PUT} from './pages/ResultAction/CptEdit_Result_PUT.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SharedModule } from './pages/shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    // Controls
    SpinnerComponent,
    // NavbarComponent,
    EvoDateField,
    EvoCalendar,
    // TableCustom,

    //Pipes
    StringToDatePipe,
    EvoDateStringToDatePipe,
    FormatTextPipe,
    EvoCurrencyPipe,
    EvoCurrencyPipeList,
    EvoCurrencyPipeList2,
    StripHtmlPipe,
    // Pages
    FootballHome,
    // LeagueTable,
    // CptDet_LeagueTable_GET,
    // CptLst_LeagueTable_LIST,
    // Dashboard,
    // CptDet_Dashboard_GET,
    // CptDet_Dashboard_Child_GET,

    // Result,
    // CptDet_Result_GET,

    // ResultAction,
    // CptEdit_Result_PUT
    //popup


  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeDragulaModule,
    ClickOutsideModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    CalendarModule,
    ToastModule,

    NgxTypeaheadModule,

    HttpClientModule,
    DragulaModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
    SharedModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AuthenticationService,
    {
      provide: ErrorHandler, useClass: ErrorHandlerService
    },
    NotificationService,
    ObjectReferenceCollection,
    DragulaService,
    MessageService,
    SpinnerService,
    // TeamService,
    // ResultService,
    // LeagueTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


