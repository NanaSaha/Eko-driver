(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-phone-phone-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/phone/phone.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/phone/phone.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the AccountkitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div class=\"o_section\" *ngIf=\"!requestCode\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-fab-button\n            style=\"width: 40px; height: 35px\"\n            class=\"padding\"\n            color=\"Menubutton\"\n            color=\"primary\"\n            expand=\"block\"\n          >\n            +233\n          </ion-fab-button>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-input\n            class=\"input\"\n            type=\"text\"\n            placeholder=\"2321XXXXXXXXX\"\n            [(ngModel)]=\"userName\"\n          ></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-button\n      class=\"padding\"\n      color=\"primary\"\n      id=\"mybutton\"\n      expand=\"block\"\n      (click)=\"AuthPhone(userName)\"\n      >SUBMIT</ion-button\n    >\n  </div>\n\n  <div class=\"o_section\" *ngIf=\"requestCode\">\n    <ion-icon\n      style=\"text-align: center\"\n      class=\"stack\"\n      class=\"padding\"\n      color=\"primary\"\n      position=\"stacked\"\n      >Enter Verification Code</ion-icon\n    >\n    <ion-input\n      class=\"input\"\n      type=\"text\"\n      placeholder=\"00000\"\n      [(ngModel)]=\"userName\"\n    ></ion-input>\n\n    <ion-button\n      class=\"padding\"\n      color=\"gery\"\n      id=\"mybutton\"\n      expand=\"block\"\n      (click)=\"AuthCode(userName)\"\n      >VERIFY</ion-button\n    >\n\n    <div text-center><span id=\"countdown\"></span> sec!</div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/phone/phone.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/phone/phone.module.ts ***!
  \*********************************************/
/*! exports provided: PhonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePageModule", function() { return PhonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phone.page */ "./src/app/pages/phone/phone.page.ts");







const routes = [
    {
        path: '',
        component: _phone_page__WEBPACK_IMPORTED_MODULE_6__["PhonePage"]
    }
];
let PhonePageModule = class PhonePageModule {
};
PhonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_phone_page__WEBPACK_IMPORTED_MODULE_6__["PhonePage"]]
    })
], PhonePageModule);



/***/ }),

/***/ "./src/app/pages/phone/phone.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/phone/phone.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-size: cover;\n  background-position: center;\n}\nion-content form {\n  margin-bottom: 26px;\n  height: 300px auto;\n  background: white;\n  padding: 10px;\n  border-radius: 30px;\n  margin-top: 20px;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n}\nion-content p {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-content ion-label {\n  text-align: center;\n}\nion-content .o_section {\n  position: fixed;\n  background: #f7f7f7;\n  height: 150px;\n  top: 70%;\n  width: 90%;\n  padding: 4px;\n  border-radius: 30px;\n  left: 5%;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: bump;\n          animation-name: bump;\n  -webkit-animation-duration: 0.8s;\n          animation-duration: 0.8s;\n  z-index: 12;\n}\n@-webkit-keyframes bump {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: 70%;\n  }\n}\n@keyframes bump {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: 70%;\n  }\n}\nion-content ion-input {\n  padding: 5px;\n}\nion-content .invalid {\n  border: 1px solid #ff6153;\n}\nion-content .error-message .item-inner {\n  border-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9waG9uZS9waG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bob25lL3Bob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHNCQUFBO0VBQ0EsMkJBQUE7QUNBRjtBRENFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNDSjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBRENFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLDJDQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0U7RUFDRTtJQUNFLFNBQUE7RUNDSjtFREVFO0lBQ0UsUUFBQTtFQ0FKO0FBQ0Y7QURQRTtFQUNFO0lBQ0UsU0FBQTtFQ0NKO0VERUU7SUFDRSxRQUFBO0VDQUo7QUFDRjtBREVFO0VBQ0UsWUFBQTtBQ0FKO0FERUU7RUFDRSx5QkFBQTtBQ0FKO0FERUU7RUFDRSwyQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGhvbmUvcGhvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWcvYS1zcGxhc2gtMS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgIGhlaWdodDogMzAwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6ICNkMmQyZDI7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5vX3NlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB0b3A6IDcwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJ1bXA7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XHJcbiAgICB6LWluZGV4OiAxMjtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBidW1wIHtcclxuICAgIDAlIHtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLy8gNTAlIHt0b3A6IDkwJTt9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdG9wOiA3MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjYxNTM7XHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIC5pdGVtLWlubmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgaGVpZ2h0OiAzMDBweCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbn1cbmlvbi1jb250ZW50IHAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2QyZDJkMjtcbn1cbmlvbi1jb250ZW50IGlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5vX3NlY3Rpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIGhlaWdodDogMTUwcHg7XG4gIHRvcDogNzAlO1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGxlZnQ6IDUlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiBidW1wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XG4gIHotaW5kZXg6IDEyO1xufVxuQGtleWZyYW1lcyBidW1wIHtcbiAgMCUge1xuICAgIHRvcDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDcwJTtcbiAgfVxufVxuaW9uLWNvbnRlbnQgaW9uLWlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY2MTUzO1xufVxuaW9uLWNvbnRlbnQgLmVycm9yLW1lc3NhZ2UgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/phone/phone.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/phone/phone.page.ts ***!
  \*******************************************/
