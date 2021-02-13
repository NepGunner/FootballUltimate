import { NgModule } from '@angular/core';
import { LeagueTableService } from '../../services/league-table.service';
import { ResultService } from '../../services/result.service';
import { TeamService } from '../../services/team.service';
import {NotificationService} from '../../services/notification.service';
import { SpinnerComponent } from '../../controls/spinner/spinner.component';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [SpinnerComponent],
  imports:[ToastModule],
  exports:[ToastModule],
  providers: [ LeagueTableService,ResultService,TeamService,NotificationService ]
})
export class SharedModule {
}