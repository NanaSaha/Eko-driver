import { Component, OnInit } from "@angular/core";
import {
  NavController,
  LoadingController,
  AlertController,
} from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailValidator } from "src/validators/email";
import { LanguageService } from "src/app/services/language.service";
import { AuthService } from "src/app/services/auth.service";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  public signupForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public lp: LanguageService,
    public authProvider: AuthService,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public ph: ProfileService,
    public alertCtrl: AlertController
  ) {
    this.signupForm = formBuilder.group({
      email: [
        "",
        Validators.compose([Validators.required, EmailValidator.isValid]),
      ],
      password: [
        "",
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
    });
  }

  async signupUser() {
    if (!this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      this.authProvider
        .signupUser(this.signupForm.value.email, this.signupForm.value.password)
        .then(
          () => {
            this.loadingCtrl.dismiss().then(() => {
              this.navCtrl.navigateForward("more-info");
              // this.navCtrl.navigateForward('phone');
            });
          },
          (error) => {
            this.loadingCtrl.dismiss().then(async () => {
              const alert = await this.alertCtrl.create({
                message: error.message,
                buttons: [
                  {
                    text: this.lp.translate()[0].c6,
                    role: "cancel",
                  },
                ],
              });
              alert.present();
            });
          }
        );
      const loading = await this.loadingCtrl.create();
      loading.present();
    }
  }

  goToBack() {
    this.navCtrl.navigateRoot("login-entrance");
  }
  ngOnInit() {}
}
