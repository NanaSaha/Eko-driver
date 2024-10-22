import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public navCtrl: NavController, public storage: Storage,
    public lp: LanguageService, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  goBack() {
    this.navCtrl.navigateBack('home');
  }

  onSelectChange(selectedValue: any) {
    console.log('Selected', selectedValue);

    this.storage.set(`Language`, selectedValue).then(() => {
      console.log('saved id');
      this.lp.targetLanguageCode = selectedValue;
    });
  }

  ngOnInit() {
  }

}
