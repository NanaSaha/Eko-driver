import { Component, NgZone } from "@angular/core";

import {
  Platform,
  ModalController,
  LoadingController,
  NavController,
  AlertController,
  ToastController
} from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { SettingsService } from "./services/settings.service";
import { LanguageService } from "./services/language.service";
import { AuthService } from "./services/auth.service";
import { ProfileService } from "./services/profile.service";
import { timer } from "rxjs";
import firebase from "firebase";
import { PopUpService } from "./services/pop-up.service";
import { DirectionserviceService } from "./services/directionservice.service";
import { Router } from "@angular/router";
import { Geolocation, PositionError, Geoposition } from "@ionic-native/geolocation/ngx";
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  watchPositionSubscription: Geolocation;
  mapTracker: any;
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "ios-home",
    },
    {
      title: "Profile",
      url: "/profile",
      icon: "ios-clock",
    },
    {
      title: "Earnings",
      url: "/history",
      icon: "ios-card",
    },

    {
      title: "Subscriptions",
      url: "/wallet",
      icon: "ios-briefcase",
    },
    {
      title: "Referal Code",
      url: "/refcode",
      icon: "pricetags",
    },
    {
      title: "Promo Code",
      url: "/promo",
      icon: "ribbon",
    },
    {
      title: "Documents",
      url: "/documents",
      icon: "ios-book",
    },
    {
      title: "Support",
      url: "/support",
      icon: "ios-chatbubbles",
    },
    {
      title: "EKO information",
      url: "/about",
      icon: "information-circle-outline",
    },
    // {
    //   title: "Mapping",
    //   url: "/mapping",
    //   icon: "map",
    // },

    // {
    //   title: "Select Zone",
    //   url: "/zone",
    //   icon: "ios-map",
    // },
    // {
    //   title: "Profile",
    //   url: "/profile",
    //   icon: "ios-clock",
    // },

    // {
    //   title: "Settings",
    //   url: "/settings",
    //   icon: "ios-settings",
    // },

    ,
  ];
  public user: any;
  showSplash = true;
  public userProfile: any;
  public phone: any;
  hasHome: any;
  connect: any;
  last_name;
  first_name;
  picture;
  phonenum;
  unique;
  watch

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dProvider: DirectionserviceService,
    public pop: PopUpService,
    public navCtrl: NavController,
    public zone: NgZone,
    public set: SettingsService,
    public lp: LanguageService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    private oneSignal: OneSignal,
    public ph: ProfileService,
    public auth: AuthService,
    public alertCtrl: AlertController,
    public router: Router,
    private toastCtrl: ToastController,
    private geo: Geolocation,
    private backgroundMode: BackgroundMode,
    public insomnia: Insomnia
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    

      this.statusBar.styleDefault();
      this.allowLocation();
      // this.oneSignal.startInit(this.set.OnesignalAppID, this.set.CloudID);
      // this.oneSignal.inFocusDisplaying(
      //   this.oneSignal.OSInFocusDisplayOption.Notification
      // );
      // "GH" + Math.floor(Date.now() / 1000) + "D";
      let currentYear = new Date().getFullYear();
      let unique1 = "GH" + currentYear + "D" + Math.floor(Date.now() / 1000);

      this.setupPush();
      this.getNotificationPlayerIds()
        .then((ids) => {

        })
        .catch((e) => {

        });

      this.oneSignal.setSubscription(true);

      this.splashScreen.hide();
      this.startUp();

    });
  }

  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit(
      "70ba41bd-0e9c-4a36-b8dd-69dcd87b27c2",
      "252622798292"
    );

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.None
    );

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe((data) => {
      console.log("DATA FROM PUSH NOFTICA---->>" + data);
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      console.log("DATA FROM PUSH NOFTICA WHEN OPENDE---->>" + data);
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;

      this.showAlert(
        "Notification opened",
        "You already read this before",
        additionalData.task
      );
    });

    this.oneSignal.endInit();
  }

  getNotificationPlayerIds() {
    return new Promise((resolve, reject) => {
      if (this.platform.is("cordova")) {
        this.oneSignal
          .getIds()
          .then((ids) => {
            console.log("GETTING IDS RESOLVED-->>" + JSON.stringify(ids));
            resolve(ids);
          })
          .catch((e) => {
            reject(e);
          });
      }
    });
  }

 


  startUp() {


    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      // Check of this is a user
      if (!user) {
        this.zone.run(() => {
          this.navCtrl.navigateRoot("splash");
        });

        this.ph.loadingState = true;

        unsubscribe();
      } else {
        unsubscribe();
        let picture;
        let licence_pic;
        let insurance_picture;
        let phone
        let active_state

        this.ph
          .getUserProfil()
          .child(this.ph.id)
          .on("value", (userProfileSnapshot) => {


            if (userProfileSnapshot.val() == null) {
              this.auth.logoutUser().then(() => {
                this.zone.run(() => {
                  this.navCtrl.navigateRoot("login");
                });
              });
            } else {

              phone = userProfileSnapshot.val().userInfo.phonenumber;
              picture = userProfileSnapshot.val().userInfo.picture;
              insurance_picture = userProfileSnapshot.val().userInfo.insurance_picture;
              licence_pic = userProfileSnapshot.val().userInfo.license_picture;
              active_state = userProfileSnapshot.val().userInfo.active_state;



              if (phone) {

                if (licence_pic != null) {

                  if (picture != null) {

                    if (insurance_picture != null) {
                      if (active_state != false) {
                        this.zone.run(() => {
                          this.navCtrl.navigateRoot("home");
                        });

                      } else {
                        this.navCtrl.navigateRoot("waiting");
                      }


                    } else {
                      this.zone.run(() => {
                        this.navCtrl.navigateRoot("addphoto3");
                      });
                      this.ph.loadingState = true;

                    }
                  } else {
                    this.zone.run(() => {

                      this.navCtrl.navigateRoot("addphoto2");
                    });

                    this.ph.loadingState = true;
                  }
                } else {
                  this.zone.run(() => {
                    this.navCtrl.navigateRoot("addphotoinfo");


                  });

                  this.ph.loadingState = true;

                }
              } else {
                this.zone.run(() => {

                  this.navCtrl.navigateRoot("login");
                });
                this.ph.loadingState = true;

              }
            }
            this.ph.getUserProfil().child(this.ph.id).off("value");
          });
      }
    });
  }



  menuOpened() {
    console.log("---- WHEN MENU IS OPENED----");
    this.ph
      .getUserProfil()
      .child(this.ph.id)
      .on("value", (userProfileSnapshot) => {
        console.log(userProfileSnapshot.val(), this.ph.id);
        this.first_name = userProfileSnapshot.val().userInfo.first_name;
        this.last_name = userProfileSnapshot.val().userInfo.last_name;
        this.picture = userProfileSnapshot.val().userInfo.picture;
        this.phonenum = userProfileSnapshot.val().userInfo.phonenumber;
        this.unique = userProfileSnapshot.val().userInfo.unique_number;

        console.log("FRIST NAME" + this.first_name);
        console.log("unique NUMBER" + this.unique);
      });
  }

  menuClosed() { }

  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          },
        },
      ],
    });
    alert.present();
  }

  goProfile() {
    this.router.navigate(["profile"]);
  }

  allowLocation() {
    // this.watchPositionSubscription = navigator.geolocation;
    // this.mapTracker = this.watchPositionSubscription.watchPosition((position) => {
    //   console.log("position callback", position);


    // },
    //   (error) => {

    //     this.presentToast("Your GPS is off.Please turn it on");
    //     console.log(error);

    //   }, {
    //   enableHighAccuracy: true,
    // });


    this.watch = this.geo.watchPosition({ enableHighAccuracy: true, timeout: 10000 }).subscribe(position => {
      if ((position as Geoposition).coords != undefined) {
        var geoposition = (position as Geoposition);
        console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);

        console.log("Location is ready!--location ");


      } else {
        var positionError = (position as PositionError);
        // console.log('Error ' + positionError.code + ': ' + positionError.message);

       
      }
    });
  }


  // keepScreenAlive() {

  //   console.log("--<><><><><><><>Keeping Screen ALive -------->>>>")
  //   this.insomnia.keepAwake()
  //     .then(
  //       () => console.log('KEEPING AWAKE success'),
  //       () => console.log('KEEPING AWAKE error')
  //     );
  // }

  // backgroundModeAc() {
  //   console.log("--<><><><><><><>background mode running -------->>>>")
  //   this.backgroundMode.enable();
  // }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: "top",
    });

    toast.onDidDismiss();

    toast.present();
  }
}
