import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NavController, AlertController, NavParams } from "@ionic/angular";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.page.html",
  styleUrls: ["./wallet.page.scss"],
  // encapsulation: ViewEncapsulation.None,
})
export class WalletPage implements OnInit {
  ammount: any = 0;
  funds: any = 0;
  public public_key = "pk_live_3cbc59938d89297220920c120790e6bd28d07d91"; //Put your paystack Test or Live Key here
  public channels = ["bank", "card", "ussd", "qr", "mobile_money"]; //Paystack Payment Methods
  public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,

    public ph: ProfileService
  ) {
    this.ph.getUserProfile().on("value", (userProfileSnapshot) => {
      console.log("FUNDS-->" + userProfileSnapshot.val());
      this.ph.funds = userProfileSnapshot.val().funds;
    });
  }

  ionViewDidLoad() {
    this.ph.getUserProfile().on("value", (userProfileSnapshot) => {
      console.log("FUNDS-->" + userProfileSnapshot.val());
      this.ph.funds = userProfileSnapshot.val().funds;
    });
  }

  AddNow() {
    if (this.ph.card == null) {
      this.navCtrl.navigateRoot("card");
      this.ph.addedFunds = this.funds;
    } else {
      this.updateFunds();
    }
  }

  goBack() {
    this.navCtrl.navigateBack("home");
  }

  async updateFunds() {
    const alert = await this.alertCtrl.create({
      message: "Enter Ammount to Add To Your Funds",
      inputs: [
        {
          value: "Enter Here",
        },
      ],
      buttons: [
        {
          text: "cancel",
        },
        {
          text: "Accept",
          handler: (data) => {
            console.log(data);
          },
        },
      ],
    });
    alert.present();
  }

  async subscribe() {
    const alert = await this.alertCtrl.create({
      message: "Enter Amount to Fund Your Wallet",
      inputs: [
        {
          value: "",
        },
      ],
      buttons: [
        {
          text: "Cancel",
        },
        {
          text: "Accept",
          handler: (data) => {
            this.funds = data[0];
            console.log("FUNDS-->>" + this.funds * 100);
          },
        },
      ],
    });
    alert.present();
  }

  async updateFundsO() {
    const alert = await this.alertCtrl.create({
      message: "Enter Amount to Fund Your Wallet",
      inputs: [
        {
          value: "",
        },
      ],
      buttons: [
        {
          text: "Cancel",
        },
        {
          text: "Accept",
          handler: (data) => {
            // tslint:disable-next-line: radix
            this.funds = parseInt(data[0]) + parseInt(this.ph.funds);
            console.log("FUNDS-->>" + this.funds * 100);

            // this.ph.UpdatePaymentType(2, this.funds);
          },
        },
      ],
    });
    alert.present();
  }

  ngOnInit() {
    console.log("INIT TRIGGERED", this.ph.id);
    this.ph.getUserProfile().on("value", (userProfileSnapshot) => {
      console.log("FUNDS-->" + userProfileSnapshot.val());
      console.log("FUNDS-->" + JSON.stringify(userProfileSnapshot));
      this.ph.funds = userProfileSnapshot.val().funds;
    });
  }
  async paymentInit() {
    console.log("Payment initialized");
  }

  async paymentDone(ref: any) {
    console.log("RESPNSE AFTER PAYMENT" + JSON.stringify(ref));
    console.log("funding to update payment" + this.funds);
    this.ph.UpdatePaymentType(2, this.funds);

    let reference = ref.reference;
    let trans = ref.trans;
    let status = ref.status;
    let user_id = this.ph.id;

    console.log("TRans Ref" + reference);

    this.ph.newSubscription(this.funds, reference, trans, status, user_id);

   
  }

  async paymentCancel() {
    console.log("payment failed");
  }
}
