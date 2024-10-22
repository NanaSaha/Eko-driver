import { Injectable } from "@angular/core";
import firebase from "firebase";
import { LanguageService } from "./language.service";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  public WebAdminProfile: any;
  public appName = "Call4Ride Driver";
  public appCareer = "https://ekodot.com";
  public appFaq = "https://ekodot.com";
  public appLink = "https://ekodot.com";
  public appinsta = "https://www.instagram.com/ekodot/";
  public appFB = "https://www.facebook.com/ekoghana/";
  public appTikTok = "http://tiktok.com/@call4ridegh";
  public appYoutube = "https://youtube.com/channel/UCXdQQx_eSKKV9xjDs7NO3Nw";
  public appTerms = "https://Call4Ride.net";
  public appCountryCode = "GH";
  public appStripeKey = "pk_test_0t85o0Llo0MbBfC9imSzznam";
  public appcurrency: any = "₵";
  public appDashboard = "https://ekodot.com";
  public companyPhone: any = "+233502903382";
  public companyMail: any = "ekogh@gmail.com";
  // tslint:disable-next-line: variable-name
  public current_ID = false;
  public mailGUrl: any = "sandbox28ca01fb2b374bb1b8aceb9d0a86895a.mailgun.org";
  public mailGKey: any = window.btoa(
    "api:key-60b9b5a8e7097e2fdcada552e4820db4"
  );
  public id: any;
  public langauge = "en";
  public refer = false;
  public wallet = false;
  public company = false;
  public pool = false;
  public schedule = false;
  public OnesignalAppID: any = "aacf6ed6-3848-4996-a2a9-1b68bd12457f";
  public CloudID: any = "696815847278";
  // tslint:disable-next-line: variable-name
  public support_email: any = "call4ridegh@gmail.com";

  constructor(public lang: LanguageService) {
    this.WebAdminProfile = firebase.database().ref(`DashboardSettings`);

    // this.getWebAdminProfile().on("value", (sShot) => {
    //   if (sShot.val().name) {
    //     this.appName = sShot.val().name + " Driver";
    //   }
    //   if (sShot.val().website) {
    //     this.appLink = sShot.val().website;
    //   }
    //   if (sShot.val().faq) {
    //     this.appFaq = sShot.val().faq;
    //   }
    //   if (sShot.val().instagram) {
    //     this.appinsta = sShot.val().instagram;
    //   }
    //   if (sShot.val().careers) {
    //     this.appCareer = sShot.val().careers;
    //   }
    //   if (sShot.val().facebook) {
    //     this.appFB = sShot.val().facebook;
    //   }
    //   if (sShot.val().countrycode) {
    //     this.appCountryCode = sShot.val().countrycode;
    //   }
    //   if (sShot.val().currency) {
    //     this.appcurrency = sShot.val().currency;
    //   }
    //   if (sShot.val().phone) {
    //     this.companyPhone = sShot.val().phone;
    //   }

    //   if (sShot.val().langauge) {
    //     console.log(this.langauge);
    //     this.langauge = sShot.val().langauge;
    //   }

    //   if (sShot.val().company) {
    //     this.company = sShot.val().company;
    //   }
    //   if (sShot.val().refer) {
    //     this.refer = sShot.val().refer;
    //   }
    //   if (sShot.val().wallet) {
    //     this.wallet = sShot.val().wallet;
    //   }
    //   if (sShot.val().pool) {
    //     this.pool = sShot.val().pool;
    //   }
    //   if (sShot.val().schedule) {
    //     this.schedule = sShot.val().schedule;
    //   }
    //   if (sShot.val().appID) {
    //     this.OnesignalAppID = sShot.val().appID;
    //   }
    //   if (sShot.val().CloudID) {
    //     this.CloudID = sShot.val().CloudID;
    //   }
    //   if (sShot.val().email) {
    //     this.companyMail = sShot.val().email;
    //   }
    //   if (sShot.val().mailgunUrl) {
    //     this.mailGUrl = sShot.val().mailgunUrl;
    //   }
    //   if (sShot.val().mailgunKey) {
    //     this.mailGKey = sShot.val().mailgunKey;
    //   }
    //   if (sShot.val().support_email) {
    //     this.support_email = sShot.val().support_email;
    //   }
    // });
  }

  getWebAdminProfile(): firebase.database.Reference {
    return this.WebAdminProfile;
  }
}
