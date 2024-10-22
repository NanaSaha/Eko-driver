
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RateMePage } from './rate-me.page';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicRatingModule } from 'ionic4-rating';

const routes: Routes = [
  {
    path: '',
    component: RateMePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RateMePage //<----- this is if it is going to be used else where
  ],
  declarations: [RateMePage],
  entryComponents: [RateMePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RateMePageModule {}
