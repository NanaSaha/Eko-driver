import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PaymentpagePage } from "./paymentpage.page";

const routes: Routes = [
  {
    path: "",
    component: PaymentpagePage,
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
  //   PaymentpagePage //<----- this is if it is going to be used else where
  // ],
  // declarations: [PaymentpagePage],
  // entryComponents: [PaymentpagePage]
})
export class PaymentpagePageModule {}
