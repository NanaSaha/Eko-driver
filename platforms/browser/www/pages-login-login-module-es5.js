(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scroll=\"true\" overflow-scroll=\"true\">\n  <div class=\"imgBack\">\n    <div id=\"overlay\">\n    \n      <div class=\"backText\">\n        <h3 class=\"smallText\">Welcome to</h3>\n        <h1 class=\"BigText\">EKO<span id=\"verySmall\">Driver</span></h1>\n      </div>\n    </div>\n  </div>\n\n  <div overflow-scroll=\"true\" class=\"centerLogin\">\n    <br />\n  \n    <div id=\"sign-in-button\"></div>\n\n    <ion-grid class=\"phoneAuthGrid\" *ngIf=\"showPhone\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-item class=\"countryCode\">\n            <div><img src=\"/assets/flags/gha.svg\" class=\"flag\" /> +233</div>\n           \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-input\n            clearInput\n            type=\"number\"\n            placeholder=\"Your Phone Number\"\n            [(ngModel)]=\"PhoneNo\"\n            class=\"input ion-padding-horizontal\"\n            clear-input=\"true\"\n          ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button\n            expand=\"block\"\n            (click)=\"signinWithPhoneNumber($event)\"\n            class=\"btn-transition\"\n          >\n            Sign In With Phone Number</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div *ngIf=\"showOtpComponent\" class=\"alignCen\">\n      <h2 style=\"text-align: center\">Enter Your OTP Code Here To Login</h2>\n      <ng-otp-input\n        #ngOtpInput\n        (onInputChange)=\"onOtpChange($event)\"\n        [config]=\"config\"\n        style=\"text-align: center\"\n      ></ng-otp-input>\n      <br />\n      <ion-button class=\"btn-transition\" style=\"text-align: center\">\n        Resend Code\n      </ion-button>\n    </div>\n    \n  </div>\n\n\n  <p class=\"centerText\">\n    If you are creating a new account,\n    <span style=\"color: red\">Terms & Conditions</span> and\n    <span style=\"color: red\">Privacy Policy</span>\n    will apply.\n  </p>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/fesm5/ng-otp-input.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");









