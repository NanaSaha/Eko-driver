import { Injectable } from "@angular/core";
import { Platform, LoadingController } from "@ionic/angular";
import { EventService } from "./event.service";
import { GeocoderService } from "./geocoder.service";
import { PopUpService } from "./pop-up.service";
import { Storage } from "@ionic/storage";
declare var google;

@Injectable({
  providedIn: "root",
})
export class DirectionserviceService {
  public price: any;
  public time: any;
  public canDismiss = false;
  public name: string;
  public pricePerKm: any = 4;
  public fare: any = 5;
  destinationName: any;
  public time2: any;
  isDriver2: boolean;
  public hasGottenTripDistance = false;
  public service: any = new google.maps.DistanceMatrixService();
  distance2: any;
  distance: any;
  duration2;
  miles;
  constructor(
    public eProvider: EventService,
    public gCode: GeocoderService,
    public platform: Platform,
    public popOp: PopUpService,
    public storage: Storage,
  ) { }

  calcRoute(name, start, stop, destinationName, isDriver2) {
    console.log("<<------ DETERMININING ETA AND DISTANCE---->")
    this.isDriver2 = isDriver2;
    if (!this.platform.is("cordova")) {
      start = new google.maps.LatLng(5.4975394, 7.5029374);
      this.gCode.locationName = "Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria";
    }

    var request = {
      origin: start,
      destination: stop,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    };

    let directionsService = new google.maps.DirectionsService();
    directionsService.route(request, (response, status) => {
      this.callback(response, status);
    });

    // this.service.getDistanceMatrix(
    //   {
    //     origins: [start, this.gCode.locationName],
    //     destinations: [destinationName, stop],
    //     travelMode: "DRIVING",
    //     unitSystem: google.maps.UnitSystem.METRIC,
    //     avoidHighways: false,
    //     avoidTolls: false,
    //   },
    //   (response, status) => {
    //     this.callback(response, status);
    //   }
    // );

    this.destinationName = destinationName;
    this.name = name;

    const time = new Date();

    let hh = time.getHours();
    const mm = time.getMinutes();
    const ss = time.getSeconds();
  }

  // callback(response, status) {

  //   console.log("CALBACK RESPONSE" + response, status);

  //   if (status === "OK") {
  //     if (
  //       response.rows[0].elements[1].status === "ZERO_RESULTS" ||
  //       response.rows[0].elements[1].status === "NOT_FOUND"
  //     ) {
  //       this.popOp.alertMe(
  //         "Destination Not Yet Supported. Please Choose Another Destination"
  //       );
  //     } else {
  //       const fareTime =
  //         Math.floor(response.rows[0].elements[1].duration.value / 60) * 5.5;
  //       this.price =
  //         Math.round(response.rows[0].elements[1].distance.value / 1000) *
  //         this.pricePerKm +
  //         this.fare +
  //         fareTime;

  //       this.time = response.rows[0].elements[1].duration.text;
  //       console.log("TIME IN DIRECTION::--", this.time);

  //       this.popOp.canDismiss = true;

  //       console.log(
  //         response.rows[0].elements[1].distance.value / 1000,
  //         response.rows[0].elements[1].duration.value,
  //         response.rows[0].elements[1].duration.text
  //       );
  //     }
  //   } else {
  //     this.popOp.alertMe(
  //       "One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again."
  //     );
  //   }
  // }



  callback(response, status) {

    console.log(response, status);

    if (status == google.maps.DirectionsStatus.OK) {


      let duration = Math.round(response.routes[0].legs[0].duration.value / 60);
      let distance = response.routes[0].legs[0].distance.value * 0.000621371192;
      this.duration2 = duration;
      this.miles = distance;
      this.distance2 = (
        response.routes[0].legs[0].distance.value * 0.000621371192
      ).toFixed(2);

      this.storage.set("distance2", this.distance2);


      console.log("<<<<<<< DIRECTION SERVICE CALLBACK 2 >>>>>>>");
      console.log("This is the duration " + this.duration2);
      console.log("This is the distance " + this.distance2);
      console.log("This is the fare " + this.fare);
      console.log("This is the pricePerKm " + this.pricePerKm);

      console.log("<<<<<<< END DIRECTION SERVICE >>>>>>>");


      this.price = Math.round((this.fare + distance + duration) * this.pricePerKm)
      this.time = response.routes[0].legs[0].duration.text;

      this.storage.set("price", this.price);
      this.storage.set("time", this.time);

      console.log("FINAL PRICE:: " + this.price);

      console.log("PICKUP ETA TIME IN DIRECTION", this.time);

    } else {
      console.log(
        "One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again."
      );
    }
  }

  calcDestRoute(name, start, stop, destinationName, id) {
    if (!this.platform.is("cordova")) {
      start = new google.maps.LatLng(5.488334, 7.5190356);
      this.gCode.locationName = "Igieduma, Nigeria";
    }

    // this.service.getDistanceMatrix(
    //   {
    //     origins: [start, this.gCode.locationName],
    //     destinations: [destinationName, stop],
    //     travelMode: "DRIVING",
    //     unitSystem: google.maps.UnitSystem.METRIC,
    //     avoidHighways: false,
    //     avoidTolls: false,
    //   },
    //   (response, status) => {
    //     this.callback2(response, status, id);
    //   }
    // );

    var request = {
      origin: start,
      destination: stop,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    };

    let directionsService = new google.maps.DirectionsService();
    directionsService.route(request, (response, status) => {
      this.callback2(response, status, id);
    });

    this.destinationName = destinationName;
    this.name = name;

    const time = new Date();

    const hh = time.getHours();
    const mm = time.getMinutes();
    const ss = time.getSeconds();
  }

  // callback2(response, status, id) {

  //   console.log(response, status);

