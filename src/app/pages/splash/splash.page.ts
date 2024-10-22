import { Component, OnInit } from "@angular/core";
import { Platform, NavController } from "@ionic/angular";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.page.html",
  styleUrls: ["./splash.page.scss"],
})
export class SplashPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  login() {
    this.navCtrl.navigateRoot("login");
  }
}
