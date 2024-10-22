import { Component, OnInit, Input } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";
import { EventService } from "src/app/services/event.service";
import { ProfileService } from "src/app/services/profile.service";
import { SettingsService } from "src/app/services/settings.service";
import { LanguageService } from "src/app/services/language.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tripinfo",
  templateUrl: "./tripinfo.page.html",
  styleUrls: ["./tripinfo.page.scss"],
})
export class TripinfoPage implements OnInit {
  public currentEvent: any = {};
  total: any = 0;
  tolls: any[];
  tollName: any[];
  myop: any[];
  warary: any;
  element: any;
  element2: any;
  allTotals: any = 0;
  driverMade: any = 0;
  surcharges: any = [];
  totalSurge: number = 0;
  actual: number = 0;
  riderPaid: any = 0;
  totalRiderSurge: any = 0;
  totalDriverSurge: any = 0;
  percentRider: number = 0;
  flatRider: any = 0;
  percentDriver: number = 0;
  flatDriver: any = 0;
  @Input() info;
  @Input() accepted;
  @Input() arrived;
  @Input() distance;
  // info= this.info;
  // accepted= this.accepted1;
  // arrived= this.arrived1;
  // distance= this.distance1;
  riderPercents: any = [];
  driverPercents: any = [];
  math = Math;
  riderpaid: any = 0;
  items: any[];
  osc: any;
  CallDriver: any;
  Send: any;
  currentCar: any;
  Country: any;
  constructor(
    public navCtrl: NavController,
    public prof: ProfileService,
    public lp: LanguageService,
    public settings: SettingsService,
    public eventSerEventService: EventService,
    public modal: ModalController,
    public activatedRoute: ActivatedRoute
  ) {}

  ionViewDidLoad() {
    this.prof
      .getCompanies()
      .child("Cancelled/documents")
      .on("value", (snapshot) => {
        this.items = [];

        snapshot.forEach((snap) => {
          if (snap.val().type == "Driver")
            this.items.push({
              status: snap.val().status,
              text: snap.val().title,
            });

          return false;
        });
      });

    let g = [];
    let f = [];
    let b = [];
    let k = [];
    let o = [];
    let c = [];
    let n = [];

    let sa;

    console.log("INFORMATION ICOMING", this.info);

    this.tolls = this.info.Client_toll;

    this.info.Client_realPrice;

    this.osc = this.info.Client_OutOfStateCharge;
    this.surcharges = this.info.Client_Surcharges;

    if (this.surcharges)
      for (let index = 0; index < this.surcharges.length; index++) {
        k.push(parseFloat(this.info.Client_Surcharges[index].price));
        const add = (a, b) => a + b;
        const result = k.reduce(add);
        this.totalSurge = result;
        this.actual = this.info.Client_price - this.totalSurge;
        console.log(this.totalSurge);
        this.info.Client_Surcharges[index].price;
      }

    this.surcharges.forEach((element) => {
      //if rider
      if (element.owner == 1) {
        //if percent
        if (element.bone == 1) {
          let fo = (element.price / 100) * this.info.Client_realPrice;
          console.log(element.price);
          o.push(fo);
          const add1 = (a, b) => a + b;
          const result1 = o.reduce(add1);
          this.percentRider = result1;
          console.log(this.percentRider);
        }

        if (element.bone == 0) {
          g.push(parseFloat(element.price));
          const add = (a, b) => a + b;
          const result = g.reduce(add);
          this.flatRider = result;
          console.log(result);
          element.price;
        }

        this.totalRiderSurge = this.flatRider + this.percentRider;
        console.log(this.totalRiderSurge);
      }

      // this.riderpaid = (this.info.Client_price);
      this.riderpaid = parseFloat(this.info.Client_price).toFixed(2);

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

    // console.log(this.actual, g, this.currentEvent.surcharge[index].price);

    if (this.info.Client_toll)
      for (let index = 0; index < this.info.Client_toll.length; index++) {
        b.push(this.info.Client_toll[index].tagCost);
        const add = (a, b) => a + b;
        const result = b.reduce(add);
        this.total = result;
        console.log(this.total, g);
      }

    this.driverMade = (this.riderpaid - this.totalDriverSurge).toFixed(2);
  }

  async closeModal() {
    await this.modal.dismiss(null);
  }

  async onChange(e) {
    await this.modal.dismiss(e);
  }

  ngOnInit() {
    console.log("INFORMATION ICOMING", this.info);
  }
}
