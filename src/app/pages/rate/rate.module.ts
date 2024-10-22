import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicRatingModule } from 'ionic4-rating';

import { IonicModule } from '@ionic/angular';

import { RatePage } from './rate.page';

const routes: Routes = [
  {
    path: '',
    component: RatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RatePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatePageModule {}