/*! exports provided: PhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePage", function() { return PhonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let PhonePage = class PhonePage {
    constructor(navCtrl, settings, http, platform, pop, ph, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.http = http;
        this.platform = platform;
        this.pop = pop;
        this.ph = ph;
        this.loadingCtrl = loadingCtrl;
        this.isNotCordova = false;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ "Content-Type": "application/json" }),
        };
    }
    AuthPhone(phone) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (phone) {
                const loading = yield this.loadingCtrl.create({
                    spinner: null,
                    message: "Please wait...",
                    translucent: true,
                    cssClass: "custom-class custom-loading",
                });
                yield loading.present();
                this.PhoneNumber = phone;
                this.http
                    .post("https://us-central1-ridefhv-61945.cloudfunctions.net/Verify", {
                    number: "+233" + phone,
                    appName: this.settings.appName,
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => response))
                    .subscribe((res) => {
                    this.requestCode = res.request_id;
                    console.log("RESPSONSE::: ", res);
                    console.log("REQUEST::: ", this.requestCode);
                    loading.dismiss();
                }, (error) => {
                    this.pop.showPimp(JSON.stringify(error));
                    console.log("ERROR::: ", error);
                    loading.dismiss();
                });
                this.http
                    .post("https://us-central1-ridefhv-61945.cloudfunctions.net/Verify", {
                    number: "+233" + phone,
                    appName: this.settings.appName,
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => response))
                    .subscribe((res) => {
                    this.userName = "";
                    console.log("RESPSONSE::: ", res);
                    loading.dismiss();
                }, (error) => {
                    this.pop.showPimp(JSON.stringify(error));
                    console.log("ERROR::: ", error);
                    //this.pop.hideLoader();
                    loading.dismiss();
                });
                this.http
                    .post("https://us-central1-ridefhv-61945.cloudfunctions.net/Verify", {
                    number: "+233" + phone,
                    appName: this.settings.appName,
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => response))
                    .subscribe((res) => {
                    this.startTimer();
                    console.log("RESPSONSE::: ", res);
                    loading.dismiss();
                }, (error) => {
                    this.pop.showPimp(JSON.stringify(error));
                    console.log("ERROR::: ", error);
                    // this.pop.hideLoader();
                    loading.dismiss();
                });
            }
        });
    }
    AuthCode(code) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (code) {
                const loading = yield this.loadingCtrl.create({
                    spinner: null,
                    duration: 3000,
                    message: "Please wait...",
                    translucent: true,
                    cssClass: "custom-class custom-loading",
                });
                yield loading.present();
                this.http
                    .post("https://us-central1-ridefhv-61945.cloudfunctions.net/Verify", {
                    reqID: this.requestCode,
                    code: code,
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => response.json()))
                    .subscribe((res) => {
                    if (res.status == 0) {
                        this.ph.UpdateNumber(this.PhoneNumber).then(() => {
                            this.navCtrl.navigateRoot("more-info");
                            loading.dismiss();
                        });
                    }
                }, (error) => {
                    this.pop.showPimp("Couldnt get code");
                    this.requestCode = false;
                    this.userName = "";
                });
            }
        });
    }
    startTimer() {
        this.timeleft = 50;
        var downloadTimer = setInterval(() => {
            if (this.timeleft <= 0) {
                clearInterval(downloadTimer);
                this.userName = "";
                document.getElementById("countdown").innerHTML = "Finished";
                this.requestCode = false;
            }
            else {
                console.log(this.timeleft);
                document.getElementById("countdown").innerHTML =
                    "Try Again In " + this.timeleft;
            }
            this.timeleft -= 1;
        }, 1000);
    }
    ngOnInit() { }
};
PhonePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
PhonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-phone",
        template: __webpack_require__(/*! raw-loader!./phone.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/phone/phone.page.html"),
        styles: [__webpack_require__(/*! ./phone.page.scss */ "./src/app/pages/phone/phone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], PhonePage);



/***/ })

}]);
//# sourceMappingURL=pages-phone-phone-module-es2015.js.map