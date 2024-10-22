import { Injectable, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Platform, AlertController, ToastController } from "@ionic/angular";
import { timer } from "rxjs";

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  LatLngBounds,
  LatLng,
  Marker
} from "@ionic-native/google-maps/ngx";
import { LanguageService } from "./language.service";
import { OnesignalService } from "./onesignal.service";
import { EventService } from "./event.service";
import { ProfileService } from "./profile.service";
import { GeocoderService } from "./geocoder.service";
import { interval } from "rxjs";
import { Geolocation, PositionError, Geoposition } from "@ionic-native/geolocation/ngx";
import { Storage } from "@ionic/storage";

declare var google: any;
declare var plugin: any;

@Injectable()
export class LocationTrackerService {
  public onLocationbarHide = true;
  public onDestinatiobarHide = false;
  public driver_lat: any = 0;
  public driver_lng: any = 0;
  public poly: any;
  // tslint:disable-next-line: variable-name
  public tracking_timeout: any;
  public hasTransactionEnded = true;
  // tslint:disable-next-line: variable-name
  public tracking_timeout2: any;
  public hasTransactionEnded2 = true;
  public startPos: any;
  public client: any;
  public driver: any;
  public speed = 50; // km/h
  // public marker: any;
  marker: Marker;
  public cars: any = [];
  // tslint:disable-next-line: variable-name
  public car_location: any = [];
  // tslint:disable-next-line: variable-name
  public car_notificationIds: any = [];
  public delay = 100;
  public hasRequested = false;
  public isCarAvailable = false;
  public uid: any;
  public onGpsEnabled = false;
  isNavigate = false;
  locations: any;
  location: any;
  public ClearDetection = false;
  timer1: any;
  map1: GoogleMap;
  public onbar = false;
  public onbar1 = false;
  public onbar2 = false;
  public onbar3 = false;
  public toggleBtn = false;
  public onPointerHide = false;
  mapElement: HTMLElement;
  mapLoadComplete = false;
  public pan = 0;
  public detectCarChange: any;
  public hasDone = false;
  public hasStart = false;
  public hasShown = false;
  // tslint:disable-next-line: variable-name
  public D_lat: any;
  // tslint:disable-next-line: variable-name
  public D_lng: any;
  // tslint:disable-next-line: variable-name
  public canTrack_ = false;
  // tslint:disable-next-line: variable-name
  public canTrack_2 = false;
  public isDestination = false;
  public userLat: any;
  public userLng: any;
  notifID: any;
  watchPositionSubscription: Geolocation;
  // tslint:disable-next-line: variable-name
  goto_passenger_watcher: number;
  hasCompleted = false;
  Line: any;
  isComingToUser: any;
  flag: any;
  // tslint:disable-next-line: variable-name
  goto_destination_watcher: number;
  // tslint:disable-next-line: variable-name
  hasCompleted_Destination: any;
  destination: any;
  // tslint:disable-next-line: variable-name
  rider_lat: any;
  // tslint:disable-next-line: variable-name
  rider_lng: any;
  watchPositionSubscription2: Geolocation;
  isDropped = false;
  isPickedUp = true;
  route: any = [];
  directionsService: any = new google.maps.DirectionsService();
  Line2: any;
  myLat: number;
  myLng: number;
  routeNumber: any;
  location_tracker_loop: any;
  destination_tracker_loop: any;
  myVal: any;
  mapTracker: any;
  watch;
  watch2;
  watch_draw_poly;
  circle;
  driverMarker;
  clientMarker;
  flagMarker;

  yellow_markersArray = [];
  driver_markersArray = [];
  client_markersArray = [];
  flag_markersArray = [];
  driver_bearing: any;
  rider_bearing: any;
  constructor(
    public lp: LanguageService,
    public alert: AlertController,
    public oneS: OnesignalService,
    public ev: EventService,
    public zone: NgZone,
    public myProf: ProfileService,
    public gcode: GeocoderService,
    public platform: Platform,
    private toastCtrl: ToastController,
    private geo: Geolocation,
    public storage: Storage,
  ) { }