var routes = [
    {
        path: "",
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"],
    },
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bk-color {\n  position: relative;\n  text-align: center;\n}\n\n.countryCode {\n  border: 1px solid gainsboro;\n  border-radius: 10px;\n}\n\n.imgBack {\n  background-image: url(/assets/img/login2.jpg);\n  height: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  align-content: center;\n  text-align: center;\n}\n\n.BigText {\n  font-size: 50px;\n  font-weight: 900;\n  letter-spacing: -0.1px;\n  line-height: 30px;\n  margin-bottom: 2px;\n  margin-top: 0.5rem;\n  color: white;\n}\n\n#verySmall {\n  font-size: 24px;\n  font-weight: 900;\n  letter-spacing: -0.1px;\n  line-height: 30px;\n  margin-bottom: 2px;\n  margin-top: 0.5rem;\n  color: white;\n}\n\n.smallText {\n  font-size: 24px;\n  font-weight: 100;\n  letter-spacing: -0.1px;\n  line-height: 30px;\n  margin-bottom: 2px;\n  margin-top: 0.5rem;\n  color: white;\n}\n\n.backText {\n  line-height: 30px;\n  text-align: left;\n  margin-left: 5%;\n  padding-top: 65%;\n}\n\n@media (min-width: 320px) {\n  .backText {\n    line-height: 30px;\n    text-align: left;\n    margin-left: 5%;\n    padding-top: 50%;\n  }\n}\n\n@media (min-width: 360px) {\n  .backText {\n    line-height: 30px;\n    text-align: left;\n    margin-left: 5%;\n    padding-top: 50%;\n  }\n\n  .smallText {\n    font-size: 25px;\n    font-weight: 100;\n    letter-spacing: -0.1px;\n    line-height: 45px;\n    margin-bottom: 2px;\n    margin-top: 0.5rem;\n    color: white;\n  }\n}\n\n@media (min-width: 375px) {\n  .backText {\n    line-height: 30px;\n    text-align: left;\n    margin-left: 5%;\n    padding-top: 58%;\n  }\n\n  .smallText {\n    font-size: 25px;\n    font-weight: 100;\n    letter-spacing: -0.1px;\n    line-height: 45px;\n    margin-bottom: 2px;\n    margin-top: 0.5rem;\n    color: white;\n  }\n}\n\n@media (min-width: 411px) {\n  .backText {\n    line-height: 30px;\n    text-align: left;\n    margin-left: 5%;\n    padding-top: 55%;\n  }\n\n  .smallText {\n    font-size: 25px;\n    font-weight: 100;\n    letter-spacing: -0.1px;\n    line-height: 45px;\n    margin-bottom: 2px;\n    margin-top: 0.5rem;\n    color: white;\n  }\n}\n\n@media (min-width: 540px) {\n  .backText {\n    line-height: 30px;\n    text-align: left;\n    margin-left: 5%;\n    padding-top: 45%;\n  }\n\n  .smallText {\n    font-size: 25px;\n    font-weight: 100;\n    letter-spacing: -0.1px;\n    line-height: 45px;\n    margin-bottom: 2px;\n    margin-top: 0.5rem;\n    color: white;\n  }\n}\n\n@media (min-width: 600px) {\n  .backText {\n    line-height: 30px;\n    text-align: left;\n    margin-left: 5%;\n    padding-top: 60%;\n  }\n\n  .smallText {\n    font-size: 35px;\n    font-weight: 100;\n    letter-spacing: -0.1px;\n    line-height: 45px;\n    margin-bottom: 2px;\n    margin-top: 0.5rem;\n    color: white;\n  }\n}\n\n@media (min-width: 768px) {\n  .backText {\n    line-height: 30px;\n    text-align: left;\n    margin-left: 5%;\n    padding-top: 50%;\n  }\n\n  .smallText {\n    font-size: 35px;\n    font-weight: 100;\n    letter-spacing: -0.1px;\n    line-height: 45px;\n    margin-bottom: 2px;\n    margin-top: 0.5rem;\n    color: white;\n  }\n}\n\n@media (min-width: 800px) {\n  .backText {\n    line-height: 30px;\n    text-align: left;\n    margin-left: 5%;\n    padding-top: 50%;\n  }\n\n  .smallText {\n    font-size: 50px;\n    font-weight: 100;\n    letter-spacing: -0.1px;\n    line-height: 45px;\n    margin-bottom: 2px;\n    margin-top: 0.5rem;\n    color: white;\n  }\n\n  .BigText {\n    font-size: 80px;\n    font-weight: 900;\n    letter-spacing: -0.1px;\n    line-height: 50px;\n    margin-bottom: 2px;\n    margin-top: 0.5rem;\n    color: white;\n  }\n}\n\nion-item {\n  --border-color: var(--ion-color-danger, #ffffff);\n  --border-color: white;\n  --highlight-color-invalid: rgb(255, 255, 255);\n  --highlight-color-valid: rgb(255, 255, 255);\n}\n\n.flag {\n  width: 20px;\n  /* height: 10px; */\n  vertical-align: middle;\n  margin-left: 8px;\n}\n\n.centerLogin {\n  margin-top: 1%;\n  background-color: white;\n  z-index: 999999;\n}\n\n.headerText {\n  text-align: center;\n  font-size: 20px !important;\n  margin-bottom: 5%;\n}\n\n.button-native {\n  --background: black !important;\n  --background-hover: black !important;\n}\n\n.alignCen {\n  position: relative !important;\n  text-align: center !important;\n}\n\n.background_whole {\n  z-index: 0 !important;\n  --background: linear-gradient(360deg, #fff 80%, #000000 50%) !important;\n}\n\n.move_segment {\n  margin-top: 10%;\n}\n\n.logoSize {\n  text-align: center;\n  width: 30%;\n  align-content: center;\n  margin-left: 0%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.centerText {\n  text-align: center;\n  font-size: 15px !important;\n  margin-top: 30%;\n  position: fixed;\n  color: #000000;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n#overlay {\n  position: fixed;\n  /* display: none; */\n  width: 100%;\n  height: 50%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #00000061;\n  z-index: 10;\n  cursor: pointer;\n}\n\nion-content[_ngcontent-dog-c1] .phoneCountry[_ngcontent-dog-c1] {\n  border: 1px solid gainsboro;\n  border-radius: 10px;\n  margin-left: 2px;\n  background-color: #000000 !important;\n  color: #fbb91d;\n}\n\n.footer-md:before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-image: url();\n  background-repeat: repeat-x;\n  content: \"\" !important;\n}\n\nion-content {\n  /** RTL **/\n}\n\n@-webkit-keyframes wiki {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes wiki {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\nion-content form {\n  margin-bottom: 16px;\n  height: 300px;\n  background: white;\n  padding: 10px;\n  border-radius: 12px;\n  margin-top: 5%;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  border: 1px solid #d8d8d8;\n  box-shadow: 0px 1.5px 0px 0px rgba(3, 3, 3, 0.253);\n}\n\nion-content form ion-button {\n  margin-top: 10px !important;\n  border-radius: 12px;\n}\n\nion-content .new-background-color {\n  margin-top: 10px;\n}\n\nion-content p {\n  font-size: 0.8em;\n}\n\nion-content ion-input {\n  padding: 30px;\n}\n\nion-content ion-item {\n  --inner-padding-start: 0px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  padding: 2px;\n}\n\nion-content ion-button {\n  --background: rgb(0, 0, 0) !important;\n  height: 50px;\n  color: #ffffff;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  border-radius: 10px;\n}\n\nion-content .terms {\n  margin-top: 40px;\n  color: #fbb91d;\n  text-align: center;\n}\n\nion-content .logo-text {\n  color: #fbb91d;\n  text-align: center;\n  font-size: 1.2em;\n}\n\nion-content .logo-text1 {\n  color: #fbb91d;\n  text-align: center;\n  font-size: 1.4em;\n  font-weight: 200;\n  text-transform: uppercase;\n}\n\nion-content .o_section {\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n}\n\nion-content .main {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n@media screen and (min-width: 767px) {\n  ion-content ion-card {\n    width: 600px;\n    margin: auto;\n  }\n}\n\nion-content ion-card {\n  --background: #fff;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  overflow: scroll;\n}\n\nion-content .input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 10px;\n  font-size: 0.9em !important;\n}\n\nion-content .input {\n  height: 52px !important;\n}\n\nion-content .otpinput {\n  letter-spacing: 30px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-size: 30px;\n  border: none;\n  background: white;\n}\n\nion-content .white {\n  color: white;\n}\n\nion-content .OTP-border ion-col div {\n  border-bottom: 1px solid;\n}\n\nion-content .small {\n  font-size: 13px;\n}\n\nion-content .small a {\n  text-decoration: unset !important;\n}\n\nion-content .button-color {\n  background-color: var(--ion-color-mytheme);\n}\n\nion-content .logo {\n  width: 1.25em !important;\n}\n\nion-content .grid {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-content .row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-content .img-logo {\n  height: 120px;\n  width: 120px;\n}\n\nion-content .fire-logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-bottom: 30px;\n}\n\nion-content .bold {\n  font-weight: bold;\n}\n\nion-content .block {\n  display: block;\n}\n\nion-content .transition {\n  background: -webkit-gradient(linear, left top, right top, color-stop(14%, #fbb91d), color-stop(96%, #fbb91d));\n  background: linear-gradient(to right, #fbb91d 14%, #fbb91d 96%);\n  color: black;\n}\n\nion-content .btn-color {\n  color: #fbb91d;\n}\n\nion-content .error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold;\n}\n\nion-content .invoice-box {\n  max-width: 800px;\n  margin: auto;\n  padding: 30px;\n  border: 1px solid #eee;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  font-size: 16px;\n  line-height: 24px;\n  font-family: \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif;\n  color: #555;\n}\n\nion-content .invoice-box table {\n  width: 100%;\n  line-height: inherit;\n  text-align: left;\n}\n\nion-content .invoice-box table td {\n  padding: 5px;\n  vertical-align: top;\n}\n\nion-content .invoice-box table tr td:nth-child(2) {\n  text-align: right;\n}\n\nion-content .invoice-box table tr.top table td {\n  padding-bottom: 20px;\n}\n\nion-content .btn-transition {\n  background: -webkit-gradient(linear, left top, right top, color-stop(14%, #000000), color-stop(96%, #000000));\n  background: linear-gradient(to right, #000000 14%, #000000 96%);\n  color: #fbb91d;\n}\n\nion-content .emailbtn {\n  background-color: #000000;\n  color: #fbb91d;\n}\n\nion-content .input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 10px;\n  font-size: 0.9em !important;\n}\n\nion-content .phoneCountry {\n  border: 1px solid gainsboro;\n  border-radius: 3px;\n  margin-left: 2px;\n  background-color: #000000 !important;\n  color: #fbb91d;\n}\n\nion-content .phoneAuthGrid {\n  border: 1px solid #ccc;\n  margin: 0 7px;\n  border-radius: 3px;\n  background-color: #ffffff;\n  z-index: 0 !important;\n}\n\nion-content .invoice-box table tr.top table td.title {\n  font-size: 45px;\n  line-height: 45px;\n  color: #333;\n}\n\nion-content .invoice-box table tr.information table td {\n  padding-bottom: 40px;\n}\n\nion-content .invoice-box table tr.heading td {\n  background: #eee;\n  border-bottom: 1px solid #ddd;\n  font-weight: bold;\n}\n\nion-content .invoice-box table tr.details td {\n  padding-bottom: 20px;\n}\n\nion-content .invoice-box table tr.item td {\n  border-bottom: 1px solid #eee;\n}\n\nion-content .invoice-box table tr.item.last td {\n  border-bottom: none;\n}\n\nion-content .invoice-box table tr.total td:nth-child(2) {\n  border-top: 2px solid #eee;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 600px) {\n  ion-content .invoice-box table tr.top table td {\n    width: 100%;\n    display: block;\n    text-align: center;\n  }\n  ion-content .invoice-box table tr.information table td {\n    width: 100%;\n    display: block;\n    text-align: center;\n  }\n}\n\nion-content .rtl {\n  direction: rtl;\n  font-family: Tahoma, \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif;\n}\n\nion-content .rtl table {\n  text-align: right;\n}\n\nion-content .rtl table tr td:nth-child(2) {\n  text-align: left;\n}\n\n.ionic-selectable:not(.ionic-selectable-has-label) {\n  background: #000000 !important;\n  color: #fbb91d !important;\n  border-radius: 10px;\n}\n\n.ionic-selectable-icon-inner {\n  color: var(--icon-color, #fbb91d) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLGtCQUFBO0VBRUEsa0JBQUE7QUNGRjs7QURLQTtFQUdLLDJCQUFBO0VBQ0gsbUJBQUE7QUNKRjs7QURXQTtFQUNFLDZDQUFBO0VBR0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNWRjs7QURhQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDVkY7O0FEYUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNWRjs7QURhQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWRjs7QURhQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ1ZGO0FBQ0Y7O0FEYUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNYRjs7RURhQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQ1ZGO0FBQ0Y7O0FEYUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNYRjs7RURhQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQ1ZGO0FBQ0Y7O0FEYUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNYRjs7RURhQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQ1ZGO0FBQ0Y7O0FEYUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNYRjs7RURhQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQ1ZGO0FBQ0Y7O0FEYUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNYRjs7RURjQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQ1hGO0FBQ0Y7O0FEY0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNaRjs7RURlQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQ1pGO0FBQ0Y7O0FEZUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNiRjs7RURnQkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNiRjs7RURnQkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFB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QUFBO0FDL0RKOztBRG9HQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ2pHRjs7QURvR0E7RUFDRSw0Q0FBQTtBQ2pHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iay1jb2xvciB7XHJcbiAgLy8gYmFja2dyb3VuZDogI2ZiYjkxZDtcclxuICAvLyBoZWlnaHQ6IDE1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gei1pbmRleDogOTk5OTk5OTk5OTk5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3VudHJ5Q29kZXtcclxuICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZiYjkxZDtcclxuXHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDJweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiOTFkICFpbXBvcnRhbnQ7ICBcclxufVxyXG5cclxuXHJcblxyXG4uaW1nQmFjayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2xvZ2luMi5qcGcpO1xyXG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2FoYW5hbmEvaW1hZ2UvdXBsb2FkL3YxNjQwMDg4MDE5L2RyaXZpbmdfeXRlZ2ZpLmdpZlwiKTtcclxuXHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uQmlnVGV4dCB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3ZlcnlTbWFsbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNtYWxsVGV4dCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhY2tUZXh0IHtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXRvcDogNjUlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcclxuICAuYmFja1RleHQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy10b3A6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNjBweCkge1xyXG4gIC5iYWNrVGV4dCB7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gIH1cclxuICAuc21hbGxUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIHtcclxuICAuYmFja1RleHQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy10b3A6IDU4JTtcclxuICB9XHJcbiAgLnNtYWxsVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQxMXB4KSB7XHJcbiAgLmJhY2tUZXh0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctdG9wOiA1NSU7XHJcbiAgfVxyXG4gIC5zbWFsbFRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDBweCkge1xyXG4gIC5iYWNrVGV4dCB7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogNDUlO1xyXG4gIH1cclxuICAuc21hbGxUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAuYmFja1RleHQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy10b3A6IDYwJTtcclxuICB9XHJcblxyXG4gIC5zbWFsbFRleHQge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5iYWNrVGV4dCB7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgLmJhY2tUZXh0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctdG9wOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuc21hbGxUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuQmlnVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2ZmZmZmZik7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7IC8vIGRlZmF1bHQgdW5kZXJsaW5lIGNvbG9yXHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8vIGludmFsaWQgdW5kZXJsaW5lIGNvbG9yXHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogcmdiKDI1NSwgMjU1LCAyNTUpOyAvLyB2YWxpZCB1bmRlcmxpbmUgY29sb3JcclxuICB9XHJcblxyXG4uZmxhZyB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgLyogaGVpZ2h0OiAxMHB4OyAqL1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmNlbnRlckxvZ2luIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcbn1cclxuXHJcbi5oZWFkZXJUZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5idXR0b24tbmF0aXZlIHtcclxuICAtLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxpZ25DZW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5kX3dob2xlIHtcclxuICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjZmZmIDgwJSwgIzAwMDAwMCA1MCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vdmVfc2VnbWVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4ubG9nb1NpemUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMzAlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uY2VudGVyVGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4jb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2MTtcclxuICB6LWluZGV4OiAxMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50W19uZ2NvbnRlbnQtZG9nLWMxXSAucGhvbmVDb3VudHJ5W19uZ2NvbnRlbnQtZG9nLWMxXSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmYmI5MWQ7XHJcbn1cclxuXHJcbi5mb290ZXItbWQ6YmVmb3JlIHtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogLTJweDtcclxuICBib3R0b206IGF1dG87XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAuY2FyIHtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgLy8gdG9wOiA0MCU7XHJcbi8vICAgLy8gd2lkdGg6IDUwJTtcclxuLy8gICBsZWZ0OiAyNSU7XHJcbi8vIH1cclxuXHJcbi8vIC5yb2FkMSB7XHJcbi8vICAgLy8gbGVmdDogLTUxMzlweDtcclxuLy8gICBhbmltYXRpb246IHJvYWQxIDEwcyBpbmZpbml0ZSBsaW5lYXIgcmV2ZXJzZTtcclxuLy8gfVxyXG5cclxuLy8gQGtleWZyYW1lcyByb2FkMSB7XHJcbi8vICAgZnJvbSB7XHJcbi8vICAgICBsZWZ0OiAtNTEzOXB4O1xyXG4vLyAgIH1cclxuLy8gICB0byB7XHJcbi8vICAgICBsZWZ0OiAwcHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9hLXNwbGFzaC0xLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIC8gY292ZXI7XHJcbiAgQGtleWZyYW1lcyB3aWtpIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDg1JTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHdpa2k7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEuNXB4IDBweCAwcHggcmdiYSgzLCAzLCAzLCAwLjI1Myk7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubmV3LWJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8vYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWcvYS1zcGxhc2gtMS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAvL2NvbG9yOiAjZDJkMmQyO1xyXG4gIH1cclxuICBpb24taW5wdXQge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogd2lraTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAudGVybXMge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGNvbG9yOiAjZmJiOTFkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubG9nby10ZXh0IHtcclxuICAgIGNvbG9yOiAjZmJiOTFkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICB9XHJcbiAgLmxvZ28tdGV4dDEge1xyXG4gICAgY29sb3I6ICNmYmI5MWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5vX3NlY3Rpb24ge1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHdpa2k7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIH1cclxuXHJcbiAgLm1haW4ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tY2FyZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcbiAgLmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm90cGlucHV0IHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzMHB4O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgLndoaXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLk9UUC1ib3JkZXIge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ1dHRvbi1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XHJcbiAgfVxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmdyaWQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmltZy1sb2dvIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgfVxyXG4gIC5maXJlLWxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgLmJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnRyYW5zaXRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmJiOTFkIDE0JSwgI2ZiYjkxZCA5NiUpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuYnRuLWNvbG9yIHtcclxuICAgIGNvbG9yOiAjZmJiOTFkO1xyXG4gIH1cclxuICAuZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuaW52b2ljZS1ib3gge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuXHJcbiAgLmludm9pY2UtYm94IHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmludm9pY2UtYm94IHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG5cclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmludm9pY2UtYm94IHRhYmxlIHRyLnRvcCB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmJ0bi10cmFuc2l0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDAwMCAxNCUsICMwMDAwMDAgOTYlKTtcclxuICAgIGNvbG9yOiAjZmJiOTFkO1xyXG4gIH1cclxuXHJcbiAgLmVtYWlsYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBjb2xvcjogI2ZiYjkxZDtcclxuICB9XHJcblxyXG4gIC5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGhvbmVDb3VudHJ5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZiYjkxZDtcclxuICB9XHJcbiAgLnBob25lQXV0aEdyaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbjogMCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgei1pbmRleDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG9wIHRhYmxlIHRkLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG5cclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaW5mb3JtYXRpb24gdGFibGUgdGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaGVhZGluZyB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5pbnZvaWNlLWJveCB0YWJsZSB0ci5kZXRhaWxzIHRkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmludm9pY2UtYm94IHRhYmxlIHRyLml0ZW0gdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgfVxyXG5cclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaXRlbS5sYXN0IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG90YWwgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZWVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG9wIHRhYmxlIHRkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmludm9pY2UtYm94IHRhYmxlIHRyLmluZm9ybWF0aW9uIHRhYmxlIHRkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogUlRMICoqL1xyXG4gIC5ydGwge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICBmb250LWZhbWlseTogVGFob21hLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIEhlbHZldGljYSwgQXJpYWwsXHJcbiAgICAgIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAucnRsIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLnJ0bCB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbi8vIC5jYXIge1xyXG4vLyAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICB3aWR0aDogNDAwcHg7XHJcbi8vICAgYW5pbWF0aW9uOiBtb3ZpbmcgMTBzIGxpbmVhciAtMnMgaW5maW5pdGU7XHJcbi8vIH1cclxuLy8gLmNhcjpiZWZvcmUge1xyXG4vLyAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgYW5pbWF0aW9uOiBjYXJtb3ZlIDMuMXMgaW5maW5pdGUgbGluZWFyO1xyXG4vLyAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20veFdOT0cucG5nXCIpIGNlbnRlci9jb3ZlcjtcclxuLy8gICBwYWRkaW5nLXRvcDogNDUuMjUlO1xyXG4vLyB9XHJcblxyXG4vLyAud2VlbCB7XHJcbi8vICAgYW5pbWF0aW9uOiB3aGVlbCAxMHMgaW5maW5pdGUgLTJzIGxpbmVhcjtcclxuLy8gICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2kuc3RhY2suaW1ndXIuY29tLzBPc2p4LnBuZ1wiKSBjZW50ZXIvY292ZXI7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIGJvdHRvbTogMC44JTtcclxuLy8gICB3aWR0aDogMTQuMTUlO1xyXG4vLyB9XHJcbi8vIC53ZWVsOmJlZm9yZSB7XHJcbi8vICAgY29udGVudDogXCJcIjtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBwYWRkaW5nLXRvcDogMTAwJTtcclxuLy8gfVxyXG4vLyAud2VlbDEge1xyXG4vLyAgIGxlZnQ6IDE0LjUlO1xyXG4vLyB9XHJcbi8vIC53ZWVsMiB7XHJcbi8vICAgcmlnaHQ6IDEwJTtcclxuLy8gfVxyXG5cclxuLmlvbmljLXNlbGVjdGFibGU6bm90KC5pb25pYy1zZWxlY3RhYmxlLWhhcy1sYWJlbCkge1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZiYjkxZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pb25pYy1zZWxlY3RhYmxlLWljb24taW5uZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yLCAjZmJiOTFkKSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5iay1jb2xvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY291bnRyeUNvZGUge1xuICBib3JkZXI6IDFweCBzb2xpZCBnYWluc2Jvcm87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbWdCYWNrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2xvZ2luMi5qcGcpO1xuICBoZWlnaHQ6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLkJpZ1RleHQge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jdmVyeVNtYWxsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNtYWxsVGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrVGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiA2NSU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xuICAuYmFja1RleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctdG9wOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNjBweCkge1xuICAuYmFja1RleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctdG9wOiA1MCU7XG4gIH1cblxuICAuc21hbGxUZXh0IHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIHtcbiAgLmJhY2tUZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXRvcDogNTglO1xuICB9XG5cbiAgLnNtYWxsVGV4dCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxMXB4KSB7XG4gIC5iYWNrVGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcGFkZGluZy10b3A6IDU1JTtcbiAgfVxuXG4gIC5zbWFsbFRleHQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NDBweCkge1xuICAuYmFja1RleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctdG9wOiA0NSU7XG4gIH1cblxuICAuc21hbGxUZXh0IHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmJhY2tUZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXRvcDogNjAlO1xuICB9XG5cbiAgLnNtYWxsVGV4dCB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjFweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5iYWNrVGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcGFkZGluZy10b3A6IDUwJTtcbiAgfVxuXG4gIC5zbWFsbFRleHQge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAuYmFja1RleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctdG9wOiA1MCU7XG4gIH1cblxuICAuc21hbGxUZXh0IHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLkJpZ1RleHQge1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmZmZmZmYpO1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmZsYWcge1xuICB3aWR0aDogMjBweDtcbiAgLyogaGVpZ2h0OiAxMHB4OyAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uY2VudGVyTG9naW4ge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLmhlYWRlclRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmJ1dHRvbi1uYXRpdmUge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmFsaWduQ2VuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZF93aG9sZSB7XG4gIHotaW5kZXg6IDAgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjZmZmIDgwJSwgIzAwMDAwMCA1MCUpICFpbXBvcnRhbnQ7XG59XG5cbi5tb3ZlX3NlZ21lbnQge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5sb2dvU2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmNlbnRlclRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAzMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuI292ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNjE7XG4gIHotaW5kZXg6IDEwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1jb250ZW50W19uZ2NvbnRlbnQtZG9nLWMxXSAucGhvbmVDb3VudHJ5W19uZ2NvbnRlbnQtZG9nLWMxXSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZiYjkxZDtcbn1cblxuLmZvb3Rlci1tZDpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICB0b3A6IC0ycHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC8qKiBSVEwgKiovXG59XG5Aa2V5ZnJhbWVzIHdpa2kge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5pb24tY29udGVudCBmb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiB3aWtpO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIGJveC1zaGFkb3c6IDBweCAxLjVweCAwcHggMHB4IHJnYmEoMywgMywgMywgMC4yNTMpO1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IHAge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWlucHV0IHtcbiAgcGFkZGluZzogMzBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cbmlvbi1jb250ZW50IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiB3aWtpO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY29udGVudCAudGVybXMge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBjb2xvcjogI2ZiYjkxZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmxvZ28tdGV4dCB7XG4gIGNvbG9yOiAjZmJiOTFkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5pb24tY29udGVudCAubG9nby10ZXh0MSB7XG4gIGNvbG9yOiAjZmJiOTFkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5pb24tY29udGVudCAub19zZWN0aW9uIHtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBhbmltYXRpb24tbmFtZTogd2lraTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xufVxuaW9uLWNvbnRlbnQgLm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIGlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuaW9uLWNvbnRlbnQgLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmlucHV0IHtcbiAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAub3RwaW5wdXQge1xuICBsZXR0ZXItc3BhY2luZzogMzBweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLk9UUC1ib3JkZXIgaW9uLWNvbCBkaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5pb24tY29udGVudCAuc21hbGwge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5pb24tY29udGVudCAuc21hbGwgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5idXR0b24tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG59XG5pb24tY29udGVudCAubG9nbyB7XG4gIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5ncmlkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuaW1nLWxvZ28ge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG59XG5pb24tY29udGVudCAuZmlyZS1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IC5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLnRyYW5zaXRpb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYmI5MWQgMTQlLCAjZmJiOTFkIDk2JSk7XG4gIGNvbG9yOiBibGFjaztcbn1cbmlvbi1jb250ZW50IC5idG4tY29sb3Ige1xuICBjb2xvcjogI2ZiYjkxZDtcbn1cbmlvbi1jb250ZW50IC5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLmludm9pY2UtYm94IHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzU1NTtcbn1cbmlvbi1jb250ZW50IC5pbnZvaWNlLWJveCB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmlvbi1jb250ZW50IC5pbnZvaWNlLWJveCB0YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbmlvbi1jb250ZW50IC5pbnZvaWNlLWJveCB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmlvbi1jb250ZW50IC5pbnZvaWNlLWJveCB0YWJsZSB0ci50b3AgdGFibGUgdGQge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmlvbi1jb250ZW50IC5idG4tdHJhbnNpdGlvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDAwMCAxNCUsICMwMDAwMDAgOTYlKTtcbiAgY29sb3I6ICNmYmI5MWQ7XG59XG5pb24tY29udGVudCAuZW1haWxidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogI2ZiYjkxZDtcbn1cbmlvbi1jb250ZW50IC5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5waG9uZUNvdW50cnkge1xuICBib3JkZXI6IDFweCBzb2xpZCBnYWluc2Jvcm87XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZiYjkxZDtcbn1cbmlvbi1jb250ZW50IC5waG9uZUF1dGhHcmlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAwIDdweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuaW52b2ljZS1ib3ggdGFibGUgdHIudG9wIHRhYmxlIHRkLnRpdGxlIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgY29sb3I6ICMzMzM7XG59XG5pb24tY29udGVudCAuaW52b2ljZS1ib3ggdGFibGUgdHIuaW5mb3JtYXRpb24gdGFibGUgdGQge1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbmlvbi1jb250ZW50IC5pbnZvaWNlLWJveCB0YWJsZSB0ci5oZWFkaW5nIHRkIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLmludm9pY2UtYm94IHRhYmxlIHRyLmRldGFpbHMgdGQge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmlvbi1jb250ZW50IC5pbnZvaWNlLWJveCB0YWJsZSB0ci5pdGVtIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG5pb24tY29udGVudCAuaW52b2ljZS1ib3ggdGFibGUgdHIuaXRlbS5sYXN0IHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5pbnZvaWNlLWJveCB0YWJsZSB0ci50b3RhbCB0ZDpudGgtY2hpbGQoMikge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGlvbi1jb250ZW50IC5pbnZvaWNlLWJveCB0YWJsZSB0ci50b3AgdGFibGUgdGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBpb24tY29udGVudCAuaW52b2ljZS1ib3ggdGFibGUgdHIuaW5mb3JtYXRpb24gdGFibGUgdGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuaW9uLWNvbnRlbnQgLnJ0bCB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBmb250LWZhbWlseTogVGFob21hLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5pb24tY29udGVudCAucnRsIHRhYmxlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5pb24tY29udGVudCAucnRsIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pb25pYy1zZWxlY3RhYmxlOm5vdCguaW9uaWMtc2VsZWN0YWJsZS1oYXMtbGFiZWwpIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZiYjkxZCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW9uaWMtc2VsZWN0YWJsZS1pY29uLWlubmVyIHtcbiAgY29sb3I6IHZhcigtLWljb24tY29sb3IsICNmYmI5MWQpICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_validators_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/validators/email */ "./src/validators/email.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var CountryJson2 = /** @class */ (function () {
    function CountryJson2() {
    }
    return CountryJson2;
}());
var LoginPage = /** @class */ (function () {
    function LoginPage(pop, navCtrl, lp, settings, platform, menu, loadingCtrl, zone, alertCtrl, authProvider, ph, formBuilder, router) {
        this.pop = pop;
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.platform = platform;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.ph = ph;
        this.formBuilder = formBuilder;
        this.router = router;
        this.overall_list = "signin";
        this.initState = false;
        this.CountryJson = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].CountryJson;
        this.OTP = "";
        this.showOTPInput = false;
        this.showPhone = true;
        this.showEmail = false;
        this.showButton = false;
        this.OTPmessage = "An OTP is sent to your number. You should receive it in 15 s";
        this.showOtpComponent = false;
        this.config = {
            allowNumbersOnly: true,
            length: 6,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: "*",
            inputStyles: {
                width: "50px",
                height: "50px",
            },
        };
        // console.log("JSON COMING", this.CountryJson);
        // console.log("DIAL_CODE", this.CountryJson[0].dial_code);
        // tslint:disable-next-line: deprecation
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.enable(false);
        this.zone.run(function () {
            _this.loginForm = _this.formBuilder.group({
                email: [
                    "",
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_validators_email__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"].isValid]),
                ],
                password: [
                    "",
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                ],
            });
            _this.signupForm = _this.formBuilder.group({
                email: [
                    "",
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_validators_email__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"].isValid]),
                ],
                password: [
                    "",
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                ],
            });
            if (_this.initState) {
                _this.platform.backButton.subscribe(function () {
                    navigator["app"].exitApp();
                });
            }
            else {
                _this.platform.backButton.subscribe(function () {
                    _this.initState = false;
                });
            }
        });
    };
    LoginPage.prototype.countryCodeChange = function (event) {
        this.CountryCode = event.value;
        console.log("CountryCode", this.CountryCode.dial_code);
    };
    LoginPage.prototype.loginUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("LOGIN ASYNC WORKING ");
                        if (!!this.loginForm.valid) return [3 /*break*/, 1];
                        console.log(this.loginForm.value);
                        return [3 /*break*/, 4];
                    case 1:
                        console.log("LOGIN ELSE--- ");
                        this.authProvider
                            .loginUser(this.loginForm.value.email, this.loginForm.value.password)
                            .then(function (authData) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log("AUTH DATA ::: ", authData);
                                        return [4 /*yield*/, this.loadingCtrl.dismiss().then(function () {
                                                _this.ph.getUserProfile().on("value", function (userProfileSnapshot) {
                                                    console.log("USER DETAILS:: ", userProfileSnapshot);
                                                    var user_details = userProfileSnapshot.val();
                                                    console.log("PHONE NOT AVAILABLE:: ", user_details);
                                                    if (user_details == null) {
                                                        console.log("PHONE NOT AVAILABLE:: ");
                                                        _this.navCtrl.navigateRoot("accountkit"); //Page NOt AVAILABLE
                                                        // this.navCtrl.navigateRoot("tabs");
                                                    }
                                                    else {
                                                        _this.navCtrl.navigateRoot("home");
                                                    }
                                                });
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.loadingCtrl.dismiss().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var alert;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.alertCtrl.create({
                                                    message: error.message,
                                                    buttons: [
                                                        {
                                                            text: this.lp.translate()[0].i8,
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
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 2:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.segmentChanged = function (ev) {
        console.log("Segment changed", ev);
    };
    LoginPage.prototype.showPhoneLogin = function () {
        this.showPhone = true;
        this.showEmail = false;
    };
    LoginPage.prototype.showEmailLogin = function () {
        this.showEmail = true;
        this.showPhone = false;
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a.auth.RecaptchaVerifier("sign-in-button", {
                    size: "invisible",
                    callback: function (response) { },
                    "expired-callback": function () { },
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a.auth.RecaptchaVerifier("sign-in-button", {
            size: "invisible",
            callback: function (response) { },
            "expired-callback": function () { },
        });
    };
    // Button event after the nmber is entered and button is clicked
    LoginPage.prototype.signinWithPhoneNumber = function ($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.CountryCode = "+233";
                        console.log("country", $event, this.recaptchaVerifier);
                        console.log("PhoneNo", this.PhoneNo, this.CountryCode);
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Preparing OTP",
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present().then(function () {
                                if (_this.PhoneNo && _this.CountryCode) {
                                    _this.authProvider
                                        .signInWithPhoneNumber(_this.recaptchaVerifier, _this.CountryCode + _this.PhoneNo)
                                        .then(function (success) {
                                        // this.OtpVerification();
                                        _this.showOtpComponent = true;
                                        _this.showPhone = false;
                                        _this.showEmail = false;
                                        _this.showButton = true;
                                        loading.dismiss();
                                    }, function (err) {
                                        _this.pop.presentToast("Error! SMS couldnt be sent. Please try again");
                                        loading.dismiss();
                                    });
                                }
                                else {
                                    _this.pop.presentToast("Error! SMS couldnt be sent. Please try again");
                                    loading.dismiss();
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.showSuccess = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "OTP successful. ",
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function (res) {
                                        alert.dismiss();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.OtpVerification = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Enter OTP",
                            backdropDismiss: false,
                            inputs: [
                                {
                                    name: "otp",
                                    type: "text",
                                    placeholder: "Enter your otp",
                                },
                            ],
                            buttons: [
                                {
                                    text: "Enter",
                                    handler: function (res) {
                                        _this.authProvider
                                            .enterVerificationCode(res.otp)
                                            .then(function (userData) {
                                            // this.showSuccess();
                                            console.log(userData);
                                        });
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // OTP Code
    LoginPage.prototype.onOtpChange = function (otp) {
        this.otp = otp;
        // When all 6 digits are filled, trigger OTP validation method
        if (otp.length == 6) {
            this.validateOtp(otp);
        }
    };
    LoginPage.prototype.validateOtp = function (otp) {
        var _this = this;
        console.log("RUNNING VALIDATE OTP------->>>>>>>> " + otp);
        this.authProvider.enterVerificationCode(otp).then(function (userData) {
            console.log("USER DATE FROM VALIDATION" + JSON.stringify(userData));
            if (userData) {
                _this.ph.getUserProfile().on("value", function (userProfileSnapshot) {
                    console.log("USER PROFILE:: ", userProfileSnapshot.val());
                    var user_details = userProfileSnapshot.val();
                    console.log("USER PROFILE user_details:: ", user_details);
                    if (user_details == null) {
                        console.log("USER DETAILS DOESNT EXIST");
                        _this.zone.run(function () {
                            // this.navCtrl.navigateRoot("more-info");
                            _this.router.navigate(["more-info"]);
                            _this.ph.getUserProfile().off("value");
                        });
                    }
                    else {
                        console.log("Will Go Home");
                        _this.zone.run(function () {
                            _this.navCtrl.navigateRoot("home");
                            _this.ph.getUserProfile().off("value");
                        });
                    }
                });
            }
            else {
                console.log("USER DATA NOT AVAILABLE");
            }
            // this.showSuccess();
        });
    };
    LoginPage.prototype.signupUser = function () {
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
    LoginPage.prototype.goToBack = function () {
        this.navCtrl.navigateRoot("login");
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.navigateRoot("login");
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.navigateRoot("reset-password");
    };
    LoginPage.prototype.showLoadRefresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present().then(function () {
                                var myTimeout = setTimeout(function () {
                                    clearTimeout(myTimeout);
                                    loading.dismiss();
                                }, 400);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Hellooo",
                            duration: 2000,
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.dismiss()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 4:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log("Loading dismissed!");
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_11__["PopUpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
        { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngOtpInput", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginPage.prototype, "ngOtpInput", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_11__["PopUpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"],
            src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map