import { Injectable } from "@angular/core";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { EventService } from "./event.service";
import { Platform } from "@ionic/angular";
import { LanguageService } from "./language.service";
import { ProfileService } from "./profile.service";
import { PopUpService } from "./pop-up.service";


@Injectable()
export class OnesignalService {
  // tslint:disable-next-line: variable-name
  // public notif_id: any;
  public notif_id = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
  // tslint:disable-next-line: variable-name
  public isInDeepSh_t = true;
  // tslint:disable-next-line: variable-name
  public isInDeepSh_t2 = true;
  public ID: any;
  phone: any;
  picture: any;
  rating: any;
  carname: any;
  carImage: any;
  carprice: any;
  earnings: any;
  hours: any;
  price: any;
  constructor(
    public One: OneSignal,
    public ph: ProfileService,
    public lp: LanguageService,
    public eprov: EventService,
    public platform: Platform
  ) {

    this.subscribeToOnesignal();

  }


  subscribeToOnesignal() {
    if (!this.platform.is("cordova")) {
      this.notif_id = "43cd6829-4651-4039-bbc3-aace7fbe7d72";

    }
    else if (this.platform.is("desktop")) {
      this.notif_id = "43cd6829-4651-4039-bbc3-aace7fbe7d72";

    }

    else if (this.platform.is("mobileweb")) {
      this.notif_id = "43cd6829-4651-4039-bbc3-aace7fbe7d72";

    }
    else {
      this.One.getIds().then((success) => {
        this.notif_id = success.userId;

      });
    }
  }

  ionViewLoaded() {
    this.subscribeToOnesignal();
  }

  sendPush(id) {
    this.One.getIds().then((success) => {


      const notificationObj: any = {
        include_player_ids: [id],
        contents: { en: this.lp.translate()[0].f6 },
      };


      this.One.postNotification(notificationObj).then(
        (success) => {

        },
        (error) => {

        }
      );
    });
  }
  sendMessage(id, message) {
    this.One.getIds().then((success) => {


      const notificationObj: any = {
        include_player_ids: [id],
        contents: { en: message },
      };

      // tslint:disable-next-line: no-shadowed-variable
      this.One.postNotification(notificationObj).then(
        (success) => {

        },
        (error) => {

        }
      );
    });
  }

  UpdateInfo(lat, lng, car) {

    this.ph.getUserProfile().on("value", (userProfileSnapshot) => {


      this.phone = userProfileSnapshot.val().phonenumber;
      this.picture = userProfileSnapshot.val().picture;
      this.rating = userProfileSnapshot.val().rating;
      this.carname = userProfileSnapshot.val().carName;
      this.earnings = userProfileSnapshot.val().earnings;
      this.price = userProfileSnapshot.val().price;

      if (this.platform.is("cordova")) {


        if (lat !== 0) {
          this.eprov.PushCurrentLocation(
            lat,
            lng,
            this.notif_id,
            this.carname,
            this.phone,
            this.picture,
            this.rating,
            this.earnings,
            this.price
          );
        }
        else {

        }
      } else {


        if (lat !== 0) {
          this.eprov.PushCurrentLocation(
            lat,
            lng,
            this.notif_id,
            this.carname,
            this.phone,
            this.picture,
            this.rating,
            this.earnings,
            this.price
          );
        }
        else {

        }
      }
      this.ph.getUserProfile().off("value");
    });
  }

  UpdateCurrentLocation(lat, lng) {
    if (this.isInDeepSh_t) {
      this.One.getIds().then((success) => {
        this.notif_id = success.userId;
        if (lat !== 0) {
          this.eprov.UpdateLocation(lat, lng, success.userId);
        }
      });
    }
  }
}
