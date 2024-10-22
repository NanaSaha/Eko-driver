import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  NavController,
  AlertController,
  NavParams,
  ModalController,
} from "@ionic/angular";
import { HTTP } from "@ionic-native/http/ngx";
import { HttpHeaders } from "@angular/common/http";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { PopUpService } from "src/app/services/pop-up.service";
import { SettingsService } from "src/app/services/settings.service";
import { LanguageService } from "src/app/services/language.service";
import { EventService } from "src/app/services/event.service";
import { ProfileService } from "src/app/services/profile.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-support",
  templateUrl: "./support.page.html",
  styleUrls: ["./support.page.scss"],
  // encapsulation: ViewEncapsulation.None,
})
export class SupportPage implements OnInit {
  id: any;
  cartransmission: any = "car is beign hijacked.";
  public eventList: Array<any>;
  constructor(
    public navCtrl: NavController,
    public pop: PopUpService,
    public http: HTTP,
    public call: CallNumber,
    public settings: SettingsService,
    public modal: ModalController,
    public alert: AlertController,
    public eventProvider: EventService,
    public ph: ProfileService,
    public lp: LanguageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }
  ngOnInit() { }
  ionViewDidEnter() {
    console.log("inregf");
    this.eventProvider
      .getSupportChatList(this.eventProvider.id)
      .on("value", (snapshot) => {
        this.eventList = [];
        console.log("sjiy");
        snapshot.forEach((snap) => {
          this.eventList.push({
            id: snap.key,
            admin: snap.val().Admin_Message,
            user: snap.val().Client_Message,
          });
          console.log(this.eventList);
          return false;
        });
      });
  }

  async closeChat() {
    await this.modal.dismiss();
  }

  callNow() {
    window.open("tel:" + this.settings.companyPhone);
    // this.send('Driver Needs Support SOS code: ' + this.cartransmission, 'Trace the driver information to the admin', this.ph.user.email);
  }

  async Send() {
    const alert = await this.alert.create({
      header: "message",
      inputs: [
        {
          name: "Message",
          placeholder: "Reply",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => { },
        },
        {
          text: "Send",
          handler: (data) => {
            console.log(this.ph.user.email);
            // this.send(
            //   "Support Message from Driver with ID " + this.ph.user.uid,
            //   data.Message,
            //   this.ph.user.email
            // );
            this.eventProvider.Complain(data.Message, this.eventProvider.id);
          },
        },
      ],
    });
    alert.present();
  }

  send(subject: string, message: string, email: string) {
    // const url =
    //   "https://api.mailgun.net/v3/" + this.settings.mailGUrl + "/messages";
    // const body = {
    //   from: email,
    //   to: this.settings.companyMail,
    //   // tslint:disable-next-line: object-literal-shorthand
    //   subject: subject,
    //   // tslint:disable-next-line: max-line-length
    //   html:
    //     "<html><body>First Name: " +
    //     this.settings.appName +
    //     "<br>" +
    //     "Last Name: " +
    //     this.settings.appLink +
    //     "<br>" +
    //     "Email: " +
    //     email +
    //     "<br>" +
    //     "Subject: " +
    //     subject +
    //     "<br><br>" +
    //     "Message: " +
    //     message +
    //     "</body></html>",
    // };
    // const headers = {
    //   Authorization: "Basic " + this.settings.mailGKey,
    //   "Content-Type": "application/x-www-form-urlencoded",
    // };

    // this.http
    //   .post(url, body, headers)
    //   .then((data) => {
    //     console.log("SUCCESS -> " + JSON.stringify(data));
    //   })
    //   .catch((error) => {
    //     this.pop.showPimp(JSON.stringify(error));
    //   });
  }

  goBack() {
    this.navCtrl.navigateBack("home");
  }
}
