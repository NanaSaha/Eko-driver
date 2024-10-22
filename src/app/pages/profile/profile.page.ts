import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  ActionSheetController,
} from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { LanguageService } from "src/app/services/language.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { AuthService } from "src/app/services/auth.service";
import { ProfileService } from "src/app/services/profile.service";
import * as firebase from "firebase";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  public userProfile: any;
  public birthDate: string;
  public phoneNumber: any;
  public work: any;
  public home: any;
  public pic: any;
  public selectedItem;
  public carmodels: any;
  public captureDataUrl: any;
  last_name;
  first_name;
  email;
  emergencyNumber;
  unique;
  picture;
  constructor(
    public navCtrl: NavController,
    public lp: LanguageService,
    public ac: ActionSheetController,
    public pop: PopUpService,
    public camera: Camera,
    public alertCtrl: AlertController,
    public ph: ProfileService,
    public authProvider: AuthService
  ) {}
  ngOnInit() {}
  ionViewDidEnter() {
    this.ph
      .getUserProfil()
      .child(this.ph.id)
      .on("child_added", (userProfileSnapshot) => {
        this.ph.number = userProfileSnapshot.val().phoneNumber;
        this.ph.name = userProfileSnapshot.val().name;
        this.ph.accountNum = userProfileSnapshot.val().accountNumber;
        this.ph.bank = userProfileSnapshot.val().Bank;
        this.ph.carType = userProfileSnapshot.val().Carname;
        this.ph.caryear = userProfileSnapshot.val().caryear;
        this.ph.plate = userProfileSnapshot.val().plate;
        this.ph.seat = userProfileSnapshot.val().seats;
        this.ph.city = userProfileSnapshot.val().city;

        this.first_name = userProfileSnapshot.val().first_name;
        this.last_name = userProfileSnapshot.val().last_name;
        this.email = userProfileSnapshot.val().email;
        this.emergencyNumber = userProfileSnapshot.val().emergencyNumber;
        this.phoneNumber = userProfileSnapshot.val().phonenumber;
        this.unique = userProfileSnapshot.val().unique_number;
        this.picture = userProfileSnapshot.val().picture;
      });
  }

  goBack() {
    this.navCtrl.navigateBack("home");
  }

  remove(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.navigateRoot("");
    });
  }

  onSelectChange(selectedValue: any) {
    console.log("Selected", selectedValue);
    this.ph.UpdateCartype(selectedValue);
  }
  async logOut() {
    const alert = await this.alertCtrl.create({
      header: this.lp.translate()[0].c5,
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].c7,
          handler: (data) => {
            this.authProvider.signOut();
            this.navCtrl.navigateRoot("login");
          },
        },
      ],
    });
    alert.present();
  }

  async updateNumber() {
    const alert = await this.alertCtrl.create({
      message: this.lp.translate()[0].h1,
      inputs: [
        {
          value: this.ph.number,
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: (data) => {
            console.log(data);
            this.ph.UpdateNumber(data);
          },
        },
      ],
    });
    alert.present();
  }

  async updateName() {
    const alert = await this.alertCtrl.create({
      message: this.lp.translate()[0].h2,
      inputs: [
        {
          value: this.ph.name,
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: (data) => {
            console.log(data);
            this.ph.UpdateName(data);
          },
        },
      ],
    });
    alert.present();
  }

  async updateEmergencyNumber() {
    const alert = await this.alertCtrl.create({
      message: "Enter an emergency number",
      inputs: [
        {
          value: this.emergencyNumber,
        },
      ],
      buttons: [
        {
          text: "Cancel",
        },
        {
          text: "Accept",
          handler: (data) => {
            console.log("EMERGENCY NUMBER DATA" + data);
            this.ph.UpdateEmergencyNumbers(data);
            this.navCtrl.navigateBack("home");
          },
        },
      ],
    });
    alert.present();
  }

  async updateEmail() {
    const alert = await this.alertCtrl.create({
      message: "Enter Your Email",
      inputs: [
        {
          value: this.email,
        },
      ],
      buttons: [
        {
          text: "Cancel",
        },
        {
          text: "Accept",
          handler: (data) => {
            console.log(data);
            this.ph.updateEmail(data);
          },
        },
      ],
    });
    alert.present();
  }

  async updateAccountNumber() {
    const alert = await this.alertCtrl.create({
      message: this.lp.translate()[0].h10,
      inputs: [
        {
          value: this.ph.accountNum,
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: (data) => {
            console.log(data);
            this.ph.UpdateAccountNumber(data);
          },
        },
      ],
    });
    alert.present();
  }

  async updateBank() {
    const alert = await this.alertCtrl.create({
      message: this.lp.translate()[0].i1,
      inputs: [
        {
          value: this.ph.bank,
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: (data) => {
            console.log(data);
            this.ph.UpdateBank(data);
          },
        },
      ],
    });
    alert.present();
  }

  async updateCarModel() {
    const alert = await this.alertCtrl.create({
      message: this.lp.translate()[0].h6,
      inputs: [
        {
          value: this.ph.carType,
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: (data) => {
            console.log(data);
            this.ph.UpdateCarModel(data);
          },
        },
      ],
    });
    alert.present();
  }

  async updateCaryear() {
    const alert = await this.alertCtrl.create({
      message: this.lp.translate()[0].h7,
      inputs: [
        {
          value: this.ph.caryear,
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: (data) => {
            console.log(data);
            this.ph.UpdateCarYear(data);
          },
        },
      ],
    });
    alert.present();
  }

  async updatePlate() {
    const alert = await this.alertCtrl.create({
      message: this.lp.translate()[0].h8,
      inputs: [
        {
          value: this.ph.plate,
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: (data) => {
            console.log(data);
            this.ph.UpdatePlate(data);
          },
        },
      ],
    });
    alert.present();
  }

  async updateCity() {
    const alert = await this.alertCtrl.create({
      message: this.lp.translate()[0].h4,
      inputs: [
        {
          value: this.ph.city,
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: (data) => {
            console.log(data);
            this.ph.UpdateCity(data);
          },
        },
      ],
    });
    alert.present();
  }

  async updateSeat() {
    const alert = await this.alertCtrl.create({
      message: this.lp.translate()[0].h9,
      inputs: [
        {
          value: this.ph.seat,
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: (data) => {
            console.log(data);
            this.ph.UpdateCarSeats(data);
          },
        },
      ],
    });
    alert.present();
  }

  async choosePic() {
    const actionSheet = await this.ac.create({
      header: this.lp.translate()[0].i10,
      buttons: [
        {
          text: this.lp.translate()[0].j1,
          icon: "ios-camera",
          handler: () => {
            this.changePic();
          },
        },
        {
          text: this.lp.translate()[0].j2,
          icon: "ios-folder",
          handler: () => {
            this.changePicFromFile();
          },
        },
        {
          text: this.lp.translate()[0].i8,
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

  changePic() {
    const cameraOptions: CameraOptions = {
      quality: 16,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      this.captureDataUrl = "data:image/jpeg;base64," + imageData;

      this.processProfilePicture(this.captureDataUrl);
    });
  }

  changePicFromFile() {
    const cameraOptions: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 16,
      encodingType: this.camera.EncodingType.PNG,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      this.captureDataUrl = "data:image/jpeg;base64," + imageData;

      this.processProfilePicture(this.captureDataUrl);
    });
  }

  processProfilePicture(captureData) {
    const storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`driverPictures/${filename}.jpg`);

    imageRef
      .putString(captureData, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot) => {
        imageRef
          .getDownloadURL()
          .then((url) => {
            this.ph
              .UpdatePPhotoInfo(url)
              .then((success) => {
                this.pop.presentToast(this.lp.translate()[0].j3);
              })
              .catch((error) => {
                alert(error);
              });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  }
}
