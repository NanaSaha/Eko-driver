(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-support-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/support/support.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/support/support.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar style=\"margin-top: 20px\">\n    <ion-button (click)=\"goBack()\" color=\"primary\" fill=\"clear\">\n      <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon>\n      <span style=\"margin-left: 30px; font-size: 1.4em\"\n        >Start A Conversation</span\n      >\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" class=\"ion-text-center\" class=\"yes-scroll\">\n  <div class=\"followed-items\">\n    <ion-list class=\"ion-text-center\" lines=\"none\">\n      <div class=\"ion-text-center\" *ngFor=\"let event of eventList\">\n        <ion-item text-wrap class=\"driver\" *ngIf=\"!event.user\" color=\"primary\">\n          <p>{{event.admin}}</p>\n        </ion-item>\n        <ion-item text-wrap class=\"user\" *ngIf=\"!event.admin\" color=\"primary\">\n          <p>{{event.user}}</p>\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-padding\">\n  <!-- <ion-item class=\"ion-padding\">\n    <ion-label class='stack' class=\"ion-padding\" position=\"stacked\">Emergency SOS</ion-label>\n    <ion-select [(ngModel)]=\"cartransmission\" multiple=\"false\">\n      <ion-select-option data-countryCode=\"1\" value=\"8500\" selected>car has been hijacked</ion-select-option>\n      <ion-select-option data-countryCode=\"2\" value=\"9000\">car has broken down</ion-select-option>\n      <ion-select-option data-countryCode=\"1\" value=\"7000\">involved in a car accident</ion-select-option>\n      <ion-select-option data-countryCode=\"2\" value=\"1000\">police/sars/road safety/law enforcement harassment\n      </ion-select-option>\n    </ion-select>\n  </ion-item> -->\n  <h4 class=\"ion-text-center\">Available 24/7</h4>\n  <!-- <ion-grid> -->\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button\n        class=\"button\"\n        class=\"ion-text-center\"\n        color=\"dark\"\n        (click)=\"Send()\"\n      >\n        Send Message\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button\n        class=\"ion-text-center\"\n        class=\"button\"\n        color=\"primary\"\n        (click)=\"callNow()\"\n      >\n        <ion-icon name=\"call\" class=\"callIcon\"></ion-icon>\n        Call Eko\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <!-- </ion-grid> -->\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/support/support.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support.page */ "./src/app/pages/support/support.page.ts");







const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]
    }
];
let SupportPageModule = class SupportPageModule {
};
SupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
    })
], SupportPageModule);



/***/ }),

/***/ "./src/app/pages/support/support.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-select {\n  width: 140px;\n}\nion-content h1 {\n  background: #f7f7f7;\n  font-size: 1.67em;\n  padding-top: 7px;\n  width: auto;\n  padding-bottom: 7px;\n}\nion-content .followed-items .driver {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 30px;\n  padding: 10px;\n  float: left;\n  width: 80%;\n}\nion-content .followed-items .driver p {\n  font-size: 16px;\n  font-size: 4vw;\n  color: white;\n}\nion-content .followed-items .user {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 30px;\n  border: 0px solid rgba(212, 212, 212, 0.93);\n  padding: 10px;\n  float: right;\n  width: 70%;\n}\nion-content .followed-items .user p {\n  font-size: 16px;\n  font-size: 4vw;\n  color: white;\n}\nion-content .topped-items ion-item {\n  margin-top: 0px;\n  margin-bottom: 6px;\n}\nion-content .topped-items h2 {\n  color: orange;\n  font-size: 1.27em;\n  padding: 2px;\n}\nion-content .topped-items ion-label {\n  color: black !important;\n  font-size: 1em;\n  padding: 2px;\n}\nion-footer {\n  background-color: transparent;\n  background: transparent;\n}\nion-footer ion-button {\n  height: 65px;\n}\nion-footer h2 {\n  font-size: 1em;\n  height: auto;\n}\nion-footer ion-icon {\n  margin: 5px;\n}\nion-footer .profile-pic {\n  width: 15%;\n  height: 18%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQ0FKO0FER0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNESjtBREtJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFHQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNMTjtBRE9NO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTFI7QURTSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNSTjtBRFVNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDUlI7QURjSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ1pOO0FEY0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDWk47QURlSTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNiTjtBRGtCQTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7QUNmRjtBRGlCRTtFQUNFLFlBQUE7QUNmSjtBRG1CRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDakJKO0FEb0JFO0VBQ0UsV0FBQTtBQ2xCSjtBRHFCRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDbkJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBpb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICBmb250LXNpemU6IDEuNjdlbTtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgfVxyXG5cclxuICAuZm9sbG93ZWQtaXRlbXMge1xyXG4gICAgLmRyaXZlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG9wcGVkLWl0ZW1zIHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yN2VtO1xyXG4gICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IHJnYigwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgLy8gd2lkdGg6IDE0MHB4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLXBpYyB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgaGVpZ2h0OiAxOCU7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTQwcHg7XG59XG5pb24tY29udGVudCBoMSB7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIGZvbnQtc2l6ZTogMS42N2VtO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cbmlvbi1jb250ZW50IC5mb2xsb3dlZC1pdGVtcyAuZHJpdmVyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogODAlO1xufVxuaW9uLWNvbnRlbnQgLmZvbGxvd2VkLWl0ZW1zIC5kcml2ZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiA0dnc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC5mb2xsb3dlZC1pdGVtcyAudXNlciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA3MCU7XG59XG5pb24tY29udGVudCAuZm9sbG93ZWQtaXRlbXMgLnVzZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiA0dnc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC50b3BwZWQtaXRlbXMgaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbmlvbi1jb250ZW50IC50b3BwZWQtaXRlbXMgaDIge1xuICBjb2xvcjogb3JhbmdlO1xuICBmb250LXNpemU6IDEuMjdlbTtcbiAgcGFkZGluZzogMnB4O1xufVxuaW9uLWNvbnRlbnQgLnRvcHBlZC1pdGVtcyBpb24tbGFiZWwge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNjVweDtcbn1cbmlvbi1mb290ZXIgaDIge1xuICBmb250LXNpemU6IDFlbTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWZvb3RlciBpb24taWNvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuaW9uLWZvb3RlciAucHJvZmlsZS1waWMge1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDE4JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/support/support.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/support/support.page.ts ***!
  \***********************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











