import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { AcceptPage } from "../accept/accept.page";

import { ChatPage } from "../chat/chat.page";
import { TripinfoPage } from "../tripinfo/tripinfo.page";
import { PaymentpagePage } from "../paymentpage/paymentpage.page";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
      },
    ]),
  ],
  declarations: [HomePage, AcceptPage, ChatPage, TripinfoPage, PaymentpagePage],
  entryComponents: [AcceptPage, ChatPage, TripinfoPage, PaymentpagePage],
})
export class HomePageModule {}
