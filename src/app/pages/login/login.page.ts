import {
  Component,
  OnInit,
  ViewChild,
  NgZone,
  ViewEncapsulation,
} from "@angular/core";

import {
  Platform,
  LoadingController,
  NavController,
  AlertController,
  MenuController,
} from "@ionic/angular";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { EmailValidator } from "src/validators/email";
import { LanguageService } from "src/app/services/language.service";
import { SettingsService } from "src/app/services/settings.service";
import { ProfileService } from "src/app/services/profile.service";
import { AuthService } from "src/app/services/auth.service";
import { environment } from "src/environments/environment";
import firebase from "firebase/app";
import { IonicSelectableComponent } from "ionic-selectable";
import { PopUpService } from "src/app/services/pop-up.service";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";

class CountryJson2 {
  public name: string;
  public dial_code: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  // encapsulation: ViewEncapsulation.None,
})
export class LoginPage implements OnInit {
  overall_list: string = "signin";
  public loginForm: FormGroup;
  public signupForm: FormGroup;
  public initState = false;
  port: CountryJson2[];
  loading: Promise<HTMLIonLoadingElement>;
  phoneNum;
  port2;
  CountryJson = environment.CountryJson;
  OTP: string = "";
  Code: any;
  PhoneNo: any;
  CountryCode: any;
  showOTPInput: boolean = false;
  showPhone: boolean = true;
  showEmail: boolean = false;
  showButton: boolean = false;
  OTPmessage: string =
    "An OTP is sent to your number. You should receive it in 15 s";
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  confirmationResult: any;

