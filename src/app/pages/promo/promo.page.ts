import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { LanguageService } from "src/app/services/language.service";
import { ProfileService } from "src/app/services/profile.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-promo",
  templateUrl: "./promo.page.html",
  styleUrls: ["./promo.page.scss"],
})
export class PromoPage implements OnInit {
  code: any;
  perc;
  constructor(
    public navCtrl: NavController,
    public lp: LanguageService,
    public ph: ProfileService,
    private pop: PopUpService,
    public location: Location
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad referalcode");
  }

  apply_code(code) {
    // Step 2 - Pass the mobile number for verific
    if (this.code != null) {
      this.pop.presentLoader("");

      this.AddCode(code);
    }
  }

  AddCode(code): void {
    this.SearchForSharingIDs(code);
  }

  SearchForSharingIDs(promoID) {
    console.log("SharingID search called");
    this.ph.getAllSharingPromoID(promoID).on("value", (SharingIDShot) => {
      if (SharingIDShot.val()) {
        const SharingID = SharingIDShot.val().id[0];

        this.pop.hideLoader();
        console.log(SharingID);
        // SharingID
        console.log("SharingID found", SharingID);
        this.pop.presentToast("A DISCOUNT APPLIED TO YOUR NEXT RIDE");
      } else {
        this.pop.presentToast("PROMO CODE NOT VALID");
        console.log("NOT VALID");
        this.pop.hideLoader();
      }
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {}
}
