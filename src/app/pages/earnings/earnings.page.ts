import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
import { ProfileService } from 'src/app/services/profile.service';
import { PopUpService } from 'src/app/services/pop-up.service';
import { SettingsService } from 'src/app/services/settings.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.page.html',
  styleUrls: ['./earnings.page.scss'],
})
export class EarningsPage implements OnInit {

  public randomCode: any = 'ghjkf';
  earnings: any = 0;
  public cardpaymentForm: FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
    public lp: LanguageService, public share: SocialSharing, public ph: ProfileService,
    public settings: SettingsService, public pop: PopUpService, ) {
    this.earnings = ph.earnings;
    this.cardpaymentForm = formBuilder.group({
      card: ['', Validators.compose([Validators.maxLength(4), Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FreeridePage');
    console.log(this.randomCode);
  }


  goBack() {
    this.navCtrl.navigateBack('home');
  }



  AddCard(): void {
    this.SearchForSharingIDs(this.cardpaymentForm.value.card);

  }




  SearchForSharingIDs(promoID) {

    console.log('SharingID search called');
    this.pop.presentLoader('');
    this.ph.getAllSharingID().on('value', SharingIDShot => {
      const SharingID = SharingIDShot.val().UserID[1];
      this.pop.hideLoader();
      // SharingID
      if (SharingID != null) {
        console.log(SharingID, promoID);
        if (SharingID === promoID) {
          console.log('SharingID found');

        } else {
          console.log('rtyuiytrfghj');
        }

      } else {

        this.ph.getAllSharingID().off('value');

      }
    });

  }


  ngOnInit() {
  }

}
