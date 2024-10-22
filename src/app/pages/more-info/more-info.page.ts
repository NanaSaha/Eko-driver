import { Component, OnInit, NgZone } from "@angular/core";

import { Platform, NavParams } from "@ionic/angular";
import * as firebase from "firebase";
import {
  NavController,
  LoadingController,
  AlertController,
  MenuController,
} from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { EventService } from "src/app/services/event.service";
import { LanguageService } from "src/app/services/language.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { AuthService } from "src/app/services/auth.service";
import { ProfileService } from "src/app/services/profile.service";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-more-info",
  templateUrl: "./more-info.page.html",
  styleUrls: ["./more-info.page.scss"],
})
export class MoreInfoPage implements OnInit {
  state: any;
  card: any;
  cartypes: Array<any>;
  car_color: Array<any>;
  carChosen = false;
  cars: any;
  cities: any;
  number: any;
  name: any;
  email: any;
  license: any = "";
  model: any = "";
  plate: any = "";
  year: any;
  seat: any;
  carName: any;
  currentCar: any;
  insp: any;
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  verificationId: any = "";
  phoneNumber: any = "";
  userName: any = "";
  countryCode: any = "";
  result: any;
  companies: any = "NO INSPECTOR";
  items: Array<any>;
  public Debugging = false;
  toppings = 234;
  hadDome = true;
  personInfo: boolean = true;
  carInfo: boolean = false;

