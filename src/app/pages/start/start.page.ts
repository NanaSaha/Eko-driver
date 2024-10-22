import { Component, NgZone, OnInit } from "@angular/core";

import {
  Platform,
  ModalController,
  LoadingController,
  NavController,
} from "@ionic/angular";
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { SettingsService } from "src/app/services/settings.service";
import { LanguageService } from "src/app/services/language.service";
import { AuthService } from "src/app/services/auth.service";
import { ProfileService } from "src/app/services/profile.service";
import { timer } from "rxjs";
import firebase from "firebase";
import { PopUpService } from "src/app/services/pop-up.service";
import { DirectionserviceService } from "src/app/services/directionservice.service";

@Component({
  selector: "app-start",
  templateUrl: "./start.page.html",
  styleUrls: ["./start.page.scss"],
})
export class StartPage implements OnInit {
  hasHome: any;
  connect: any;

  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dProvider: DirectionserviceService,
    public pop: PopUpService,
    public navCtrl: NavController,
    public zone: NgZone,
    public set: SettingsService,
    public lp: LanguageService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    private One: OneSignal,
    public ph: ProfileService,
    public auth: AuthService
  ) {}

  ngOnInit() {}
}
