import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, AlertController } from "@ionic/angular";
import { SettingsService } from "src/app/services/settings.service";
import { LanguageService } from "src/app/services/language.service";
import { EventService } from "src/app/services/event.service";
import { ActivatedRoute } from "@angular/router";
import { ProfileService } from "src/app/services/profile.service";
declare var google;

@Component({
  selector: "app-historydetail",
  templateUrl: "./historydetail.page.html",
  styleUrls: ["./historydetail.page.scss"],
})
export class HistorydetailPage implements OnInit {
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

  riderPercents: any = [];
  driverPercents: any = [];
  math = Math;
  riderpaid: any = 0;
  currentPrie: string;
  osc: any;
  dateOfTip: any;
  totemTIPS: string | number;
  myTip: any;
  totalDriverSurg: any;
  percentDrive: any;
  flatDrive: any;
  constructor(
    public navCtrl: NavController,
    public prof: ProfileService,
    public settings: SettingsService,
    public eventProvider: EventService,
    public route: ActivatedRoute
  ) {}

  ionViewDidEnter() {
    let g = [];
    let f = [];
    let b = [];
    let k = [];
    let o = [];
    let c = [];
    let n = [];
    let j = [];
    let m = [];

    let sa;

    console.log(this.route.snapshot.paramMap.get("eventId"));
    this.eventProvider
      .getEventDetail(this.route.snapshot.paramMap.get("eventId"))
      .on("value", (eventSnapshot) => {
        this.currentEvent = eventSnapshot.val();
        this.currentEvent.id = eventSnapshot.key;
        console.log("EVENTS:", eventSnapshot.val());

        this.dateOfTip = this.currentEvent.date;

        this.tolls = this.currentEvent.toll;

        this.currentPrie = this.currentEvent.realPrice;

        this.surcharges = this.currentEvent.surcharge;

        this.osc = this.currentEvent.osc;
        this.riderpaid = this.currentEvent.realPrice;
        this.driverMade = this.currentEvent.realPrice;

        if (this.currentEvent.surcharge)
          for (
            let index = 0;
            index < this.currentEvent.surcharge.length;
            index++
          ) {
            k.push(parseFloat(this.currentEvent.surcharge[index].price));
            const add = (a, b) => a + b;
            const result = k.reduce(add);
            this.totalSurge = result;
            this.actual = this.currentEvent.price - this.totalSurge;
            console.log(this.totalSurge);
            this.currentEvent.surcharge[index].price;
          }

        if (this.surcharges)
          this.surcharges.forEach((element) => {
            //if rider
            if (element.owner == 1) {
              //if percent
              if (element.bone == 1) {
                let fo = (element.price / 100) * this.currentEvent.realPrice;
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

            this.riderpaid = this.currentEvent.realPrice;

            //if driver
            if (element.owner == 0) {
              //if percent
              if (element.bone == 1) {
                let nb = element.price / 100;
                console.log(nb * this.currentEvent.tip);
                let fo = nb * this.currentEvent.tip;
                j.push(fo);
                const add2 = (a, b) => a + b;
                const result2 = j.reduce(add2);
                this.percentDrive = result2;
                console.log(
                  (Math.floor(element.price) / 100) * this.currentEvent.tip
                );
              }
              //if flat fee
              if (element.bone == 0) {
                m.push(parseFloat(element.price));
                const add4 = (a, b) => a + b;
                const result4 = m.reduce(add4);
                this.flatDrive = result4;
                console.log(result4);
              }

              this.totalDriverSurg = this.flatDrive + this.percentDrive;
              //console.log(this.totalDriverSurge, this.flatDriver, this.percentDriver);
            }

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
              console.log(
                this.totalDriverSurge,
                this.flatDriver,
                this.percentDriver
              );
            }
          });

        console.log(this.totalDriverSurg);

        this.totemTIPS =
          (parseFloat(this.currentEvent.tip) - this.totalDriverSurg).toFixed(
            2
          ) || 0;

        if (!this.totemTIPS) {
          this.totemTIPS = 0;
        }

        // console.log(this.actual, g, this.currentEvent.surcharge[index].price);

        console.log(this.currentEvent.tolls);

        if (this.currentEvent.toll) {
          for (let index = 0; index < this.currentEvent.toll.length; index++) {
            b.push(this.currentEvent.toll[index].tagCost);
            const add = (a, b) => a + b;
            const result = b.reduce(add);
            this.total = result;
            console.log(this.total, g);
          }
        }

        if (!this.currentEvent.tip) {
          this.currentEvent.tip = 0;
        }

        this.myTip = parseFloat(this.currentEvent.tip).toFixed(2);

        //SURGE NOT WORKING NOW
        // this.driverMade = ((this.riderpaid) - (this.totalDriverSurge)).toFixed(2);
        this.driverMade = this.riderpaid;

        // console.log(jndf, this.totalDriverSurge);

        //this.LoadMap(this.currentEvent.location, this.currentEvent.destination);
        this.GetRoute(
          this.currentEvent.location,
          this.currentEvent.destination
        );
      });
  }

  async goBack() {
    this.navCtrl.navigateRoot("history");
  }

  GetRoute(location, destination) {
    var source, destination;
    var directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: true,
    });
    var mumbai = new google.maps.LatLng(18.975, 72.8258);
    var mapOptions = {
      zoom: 7,
      center: mumbai,
      disableDefaultUI: true,
    };
    let map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
    directionsDisplay.setMap(map);
    //directionsDisplay.setPanel(document.getElementById('dvPanel'));

    //*********DIRECTIONS AND ROUTE**********************//
    source = location;
    destination = destination;

    var request = {
      origin: source,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };
    directionsService.route(request, (response, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });

    //*********DISTANCE AND DURATION**********************//
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [source],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      },
      (response, status) => {
        if (
          status == google.maps.DistanceMatrixStatus.OK &&
          response.rows[0].elements[0].status != "ZERO_RESULTS"
        ) {
          var distance = response.rows[0].elements[0].distance.text;
          var duration = response.rows[0].elements[0].duration.text;
          // var dvDistance = document.getElementById("dvDistance");
          //  dvDistance.innerHTML = "";
          // dvDistance.innerHTML += "Distance: " + distance + "<br />";
          // dvDistance.innerHTML += "Duration:" + duration;
        } else {
          alert("Unable to find the distance via road.");
        }
      }
    );
  }
  ngOnInit() {}
}