  first_name;
  last_name;
  username;
  dob;
  gender;
  address;
  city;
  company;
  phonenumber;
  company_name;
  public signupForm: any;
  step: any = 1;
  signupVal;
  jsonBody;
  constructor(
    public plat: Platform,
    public eventProvider: EventService,
    public platform: Platform,
    public lp: LanguageService,
    public pop: PopUpService,
    public navCtrl: NavController,
    public menu: MenuController,
    public authProvider: AuthService,
    public loadingCtrl: LoadingController,
    public ph: ProfileService,
    public alertCtrl: AlertController,
    public zone: NgZone,
    private router: Router,
    public _form: FormBuilder,
  ) {
    this.signupForm = this._form.group(


      {
        first_name: ["", Validators.compose([Validators.required])],

        last_name: ["", Validators.compose([Validators.required])],
        dob: ["", Validators.compose([Validators.required])],
        gender: ["", Validators.compose([Validators.required])],

        email: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern(
              "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
            ),
          ]),
        ],
        city: ["", Validators.compose([Validators.required])],
        plate: ["", Validators.compose([Validators.required])],
        seat: ["", Validators.compose([Validators.required])],
        cartypes: ["", Validators.compose([Validators.required])],
        car_color: ["", Validators.compose([Validators.required])],
        company: ["", Validators.compose([Validators.required])],
        company_name: [""],
        model: ["", Validators.compose([Validators.required])],
        year: [""],
        // phonenumber: ["", Validators.compose([Validators.required])],
        license: ["", Validators.compose([Validators.required])],
        carName: ["", Validators.compose([Validators.required])],

      },

    );
  }

  ngOnInit() {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log("USER::", user);
      this.phonenumber = user.phoneNumber;
      console.log("phonenumber ::", this.phonenumber);
    });

  }

  carInfoFunc() {
    this.carInfo = true;
    this.personInfo = false;
  }

  async goBack() {
    this.carInfo = false;
    this.personInfo = true;
    // this.navCtrl.navigateRoot("home");
  }

  next() {
    this.signupVal = JSON.stringify(this.signupForm.value);

    this.jsonBody = JSON.parse(this.signupVal);

    console.log("THIS IS THE SIGNUP raw values VALUES" + this.signupVal);
    console.log("FIRST NAME" + this.jsonBody.first_name);
    console.log("l NAME" + this.jsonBody.last_name);
    console.log("dob" + this.jsonBody.dob);
    console.log("gender" + this.jsonBody.gender);
    console.log("city" + this.jsonBody.city);
    console.log("company" + this.jsonBody.company);
    console.log("company name" + this.jsonBody.company_name);
    console.log("model model" + this.jsonBody.model);
    console.log("year year" + this.jsonBody.year);
    console.log("license year" + this.jsonBody.license);
    console.log("plate year" + this.jsonBody.plate);
    console.log("seat year" + this.jsonBody.seat);
    console.log("cartypes year" + this.jsonBody.cartypes);
    console.log("car_color year" + this.jsonBody.car_color);
    console.log("email" + this.jsonBody.email);
    console.log("Phone" + this.phonenumber);


    this.first_name = this.jsonBody.first_name
    this.last_name = this.jsonBody.last_name
    this.dob = this.jsonBody.dob
    this.gender = this.jsonBody.gender
    this.address = "none"
    this.city = this.jsonBody.city
    this.company = this.jsonBody.company || "none"
    this.model = this.jsonBody.model
    this.year = this.jsonBody.year || "none"
    this.license = this.jsonBody.license
    this.plate = this.jsonBody.plate
    this.seat = this.jsonBody.seat
    this.cartypes = this.jsonBody.cartypes
    this.car_color = this.jsonBody.car_color
    this.carName = this.jsonBody.carName
    this.company_name = this.jsonBody.company_name
    this.email = this.jsonBody.email
    let phonenumber = this.phonenumber


    let img =
      "https://res.cloudinary.com/sahanana/image/upload/v1640166533/Taxi_vdjkad.svg";


    let currentYear = new Date().getFullYear();
    // let unique = "GH" + currentYear + "D" + Math.floor(Date.now() / 1000);
    let unique = "GH" + currentYear + "D" + Math.floor(1000 + Math.random() * 9000);

    let date = Date.now();
    console.log("DRIVER UNIGEUE NUMBER IS " + unique);
    this.save_user_for_server(phonenumber)  ///Save Phone number to server
    this.ph
      .UpdateInfo(
        this.first_name,
        this.last_name,
        this.dob,
        this.gender,
        this.address || "none",
        this.city,
        this.company || "none",
        this.phonenumber,
        this.license,
        this.model,
        this.year || "none",
        this.plate,
        this.seat,
        this.carName,
        this.cartypes,
        this.car_color,
        this.company_name || "No Company",
        img,
        unique,
        date,
        this.email
      )
      .then((success) => {
        console.log("SUCCESSS:::") + success;

        this.zone.run(() => {

          this.router.navigate(["addphotoinfo"]);
        });
      });
    this.router.navigate(["addphotoinfo"]);


  }

  async alert(name) {
    const alert = await this.alertCtrl.create({
      header: name,
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

  submit() {

    this.step = this.step + 1;
    console.log("STEP NOW IS", this.step)
  }

  prev() {
    this.step = this.step - 1;
    console.log("STEP NOW IS", this.step)
  }

  login() {

    this.router.navigate(["login"]);
  }

  save_user_for_server(phone) {
    const data = { mobile_number: phone };
    this.ph.create_admin_user(data).then(
      (result) => {

        var results_body = result;
        console.log("results", result);

      }
    )
      .catch((error) => {

        console.log("Promise rejected with " + JSON.stringify(error));
        alert("Incorrect email or password")
      });
  }





  // signIn(userName: string) {
  //   // Step 2 - Pass the mobile number for verific
  //   if (
  //     this.name != null &&
  //     this.banks != null &&
  //     this.cities &&
  //     this.number != null &&
  //     this.model &&
  //     this.year &&
  //     this.license &&
  //     this.plate &&
  //     this.seat
  //   ) {
  //     this.ph
  //       .getDatabaseProfile()
  //       .child("Cartypes")
  //       .on("value", (snapshot) => {
  //         console.log("SNAPSHOT OF CARTYPES::", snapshot);
  //         snapshot.forEach((snap) => {
  //           console.log(this.currentCar, snap.val());
  //           if (this.currentCar === snap.key) {
  //             let img = snap.val().image;
  //             console.log(snap.val().name, snap.val().price, snap.val().image);
  //             if (snap.val().image == null) {
  //               img =
  //                 "https://firebasestorage.googleapis.com/v0/b/ridefhv-61945.appspot.com/o/driverPictures%2Ftooltip.png?alt=media&token=d92641c8-d5d4-474e-be15-9dd2afd6c618";
  //             }
  //             this.ph
  //               .UpdateInfo(
  //                 this.name,
  //                 this.cities,
  //                 this.license,
  //                 this.model,
  //                 this.year,
  //                 this.plate,
  //                 this.seat,
  //                 this.number,
  //                 this.banks,
  //                 snap.val().name,
  //                 snap.val().price,
  //                 img,
  //                 this.companies
  //               )
  //               .then((success) => {
  //                 this.navCtrl.navigateRoot("addphotoinfo");
  //                 this.ph
  //                   .getCompanyProfile(this.companies)
  //                   .update({
  //                     earnings: 0,
  //                   })
  //                   .then(() => {});
  //               });
  //           } else {
  //             console.log("SNO CURRENT CAR");
  //           }
  //           return false;
  //         });
  //       });
  //   }
  // }





}