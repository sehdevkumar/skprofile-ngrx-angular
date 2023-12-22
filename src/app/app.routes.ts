import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AppPath } from './typings/app-typings'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

export const routes: Routes = [
  {
    path: AppPath.HOME,
    component: HomeComponent,
  },

  {
    path: AppPath.DASHBOARD,
    component: DashboardComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
   {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  }
]
