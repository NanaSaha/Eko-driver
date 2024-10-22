import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { AcceptPage } from "./accept.page";

const routes: Routes = [
  {
    path: "",
    component: AcceptPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  //  exports: [
  //   AcceptPage //<----- this is if it is going to be used else where
  // ],
  // declarations: [AcceptPage],
  // entryComponents: [AcceptPage],
})
export class AcceptPageModule {}
