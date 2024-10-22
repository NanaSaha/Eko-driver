import { Component, ViewEncapsulation } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";
import { LanguageService } from "src/app/services/language.service";
import { SettingsService } from "src/app/services/settings.service";
import { EventService } from "src/app/services/event.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { ProfileService } from "src/app/services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.page.html",
  styleUrls: ["./documents.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DocumentsPage {
  public eventList: Array<any>;
  public earnings: any;
  public captureDataUrl: any;
  title: any;
  eventListy: any;
  hq: any;
  date: any;
  // tslint:disable-next-line: variable-name
  expire_date: any;
  days: number;
  filetype: any;
  sort: any;
  eventLists: any;
  key: string;
  constructor(
    public navCtrl: NavController,
    public camera: Camera,
    public lp: LanguageService,
    public settings: SettingsService,
    public pop: PopUpService,
    public load: LoadingController,
    public profile: ProfileService,
    public alert: AlertController,
    public eventProvider: EventService,
    public route: Router
  ) {}

  ionViewDidEnter() {
    this.eventList = [];

    this.profile
      .getUserProfil()
      .child(this.profile.id)
      .on("value", (userProfileSnapshot) => {
        console.log(userProfileSnapshot.val());

        userProfileSnapshot.forEach((snap) => {
          console.log("SNAP", snap);
          console.log("SNAP", snap.val().license);

          this.eventList.push({
            license: snap.val().license,
            license_picture: snap.val().license_picture,
            car_picture: snap.val().img,
            plate: snap.val().plate,
            carName: snap.val().carName,
            carmodel: snap.val().carmodel,
            caryear: snap.val().caryear,
            insurance_picture: snap.val().insurance_picture,
            driver_picture: snap.val().picture,
          });
        });
      });

    // this.profile.getCompanies().child('Driver/documents').once('value', snapshot => {

    //   snapshot.forEach(snap => {
    //     if (snap.child(this.profile.id).val()) {
    //       const today = new Date();
    //       const expire = new Date(snap.child(this.profile.id).val().expired);

    //       const day = this.days;

    //       console.log(day);

    //       console.log(this.calcDate(today, expire));
    //       this.eventList.push({
    //         id: snap.key,
    //         permission: snap.val().permission,
    //         filetype: snap.val().filetype,
    //         title: snap.val().title,
    //         approved: snap.child(this.profile.id).val().approved,
    //         client: snap.child(this.profile.id).val().client,
    //         comment: snap.child(this.profile.id).val().comment,
    //         data: snap.child(this.profile.id).val().data,
    //         denied: snap.child(this.profile.id).val().denied,
    //         expired: this.calcDate(today, expire),
    //         expiredate: day
    //       });

    //     } else {

    //       this.eventList.push({
    //         id: snap.key,
    //         permission: snap.val().permission,
    //         filetype: snap.val().filetype,
    //         title: snap.val().title,
    //       });
    //     }

    //     return false;

    //   });
    //   this.profile.getCompanies().child('Driver/documents').off('value');
    // });
  }

  goBack() {
    this.navCtrl.navigateBack("home");
  }

  calcDate(date1, date2) {
    const diff = Math.floor(date2.getTime() - date1.getTime());
    const day = 1000 * 60 * 60 * 24;

    const days = Math.floor(diff / day);
    const months = Math.floor(days / 31);
    const years = Math.floor(months / 12);

    console.log(days);
    this.days = days;

    let message = " Expires in ";
    message += days + " days ";
    if (months !== 0) {
      message += months + " months ";
      message += years + " years \n";
    }
    return message;
  }

  async presentRouteLoader(message) {
    const loading = await this.load.create({
      // tslint:disable-next-line: object-literal-shorthand
      message: message,
    });

    loading.present();

    const myInterval = setInterval(() => {
      if (this.eventList != null) {
        loading.dismiss();
        clearInterval(myInterval);
      }
    }, 1000);
  }

  GotoItem(h) {
    console.log(h);
    this.route.navigate(["documentdetail"], { queryParams: h });
  }
}
