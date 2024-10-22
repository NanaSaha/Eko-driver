import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams, ActionSheetController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { PopUpService } from 'src/app/services/pop-up.service';
import { ProfileService } from 'src/app/services/profile.service';
import { SettingsService } from 'src/app/services/settings.service';
import { EventService } from 'src/app/services/event.service';
import { LanguageService } from 'src/app/services/language.service';
import { ActivatedRoute } from '@angular/router';

declare var google;

@Component({
  selector: 'app-documentdetail',
  templateUrl: './documentdetail.page.html',
  styleUrls: ['./documentdetail.page.scss'],
})
export class DocumentdetailPage implements OnInit {

  public currentEvent: any = {};
  captureDataUrl: string;
  data: any;
  eventList: any;
  image: string;
  progress: any;
  task: any;


  constructor(private activatedRoute: ActivatedRoute, public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public file: File, public camera: Camera, public lp: LanguageService, public settings: SettingsService, public pop: PopUpService, public load: LoadingController, public profile: ProfileService, public alert: AlertController, public eventService: EventService) {

    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(res);
      this.data = res;
    });

    console.log(this.data);
  }

  ionViewDidEnter() {


  }
  goBack() {
    this.navCtrl.pop();
  }
  ngOnInit() {


  }
  async UploadFile(eventId) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: this.lp.translate()[0].b6,
      buttons: [
        {
          text: this.lp.translate()[0].b7,
          icon: 'ios-camera',
          handler: () => {
            this.capture(eventId)
          }
        }, {
          text: this.lp.translate()[0].b8,
          icon: 'ios-folder',
          handler: () => {
            this.captureFromFile(eventId)
          }
        }, {
          text: this.lp.translate()[0].b9,
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }




  async AddFile(eventId, state) {
    console.log(this.profile.theKey);
    const alert = await this.alert.create({
      header: 'Entry Name',
      inputs: [
        {

          value: ''
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: "Okay",
          handler: data => {
            console.log(data, eventId)
            if (this.data.approved) {
              this.profile.createDocList(data, eventId);

            } else {

              this.profile.createMyDocList(data, eventId)
            }
          }
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
  }



  capture(id) {
    const cameraOptions: CameraOptions = {
      quality: 4,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      this.processProfilePicture(this.captureDataUrl, id)


    }, (err) => {
      // Handle error
    });
  }

  captureFromFile(id) {

    const cameraOptions: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 20,
      encodingType: this.camera.EncodingType.PNG,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;

      this.processProfilePicture(this.captureDataUrl, id)

    })
  }


  async processProfilePicture(captureData, id) {
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);
    const loading = await this.load.create();
    await loading.present();
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`myPics/${filename}.jpg`);

    imageRef.putString(captureData, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
      imageRef.getDownloadURL().then(url => {
        console.log(url)

        console.log(url)
        this.load.dismiss()
        console.log("done")
        if (this.data.approved) {
          this.profile.uploadDocFile2(url, id);
          this.pop.hideLoader();
        } else {
          this.pop.hideLoader();
          this.profile.uploadDocFile(url, id)
        }

      }).catch(error => { alert('error couldnt do what you asked') });
    }).catch(error => { alert('error couldnt do what you asked') });

  }






}
