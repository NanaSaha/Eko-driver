import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { NavController, NavParams, ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { OnesignalService } from "src/app/services/onesignal.service";
import { LanguageService } from "src/app/services/language.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { ProfileService } from "src/app/services/profile.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-rate",
  templateUrl: "./rate.page.html",
  styleUrls: ["./rate.page.scss"],
})
export class RatePage implements OnInit {
  @ViewChild("myInput", { static: true }) myInput: ElementRef;
  public rateNumber: any;
  todo = {
    description: "",
  };
  rate;
  lat: any;
  lng: any;
  cartype: any;
  constructor(
    public navCtrl: NavController,
    public Onesignal: OnesignalService,
    private activatedRoute: ActivatedRoute,
    public lp: LanguageService,
    public storage: Storage,
    public modal: ModalController,
    public pop: PopUpService,
    public prof: ProfileService
  ) {
    this.lat = this.activatedRoute.snapshot.paramMap.get("lat");
    this.lng = this.activatedRoute.snapshot.paramMap.get("lng");
    this.cartype = this.activatedRoute.snapshot.paramMap.get("cartype");
  }

  // async ionViewWillEnter() {
  //   await this.modal.dismiss(false);
  // }

  onModelChange($event) {
    this.rateNumber = $event;
    this.pop.showLoader("");

    setTimeout(() => {
      this.pop.hideLoader();
    }, 1000);
  }

  onRateChange($event) {
    this.rateNumber = $event;
    console.log("RATING NUMBER__-->>", this.rateNumber);
    this.pop.presentLoader("");

    setTimeout(() => {
      this.pop.hideLoader();
    }, 1000);
  }

  logForm() {
    console.log(this.todo);
    if (this.rateNumber != null) {
      const value = this.activatedRoute.snapshot.paramMap.get("eventId");
      console.log(this.rateNumber);
      this.prof
        .RateUser(value, this.rateNumber, this.todo.description, true)
        .then((suc) => {
          this.Onesignal.UpdateInfo(this.lat, this.lng, this.cartype);
          this.navCtrl.pop();
        });
    } else {
      this.pop.showPimp(this.lp.translate()[0].j8);
    }
  }

  ngOnInit() { }
}
