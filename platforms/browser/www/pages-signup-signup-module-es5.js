(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"o-scroll\" class=\"ion-padding\">\n  <ion-button (click)=\"goToBack()\" fill=\"clear\">\n    <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon>\n  </ion-button>\n\n  <form [formGroup]=\"signupForm\" (submit)=\"signupUser()\" novalidate>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"stacked\"\n        >{{lp.translate()[0].f10}}</ion-label\n      >\n      <ion-input\n        formControlName=\"email\"\n        type=\"email\"\n        placeholder=\"username@domain.com\"\n        [class.invalid]=\"!signupForm.controls.email.valid && signupForm.controls.email.dirty\"\n      ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color=\"primary\" position=\"stacked\"\n        >{{lp.translate()[0].g1}}</ion-label\n      >\n      <ion-input\n        formControlName=\"password\"\n        type=\"password\"\n        placeholder=\"password\"\n        [class.invalid]=\"!signupForm.controls.password.valid && signupForm.controls.password.dirty\"\n      ></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!signupForm.valid\">\n      Sign Up\n    </ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes wiki {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes wiki {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nion-content form {\n  margin-bottom: 16px;\n  height: 300px;\n  background: white;\n  padding: 10px;\n  border-radius: 12px;\n  margin-top: 85%;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  border: 1px solid #d8d8d8;\n  box-shadow: 0px 1.5px 0px 0px rgba(3, 3, 3, 0.253);\n}\nion-content form ion-button {\n  margin-top: 50px !important;\n  border-radius: 12px;\n}\nion-content .new-background-color {\n  margin-top: 10px;\n}\nion-content p {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-content ion-input {\n  padding: 30px;\n}\nion-content ion-item {\n  --inner-padding-start: 0px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  padding: 2px;\n}\nion-content ion-button {\n  background: #0a64eb;\n  height: 50px;\n  color: #ffffff;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  border-radius: 12px;\n}\nion-content .terms {\n  margin-top: 40px;\n  color: #0a64eb;\n  text-align: center;\n}\nion-content .logo-text {\n  color: #0a64eb;\n  text-align: center;\n  font-size: 1.2em;\n}\nion-content .logo-text1 {\n  color: #0a64eb;\n  text-align: center;\n  font-size: 1.4em;\n  font-weight: 200;\n  text-transform: uppercase;\n}\nion-content .o_section {\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRTtJQUNFLFVBQUE7RUNESjtFREdFO0lBQ0UsVUFBQTtFQ0RKO0FBQ0Y7QURMRTtFQUNFO0lBQ0UsVUFBQTtFQ0RKO0VER0U7SUFDRSxVQUFBO0VDREo7QUFDRjtBREdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0RBQUE7QUNESjtBREVJO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQ0FOO0FER0U7RUFDRSxnQkFBQTtBQ0RKO0FESUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNGSjtBRElFO0VBQ0UsYUFBQTtBQ0ZKO0FESUU7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDRko7QURJRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGSjtBRElFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRElFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDRko7QURJRTtFQUNFLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWcvbG9nby1iZy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyO1xyXG4gIEBrZXlmcmFtZXMgd2lraSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4NSU7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogd2lraTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMS41cHggMHB4IDBweCByZ2JhKDMsIDMsIDMsIDAuMjUzKTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWcvbG9nby1iZy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogI2QyZDJkMjtcclxuICB9XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEwLCAxMDAsIDIzNSk7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB3aWtpO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgfVxyXG4gIC50ZXJtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgY29sb3I6IHJnYigxMCwgMTAwLCAyMzUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubG9nby10ZXh0IHtcclxuICAgIGNvbG9yOiByZ2IoMTAsIDEwMCwgMjM1KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG4gIC5sb2dvLXRleHQxIHtcclxuICAgIGNvbG9yOiByZ2IoMTAsIDEwMCwgMjM1KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLm9fc2VjdGlvbiB7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogd2lraTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgfVxyXG59XHJcbiIsIkBrZXlmcmFtZXMgd2lraSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmlvbi1jb250ZW50IGZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogODUlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiB3aWtpO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIGJveC1zaGFkb3c6IDBweCAxLjVweCAwcHggMHB4IHJnYmEoMywgMywgMywgMC4yNTMpO1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IHAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2QyZDJkMjtcbn1cbmlvbi1jb250ZW50IGlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5pb24tY29udGVudCBpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzBhNjRlYjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBhbmltYXRpb24tbmFtZTogd2lraTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgLnRlcm1zIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgY29sb3I6ICMwYTY0ZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5sb2dvLXRleHQge1xuICBjb2xvcjogIzBhNjRlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuaW9uLWNvbnRlbnQgLmxvZ28tdGV4dDEge1xuICBjb2xvcjogIzBhNjRlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW9uLWNvbnRlbnQgLm9fc2VjdGlvbiB7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHdpa2k7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_validators_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/validators/email */ "./src/validators/email.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");








var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, lp, authProvider, formBuilder, loadingCtrl, ph, alertCtrl) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.ph = ph;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            email: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_validators_email__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"].isValid]),
            ],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            ],
        });
    }
    SignupPage.prototype.signupUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.signupForm.valid) return [3 /*break*/, 1];
                        console.log(this.signupForm.value);
                        return [3 /*break*/, 3];
                    case 1:
                        this.authProvider
                            .signupUser(this.signupForm.value.email, this.signupForm.value.password)
                            .then(function () {
                            _this.loadingCtrl.dismiss().then(function () {
                                _this.navCtrl.navigateForward("more-info");
                                // this.navCtrl.navigateForward('phone');
                            });
                        }, function (error) {
                            _this.loadingCtrl.dismiss().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var alert;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.alertCtrl.create({
                                                message: error.message,
                                                buttons: [
                                                    {
                                                        text: this.lp.translate()[0].c6,
                                                        role: "cancel",
                                                    },
                                                ],
                                            })];
                                        case 1:
                                            alert = _a.sent();
                                            alert.present();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 2:
                        loading = _a.sent();
                        loading.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.goToBack = function () {
        this.navCtrl.navigateRoot("login-entrance");
    };
    SignupPage.prototype.ngOnInit = function () { };
    SignupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map