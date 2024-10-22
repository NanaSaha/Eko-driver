import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(public navCtrl: NavController, public ph: ProfileService,
    public lp: LanguageService, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  ngOnInit() {
  }

}
