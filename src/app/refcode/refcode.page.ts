import { Component, OnInit } from "@angular/core";
import {
  LoadingController,
  AlertController,
  NavController,
  Platform,
} from "@ionic/angular";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ProfileService } from "src/app/services/profile.service";
import { LanguageService } from "src/app/services/language.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { EventService } from "src/app/services/event.service";
import { SettingsService } from "src/app/services/settings.service";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Location } from "@angular/common";

@Component({
  selector: "app-refcode",
  templateUrl: "./refcode.page.html",
  styleUrls: ["./refcode.page.scss"],
})
export class RefcodePage implements OnInit {
  randomCode: any = "Getting id...";
  public cardpaymentForm: FormGroup;
  earnings: any = 0;
  public eventList: Array<any>;
  message: string = null;
  file: string = null;
  link: string = null;
  subject: string = null;
  constructor(
    public ph: ProfileService,

    public share: SocialSharing,
    public lp: LanguageService,
    public pop: PopUpService,
    public eProvider: EventService,
    public platform: Platform,
    public nav: NavController,
    public loadingCtrl: LoadingController,
    public location: Location,
    public alertCtrl: AlertController,
    public settings: SettingsService,
    public formBuilder: FormBuilder
  ) {
    // this.pop.presentLoader("Getting referal Earnings");
    this.ph.getUserProfile().on("value", (userProfileSnapshot) => {
      if (userProfileSnapshot.val()) {
        console.log(
          "VALUE FROM USER PROFILE" + JSON.stringify(userProfileSnapshot.val())
        );
        console.log("VALUE FROM USER PROFILE" + this.ph.id);
        console.log(
          "unique_number is " + userProfileSnapshot.val().unique_number
        );
        this.earnings = userProfileSnapshot.val().refEarning;
        console.log("EARNINGSS" + this.earnings);
        // this.randomCode = userProfileSnapshot.val().id;
        this.randomCode = userProfileSnapshot.val().unique_number;
      } else {
        this.earnings = 0;
        console.log("EARNINGSS 0" + this.earnings);
      }
    });
    // this.pop.hideLoader();

    this.cardpaymentForm = formBuilder.group({
      card: [
        "",
        Validators.compose([Validators.maxLength(4), Validators.required]),
      ],
    });
  }

  ionViewDidEnter() {
    this.message =
      "Share " +
      this.randomCode +
      " to your friends and family and get 1ghc for every ride they make with your promo code  ";

    this.file = "https://ekodot.devdexsoftware.com";
    this.link = "https://ekodot.devdexsoftware.com";
  }

  goBack() {
    // this.location.back();
    this.nav.navigateBack("home");
  }

  gotoEarning() {
    this.nav.navigateRoot("earnings");
  }

  FaceShare() {
    this.share
      .share(this.message, this.subject, this.file, this.link)
      .then(() => {})
      .catch(() => {});
  }

  whatsappShare() {
    this.share
      .shareViaWhatsApp(this.message, null, this.link)
      .then(() => {
        console.log("WhatsApp share successful");
      })
      .catch((err) => {
        console.log("An error occurred ", err);
      });
  }

  Request() {
    // this.send(
    //   "A user wants to request: " + this.ph.phone,
    //   "Trace the driver information to the admin",
    //   this.settings.support_email
    // );
    this.pop.showPimp(
      "You Have Made A Request for your earnings. Ekodot will process this within 24hrs. Thank you..."
    );
  }

  // send(subject: string, message: string, email: string) {
  //   const url =
  //     "https://api.mailgun.net/v3/" + this.settings.mailGUrl + "/messages";
  //   const body = {
  //     from: email,
  //     to: this.settings.companyMail,
  //     // tslint:disable-next-line: object-literal-shorthand
  //     subject: subject,
  //     html:
  //       "<html><body>First Name: " +
  //       this.settings.appName +
  //       "<br>" +
  //       "Last Name: " +
  //       this.settings.appLink +
  //       "<br>" +
  //       "Email: " +
  //       email +
  //       "<br>" +
  //       "Subject: " +
  //       subject +
  //       "<br><br>" +
  //       "Message: " +
  //       message +
  //       "</body></html>",
  //   };
  //   const headers = {
  //     Authorization: "Basic " + this.settings.mailGKey,
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   };
  // }

  ngOnInit() {
    this.file = "https://ekodot.devdexsoftware.com";
    this.link = "https://ekodot.devdexsoftware.com";
  }
}
