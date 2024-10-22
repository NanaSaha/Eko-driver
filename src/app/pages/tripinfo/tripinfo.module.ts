import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TripinfoPage } from "./tripinfo.page";

const routes: Routes = [
  {
    path: "",
    component: TripinfoPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  // exports: [
  //   TripinfoPage //<----- this is if it is going to be used else where
  // ],
  // declarations: [TripinfoPage],
  // entryComponents: [TripinfoPage]
})
export class TripinfoPageModule {}
