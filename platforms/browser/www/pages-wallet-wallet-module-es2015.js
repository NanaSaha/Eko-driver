(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-wallet-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wallet/wallet.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wallet/wallet.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar style=\"margin-top: 20px\">\n    <ion-button (click)=\"goBack()\" color=\"primary\" fill=\"clear\">\n      <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon>\n      <span style=\"margin-left: 30px; font-size: 1.4em\"\n        >Subscription Wallet</span\n      >\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngIf=\"ph.funds\" style=\"text-align: center; margin-top: 20%\">\n    <h4>\n      You have successfully funded\n      <span style=\"color: #fbb91d\">GHC {{ph.funds}} </span>in your wallet. You\n      have 30 days to use it on Ekodot. Enjoy driving!\n    </h4>\n  </ion-item>\n\n  <div class=\"centerDiv2\" *ngIf=\"ph.funds\">\n    <ion-button (click)=\"updateFundsO()\" slot=\"end\">\n      <ion-icon class=\"ion-text-center\" name=\"ios-add\"></ion-icon> Renew 30- day\n      Subscription\n    </ion-button>\n  </div>\n\n  <!-- <ion-item class=\"ion-padding\" *ngIf=\"ph.funds\" (click)=\"updateFundsO()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-padding\" col-6>\n          <ion-icon class=\"ion-text-center\" name=\"ios-add\"></ion-icon>\n          Renew 30- day Subscription\n        </ion-col>\n  \n      </ion-row>\n    </ion-grid>\n  </ion-item> -->\n\n  <div style=\"text-align: center; margin-top: 20%\" *ngIf=\"!ph.funds\">\n    <h4>Subscribe to drive with Ekodot!</h4>\n\n    <p>\n      Fund your wallet of <span style=\"color: #fbb91d\">GHC 100 </span>and have\n      30 days to use it on Ekodot. Enjoy driving!\n    </p>\n\n    <div class=\"centerDiv2\">\n      <ion-button (click)=\"subscribe()\" slot=\"end\">\n        <ion-icon class=\"ion-text-center\" name=\"ios-add\"></ion-icon> Fund Wallet\n      </ion-button>\n    </div>\n  </div>\n\n  <div class=\"centerDiv2\" *ngIf=\"funds\">\n    <angular4-paystack\n      [key]=\"'pk_live_3cbc59938d89297220920c120790e6bd28d07d91'\"\n      [email]=\"'nana@ekodot.com'\"\n      [amount]=\"funds\"\n      [ref]=\"random_id\"\n      [channels]=\"channels\"\n      [currency]=\"'GHS'\"\n      (close)=\"paymentCancel()\"\n      (callback)=\"paymentDone($event)\"\n      >Pay GHC {{funds}} with Mobile Money/Card</angular4-paystack\n    >\n  </div>\n\n  <!-- <ion-button\n    [disabled]=\"funds == 0 || ph.funds\"\n    color=\"primary\"\n    expand=\"block\"\n    size=\"large\"\n    (click)=\"AddNow()\"\n  >\n    ADD FUNDS\n  </ion-button> -->\n</ion-content>\n\n<ion-footer>\n  <img src=\"/assets/img/payment.png\" />\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/wallet/wallet.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.module.ts ***!
  \***********************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet.page */ "./src/app/pages/wallet/wallet.page.ts");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/fesm2015/angular4-paystack.js");








const routes = [
    {
        path: "",
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"],
    },
];
let WalletPageModule = class WalletPageModule {
};
WalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            angular4_paystack__WEBPACK_IMPORTED_MODULE_7__["Angular4PaystackModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]],
    })
], WalletPageModule);



/***/ }),

/***/ "./src/app/pages/wallet/wallet.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary {\n  border: 0;\n  border-radius: 6px;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n  background-color: #000000 !important;\n  --background-color: #000000 !important;\n  color: #fbb91d !important;\n  height: 40px;\n}\n\nbutton {\n  border: 0;\n  border-radius: 6px;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n  background-color: #000000 !important;\n  --background-color: #000000 !important;\n  color: #fbb91d !important;\n  height: 40px;\n}\n\n.centerDiv2 {\n  position: relative;\n  text-align: center;\n  margin-top: 5%;\n}\n\nion-footer {\n  background: transparent !important;\n}\n\n.footer-md:before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-image: url();\n  background-repeat: repeat-x;\n  content: \"\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEZ0JBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNiRjs7QURnQkE7RUFDRSxrQ0FBQTtBQ2JGOztBRGdCQTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ2JGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnkge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZiYjkxZCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmJiOTFkICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLy8gYnV0dG9uIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBib3JkZXItcmFkaXVzOiAwO1xuLy8gICBmb250LWZhbWlseTogaW5oZXJpdDtcbi8vICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbi8vICAgZm9udC12YXJpYW50OiBpbmhlcml0O1xuLy8gICBsaW5lLWhlaWdodDogMTtcbi8vICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4vLyAgIC0tYmFja2dyb3VuZDogI2ZiYjkxZCAhaW1wb3J0YW50O1xuLy8gICBtYXJnaW46IDE2cHg7XG4vLyB9XG5cbi5jZW50ZXJEaXYyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci1tZDpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICB0b3A6IC0ycHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xufVxuIiwiLmJ0bi1wcmltYXJ5IHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXZhcmlhbnQ6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmYmI5MWQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZiYjkxZCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5jZW50ZXJEaXYyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci1tZDpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICB0b3A6IC0ycHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/wallet/wallet.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/wallet/wallet.page.ts ***!
  \*********************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");




let WalletPage = class WalletPage {
    constructor(navCtrl, alertCtrl, ph) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.ph = ph;
        this.ammount = 0;
        this.funds = 0;
        this.public_key = "pk_live_3cbc59938d89297220920c120790e6bd28d07d91"; //Put your paystack Test or Live Key here
        this.channels = ["bank", "card", "ussd", "qr", "mobile_money"]; //Paystack Payment Methods
        this.random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
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
        }
        else {
            this.updateFunds();
        }
    }
    goBack() {
        this.navCtrl.navigateBack("home");
    }
    updateFunds() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
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
        });
    }
    subscribe() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
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
        });
    }
    updateFundsO() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
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
        });
    }
    ngOnInit() {
        console.log("INIT TRIGGERED", this.ph.id);
        this.ph.getUserProfile().on("value", (userProfileSnapshot) => {
            console.log("FUNDS-->" + userProfileSnapshot.val());
            console.log("FUNDS-->" + JSON.stringify(userProfileSnapshot));
            this.ph.funds = userProfileSnapshot.val().funds;
        });
    }
    paymentInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("Payment initialized");
        });
    }
    paymentDone(ref) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("RESPNSE AFTER PAYMENT" + JSON.stringify(ref));
            console.log("funding to update payment" + this.funds);
            this.ph.UpdatePaymentType(2, this.funds);
            let reference = ref.reference;
            let trans = ref.trans;
            let status = ref.status;
            let user_id = this.ph.id;
            console.log("TRans Ref" + reference);
            this.ph.newSubscription(this.funds, reference, trans, status, user_id);
        });
    }
    paymentCancel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("payment failed");
        });
    }
};
WalletPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }
];
WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-wallet",
        template: __webpack_require__(/*! raw-loader!./wallet.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wallet/wallet.page.html"),
        styles: [__webpack_require__(/*! ./wallet.page.scss */ "./src/app/pages/wallet/wallet.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])
], WalletPage);



/***/ })

}]);
//# sourceMappingURL=pages-wallet-wallet-module-es2015.js.map