(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about/about.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about/about.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\n  <ion-toolbar style=\"margin-top:20px\">\n    <ion-button (click)=\"Back()\" color=\"primary\" fill=\"clear\">\n      <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon> <span\n        style=\"margin-left:30px; font-size: 1.4em\">About</span>\n    </ion-button>\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n<ion-content class=\"no-scroll\" class=\"ion-padding\">\n\n  <ion-button size=\"large\" color=\"primary\" expand=\"block\" (click)=\"gotoSite()\">\n    {{settings.appName}} {{Lang[0].website}}\n  </ion-button>\n  <ion-button size=\"large\" color=\"primary\" expand=\"block\" (click)=\"gotoSite2()\">\n    {{settings.appName}} {{Lang[0].a1}}\n  </ion-button>\n  <ion-button size=\"large\" color=\"primary\" expand=\"block\" (click)=\"gotoSite3()\">\n    FAQ\n  </ion-button>\n\n  <br>\n  <ion-button size=\"large\" color=\"primary\" expand=\"block\" (click)=\"gotoSite9()\">\n    Facebook\n  </ion-button>\n\n  <ion-button size=\"large\" color=\"danger\" expand=\"block\" (click)=\"gotoSite10()\">\n    Instagram <strong>@{{settings.appName}}</strong>\n  </ion-button>\n  <br>\n  <br>\n  <ion-button size=\"large\" class=\"ion-text-center\" color=\"primary\" fill=\"clear\" expand=\"block\" (click)=\"gotoSite4()\">\n    Terms and Conditions\n  </ion-button>\n\n  <ion-label class=\"ion-padding\" class=\"ion-text-center\">\n\n\n  </ion-label>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");







var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-button {\n  border-radius: 12px;\n  height: 70px;\n}\nion-content .butt {\n  margin-top: 60%;\n  height: 50px;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxuICAuYnV0dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iLCJpb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuaW9uLWNvbnRlbnQgLmJ1dHQge1xuICBtYXJnaW4tdG9wOiA2MCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");






var AboutPage = /** @class */ (function () {
    function AboutPage(iab, lp, settings, navCtrl) {
        this.iab = iab;
        this.lp = lp;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.Lang = this.lp.translate();
    }
    AboutPage.prototype.gotoSite = function () {
        this.iab.create(this.settings.appLink);
    };
    AboutPage.prototype.gotoSite2 = function () {
        this.iab.create(this.settings.appCareer);
    };
    AboutPage.prototype.gotoSite3 = function () {
        this.iab.create(this.settings.appFaq);
    };
    AboutPage.prototype.gotoSite4 = function () {
        this.iab.create(this.settings.appTerms);
    };
    AboutPage.prototype.gotoSite9 = function () {
        this.iab.create(this.settings.appFB);
    };
    AboutPage.prototype.gotoSite10 = function () {
        this.iab.create(this.settings.appinsta);
    };
    AboutPage.prototype.Back = function () {
        this.navCtrl.navigateBack('home');
    };
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage.ctorParameters = function () { return [
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] },
        { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"],
            src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module-es5.js.map