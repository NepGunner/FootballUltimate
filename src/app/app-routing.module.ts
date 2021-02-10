import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './pages/Dashboard/Dashboard.component';
import { FootballHome } from './pages/FootballHome/FootballHome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'FootballHome',
    pathMatch: 'full'
  },
  {
    path: 'FootballHome',
    component: FootballHome,
  },
  // {
  //   path: 'FootballHome',
  //   loadChildren: () => import('./pages/FootballHome/football-home.module')
  //     .then(mod => mod.FootballHomeModule)
  // },
  {
    path: 'Dashboard',
    loadChildren: () => import('./pages/Dashboard/dashboard.module')
      .then(mod => mod.DashboardModule)
  },
  
  // {
  //   path: 'Dashboard',
  //   component: Dashboard,
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes, {
//   useHash: true,
// });