  loadMap() {

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 5.614818,
          lng: -0.205874,
        },
        zoom: 19,
        tilt: 0,
      },
    };



    this.map1 = GoogleMaps.create("map-canvas", mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map1.one(GoogleMapsEvent.MAP_READY).then(
      () => {

        // this.map1.setMyLocationEnabled(true)
        this.map1.setAllGesturesEnabled(true)
        this.map1.setClickable(true)
        this.map1.setCompassEnabled(true)


        this.watch2 = this.geo.watchPosition({ enableHighAccuracy: true, timeout: 10000 }).subscribe(position => {
          if ((position as Geoposition).coords != undefined) {
            var geoposition = (position as Geoposition);

            this.location = geoposition;

            this.driver_lat = geoposition.coords.latitude,
              this.driver_lng = geoposition.coords.longitude;
            this.driver_bearing = geoposition.coords.heading


            this.AnimateToLoc(this.driver_lat, this.driver_lng);



          } else {
            var positionError = (position as PositionError);
            // console.log('Error ' + positionError.code + ': ' + positionError.message);

            //this.presentToast("Finding it difficult to get your current location. Please wait..");
            // this.loadMap();
          }
        });




      })
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: "top",
    });

    toast.onDidDismiss();

    toast.present();
  }


  refreshForChangesRemove() {

    this.isDropped = false;
    this.hasCompleted = true;



    this.map1.getMyLocation().then(location => {




      this.driver_lat = location.latLng.lat,
        this.driver_lng = location.latLng.lng;


      this.AnimateToLoc(this.driver_lat, this.driver_lng);




    })



  }

  async showError(title) {
    const alert = await this.alert.create({
      header: title,
      buttons: [
        {
          text: "Okay",
          role: "cancel",
          handler: () => {
            this.refreshForChangesRemove();
          },
        },
      ],
      backdropDismiss: false,
    });
    alert.present();
  }

  /// Animate to user location
  AnimateToLoc(lat, lng) {

    this.isPickedUp = true;


    this.map1
      .animateCamera({
        target: {
          lat,
          lng,
        },
        zoom: 19,
        tilt: 0,
        bearing: 0,
        duration: 500,
      })
      .then((suc) => {

        this.hasShown = true;
        this.map1.setClickable(true);

        const image_icon = {
          url: "assets/icon/pin.png",
          size: new google.maps.Size(40, 40),

        };



        //CHeck if yellow marker exist
        if (this.yellow_markersArray.length >= 1) {

          this.marker.setPosition({
            lat: lat,
            lng: lng
          });
          this.mapLoadComplete = true;

        }
        else if (this.yellow_markersArray.length < 1) {

          this.map1
            .addMarker({
              title: "pinIcon",
              icon: image_icon,
              position: {
                lat,
                lng,
              },
            })
            .then((marker) => {
              this.mapLoadComplete = true;
              this.marker = marker;

              this.yellow_markersArray.push(this.marker);



            });
        }
      });

  }


  async showAlertNormal() {
    const alert = await this.alert.create({
      header: "GPS Related Error",
      subHeader: "Your GPS location seem to be unavailable",
      buttons: [
        {
          text: "Make sure your GPS location is turned on",
          role: "cancel",
          handler: () => {
            this.refreshForChangesRemove();
          },
        },
      ],
      backdropDismiss: false,
    });
    alert.present();
  }

  // Show distance between driver and User in the map
  setMarkers(uid, lat, lng) {

    if (this.watch2) {

      this.watch2.unsubscribe();
    }

    if (this.watch) {

      this.watch.unsubscribe();
    }

    this.rider_lat = lat;
    this.rider_lng = lng;

    this.destination = new LatLng(lat, lng);
    let location = new LatLng(lat, lng);




    this.DrawPoly(uid);

    this.myProf.getUserAsClientInfo(uid).on("child_changed", (driverSnap) => {


      if (this.isPickedUp) {
        this.myProf.getUserAsClientInfo(uid).once("value", (dggd) => {

          if (driverSnap.val()) {

            this.rider_lat = driverSnap.val().Client_location[0];
            this.rider_lng = driverSnap.val().Client_location[1];
            this.rider_bearing = driverSnap.val().Client_Bearing

            let location = new LatLng(this.rider_lat, this.rider_lng);


          }
          this.destination = new LatLng(
            driverSnap.val().Client_location[0],
            driverSnap.val().Client_location[1]
          );
          this.myProf.getUserAsClientInfo(uid).off("value");
        });
      }
    });
  }

  MoveDriver(lat, lng, bearing) {


    //CHeck if driver marker exist
    if (this.driver_markersArray.length >= 1) {

      this.driverMarker.setPosition({
        lat: lat,
        lng: lng
      });

      this.driverMarker.setRotation(bearing);
    }

    else if (this.driver_markersArray.length < 1) {

      const myIcon = {
        url: "assets/icon/map-taxi.png",
        size: new google.maps.Size(40, 40),

      };

      this.map1
        .addMarker({
          title: "",
          icon: myIcon,
          position: {
            lat,
            lng,
          },
        })
        .then((driverMarker) => {
          this.driverMarker = driverMarker;
          this.driver_markersArray.push(this.driverMarker);

        });
    }
  }

  MoveClient(lat, lng, bearing) {



    if (this.client_markersArray.length >= 1) {
      this.clientMarker.setPosition({
        lat: lat,
        lng: lng
      });

      this.clientMarker.setRotation(bearing);
    }
    else if (this.client_markersArray.length < 1) {

      const image_icon2 = {
        url: "assets/icon/rider.png",
        size: new google.maps.Size(40, 40),

      };

      this.map1
        .addMarker({
          title: "",
          icon: image_icon2,
          position: {
            lat,
            lng,
          },
        })
        .then((clientMarker) => {
          this.clientMarker = clientMarker
          this.client_markersArray.push(this.client);

        });
    }
  }

  MoveFlag(lat, lng) {




    if (this.flag_markersArray.length >= 1) {
      this.flagMarker.setPosition({
        lat: lat,
        lng: lng
      });
    }
    else if (this.flag_markersArray.length < 1) {

      const image_icon3 = {
        url: "assets/icon/flag2.png",
        size: new google.maps.Size(40, 40),

      };

      this.map1
        .addMarker({
          title: "",

          icon: image_icon3,
          position: {
            lat,
            lng,
          },
        })
        .then((flagMarker) => {
          this.flagMarker = flagMarker;
          this.flag_markersArray.push(this.flag);

        });
    }
  }

  // Show distance between driver and User in the map
  setMarkersDestination(lat, lng, uid) {

    this.destination = new LatLng(lat, lng);
    this.isPickedUp = false;
    this.isDropped = true;
    this.rider_lat = lat;
    this.rider_lng = lng;

    // this.watch2.unsubscribe();

    this.DrawPoly(uid);

  }

  DrawPoly(uid) {

    if (this.watch2) {

      this.watch2.unsubscribe();
    }

    if (this.watch) {

      this.watch.unsubscribe();
    }

    this.watch_draw_poly = this.geo.watchPosition({ enableHighAccuracy: true, timeout: 10000 }).subscribe(position => {
      if ((position as Geoposition).coords != undefined) {
        var geoposition = (position as Geoposition);



        this.location = geoposition;

        this.driver_lat = geoposition.coords.latitude,
          this.driver_lng = geoposition.coords.longitude;
        this.driver_bearing = geoposition.coords.heading


        this.route = [];
        this.directionsService.route(
          {
            origin: new LatLng(
              geoposition.coords.latitude,
              geoposition.coords.longitude
            ),
            destination: this.destination,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,
          },
          (res, status) => {

            if (status === google.maps.DirectionsStatus.OK) {
              // Loop through each direction route point and add it to be plotted
              for (
                let i = 0, len = res.routes[0].overview_path.length;
                i < len;
                i++
              ) {
                const point = res.routes[0].overview_path[i];

                this.route[i] = {
                  lat: Number(point.lat()),
                  lng: Number(point.lng()),
                };
              }

              this.Measure(
                this.rider_lat,
                this.rider_lng,
                this.driver_lat,
                this.driver_lng,
              );

              if (!this.hasCompleted) {

                this.myProf.UpdateDriverLocation(
                  this.driver_lat,
                  this.driver_lng,
                  uid,
                  this.driver_bearing
                );
                if (this.rider_lat) {

                  if (this.isPickedUp) {
                    if (this.Line) {
                      this.Line.remove();
                    }

                    if (this.Line2) {
                      this.Line2.remove();
                    }
                    // if (this.clientMarker) {
                    //   this.clientMarker.remove();
                    // }
                    // if (this.driverMarker) {
                    //   this.driverMarker.remove();
                    // }
                    this.AddPolyLine();



                    this.MoveClient(
                      this.rider_lat,
                      this.rider_lng,
                      this.rider_bearing
                    );


                    this.MoveDriver(this.driver_lat, this.driver_lng, this.driver_bearing);


                  }

                  if (!this.isPickedUp) {
                    // if (this.clientMarker) {
                    //   this.clientMarker.remove();
                    // }
                    // if (this.flagMarker) {
                    //   this.flagMarker.remove()
                    // }
                    // if (this.driverMarker) {
                    //   this.driverMarker.remove();
                    // }
                    if (this.Line) {
                      this.Line.remove();
                    }

                    if (this.Line2) {
                      this.Line2.remove();
                    }

                    if (this.clientMarker) {
                      this.clientMarker.remove();
                    }


                    this.AddPolyLine();
                    this.MoveDriver(this.driver_lat, this.driver_lng, this.driver_bearing);


                  }
                  //MOVE DRIVER ONGOING AND UPDATE LOCATION

                  if (this.isDropped) {
                    this.myLat = this.driver_lat;
                    this.myLng = this.driver_lng;

                    this.storage.set("myLat", this.myLat);
                    this.storage.set("myLng", this.myLng);
                    if (this.Line) {
                      this.Line.remove();
                    }

                    if (this.Line2) {
                      this.Line2.remove();
                    }
                    // if (this.clientMarker) {
                    //   this.clientMarker.remove();
                    // }
                    // if (this.driverMarker) {
                    //   this.driverMarker.remove();
                    // }

                    this.AddPolyLine2();


                    this.MoveFlag(this.rider_lat, this.rider_lng);
                  }
                }
              } else {
                if (this.Line) {
                  this.Line.remove();
                }

                if (this.Line2) {
                  this.Line2.remove();
                }
                // if (this.driverMarker) {
                //   this.driverMarker.remove();
                // }

                // if (this.clientMarker) {
                //   this.clientMarker.remove();
                // }
                this.route = [];

                this.watch_draw_poly.unsubscribe();






              }
            }
            else {

              if (this.Line) {
                this.Line.remove();
              }

              if (this.Line2) {
                this.Line2.remove();
              }
              // if (this.driverMarker) {
              //   this.driverMarker.remove();
              // }

              // if (this.clientMarker) {
              //   this.clientMarker.remove();
              // }

              this.route = [];

              // this.watch.unsubscribe();
            }
          }
        );

      } else {
        var positionError = (position as PositionError);



      }
    });


  }
  AddPolyLine() {


    if (this.Line) {
      this.Line.remove();
    }

    if (this.Line2) {
      this.Line2.remove();
    }

    this.map1
      .addPolyline({
        color: "#fbb91d",
        visible: true,
        width: 7,
        points: this.route,
      })
      .then((ff) => {
        this.Line = ff;

      });
  }

  AddPolyLine2() {

    if (this.Line) {
      this.Line.remove();
    }

    if (this.Line2) {
      this.Line2.remove();
    }

    this.map1
      .addPolyline({
        color: "#fbb91d",
        visible: true,
        width: 7,
        points: this.route,
      })
      .then((ff) => {
        this.Line2 = ff;
      });
  }

  Measure(lat, lng, lat2, lng2) {
    // this.myVal.unsubscribe()

    let arrayOfLatLng = [new LatLng(lat, lng), new LatLng(lat2, lng2)];

    let bounds = new LatLngBounds(arrayOfLatLng);


    let center = bounds.getCenter();



    var mapElement = document.getElementById("map-canvas");

    var mapDimensions = {
      height: mapElement.offsetHeight,
      width: mapElement.offsetWidth,
    };

    // var zoom = this.getBoundsZoomLevel(bounds, mapDimensions);
    // console.log("ZOOM VAR:", zoom);

    this.map1
      .animateCamera({
        target: bounds,
        duration: 500,
      })
      .then(() => {
        this.isNavigate = true;
      });

    // this.map1.moveCamera({
    //   'target': center,
    // });
  }

  getBoundsZoomLevel(bounds, mapDim) {
    const WORLD_DIM = { height: 96 / 2.05, width: 96 / 2.05 };
    const ZOOM_MAX = 13;

    const ne = bounds.northeast;
    const sw = bounds.southwest;

    const latFraction = (this.latRad(ne.lat) - this.latRad(sw.lat)) / Math.PI;

    const lngDiff = ne.lng - sw.lng;
    const lngFraction =
      ((lngDiff < 0 ? lngDiff + 360 * 1.16 : lngDiff) / 360) * 1.16;

    const latZoom = this.zoom(mapDim.height, WORLD_DIM.height, latFraction);
    const lngZoom = this.zoom(mapDim.width, WORLD_DIM.width, lngFraction);

    return Math.min(latZoom, lngZoom, ZOOM_MAX);
  }

  latRad(lat) {
    const sin = Math.sin((lat * Math.PI) / 180);
    const radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
    return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
  }

  zoom(mapPx, worldPx, fraction) {
    return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
  }
}