let SupportPage = class SupportPage {
    constructor(navCtrl, pop, http, call, settings, modal, alert, eventProvider, ph, lp, activatedRoute) {
        this.navCtrl = navCtrl;
        this.pop = pop;
        this.http = http;
        this.call = call;
        this.settings = settings;
        this.modal = modal;
        this.alert = alert;
        this.eventProvider = eventProvider;
        this.ph = ph;
        this.lp = lp;
        this.activatedRoute = activatedRoute;
        this.cartransmission = "car is beign hijacked.";
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
    }
    ngOnInit() { }
    ionViewDidEnter() {
        console.log("inregf");
        this.eventProvider
            .getSupportChatList(this.eventProvider.id)
            .on("value", (snapshot) => {
            this.eventList = [];
            console.log("sjiy");
            snapshot.forEach((snap) => {
                this.eventList.push({
                    id: snap.key,
                    admin: snap.val().Admin_Message,
                    user: snap.val().Client_Message,
                });
                console.log(this.eventList);
                return false;
            });
        });
    }
    closeChat() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modal.dismiss();
        });
    }
    callNow() {
        window.open("tel:" + this.settings.companyPhone);
        // this.send('Driver Needs Support SOS code: ' + this.cartransmission, 'Trace the driver information to the admin', this.ph.user.email);
    }
    Send() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: "message",
                inputs: [
                    {
                        name: "Message",
                        placeholder: "Reply",
                    },
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "Send",
                        handler: (data) => {
                            console.log(this.ph.user.email);
                            // this.send(
                            //   "Support Message from Driver with ID " + this.ph.user.uid,
                            //   data.Message,
                            //   this.ph.user.email
                            // );
                            this.eventProvider.Complain(data.Message, this.eventProvider.id);
                        },
                    },
                ],
            });
            alert.present();
        });
    }
    send(subject, message, email) {
        // const url =
        //   "https://api.mailgun.net/v3/" + this.settings.mailGUrl + "/messages";
        // const body = {
        //   from: email,
        //   to: this.settings.companyMail,
        //   // tslint:disable-next-line: object-literal-shorthand
        //   subject: subject,
        //   // tslint:disable-next-line: max-line-length
        //   html:
        //     "<html><body>First Name: " +
        //     this.settings.appName +
        //     "<br>" +
        //     "Last Name: " +
        //     this.settings.appLink +
        //     "<br>" +
        //     "Email: " +
        //     email +
        //     "<br>" +
        //     "Subject: " +
        //     subject +
        //     "<br><br>" +
        //     "Message: " +
        //     message +
        //     "</body></html>",
        // };
        // const headers = {
        //   Authorization: "Basic " + this.settings.mailGKey,
        //   "Content-Type": "application/x-www-form-urlencoded",
        // };
        // this.http
        //   .post(url, body, headers)
        //   .then((data) => {
        //     console.log("SUCCESS -> " + JSON.stringify(data));
        //   })
        //   .catch((error) => {
        //     this.pop.showPimp(JSON.stringify(error));
        //   });
    }
    goBack() {
        this.navCtrl.navigateBack("home");
    }
};
SupportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
];
SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-support",
        template: __webpack_require__(/*! raw-loader!./support.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/support/support.page.html"),
        styles: [__webpack_require__(/*! ./support.page.scss */ "./src/app/pages/support/support.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"],
        src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
], SupportPage);



/***/ })

}]);
//# sourceMappingURL=pages-support-support-module-es2015.js.map