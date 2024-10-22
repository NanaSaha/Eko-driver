(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-waiting-waiting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/waiting/waiting.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/waiting/waiting.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\"> {{lp.translate()[0].l3}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div [ngStyle]=\"{'margin-top': 30 + '%'}\">\n    <h3 class=\"ion-text-center\">\n      Congratulations!! &#127881;\n     \n    </h3>\n\n     <p>You have completed your registration</p>\n      <p>We will notify you on approval after verification within the next 24 hours</p>\n      <p>Be advised to come to our near by office with your car or meet one of our agents at your location for introduction</p>\n      <p>Thank you! </p>\n  </div>\n\n  <ion-button\n    class=\"button\"\n    size=\"large\"\n    [ngStyle]=\"{'margin-top': 30 + '%'}\"\n    color=\"primary\"\n    expand=\"block\"\n    (click)=\"close()\"\n  >\n    Accept\n  </ion-button>\n\n  <p class=\"centerTextfoot\">\n    <img src=\"/assets/img/happy2.png\" />\n  </p>\n</ion-content>\n\n<!-- <ion-footer>\n  <img src=\"/assets/img/happy2.png\" />\n</ion-footer> -->\n"

/***/ }),

/***/ "./src/app/pages/waiting/waiting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/waiting/waiting.module.ts ***!
  \*************************************************/
/*! exports provided: WaitingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingPageModule", function() { return WaitingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _waiting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./waiting.page */ "./src/app/pages/waiting/waiting.page.ts");







const routes = [
    {
        path: '',
        component: _waiting_page__WEBPACK_IMPORTED_MODULE_6__["WaitingPage"]
    }
];
let WaitingPageModule = class WaitingPageModule {
};
WaitingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_waiting_page__WEBPACK_IMPORTED_MODULE_6__["WaitingPage"]]
    })
], WaitingPageModule);



/***/ }),

/***/ "./src/app/pages/waiting/waiting.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/waiting/waiting.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content text {\n  margin-top: 40%;\n}\nion-content .centerTextfoot {\n  text-align: center;\n  margin-top: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy93YWl0aW5nL3dhaXRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93YWl0aW5nL3dhaXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhaXRpbmcvd2FpdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyVGV4dGZvb3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gIH1cclxufVxyXG4iLCJpb24tY29udGVudCB0ZXh0IHtcbiAgbWFyZ2luLXRvcDogNDAlO1xufVxuaW9uLWNvbnRlbnQgLmNlbnRlclRleHRmb290IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/waiting/waiting.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/waiting/waiting.page.ts ***!
  \***********************************************/
/*! exports provided: WaitingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingPage", function() { return WaitingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");








let WaitingPage = class WaitingPage {
    constructor(navCtrl, ph, platform, lp, settings, iab, zone) {
        this.navCtrl = navCtrl;
        this.ph = ph;
        this.platform = platform;
        this.lp = lp;
        this.settings = settings;
        this.iab = iab;
        this.zone = zone;
    }
    ionViewDidLoad() {
        console.log("ionViewDidLoad WaitingPage");
        // if (!this.platform.is("cordova")) {
        //   this.ph
        //     .getUserProfil()
        //     .child(this.ph.id)
        //     .child("userInfo")
        //     .update({
        //       active_state: true,
        //     })
        //     .then((success) => {
        //       this.navCtrl.navigateRoot("waiting");
        //     });
        // }
    }
    gotoSite2() { }
    close() {
        console.log("APP CLOSE CLICKED");
        if (this.platform.is("cordova")) {
            // this.zone.run(() => {
            this.navCtrl.navigateRoot("home");
            // });
        }
        else {
            // this.zone.run(() => {
            this.navCtrl.navigateRoot("home");
            // });
        }
    }
    ngOnInit() { }
};
WaitingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
WaitingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-waiting",
        template: __webpack_require__(/*! raw-loader!./waiting.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/waiting/waiting.page.html"),
        styles: [__webpack_require__(/*! ./waiting.page.scss */ "./src/app/pages/waiting/waiting.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"],
        src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], WaitingPage);



/***/ })

}]);
//# sourceMappingURL=pages-waiting-waiting-module-es2015.js.map