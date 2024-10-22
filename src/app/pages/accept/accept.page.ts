import { Component, OnInit, Input } from "@angular/core";
import { NavController, NavParams, ModalController } from "@ionic/angular";
import { LanguageService } from "src/app/services/language.service";
import { SettingsService } from "src/app/services/settings.service";
import { PopUpService } from "src/app/services/pop-up.service";
import { ActivatedRoute } from "@angular/router";
declare var google;

@Component({
  selector: "app-accept",
  templateUrl: "./accept.page.html",
  styleUrls: ["./accept.page.scss"],
})
export class AcceptPage implements OnInit {
  @Input() loc;
  @Input() des;
  @Input() charge;
  @Input() info;
  @Input() up;
  @Input() down;
  @Input() status;
  @Input() time;
  @Input() distance1;
  // from = this.loc;
  // to = this.des;
  distance: any;
  draco: boolean = true;
  map: any;
  cost: any = this.activatedRoute.snapshot.paramMap.get("charge");
  constructor(
    public navCtrl: NavController,
    public lp: LanguageService,
    public settings: SettingsService,
    public pop: PopUpService,
    public modal: ModalController,
    private activatedRoute: ActivatedRoute
  ) {
    // this.distance = Math.round(this.distance1);

    // console.log("CHARGES IN ACCEPT PAGE", this.charge);
    // this.cost = this.charge.toFixed(2);
    // console.log("CHARGES IN ACCEPT PAGE", this.cost);
  }

  ionViewDidEnter() {


    this.pop.showLoader("");
  }

  closeModal() {
    this.modal.dismiss(2);
  }

  acceptModal() {
    console.log("ACCEPTED REQUEST");
    this.modal.dismiss(1);
  }


  ngOnInit() { }
}
