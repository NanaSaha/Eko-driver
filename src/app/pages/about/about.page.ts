import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LanguageService } from 'src/app/services/language.service';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  Lang: any;
  constructor(public iab: InAppBrowser, public lp: LanguageService,
    public settings: SettingsService, public navCtrl: NavController) {
    this.Lang = this.lp.translate();

  }


  gotoSite() {
    this.iab.create(this.settings.appLink);
  }

  gotoSite2() {
    this.iab.create(this.settings.appCareer);
  }

  gotoSite3() {
    this.iab.create(this.settings.appFaq);
  }

  gotoSite4() {
    this.iab.create(this.settings.appTerms);
  }


  gotoSite9() {
    this.iab.create(this.settings.appFB);
  }

  gotoSite10() {
    this.iab.create(this.settings.appinsta);
  }
  Back() {
    this.navCtrl.navigateBack('home');
  }

  ngOnInit() {
  }

}
