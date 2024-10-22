import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams, Events } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { LanguageService } from 'src/app/services/language.service';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';
import { OnesignalService } from 'src/app/services/onesignal.service';
import { GeocoderService } from 'src/app/services/geocoder.service';
import { SettingsService } from 'src/app/services/settings.service';
import { PopUpService } from 'src/app/services/pop-up.service';
import { ProfileService } from 'src/app/services/profile.service';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute } from '@angular/router';
declare var google;

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  public scheduleList: Array<any>;
  currentYear: any;
  currentMonth: any;
  currentDay: any;
  userPos: any;
  lat: any;
  public bookable = false;
  lng: any;
  // tslint:disable-next-line: variable-name
  notif_id: any;
  locationName: any;
  // tslint:disable-next-line: new-parens
  public geocoder: any = new google.maps.Geocoder;
  constructor(public navCtrl: NavController, public One: OneSignal, public lp: LanguageService,
    public events: Events, public platform: Platform, private activatedRoute: ActivatedRoute,
    public gCode: GeocoderService, public locat: LocationTrackerService,
    public settings: SettingsService, public oneSignal: OnesignalService,
    public pop: PopUpService, public load: LoadingController,
    public profile: ProfileService, public alert: AlertController, public eventProvider: EventService) {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getUTCMonth() + 1;
    this.currentDay = new Date().getUTCDate();



  }


  ngOnInit() {
    if (this.platform.is('cordova')) {
      this.locat.map1.getMyLocation(
        {
          enableHighAccuracy: true, // use GPS as much as possible
        }
      ).then(location => {
        this.lat = location.latLng.lat;
        this.lng = location.latLng.lng;
        this.userPos = new google.maps.LatLng(this.lat, this.lng);
        const latlng = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) };
        this.geocoder.geocode({ location: latlng }, (results, status) => {
          if (status === 'OK') {
            this.CheckPossibles();
            this.locationName = results[0].formatted_address;
          } else {
          }


        });
        console.log('How Ploder Goder ....');
      });

    } else {
      this.lat = 4.883364;
      this.lng = 7.025034;
      this.userPos = new google.maps.LatLng(this.lat, this.lng);
      const latlng = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) };
      this.geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === 'OK') {
          this.locationName = results[0].formatted_address;
          this.CheckPossibles();
        } else {
        }


      });
      console.log('How Ploder Goder ....');
    }


  }

  CheckPossibles() {
    this.eventProvider.getScheduleList().on('value', snapshot => {
      this.scheduleList = [];
      snapshot.forEach(snap => {
        console.log(snap.val().Client_Date);
        const today = new Date();
        const future = new Date(snap.val().Client_Date);

        const a = this.calcDate(today, future);
        console.log(a[1], this.userPos);
        const begin = this.userPos;
        const end = new google.maps.LatLng(snap.val().Client_location[0], snap.val().Client_location[1]);
        const suc = google.maps.geometry.spherical.computeDistanceBetween(begin, end);

        console.log(suc);
        if (suc < 1000) {
          this.bookable = true;
          console.log('its close enough');
        } else {
          this.bookable = false;
        }
        this.scheduleList.push({
          id: snap.key,
          name: snap.val().Client_username,
          price: snap.val().Client_price,
          date: a[0],
          duedate: a[1],
          canBook: true,
          time: snap.val().Client_Time,
          location: snap.val().Client_locationName,
          destination: snap.val().Client_destinationName,
          payWith: snap.val().Client_paymentForm,
          picture: snap.val().Client_picture,
          phone: snap.val().Client_phoneNumber,
          lat: snap.val().Client_location[0],
          lng: snap.val().Client_location[1],
          rating: snap.val().Client_Rating,
          ratingText: snap.val().Client_RatingText
        });

        return false;

      });

    });



    this.presentRouteLoader('');

  }


  Warn(time) {
    this.pop.showPimp(this.lp.translate()[0].k7);
  }



  calcDate(date1, date2) {

    const diff = Math.floor(date2.getTime() - date1.getTime());
    const day = 1000 * 60 * 60 * 24;

    const days = Math.floor(diff / day);
    const months = Math.floor(days / 31);
    const years = Math.floor(months / 12);

    console.log(days);

    const message = [date2.toDateString(), days];


    return message;
  }




  async presentRouteLoader(message) {
    const loading = await this.load.create({
      message: message
    });

    loading.present();

    const myInterval = setInterval(() => {
      if (this.scheduleList != null) {
        loading.dismiss();
        clearInterval(myInterval);
      }

    }, 1000);
  }



  Start(e) {

    if (!this.platform.is('cordova')) {
      this.notif_id = '43cd6829-4651-4039-bbc3-aace7fbe7d72';
    } else {
      this.One.getIds().then(success => {
        this.notif_id = success.userId;
      });
    }

    console.log(this.notif_id, e.id);

    if (this.notif_id) {

      if (!this.platform.is('cordova')) {
        this.locat.driver_lat = 4.883364;
        this.locat.driver_lng = 7.025034;
        this.gCode.locationName = 'Abuja, Nigeria';
        this.locationName = 'Abuja, Nigeria';
        this.lat = 4.883364;
        this.lng = 7.025034;
      }
    }

    this.settings.id = e.id;
    console.log(this.settings.id);
    this.settings.current_ID = true;
    console.log(e);

    this.locat.hasTransactionEnded = true;
    this.locat.canTrack_ = true;

    console.log('Stopped Normal Movement Of Driver');
    this.oneSignal.isInDeepSh_t = true;

    this.profile.getUserAsClientInfo(this.activatedRoute.snapshot.paramMap.get('notif')).off('child_added');
    this.profile.getUserAsClientInfo(this.activatedRoute.snapshot.paramMap.get('notif')).off('child_changed');
    this.profile.getUserAsClientInfo(this.activatedRoute.snapshot.paramMap.get('notif')).off('child_removed');

    this.eventProvider.getCurrentDriver().remove().then((id) => {


      // Push the drivers information to the customer connection node in the database
      this.eventProvider.getActivityProfile(e.id).set({

        Client_username: e.name,
        Client_Deleted: false,
        Client_location: [e.lat, e.lng],
        Client_locationName: e.location,
        Client_paymentForm: e.payWith,
        Client_picture: e.picture,
        Client_phoneNumber: e.phone,
        Client_destinationName: e.destination,
        Client_CanChargeCard: false,
        Client_PickedUp: false,
        Client_Dropped: false,
        Client_HasRated: false,
        Client_ended: false,
        Client_price: e.price,
        Client_Rating: e.rating,
        Client_RatingText: e.ratingText,
        entered: 0,
        Driver_name: this.profile.name,
        Driver_location: [this.lat, this.lng],
        Driver_locationName: this.locationName,
        Driver_plate: this.profile.plate,
        Driver_picture: this.profile.picture,
        Driver_ID: '43566625',
        Driver_seats: this.profile.seat,
        Driver_carType: this.profile.carType,
        Driver_rating: this.profile.rating,
        Driver_number: this.profile.number,
        Driver_HasRated: false
      }).then(suc => {
        // After removing the driver from the driver node we can then create a push notification to this driver
        if (this.platform.is('cordova')) {
          this.oneSignal.sendPush(e.id);
        }

        this.platform.ready().then(() => {
          this.platform.backButton.subscribe(() => this.pop.presentToast(this.lp.translate()[0].k8));
        });

        this.navCtrl.pop().then(() => {
          /// Trigger custom event and pass data to be send back
          this.settings.id = e.id;
          console.log(this.settings.id);
        });

      });

    });


  }


  goBack() {
    this.navCtrl.navigateBack('home');
  }



}
