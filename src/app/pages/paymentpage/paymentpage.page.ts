import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { NavController, NavParams, ModalController } from "@ionic/angular";
import { LanguageService } from "src/app/services/language.service";
import { SettingsService } from "src/app/services/settings.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { ActivatedRoute } from "@angular/router";
// import { ViewEncapsulation } from "@angular/compiler/src/core";

@Component({
  selector: "app-paymentpage",
  templateUrl: "./paymentpage.page.html",
  styleUrls: ["./paymentpage.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentpagePage implements OnInit {
  @Input() amount;

  payment_method: any = this.activatedRoute.snapshot.paramMap.get("payment_method");
  price: any = this.activatedRoute.snapshot.paramMap.get("amount");
  constructor(
    public navCtrl: NavController,
    public lp: LanguageService,
    public settings: SettingsService,
    public modal: ModalController,
    public pop: PopUpService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log("AMOUNT CLIENT IS PAYING");
    // this.amount = this.amount.toFixed(2);


  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AcceptPage");
  }

  async closeModal() {
    await this.modal.dismiss();
  }

  async acceptModal() {
    await this.modal.dismiss();
  }

  ngOnInit() { }
}
