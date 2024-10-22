import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";


import { MappingPage } from './mapping.page';
// import { ChatPage } from "../pages/chat/chat.page";
// import { TripinfoPage } from "../pages/tripinfo/tripinfo.page";
// import { PaymentpagePage } from "../pages/paymentpage/paymentpage.page";
// import { AcceptPage } from "../pages/accept/accept.page";

const routes: Routes = [
  {
    path: '',
    component: MappingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  // declarations: [MappingPage]
  declarations: [MappingPage],
  // entryComponents: [AcceptPage, ChatPage, TripinfoPage, PaymentpagePage],
})
export class MappingPageModule { }





