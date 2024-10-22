import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Addphoto3Page } from './addphoto3.page';

const routes: Routes = [
  {
    path: '',
    component: Addphoto3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Addphoto3Page]
})
export class Addphoto3PageModule {}
