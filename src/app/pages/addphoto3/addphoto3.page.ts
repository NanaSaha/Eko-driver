import { Component, OnInit } from "@angular/core";
import {
  NavController,
  LoadingController,
  ActionSheetController,
  Platform,
} from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { HTTP } from "@ionic-native/http/ngx";
import * as firebase from "firebase/app";
import { HttpHeaders } from "@angular/common/http";
import { LanguageService } from "src/app/services/language.service";
import { SettingsService } from "src/app/services/settings.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-addphoto3",
  templateUrl: "./addphoto3.page.html",
  styleUrls: ["./addphoto3.page.scss"],
})
export class Addphoto3Page implements OnInit {
  public completed = false;
  captureDataUrl: string;
  captureDataUrl2: string;
  captureDataUrl3: string;
  profileUploaded = false;
  licenceUploaded = false;
  NidUploaded = false;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public http: HTTP,
    public lp: LanguageService,
    public settings: SettingsService,
    public actionSheetCtrl: ActionSheetController,
    public pop: PopUpService,
    public ph: ProfileService,
    public camera: Camera,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad Addphoto2Page");

    // if (!this.platform.is("cordova")) {
    //   this.ph.UpdatePPhotoInfo("Driver Picture").then((success) => {
    //     this.navCtrl.navigateRoot("waiting");
    //   });
    // }
  }

  Next() {
    if (this.profileUploaded) {
    } else {
      this.pop.showAlertNormal(this.lp.translate()[0].b5, "", false);
    }
  }

  send(subject: string, message: string, email: string) {
    const url =
      "https://api.mailgun.net/v3/" + this.settings.mailGUrl + "/messages";
    const body = {
      from: email,
      to: this.settings.companyMail,
      subject,
      html:
        "<html><body>First Name: " +
        this.settings.appName +
        "<br>" +
        "Last Name: " +
        this.settings.appLink +
        "<br>" +
        "Email: " +
        email +
        "<br>" +
        "Subject: " +
        subject +
        "<br><br>" +
        "Message: " +
        message +
        "</body></html>",
    };
    const headers = {
      Authorization: "Basic " + this.settings.mailGKey,
      "Content-Type": "application/x-www-form-urlencoded",
    };

    this.pop.showLoader("");

    this.http
      .post(url, body, headers)
      .then((data) => {
        this.pop.hideLoader();
        console.log("SUCCESS -> " + JSON.stringify(data));
        this.navCtrl.navigateRoot("WaitingPage");
      })
      .catch((error) => {
        alert(error);
      });
  }

  async goBack() {
    this.navCtrl.navigateRoot("addphotoinfo2");
  }

  async choosePic_1() {
    // this.navCtrl.navigateRoot("waiting");
    const actionSheet = await this.actionSheetCtrl.create({
      header: this.lp.translate()[0].b6,
      buttons: [
        {
          text: this.lp.translate()[0].b7,
          icon: "ios-camera",
          handler: () => {
            this.capture();
          },
        },
        {
          text: this.lp.translate()[0].b8,
          icon: "ios-folder",
          handler: () => {
            this.captureFromFile();
          },
        },
        {
          text: this.lp.translate()[0].b9,
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    actionSheet.present();
  }

  capture() {
    const options: CameraOptions = {
      quality: 40,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.captureDataUrl = "data:image/jpeg;base64," + imageData;
        this.processProfilePicture(this.captureDataUrl);
      },
      (err) => {
        // Handle error
      }
    );
  }

  captureFromFile() {
    const options: CameraOptions = {
      quality: 40,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then((imageData) => {
      this.captureDataUrl = "data:image/jpeg;base64," + imageData;

      this.processProfilePicture(this.captureDataUrl);
    });
  }

  async processProfilePicture(captureData) {
    const storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);
    const loading = await this.loadingCtrl.create();
    await loading.present();
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`driverPictures/${filename}.jpg`);

    imageRef
      .putString(captureData, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot) => {
        imageRef
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.ph
              .UpdateInsurancePhotoInfo(url)
              .then((success) => {
                console.log(url);
                loading.dismiss();
                console.log("done");
                this.navCtrl.navigateRoot("waiting");
              })
              .catch((error) => {
                this.pop.alertMe(
                  "Check Your Internet Connection and try again"
                );
              });
          })
          .catch((error) => {
            this.pop.alertMe("Check Your Internet Connection and try again");
          });
      })
      .catch((error) => {
        this.pop.alertMe("Check Your Internet Connection and try again");
      });
  }

  ngOnInit() {}
}
