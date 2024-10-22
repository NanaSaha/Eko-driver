import { Component, OnInit } from "@angular/core";
import {
  NavController,
  NavParams,
  ModalController,
  PopoverController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { OnesignalService } from "src/app/services/onesignal.service";
import { LanguageService } from "src/app/services/language.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { ProfileService } from "src/app/services/profile.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-rate-me",
  templateUrl: "./rate-me.page.html",
  styleUrls: ["./rate-me.page.scss"],
})
export class RateMePage implements OnInit {
  // tslint:disable-next-line: variable-name
  public positive_Rate: any =
    this.activatedRoute.snapshot.paramMap.get("positive_Rating");
  // tslint:disable-next-line: variable-name
  public negative_Rate: any =
    this.activatedRoute.snapshot.paramMap.get("negative_Rating");
  public rateNumber: any = 0;
  todo = {
    description: "",
  };
  lat: any;
  lng: any;
  cartype: any;
  hasRated = false;
  // tslint:disable-next-line: variable-name
  hasRated_2 = true;

  // tslint:disable-next-line: variable-name
  hasRated_1 = true;
  constructor(
    public navCtrl: NavController,
    public Onesignal: OnesignalService,
    public lp: LanguageService,
    public modal: ModalController,
    public popover: PopoverController,
    public storage: Storage,
    public pop: PopUpService,
    private activatedRoute: ActivatedRoute,
    public prof: ProfileService
  ) {
    this.lat = this.activatedRoute.snapshot.paramMap.get("lat");
    this.lng = this.activatedRoute.snapshot.paramMap.get("lng");
    this.cartype = this.activatedRoute.snapshot.paramMap.get("cartype");
  }

  ionViewWillEnter() {
    this.modal.dismiss(false);
  }

  Approve() {
    if (this.hasRated_2 && this.hasRated_1) {
      const value = this.activatedRoute.snapshot.paramMap.get("eventId");
      const rt = Number(this.positive_Rate) + 1;
      this.prof.PositiveRateDriver(value, rt).then(() => {
        this.positive_Rate = Number(this.positive_Rate) + 1;
        console.log("POSITIVE NUMBER", this.positive_Rate);
      });
      this.hasRated_2 = false;
      this.hasRated = true;
    }
  }

  Disapprove() {
    if (this.hasRated_1 && this.hasRated_2) {
      const value = this.activatedRoute.snapshot.paramMap.get("eventId");

      const rt = this.negative_Rate - 1;

      this.prof.NegativeRateDriver(value, rt).then(() => {
        this.negative_Rate = this.negative_Rate - 1;
        this.Hated();
      });
      this.hasRated_1 = false;
      this.hasRated = true;
    }
  }

  logForm() {
    console.log(this.todo);
    if (this.hasRated) {
      const value = this.activatedRoute.snapshot.paramMap.get("eventId");
      console.log("RATING NUMBER", this.rateNumber);
      this.prof
        .RateUser(value, this.rateNumber, this.todo.description, true)
        .then((suc) => {
          this.Onesignal.UpdateInfo(this.lat, this.lng, this.cartype);
          this.navCtrl.pop();
        });
    } else {
      this.pop.showPimp("Rate First");
    }
  }

  Hated() {
    const value = this.activatedRoute.snapshot.paramMap.get("eventId");
    const name = this.activatedRoute.snapshot.paramMap.get("name");
    this.prof.M_updateID(value, name).then((suc) => {
      this.navCtrl.pop();
      this.pop.presentToast("You Will Not Be Paired Again.");
    });
  }

  ngOnInit() {}
}
