import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { GiftGivingComponent } from './features/gift-giving/gift-giving.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'gifts',
    component: GiftGivingComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
