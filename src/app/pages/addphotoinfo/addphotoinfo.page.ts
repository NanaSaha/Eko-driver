import { Component, OnInit } from "@angular/core";
import {
  NavController,
  LoadingController,
  ActionSheetController,
  Platform,
} from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import * as firebase from "firebase/app";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { LanguageService } from "src/app/services/language.service";
import { SettingsService } from "src/app/services/settings.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-addphotoinfo",
  templateUrl: "./addphotoinfo.page.html",
  styleUrls: ["./addphotoinfo.page.scss"],
})
export class AddphotoinfoPage implements OnInit {
  public completed = false;
  captureDataUrl: string;
  captureDataUrl2: string;
  captureDataUrl3: string;
  profileUploaded = false;
  licenceUploaded = false;
  NidUploaded = false;
  http: HttpClient;
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    http: HttpClient,
    public lp: LanguageService,
    public settings: SettingsService,
    public actionSheetCtrl: ActionSheetController,
    public pop: PopUpService,
    public ph: ProfileService,
    public camera: Camera,
    public loadingCtrl: LoadingController
  ) {
    this.http = http;
  }

  ngOnInit() {
    console.log("ionViewDidLoad AddphotoinfoPage");
  }

  Next() {
    if (this.licenceUploaded) {
    } else {
      this.pop.showAlertNormal(this.lp.translate()[0].b5, "", false);
    }
  }

  async goBack() {
    this.navCtrl.navigateRoot("more-info");
  }

  async choosePic_2() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: this.lp.translate()[0].b6,
      buttons: [
        {
          text: this.lp.translate()[0].b7,
          icon: "ios-camera",
          handler: () => {
            this.capture2();
          },
        },
        {
          text: this.lp.translate()[0].b8,
          icon: "ios-folder",
          handler: () => {
            this.capture2FromFile();
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

  capture2() {
    const options: CameraOptions = {
      quality: 40,
      targetWidth: 300,
      targetHeight: 200,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.captureDataUrl2 = "data:image/jpeg;base64," + imageData;
        this.processLicensePicture(this.captureDataUrl2);
      },
      (err) => {
        // Handle error
      }
    );
  }

  capture2FromFile() {
    const options: CameraOptions = {
      quality: 40,
      targetWidth: 300,
      targetHeight: 200,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then((imageData) => {
      this.captureDataUrl2 = "data:image/jpeg;base64," + imageData;

      this.processLicensePicture(this.captureDataUrl2);
    });
  }

  async processLicensePicture(captureData) {
    const storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);
    const loading = await this.loadingCtrl.create();
    loading.present();
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`driverPictures/${filename}.jpg`);

    imageRef
      .putString(captureData, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot) => {
        imageRef
          .getDownloadURL()
          .then((url) => {
            this.ph
              .UpdateLPhotoInfo(url)
              .then((success) => {
                loading.dismiss();
                this.navCtrl.navigateRoot("addphoto2");
              })
              .catch((error) => {
                console.log("1 ERROR", error);
                loading.dismiss();
                this.pop.alertMe(
                  "Check Your Internet Connection and try again"
                );
              });
          })
          .catch((error) => {
            console.log("2 ERROR", error);
            loading.dismiss();
            this.pop.alertMe("Check Your Internet Connection and try again");
          });
      })
      .catch((error) => {
        console.log("3 ERROR", error);
        loading.dismiss();
        this.pop.alertMe("Check Your Internet Connection and try again");
      });
  }
}
