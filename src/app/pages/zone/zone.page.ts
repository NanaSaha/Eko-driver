import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams, Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';
import { DirectionserviceService } from 'src/app/services/directionservice.service';
import { PopUpService } from 'src/app/services/pop-up.service';
import { ProfileService } from 'src/app/services/profile.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.page.html',
  styleUrls: ['./zone.page.scss'],
})
export class ZonePage implements OnInit {

  eventList: any[];

  constructor(public navCtrl: NavController, public authProvider: AuthService,
    public eventProvider: EventService, public locationTracker: LocationTrackerService,
    public dProvider: DirectionserviceService, public One: OneSignal, public platform: Platform,
    public pop: PopUpService, public ph: ProfileService, public lp: LanguageService,
    public load: LoadingController) {

  }

  ngOnInit() {
    this.ph.getDatabaseProfile().child('admin_zones').on('value', passengerSnapshot => {
      this.eventList = [];
      console.log(passengerSnapshot.val());
      passengerSnapshot.forEach(element => {
        this.eventList.push({
          key: element.key,
          name: element.val().title,
          zone_lat: element.val().zone_lat,
          zone_lng: element.val().zone_lng
        });
        return false;
      });
    });
  }


  UseZone(lat, lng) {
    this.ph.isZone(lat, lng).then(() => {
      this.pop.showPimp('Restart The App To Use The Selected Zone.');
    });
  }


  goBack() {
    this.navCtrl.navigateBack('home');
  }

}
