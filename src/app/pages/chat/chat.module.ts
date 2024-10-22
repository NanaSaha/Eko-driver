import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ChatPage } from "./chat.page";

const routes: Routes = [
  {
    path: "",
    component: ChatPage,
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
  //   ChatPage //<----- this is if it is going to be used else where
  // ],
  // declarations: [ChatPage],
  // entryComponents: [ChatPage]
})
export class ChatPageModule {}
