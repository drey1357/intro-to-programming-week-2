import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { GiftGivingComponent } from './features/gift-giving/gift-giving.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { PeopleListComponent } from './features/gift-giving/components/people-list/people-list.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonDataService } from './services/people-data.service';
import { PeopleEntryComponent } from './features/gift-giving/components/people-entry/people-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    NavigationComponent,
    DashboardComponent,
    GiftGivingComponent,
    AboutUsComponent,
    PeopleListComponent,
    PeopleEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
