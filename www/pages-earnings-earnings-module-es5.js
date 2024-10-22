(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-earnings-earnings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/earnings/earnings.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/earnings/earnings.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border>\n  <ion-toolbar style=\"margin-top:20px\">\n\n    <ion-button (click)=\"goBack()\" color=\"primary\" fill=\"clear\">\n      <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon> <span\n        style=\"margin-left:30px; font-size: 1.4em\">Earnings</span>\n    </ion-button>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"no-scroll\" class=\"ion-padding\">\n\n  <h5 class=\"ion-padding\" text-center>Total Earnings: {{earnings}}</h5>\n\n  <h6 class=\"ion-text-center\">\n    Enter ID to recieve earnings\n  </h6>\n\n  <form id='myFomr' [formGroup]=\"cardpaymentForm\" (submit)=\"AddCard()\" novalidate>\n\n\n    <ion-item>\n      <ion-label color='primary' stacked>{{lp.translate()[0]}}.uid</ion-label>\n      <ion-input id='tezt' formControlName=\"card\" placeholder=\"Enter Your Code\"\n        [class.invalid]=\"!cardpaymentForm.controls.card.valid && cardpaymentForm.controls.card.dirty\"></ion-input>\n    </ion-item>\n\n    <ion-button class='button' expand=\"block\" type=\"submit\" [disabled]=\"!cardpaymentForm.valid\">\n      Accept\n    </ion-button>\n\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/earnings/earnings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/earnings/earnings.module.ts ***!
  \***************************************************/
/*! exports provided: EarningsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningsPageModule", function() { return EarningsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _earnings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./earnings.page */ "./src/app/pages/earnings/earnings.page.ts");







var routes = [
    {
        path: '',
        component: _earnings_page__WEBPACK_IMPORTED_MODULE_6__["EarningsPage"]
    }
];
var EarningsPageModule = /** @class */ (function () {
    function EarningsPageModule() {
    }
    EarningsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_earnings_page__WEBPACK_IMPORTED_MODULE_6__["EarningsPage"]]
        })
    ], EarningsPageModule);
    return EarningsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/earnings/earnings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/earnings/earnings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-bottom: 26px;\n  height: 200px auto;\n  background: white;\n  padding: 15px;\n  margin-top: 20px;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n}\nform ion-button {\n  margin-top: 20px !important;\n}\np {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-label {\n  text-align: center;\n}\n.invalid {\n  border: 1px solid #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9lYXJuaW5ncy9lYXJuaW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vhcm5pbmdzL2Vhcm5pbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNBRjtBREVFO0VBQ0UsMkJBQUE7QUNBSjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0FDREY7QURJQTtFQUNFLHlCQUFBO0FDREY7QURJQTtFQUNFLDJCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lYXJuaW5ncy9lYXJuaW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gIGhlaWdodDogMjAwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICBhbmltYXRpb24tbmFtZTogd2lraTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGNvbG9yOiAjZDJkMmQyO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmludmFsaWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjYxNTM7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIC5pdGVtLWlubmVyIHtcclxuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gIGhlaWdodDogMjAwcHggYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHdpa2k7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbn1cbmZvcm0gaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZDJkMmQyO1xufVxuXG5pb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNjE1Mztcbn1cblxuLmVycm9yLW1lc3NhZ2UgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/earnings/earnings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/earnings/earnings.page.ts ***!
  \*************************************************/
/*! exports provided: EarningsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningsPage", function() { return EarningsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");









var EarningsPage = /** @class */ (function () {
    function EarningsPage(navCtrl, formBuilder, lp, share, ph, settings, pop) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.lp = lp;
        this.share = share;
        this.ph = ph;
        this.settings = settings;
        this.pop = pop;
        this.randomCode = 'ghjkf';
        this.earnings = 0;
        this.earnings = ph.earnings;
        this.cardpaymentForm = formBuilder.group({
            card: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
    }
    EarningsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FreeridePage');
        console.log(this.randomCode);
    };
    EarningsPage.prototype.goBack = function () {
        this.navCtrl.navigateBack('home');
    };
    EarningsPage.prototype.AddCard = function () {
        this.SearchForSharingIDs(this.cardpaymentForm.value.card);
    };
    EarningsPage.prototype.SearchForSharingIDs = function (promoID) {
        var _this = this;
        console.log('SharingID search called');
        this.pop.presentLoader('');
        this.ph.getAllSharingID().on('value', function (SharingIDShot) {
            var SharingID = SharingIDShot.val().UserID[1];
            _this.pop.hideLoader();
            // SharingID
            if (SharingID != null) {
                console.log(SharingID, promoID);
                if (SharingID === promoID) {
                    console.log('SharingID found');
                }
                else {
                    console.log('rtyuiytrfghj');
                }
            }
            else {
                _this.ph.getAllSharingID().off('value');
            }
        });
    };
    EarningsPage.prototype.ngOnInit = function () {
    };
    EarningsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"] },
        { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"] }
    ]; };
    EarningsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-earnings',
            template: __webpack_require__(/*! raw-loader!./earnings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/earnings/earnings.page.html"),
            styles: [__webpack_require__(/*! ./earnings.page.scss */ "./src/app/pages/earnings/earnings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"], src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"]])
    ], EarningsPage);
    return EarningsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-earnings-earnings-module-es5.js.map