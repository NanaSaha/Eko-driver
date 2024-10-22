import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { WalletPage } from "./wallet.page";
import { Angular4PaystackModule } from "angular4-paystack";

const routes: Routes = [
  {
    path: "",
    component: WalletPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angular4PaystackModule,
    RouterModule.forChild(routes),
  ],
  declarations: [WalletPage],
})
export class WalletPageModule {}
