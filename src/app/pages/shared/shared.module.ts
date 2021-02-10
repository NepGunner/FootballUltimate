import { NgModule } from '@angular/core';
import { LeagueTableService } from '../../services/league-table.service';
import { ResultService } from '../../services/result.service';
import { TeamService } from '../../services/team.service';

@NgModule({
  providers: [ LeagueTableService,ResultService,TeamService ]
})
export class SharedModule {
}