import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { LanguageService } from "src/app/services/language.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { ProfileService } from "src/app/services/profile.service";
import { EventService } from "src/app/services/event.service";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.page.html",
  styleUrls: ["./history.page.scss"],
})
export class HistoryPage implements OnInit {
  public eventList: Array<any>;
  public earnings: any;
  today: number;
  math: any = Math;
  public float: any = parseFloat;
  totalDriverSurge: any;
  flatDriver: any;
  percentDriver: any;
  riderpaid: any;
  wef: any;
  myDriverSurge: any;
  flat2Driver: any;
  percent2Driver: any;
  mr: any;
  constructor(
    public navCtrl: NavController,
    public lp: LanguageService,
    public settings: SettingsService,
    public pop: PopUpService,
    public load: LoadingController,
    public profile: ProfileService,
    public alert: AlertController,
    public eventProvider: EventService
  ) {
    let d = new Date();
    this.today = d.getDay();
  }

  ionViewDidEnter() {
    let n = [];
    var sum = 0;

    this.pop.showLoader("").then(() => {
      this.pop.hideLoader();
    });
    this.eventProvider.getEventList().on("value", (snapshot) => {
      this.eventList = [];

      snapshot.forEach((snap) => {
        this.eventList.push({
          id: snap.key,
          name: snap.val().name,
          price:
            snap.val().price -
            this.check(snap.val().price, snap.val().surcharge || []),
          date: snap.val().date,
          location: snap.val().location,
          destination: snap.val().destination,
          tip:
            snap.val().tip -
            this.checkMe(snap.val().tip, snap.val().surcharge || []),
          upvote: snap.val().upvote || 0,
          downvote: snap.val().downvote || 0,
          toll: snap.val().tolls,
          surcharge: snap.val().surcharge,
          realPrice: snap.val().realPrice,
          osc: snap.val().osc,
        });
        this.eventList.sort();
        this.eventList.reverse();

        console.log(this.eventList);

        return false;
      });
    });

    // this.presentRouteLoader(this.lp.translate()[0].c4);

    this.profile.getUserProfile().on("value", (userProfileSnapshot) => {
      this.earnings = Math.floor(userProfileSnapshot.val().earnings);
    });

    // for (let index = 0; index < this.eventList.length; index++) {
    //   const element = this.eventList[index];
    //   console.log(element.realPrice, element.tip, index, this.eventList.length);
    //   //taking tip off
    //   n.push(this.eventList[index].realPrice || 0);
    //   const add4 = (a, b) => a + b;
    //   const result4 = n.reduce(add4);

    //   this.mr = result4.toFixed(2);

    //   // sum += this.eventList[index].price + element.tip || 0;
    // }


    for (let index = 0; index < this.eventList.length; index++) {
      const element = this.eventList[index];
      // console.log(element.price.replace(/[^\d\.]/g, ''));

      // n.push(parseFloat(this.eventList[index].price.replace(/[^\d\.]/g, '')));
      n.push(parseFloat(this.eventList[index].price));
      const add4 = (a, b) => a + b;
      const result4 = n.reduce(add4);
      this.mr = result4.toFixed(2);


      // sum += this.eventList[index].price + element.tip || 0;
    }

    console.log(this.mr);
  }

  async goBack() {
    this.navCtrl.navigateRoot("home");
  }
  checkMe(price, surcharge) {
    let g = [];
    let b = [];
    let k = [];
    let o = [];
    let c = [];
    let n = [];

    console.log(surcharge);

    surcharge.forEach((element) => {
      this.riderpaid = parseFloat(price).toFixed(2);

      //if driver
      if (element.owner == 0) {
        //if percent
        if (element.bone == 1) {
          let nb = element.price / 100;
          console.log(nb * this.riderpaid);
          let fo = nb * this.riderpaid;
          n.push(fo);
          const add2 = (a, b) => a + b;
          const result2 = n.reduce(add2);
          this.percentDriver = result2;
          console.log((Math.floor(element.price) / 100) * this.riderpaid);
        }
        //if flat fee
        if (element.bone == 0) {
          c.push(parseFloat(element.price));
          const add4 = (a, b) => a + b;
          const result4 = c.reduce(add4);
          this.flatDriver = result4;
          console.log(result4);
        }

        this.totalDriverSurge = this.flatDriver + this.percentDriver;
        console.log(this.totalDriverSurge, this.flatDriver, this.percentDriver);
      }
    });

    return this.totalDriverSurge;
  }

  check(price, surcharge) {
    let g = [];
    let b = [];
    let k = [];
    let o = [];
    let c = [];
    let n = [];

    console.log(surcharge);

    surcharge.forEach((element) => {
      this.wef = parseFloat(price).toFixed(2);

      //if driver
      if (element.owner == 0) {
        //if percent
        if (element.bone == 1) {
          let nb = element.price / 100;
          console.log(nb * this.wef);
          let fo = nb * this.wef;
          n.push(fo);
          const add2 = (a, b) => a + b;
          const result2 = n.reduce(add2);
          this.percent2Driver = result2;
          console.log((Math.floor(element.price) / 100) * this.wef);
        }
        //if flat fee
        if (element.bone == 0) {
          c.push(parseFloat(element.price));
          const add4 = (a, b) => a + b;
          const result4 = c.reduce(add4);
          this.flat2Driver = result4;
          console.log(result4);
        }

        this.myDriverSurge = this.flat2Driver + this.percent2Driver;
        console.log(this.myDriverSurge, this.flatDriver, this.percentDriver);
      }
    });

    return this.myDriverSurge;
  }

  async presentRouteLoader(message) {
    const loading = await this.load.create({
      message: message,
    });

    await loading.present();

    let myInterval = setInterval(() => {
      if (this.eventList != null) {
        loading.dismiss();
        clearInterval(myInterval);
      }
    }, 1000);
  }

  goToEventDetail(eventId) {
    this.navCtrl.navigateRoot(["historydetail", { eventId: eventId }]);
  }

  // Request(eventId){
  //   let alert = this.alert.create({
  //     title: this.lp.translate()[0].c5,
  //     buttons: [ {
  //       text: this.lp.translate()[0].c6,
  //       role: 'cancel',
  //       handler: () => {

  //       }
  //     },
  //     {
  //       text: this.lp.translate()[0].c7,
  //       handler: () => {
  //         this.eventProvider.getEventDetail(eventId).update({
  //           paid: 2,
  //         }).then((suc) =>{
  //           this.pop.alertMe('Your Request Has Been Recieved And Is Biegn Processed. This May Take Up To 30 minutes')
  //         });

  //     }
  //     },],
  //     enableBackdropDismiss: false
  //   });
  //   alert.present();
  // }

  OpenCancelled() {
    this.navCtrl.navigateRoot("cancelled");
  }

  async Delete(eventId) {
    const alert = await this.alert.create({
      message: this.lp.translate()[0].c5,
      buttons: [
        {
          text: this.lp.translate()[0].c6,
          role: "cancel",
          handler: () => { },
        },
        {
          text: this.lp.translate()[0].c7,
          handler: () => {
            this.eventProvider
              .getEventDetail(eventId)
              .update({
                hidden: true,
              })
              .then((success) => { });
          },
        },
      ],
      backdropDismiss: false,
    });
    alert.present();
  }

  ngOnInit() { }
}
