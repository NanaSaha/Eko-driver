import { Component, OnInit } from '@angular/core';
import {  NavController, AlertController, NavParams, Platform, ModalController } from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import { ProfileService } from 'src/app/services/profile.service';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  data = { type: '', nickname: '', message: '' };

  id: any;
  public eventList: Array<any>;
  constructor(public navCtrl: NavController, public plat: Platform,
              public alert: AlertController, public modal: ModalController,
              public eventProvider: EventService, public ph: ProfileService,
              public lp: LanguageService, ) {
  }

  ionViewDidEnter() {
    console.log('inregf');
    this.eventProvider.getChatList(this.id).on('value', snapshot => {
      this.eventList = [];
      console.log('sjiy');
      snapshot.forEach( snap => {
        this.eventList.push({
          id: snap.key,
          driver: snap.val().Driver_Message,
          user: snap.val().Client_Message,
        });
        console.log(this.eventList);
        return false;
      });
    });
  }


  async closeChat() {
  await  this.modal.dismiss();
  }



  async Send() {
    console.log('MESSAGE', this.data.message);
    this.eventProvider.SendMessage(this.data.message, this.id);
    this.data.message = '';
    // const alert = await this.alert.create({
    //  header: 'message',
    //   inputs: [
    //     {
    //       name: 'Message',
    //       placeholder: 'Reply'
    //     },
    //   ],
    //   buttons: [
    //     {
    //       text: this.lp.translate()[0].b9,
    //       role: 'cancel',
    //       handler: data => {
    //       }
    //     },
    //     {
    //       text: 'Send',
    //       handler: data => {
    //         this.eventProvider.SendMessage(data.Message, this.id);


    //       }
    //     }
    //   ]
    // });
    // alert.present();
  }


  ngOnInit() {
  }

}
