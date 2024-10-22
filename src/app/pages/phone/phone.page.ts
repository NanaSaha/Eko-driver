import { Component, OnInit } from "@angular/core";
import { NavController, Platform, LoadingController } from "@ionic/angular";
import { ProfileService } from "src/app/services/profile.service";
import { SettingsService } from "src/app/services/settings.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-phone",
  templateUrl: "./phone.page.html",
  styleUrls: ["./phone.page.scss"],
})
export class PhonePage implements OnInit {
  isNotCordova: boolean = false;
  requestCode: any;
  PhoneNumber: any;
  timeleft: number;
  userName: string;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    public navCtrl: NavController,
    public settings: SettingsService,
    public http: HttpClient,
    public platform: Platform,
    public pop: PopUpService,
    public ph: ProfileService,
    public loadingCtrl: LoadingController
  ) {}

  async AuthPhone(phone) {
    if (phone) {
      const loading = await this.loadingCtrl.create({
        spinner: null,
        message: "Please wait...",
        translucent: true,
        cssClass: "custom-class custom-loading",
      });
      await loading.present();

      this.PhoneNumber = phone;

      this.http
        .post("https://us-central1-ridefhv-61945.cloudfunctions.net/Verify", {
          number: "+233" + phone,
          appName: this.settings.appName,
        })
        .pipe(map((response: any) => response))
        .subscribe(
          (res) => {
            this.requestCode = res.request_id;
            console.log("RESPSONSE::: ", res);
            console.log("REQUEST::: ", this.requestCode);
            loading.dismiss();
          },
          (error) => {
            this.pop.showPimp(JSON.stringify(error));
            console.log("ERROR::: ", error);
            loading.dismiss();
          }
        );

      this.http
        .post("https://us-central1-ridefhv-61945.cloudfunctions.net/Verify", {
          number: "+233" + phone,
          appName: this.settings.appName,
        })
        .pipe(map((response: any) => response))
        .subscribe(
          (res) => {
            this.userName = "";
            console.log("RESPSONSE::: ", res);
            loading.dismiss();
          },
          (error) => {
            this.pop.showPimp(JSON.stringify(error));
            console.log("ERROR::: ", error);
            //this.pop.hideLoader();
            loading.dismiss();
          }
        );

      this.http
        .post("https://us-central1-ridefhv-61945.cloudfunctions.net/Verify", {
          number: "+233" + phone,
          appName: this.settings.appName,
        })
        .pipe(map((response: any) => response))
        .subscribe(
          (res) => {
            this.startTimer();
            console.log("RESPSONSE::: ", res);
            loading.dismiss();
          },
          (error) => {
            this.pop.showPimp(JSON.stringify(error));
            console.log("ERROR::: ", error);
            // this.pop.hideLoader();
            loading.dismiss();
          }
        );
    }
  }

  async AuthCode(code) {
    if (code) {
      const loading = await this.loadingCtrl.create({
        spinner: null,
        duration: 3000,
        message: "Please wait...",
        translucent: true,
        cssClass: "custom-class custom-loading",
      });
      await loading.present();
      this.http
        .post("https://us-central1-ridefhv-61945.cloudfunctions.net/Verify", {
          reqID: this.requestCode,
          code: code,
        })

        .pipe(map((response: any) => response.json()))
        .subscribe(
          (res) => {
            if (res.status == 0) {
              this.ph.UpdateNumber(this.PhoneNumber).then(() => {
                this.navCtrl.navigateRoot("more-info");
                loading.dismiss();
              });
            }
          },
          (error) => {
            this.pop.showPimp("Couldnt get code");
            this.requestCode = false;
            this.userName = "";
          }
        );
    }
  }

  startTimer() {
    this.timeleft = 50;
    var downloadTimer = setInterval(() => {
      if (this.timeleft <= 0) {
        clearInterval(downloadTimer);
        this.userName = "";
        document.getElementById("countdown").innerHTML = "Finished";
        this.requestCode = false;
      } else {
        console.log(this.timeleft);
        document.getElementById("countdown").innerHTML =
          "Try Again In " + this.timeleft;
      }
      this.timeleft -= 1;
    }, 1000);
  }

  ngOnInit() {}
}
