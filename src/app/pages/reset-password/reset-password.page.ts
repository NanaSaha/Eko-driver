import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from 'src/validators/email';
import { LanguageService } from 'src/app/services/language.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  public resetPasswordForm: FormGroup;

  constructor(public navCtrl: NavController, public lp: LanguageService, public authProvider: AuthService,
    public formBuilder: FormBuilder, public alertCtrl: AlertController) {

    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    });
  }

  async resetPassword() {
    if (!this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
    } else {
      this.authProvider.resetPassword(this.resetPasswordForm.value.email)
        .then(async (user) => {
          const alert = await this.alertCtrl.create({
            message: this.lp.translate()[0].j10,
            buttons: [
              {
                text: this.lp.translate()[0].i9,
                role: 'cancel',
                handler: () => { this.navCtrl.pop(); }
              }
            ]
          });
          alert.present();

        }, async (error) => {
          const errorMessage: string = error.message;
          const errorAlert = await this.alertCtrl.create({
            message: errorMessage,
            buttons: [{ text: this.lp.translate()[0].i9, role: 'cancel' }]
          });
          errorAlert.present();
        });
    }
  }


  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }

  ngOnInit() {
  }

}
