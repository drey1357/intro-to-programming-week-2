import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { RouterModule, Routes } from '@angular/router';
import { CountComponent } from './components/count/count.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './state';
import { PrefsComponent } from './components/prefs/prefs.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterDataEffects } from './state/effects/counter-data.effects';


const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
    children: [
      {
        path: 'count',
        component: CountComponent
      },
      {
        path: 'prefs',
        component: PrefsComponent
      },
      {
        path: '**',
        redirectTo: 'count'
      }
    ]
  }
]


@NgModule({
  declarations: [
    CounterComponent,
    CountComponent,
    PrefsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([CounterDataEffects])
  ]
})
export class CounterModule { }
