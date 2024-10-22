import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, LoadingController, NavParams } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';
import { SettingsService } from 'src/app/services/settings.service';



@Component({
  selector: 'app-login-entrance',
  templateUrl: './login-entrance.page.html',
  styleUrls: ['./login-entrance.page.scss'],
})
export class LoginEntrancePage implements OnInit {

  constructor(public navCtrl: NavController, public lp: LanguageService,
    public settings: SettingsService, public zone: NgZone, public load: LoadingController,) {
  }

  ngOnInit() {
    console.log('ionViewDidLoad startup');

  }

  GotoLogin(){
    this.zone.run(()=>{
  this.navCtrl.navigateRoot('login');
    })
}
  
GotoSignup(){
  this.navCtrl.navigateRoot('signup');
}
  }





