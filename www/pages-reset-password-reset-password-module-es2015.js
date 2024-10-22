(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reset-password/reset-password.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reset-password/reset-password.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-padding\" no-border style=\"margin-top:20px\">\n\n  <ion-title>{{lp.translate()[0].j9}}</ion-title>\n\n</ion-header>\n<ion-content class=\"o-scroll\" class=\"ion-padding\">\n\n  <form [formGroup]=\"resetPasswordForm\" (submit)=\"resetPassword()\" novalidate>\n\n    <ion-item>\n      <ion-label color='primary' position=\"stacked\">{{lp.translate()[0].f10}}</ion-label>\n      <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Your email address\"\n        [class.invalid]=\"!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty\">\n      </ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"error-message\"\n      *ngIf=\"!resetPasswordForm.controls.email.valid  && resetPasswordForm.controls.email.dirty\">\n      <p>{{lp.translate()[0].h3}}</p>\n    </ion-item>\n\n    <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!resetPasswordForm.valid\" size=\"large\">\n      {{lp.translate()[0].j7}}\n    </ion-button>\n\n  </form>\n\n  <ion-button expand=\"block\" (click)='goToLogin()' size=\"large\">\n    Go Back\n  </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/pages/reset-password/reset-password.page.ts");







const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]
    }
];
let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content form {\n  margin-bottom: 26px;\n  height: 200px;\n  background: white;\n  border-radius: 12px;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n}\nion-content form ion-button {\n  margin-top: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDQUo7QURDSTtFQUNFLDJCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB3aWtpO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IGZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBhbmltYXRpb24tbmFtZTogd2lraTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.ts ***!
  \*************************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_validators_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/validators/email */ "./src/validators/email.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let ResetPasswordPage = class ResetPasswordPage {
    constructor(navCtrl, lp, authProvider, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_validators_email__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"].isValid])],
        });
    }
    resetPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.resetPasswordForm.valid) {
                console.log(this.resetPasswordForm.value);
            }
            else {
                this.authProvider.resetPassword(this.resetPasswordForm.value.email)
                    .then((user) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const alert = yield this.alertCtrl.create({
                        message: this.lp.translate()[0].j10,
                        buttons: [
                            {
                                text: this.lp.translate()[0].i9,
                                role: 'cancel',
                                handler: () => { this.navCtrl.pop(); }
                            }
                        ]
                    });
                    alert.present();
                }), (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const errorMessage = error.message;
                    const errorAlert = yield this.alertCtrl.create({
                        message: errorMessage,
                        buttons: [{ text: this.lp.translate()[0].i9, role: 'cancel' }]
                    });
                    errorAlert.present();
                }));
            }
        });
    }
    goToLogin() {
        this.navCtrl.navigateRoot('/');
    }
    ngOnInit() {
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ResetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__(/*! raw-loader!./reset-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reset-password/reset-password.page.html"),
        styles: [__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/pages/reset-password/reset-password.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ResetPasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-reset-password-reset-password-module-es2015.js.map