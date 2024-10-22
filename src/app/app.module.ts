import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";
import { IonicRatingModule } from "ionic4-rating";
import * as firebase from "firebase";
import { Firebase } from "@ionic-native/firebase/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { FileUploadModule } from "ng2-file-upload";
import { MediaCapture } from "@ionic-native/media-capture/ngx";
import { Base64 } from "@ionic-native/base64/ngx";


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { BackgroundMode } from "@ionic-native/background-mode/ngx";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { HTTP } from "@ionic-native/http/ngx";
import { File } from "@ionic-native/file/ngx";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";
import { GoogleMaps } from "@ionic-native/google-maps";
import { LocationTrackerService } from "./services/location-tracker.service";
import { OnesignalService } from "./services/onesignal.service";
import { PopUpService } from "./services/pop-up.service";

import { ProfileService } from "./services/profile.service";
import { AcceptPage } from "./pages/accept/accept.page";
import { AcceptPageModule } from "./pages/accept/accept.module";
import { RatePage } from "./pages/rate/rate.page";
import { RatePageModule } from "./pages/rate/rate.module";
import { NewsPage } from "./pages/news/news.page";
import { NewsPageModule } from "./pages/news/news.module";
import { ChatPage } from "./pages/chat/chat.page";
import { ChatPageModule } from "./pages/chat/chat.module";
import { TripinfoPage } from "./pages/tripinfo/tripinfo.page";
import { TripinfoPageModule } from "./pages/tripinfo/tripinfo.module";
import { PaymentpagePage } from "./pages/paymentpage/paymentpage.page";
import { PaymentpagePageModule } from "./pages/paymentpage/paymentpage.module";
import { NgOtpInputModule } from "ng-otp-input";
import { Angular4PaystackModule } from "angular4-paystack";
import { IonicSelectableModule } from "ionic-selectable";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Insomnia } from '@ionic-native/insomnia/ngx';



export const firebaseConfig = {
  


  // apiKey: "AIzaSyDf7EXNUs2jX6VjxvhBIl5n6JVHkxxc3fA",
  // authDomain: "etapp-f2989.firebaseapp.com",
  // databaseURL: "https://etapp-f2989-default-rtdb.firebaseio.com",
  // projectId: "etapp-f2989",
  // storageBucket: "etapp-f2989.appspot.com",
  // messagingSenderId: "436674434095",
  // appId: "1:436674434095:web:de225f233b94bc6b7522da"



  apiKey: "AIzaSyBnyZRrlVQ0Z9pgqmneT9_8XnMjX03qdZ0",
  authDomain: "ekodot-rng.firebaseapp.com",
  databaseURL: "https://ekodot-rng-default-rtdb.firebaseio.com",
  projectId: "ekodot-rng",
  storageBucket: "ekodot-rng.appspot.com",
  messagingSenderId: "694628586408",
  appId: "1:694628586408:web:821577bccab1e56c45039d",
  measurementId: "G-GPBK4E621C"


};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],

  entryComponents: [
    // AcceptPage,
    // RatePage,
    // NewsPage,
    // ChatPage,
    // TripinfoPage,
    // PaymentpagePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicRatingModule,
    IonicStorageModule.forRoot(),
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    // AcceptPageModule,
    // RatePageModule,
    // NewsPageModule,
    // ChatPageModule,
    // TripinfoPageModule,
    // PaymentpagePageModule,
    NgOtpInputModule,
    Angular4PaystackModule.forRoot("pk_test_xxxxxxxxxxxxxxxxxxxxxxxx"),
    IonicSelectableModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    BackgroundMode,
    Insomnia,
    OneSignal,
    InAppBrowser,
    CallNumber,
    HTTP,
    File,
    FileChooser,
    GoogleMaps,
    Firebase,
    FilePath,
    SocialSharing,
    Vibration,
    LocationTrackerService,
    OnesignalService,
    PopUpService,
    Geolocation,
    ProfileService,
    MediaCapture,
    Base64,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
