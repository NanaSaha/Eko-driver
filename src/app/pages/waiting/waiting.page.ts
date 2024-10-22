import { Component, OnInit, NgZone } from "@angular/core";
import { Platform } from "@ionic/angular";
import { NavController, NavParams } from "@ionic/angular";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { ProfileService } from "src/app/services/profile.service";
import { LanguageService } from "src/app/services/language.service";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-waiting",
  templateUrl: "./waiting.page.html",
  styleUrls: ["./waiting.page.scss"],
})
export class WaitingPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public ph: ProfileService,
    public platform: Platform,
    public lp: LanguageService,
    public settings: SettingsService,
    public iab: InAppBrowser,
    public zone: NgZone
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WaitingPage");
    // if (!this.platform.is("cordova")) {
    //   this.ph
    //     .getUserProfil()
    //     .child(this.ph.id)
    //     .child("userInfo")
    //     .update({
    //       active_state: true,
    //     })
    //     .then((success) => {
    //       this.navCtrl.navigateRoot("waiting");
    //     });
    // }
  }

  gotoSite2() {}

  close() {
    console.log("APP CLOSE CLICKED");

    if (this.platform.is("cordova")) {
      // this.zone.run(() => {
      this.navCtrl.navigateRoot("home");
      // });
    } else {
      // this.zone.run(() => {
      this.navCtrl.navigateRoot("home");
      // });
    }
  }

  ngOnInit() {}
}