  //   if (status === "OK") {
  //     if (
  //       response.rows[0].elements[1].status === "ZERO_RESULTS" ||
  //       response.rows[0].elements[1].status === "NOT_FOUND"
  //     ) {
  //       this.popOp.alertMe(
  //         "Destination Not Yet Supported. Please Choose Another Destination"
  //       );
  //     } else {
  //       const fareTime =
  //         Math.floor(response.rows[0].elements[1].duration.value / 60) * 5.5;
  //       this.price =
  //         Math.floor(response.rows[0].elements[1].distance.value / 1000) *
  //         this.pricePerKm +
  //         this.fare +
  //         fareTime;

  //       this.time2 = response.rows[0].elements[1].duration.text;

  //       this.popOp.canDismiss = true;
  //       this.eProvider.UpdateTime(this.time2, id);

  //       console.log(
  //         response.rows[0].elements[1].distance.value / 1000,
  //         response.rows[0].elements[1].duration.value,
  //         response.rows[0].elements[1].duration.text
  //       );
  //     }
  //   } else {
  //     this.popOp.alertMe(
  //       "One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again."
  //     );
  //   }
  // }


  callback2(response, status, id) {

    console.log(response, status);

    if (status == google.maps.DirectionsStatus.OK) {


      let duration = Math.round(response.routes[0].legs[0].duration.value / 60);
      let distance = response.routes[0].legs[0].distance.value * 0.000621371192;
      this.duration2 = duration;
      this.miles = distance;
      this.distance2 = (
        response.routes[0].legs[0].distance.value * 0.000621371192
      ).toFixed(2);
      this.storage.set("distance2", this.distance2);

      console.log("<<<<<<< DIRECTION SERVICE CALLBACK 2 >>>>>>>");
      console.log("This is the duration " + this.duration2);
      console.log("This is the distance " + this.distance2);
      console.log("This is the fare " + this.fare);
      console.log("This is the pricePerKm " + this.pricePerKm);

      console.log("<<<<<<< END DIRECTION SERVICE >>>>>>>");


      this.price = Math.round((this.fare + distance + duration) * this.pricePerKm)
      this.time2 = response.routes[0].legs[0].duration.text;

      this.storage.set("time2", this.time2);
      this.storage.set("price", this.price);


      this.popOp.canDismiss = true;
      this.eProvider.UpdateTime(this.time2, id);

      console.log("FINAL PRICE:: " + this.price);

      console.log(" ETA TIME IN DIRECTION", this.time2);

    } else {
      console.log(
        "One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again."
      );
    }
  }

  calcPrice(start, stop, destinationName, id) {
    if (!this.platform.is("cordova")) {
      start = new google.maps.LatLng(5.488334, 7.5190356);
      this.gCode.locationName = "Igieduma, Nigeria";
    }

    // this.service.getDistanceMatrix(
    //   {
    //     origins: [start, this.gCode.locationName],
    //     destinations: [destinationName, stop],
    //     travelMode: "DRIVING",
    //     unitSystem: google.maps.UnitSystem.METRIC,
    //     avoidHighways: false,
    //     avoidTolls: false,
    //   },
    //   (response, status) => {
    //     this.callback3(response, status, id);
    //   }
    // );

    var request = {
      origin: start,
      destination: stop,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    };

    let directionsService = new google.maps.DirectionsService();
    directionsService.route(request, (response, status) => {
      this.callback3(response, status, id);
    });
  }

  // callback3(response, status, id) {

  //   console.log(response, status);

  //   if (status === "OK") {
  //     if (
  //       response.rows[0].elements[1].status === "ZERO_RESULTS" ||
  //       response.rows[0].elements[1].status === "NOT_FOUND"
  //     ) {
  //     } else {
  //       const fareTime =
  //         Math.floor(response.rows[0].elements[1].duration.value / 60) * 5.5;
  //       this.price =
  //         Math.floor(response.rows[0].elements[1].distance.value / 1000) *
  //         this.pricePerKm +
  //         this.fare +
  //         fareTime;

  //       this.time2 = response.rows[0].elements[1].duration.text;

  //       this.eProvider.updatePrice(this.price, id);

  //       console.log(
  //         response.rows[0].elements[1].distance.value / 1000,
  //         response.rows[0].elements[1].duration.value,
  //         response.rows[0].elements[1].duration.text
  //       );
  //     }
  //   } else {
  //   }
  // }



  callback3(response, status, id) {

    console.log(response, status);

    if (status == google.maps.DirectionsStatus.OK) {


      let duration = Math.round(response.routes[0].legs[0].duration.value / 60);
      let distance = response.routes[0].legs[0].distance.value * 0.000621371192;
      this.duration2 = duration;
      this.miles = distance;
      this.distance2 = (
        response.routes[0].legs[0].distance.value * 0.000621371192
      ).toFixed(2);

      this.storage.set("distance2", this.distance2);

      console.log("<<<<<<< DIRECTION SERVICE CALLBACK 2 >>>>>>>");
      console.log("This is the duration " + this.duration2);
      console.log("This is the distance " + this.distance2);
      console.log("This is the fare " + this.fare);
      console.log("This is the pricePerKm " + this.pricePerKm);

      console.log("<<<<<<< END DIRECTION SERVICE >>>>>>>");


      this.price = Math.round((this.fare + distance + duration) * this.pricePerKm)
      this.time2 = response.routes[0].legs[0].duration.text;
      this.eProvider.updatePrice(this.price, id);

      this.storage.set("price", this.price);
      this.storage.set("time2", this.time2);

      console.log("FINAL PRICE:: " + this.price);

      console.log(" ETA TIME IN DIRECTION", this.time2);

    } else {
      console.log(
        "One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again."
      );
    }
  }
}
