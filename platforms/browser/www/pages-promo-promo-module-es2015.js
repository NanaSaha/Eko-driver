(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-promo-promo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/promo/promo.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/promo/promo.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar style=\"margin-top: 20px\">\n    <ion-button size=\"large\" fill=\"clear\" (click)=\"goBack()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n      <span style=\"padding-left: 30px; font-size: 1em\">Promo Code</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"o-scroll\" padding>\n  <div id=\"recaptcha-container\"></div>\n\n  <h3>Enter your code to activate your discount</h3>\n  <div class=\"form\">\n    <ion-input\n      class=\"input\"\n      lines=\"none\"\n      type=\"text\"\n      placeholder=\"eg. RIDE4EKODOT\"\n      [(ngModel)]=\"code\"\n    ></ion-input>\n\n    <ion-button\n      icon-only\n      [ngStyle]=\"{'margin-top': 20 + 'px'}\"\n      color=\"primary\"\n      expand=\"block\"\n      (click)=\"apply_code(code)\"\n    >\n      Apply Code\n    </ion-button>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <img src=\"/assets/img/happy2.png\" />\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/promo/promo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/promo/promo.module.ts ***!
  \*********************************************/
/*! exports provided: PromoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoPageModule", function() { return PromoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _promo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promo.page */ "./src/app/pages/promo/promo.page.ts");







const routes = [
    {
        path: '',
        component: _promo_page__WEBPACK_IMPORTED_MODULE_6__["PromoPage"]
    }
];
let PromoPageModule = class PromoPageModule {
};
PromoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_promo_page__WEBPACK_IMPORTED_MODULE_6__["PromoPage"]]
    })
], PromoPageModule);



/***/ }),

/***/ "./src/app/pages/promo/promo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/promo/promo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-md:before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-image: url();\n  background-repeat: repeat-x;\n  content: \"\" !important;\n}\n\nform {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9wcm9tby9wcm9tby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb21vL3Byb21vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvbW8vcHJvbW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1tZDpiZWZvcmUge1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIGJvdHRvbTogYXV0bztcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbiIsIi5mb290ZXItbWQ6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMnB4O1xuICBib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcbn1cblxuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/promo/promo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/promo/promo.page.ts ***!
  \*******************************************/
/*! exports provided: PromoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoPage", function() { return PromoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let PromoPage = class PromoPage {
    constructor(navCtrl, lp, ph, pop, location) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.ph = ph;
        this.pop = pop;
        this.location = location;
    }
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
    AddCode(code) {
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
            }
            else {
                this.pop.presentToast("PROMO CODE NOT VALID");
                console.log("NOT VALID");
                this.pop.hideLoader();
            }
        });
    }
    goBack() {
        this.location.back();
    }
    ngOnInit() { }
};
PromoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
PromoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-promo",
        template: __webpack_require__(/*! raw-loader!./promo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/promo/promo.page.html"),
        styles: [__webpack_require__(/*! ./promo.page.scss */ "./src/app/pages/promo/promo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
], PromoPage);



/***/ })

}]);
//# sourceMappingURL=pages-promo-promo-module-es2015.js.map