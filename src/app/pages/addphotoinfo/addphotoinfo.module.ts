import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddphotoinfoPage } from './addphotoinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AddphotoinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddphotoinfoPage]
})
export class AddphotoinfoPageModule {}