  otp: string;
  showOtpComponent = false;
  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "*",
    inputStyles: {
      width: "50px",
      height: "50px",
    },
  };
  constructor(
    public pop: PopUpService,
    public navCtrl: NavController,
    public lp: LanguageService,
    public settings: SettingsService,
    public platform: Platform,
    public menu: MenuController,
    public loadingCtrl: LoadingController,
    public zone: NgZone,
    public alertCtrl: AlertController,
    public authProvider: AuthService,
    public ph: ProfileService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    // console.log("JSON COMING", this.CountryJson);
    // console.log("DIAL_CODE", this.CountryJson[0].dial_code);
    // tslint:disable-next-line: deprecation
  }

  ngOnInit() {
    this.menu.enable(false);
    this.zone.run(() => {
      this.loginForm = this.formBuilder.group({
        email: [
          "",
          Validators.compose([Validators.required, EmailValidator.isValid]),
        ],
        password: [
          "",
          Validators.compose([Validators.minLength(6), Validators.required]),
        ],
      });

      this.signupForm = this.formBuilder.group({
        email: [
          "",
          Validators.compose([Validators.required, EmailValidator.isValid]),
        ],
        password: [
          "",
          Validators.compose([Validators.minLength(6), Validators.required]),
        ],
      });
      if (this.initState) {
        this.platform.backButton.subscribe(() => {
          navigator["app"].exitApp();
        });
      } else {
        this.platform.backButton.subscribe(() => {
          this.initState = false;
        });
      }
    });
  }

  countryCodeChange(event: {
    component: IonicSelectableComponent;
    value: any;
  }) {
    this.CountryCode = event.value;
    console.log("CountryCode", this.CountryCode.dial_code);
  }

  async loginUser() {
    console.log("LOGIN ASYNC WORKING ");
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log("LOGIN ELSE--- ");
      this.authProvider
        .loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then(
          async (authData) => {
            console.log("AUTH DATA ::: ", authData);

            await this.loadingCtrl.dismiss().then(() => {
              this.ph.getUserProfile().on("value", (userProfileSnapshot) => {
                console.log("USER DETAILS:: ", userProfileSnapshot);
                const user_details = userProfileSnapshot.val();
                console.log("PHONE NOT AVAILABLE:: ", user_details);
                if (user_details == null) {
                  console.log("PHONE NOT AVAILABLE:: ");
                  this.navCtrl.navigateRoot("accountkit"); //Page NOt AVAILABLE
                  // this.navCtrl.navigateRoot("tabs");
                } else {
                  this.navCtrl.navigateRoot("home");
                }
              });
            });
          },
          async (error) => {
            this.loadingCtrl.dismiss().then(async () => {
              const alert = await this.alertCtrl.create({
                message: error.message,
                buttons: [
                  {
                    text: this.lp.translate()[0].i8,
                    role: "cancel",
                  },
                ],
              });
              alert.present();
            });
          }
        );
      const loading = await this.loadingCtrl.create();
      await loading.present();
    }
  }

  segmentChanged(ev: any) {
    console.log("Segment changed", ev);
  }

  showPhoneLogin() {
    this.showPhone = true;
    this.showEmail = false;
  }

  showEmailLogin() {
    this.showEmail = true;
    this.showPhone = false;
  }

  async ionViewDidEnter() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => { },
        "expired-callback": () => { },
      }
    );
  }
  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => { },
        "expired-callback": () => { },
      }
    );
  }

  // Button event after the nmber is entered and button is clicked
  async signinWithPhoneNumber($event) {
    this.CountryCode = "+233"
    console.log("country", $event, this.recaptchaVerifier);
    console.log("PhoneNo", this.PhoneNo, this.CountryCode);

    const loading = await this.loadingCtrl.create({
      message: "Preparing OTP",
    });
    await loading.present().then(() => {
      if (this.PhoneNo && this.CountryCode) {
        this.authProvider
          .signInWithPhoneNumber(
            this.recaptchaVerifier,
            this.CountryCode + this.PhoneNo
          )
          .then(
            (success) => {
              // this.OtpVerification();
              this.showOtpComponent = true;
              this.showPhone = false;
              this.showEmail = false;
              this.showButton = true;
              loading.dismiss();
            },
            (err) => {
              this.pop.presentToast(
                "Error! SMS couldnt be sent. Please try again"
              );
              loading.dismiss();
            }
          );
      } else {
        this.pop.presentToast("Error! SMS couldnt be sent. Please try again");
        loading.dismiss();
      }
    });
  }

  async showSuccess() {
    const alert = await this.alertCtrl.create({
      header: "OTP successful. ",
      buttons: [
        {
          text: "Ok",
          handler: (res) => {
            alert.dismiss();
          },
        },
      ],
    });
    alert.present();
  }
  async OtpVerification() {
    const alert = await this.alertCtrl.create({
      header: "Enter OTP",
      backdropDismiss: false,
      inputs: [
        {
          name: "otp",
          type: "text",
          placeholder: "Enter your otp",
        },
      ],
      buttons: [
        {
          text: "Enter",
          handler: (res) => {
            this.authProvider
              .enterVerificationCode(res.otp)
              .then((userData) => {
                // this.showSuccess();
                console.log(userData);
              });
          },
        },
      ],
    });
    await alert.present();
  }

  // OTP Code
  onOtpChange(otp) {
    this.otp = otp;
    // When all 6 digits are filled, trigger OTP validation method
    if (otp.length == 6) {
      this.validateOtp(otp);
    }
  }

  validateOtp(otp) {
    console.log("RUNNING VALIDATE OTP------->>>>>>>> " + otp);
    this.authProvider.enterVerificationCode(otp).then((userData) => {
      console.log("USER DATE FROM VALIDATION" + JSON.stringify(userData));
      if (userData) {
        this.ph.getUserProfile().on("value", (userProfileSnapshot) => {
          console.log("USER PROFILE:: ", userProfileSnapshot.val());
          const user_details = userProfileSnapshot.val();
          console.log("USER PROFILE user_details:: ", user_details);
          if (user_details == null) {
            console.log("USER DETAILS DOESNT EXIST");
            this.zone.run(() => {
              // this.navCtrl.navigateRoot("more-info");
              this.router.navigate(["more-info"]);
              this.ph.getUserProfile().off("value");
            });
          } else {
            console.log("Will Go Home");
            this.zone.run(() => {
              this.navCtrl.navigateRoot("home");
              this.ph.getUserProfile().off("value");
            });
          }
        });
      } else {
        console.log("USER DATA NOT AVAILABLE");
      }

      // this.showSuccess();
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

  goToBack(): void {
    this.navCtrl.navigateRoot("login");
  }

  goToSignup(): void {
    this.navCtrl.navigateRoot("login");
  }

  goToResetPassword(): void {
    this.navCtrl.navigateRoot("reset-password");
  }

  async showLoadRefresh() {
    const loading = await this.loadingCtrl.create({});
    await loading.present().then(() => {
      let myTimeout = setTimeout(() => {
        clearTimeout(myTimeout);
        loading.dismiss();
      }, 400);
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: "Hellooo",
      duration: 2000,
    });
    await loading.present();
    await loading.dismiss();

    const { role, data } = await loading.onDidDismiss();

    console.log("Loading dismissed!");
  }
}
