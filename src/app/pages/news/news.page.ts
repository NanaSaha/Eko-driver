import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news: any;
  constructor(public navCtrl: NavController, public ph: ProfileService, public modal: ModalController) {
  }

  ionViewDidLoad() {
    this.ph.getNewsProfile().on('value', userProfileSnapshot => {
      if (userProfileSnapshot.val()) {
        this.news = userProfileSnapshot.val().News;
      } else {
        this.news = 'Welcome to App. Make Sure You are online';
      }
    });
  }

  async CloseNow() {
  await  this.modal.dismiss();
  }


  ngOnInit() {
  }

}
