import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { LanguageService } from 'src/app/services/language.service';
import { SettingsService } from 'src/app/services/settings.service';
import { PopUpService } from 'src/app/services/pop-up.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.page.html',
  styleUrls: ['./cancelled.page.scss'],
})
export class CancelledPage implements OnInit {

  public eventList: Array<any>;

  constructor(public navCtrl: NavController, public ph: ProfileService, public alertCtrl: AlertController, public lp: LanguageService, public settings: SettingsService, public pop: PopUpService, public load: LoadingController,
     public eventProvider: EventService) {}

  ionViewDidEnter() {
  // this.pop.presentLoader('')
    this.eventProvider.getCancelledList().on('value', snapshot => {
      this.eventList = [];
   // this.pop.dismissLoader()
    console.log(snapshot.val());
      snapshot.forEach( snap => {
        this.eventList.push({
          id: snap.key,
          name: snap.val().name,
          price: snap.val().price,
          date: snap.val().date,
          location: snap.val().location,
          destination: snap.val().destination,
          tip: snap.val().tip,
          upvote: snap.val().upvote,
          downvote: snap.val().downvote,
          charge: snap.val().charge,
          reason: snap.val().reason
        });
        this.eventList.sort();
        this.eventList.reverse();
        return false

      });
    });

  }

  goToEventDetail(eventId){
  this.navCtrl.navigateRoot(['historydetail', { 'eventId': eventId }]);
  }

 

goBack(){
  this.navCtrl.navigateRoot('history');
}


  ngOnInit() {
  }

}
