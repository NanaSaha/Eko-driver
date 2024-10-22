import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { LoginPage } from "./login.page";
import { NgOtpInputModule } from "ng-otp-input";
import { IonicSelectableModule } from "ionic-selectable";

const routes: Routes = [
  {
    path: "",
    component: LoginPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
