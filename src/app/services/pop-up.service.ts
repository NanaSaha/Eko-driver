import {
  Injectable,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Injector,
} from "@angular/core";
import {
  AlertController,
  ModalController,
  LoadingController,
  ToastController,
  NavController,
} from "@ionic/angular";
import { Platform } from "@ionic/angular";
import { ProfileService } from "./profile.service";
import { LanguageService } from "./language.service";
import { LocationTrackerService } from "./location-tracker.service";
import { EventService } from "./event.service";
/*
  Generated class for the PopUpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PopUpService implements OnDestroy {
  public onRequest = false;
  public mapComponent: any;
  public canDismiss = false;
  public toggleBtn = false;
  public onPointerHide = false;
  public calculateBtn = false;
  public price: number;
  public hasArrived = true;
  public allowed = true;
  public hasPicked = false;
  public hasPicked2 = false;
  public UserId: any;
  public loggedOff = true;
  public mapSection = false;
  public isNewJob = false;
  public loading: any;
  public dismissLoader: any;
  subscription: any;
  constructor(
    protected injector: Injector,
    public platform: Platform,
    public lp: LanguageService,
    private toastCtrl: ToastController,
    public locTracker: LocationTrackerService,
    public pro: ProfileService,
    public alert: AlertController,
    public ev: EventService,
    public load: LoadingController
  ) { }

  get navCtrl(): NavController {
    return this.injector.get(NavController);
  }

  async showAlertNormal(title, subtitle, network) {
    const alert = await this.alert.create({
      header: title,
      subHeader: subtitle,
      buttons: [
        {
          text: this.lp.translate()[0].f6,
          role: "cancel",
          handler: () => {
            if (network) {
            }
          },
        },
      ],
      backdropDismiss: false,
    });
    alert.present();
  }

  AcceptJob() {
    this.mapSection = true;
  }

  removeToast() {
    this.toastCtrl.dismiss();
  }

  async showOfflineNormal(title, subtitle, network) {
    const alert = await this.alert.create({
      header: title,
      subHeader: subtitle,
      buttons: [
        {
          text: this.lp.translate()[0].c6,
          role: "cancel",
          handler: () => { },
        },
        {
          text: this.lp.translate()[0].c7,
          role: "cancel",
          handler: () => { },
        },
      ],
      backdropDismiss: false,
    });
    alert.present();
  }

  GoOffline() {
    this.ev
      .getCurrentDriver()
      .remove()
      .then((suc) => {
        this.presentToast(this.lp.translate()[0].f8);
        this.loggedOff = true;
      })
      .catch(() => { });
  }

  GoOffline2() {
    this.ev
      .getCurrentDriver()
      .remove()
      .then((suc) => { });
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: "bottom",
    });

    toast.onDidDismiss();

    toast.present();
  }
  async alertMe(message) {
    const alert = await this.alert.create({
      header: message,
      buttons: [
        {
          text: this.lp.translate()[0].c6,
          role: "cancel",
          handler: () => { },
        },
      ],
      backdropDismiss: true,
    });
    alert.present();
  }
  async alertClosure(message) {
    const alert = await this.alert.create({
      header: message,
      buttons: [
        {
          text: this.lp.translate()[0].i9,
          role: "cancel",
          handler: () => {
            this.subscription = this.platform.backButton.subscribe(() => {
              // tslint:disable-next-line: no-string-literal
              navigator["app"].exitApp();
            });
          },
        },
      ],
      backdropDismiss: true,
    });
    alert.present();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async presentLoader(message) {
    //   const loading = await this.load.create({
    //     message: message
    //   });
    //  await loading.present();
  }

  async showLoader(message) {
    // this.dismissLoader = await this.load.create({
    //   message: message
    // });
    // await this.dismissLoader.present();
  }

  async hideLoader() {
    //  await this.load.dismiss();
  }
  async showPimp(title) {
    const alert = await this.alert.create({
      header: title,
      buttons: [
        {
          text: this.lp.translate()[0].c6,
          role: "cancel",
          handler: () => { },
        },
      ],
      backdropDismiss: false,
    });
    alert.present();
  }

  async presentRouteLoader(message) {
    // const loading = await this.load.create({
    //   message: message
    // });
    // loading.present();
    // const myInterval = setInterval(() => {
    //   if (this.canDismiss) {
    //     loading.dismiss();
    //     clearInterval(myInterval);
    //   }
    // }, 1000);
  }
}
