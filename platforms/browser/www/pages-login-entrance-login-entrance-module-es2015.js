(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-entrance-login-entrance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login-entrance/login-entrance.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login-entrance/login-entrance.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class='ion-padding'>\n  <div class='o_section'>\n\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                <ion-button color='primary' color='light' fill=\"clear\" expand=\"block\" (click)=\"GotoLogin()\">\n                    LOGIN\n                  </ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button color='primary' color='light' fill=\"clear\" expand=\"block\" (click)=\"GotoSignup()\">\n                    REGISTER\n                  </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n       </div>\n\n</ion-content>\n    "

/***/ }),

/***/ "./src/app/pages/login-entrance/login-entrance.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/login-entrance/login-entrance.module.ts ***!
  \***************************************************************/
/*! exports provided: LoginEntrancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEntrancePageModule", function() { return LoginEntrancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_entrance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-entrance.page */ "./src/app/pages/login-entrance/login-entrance.page.ts");







const routes = [
    {
        path: '',
        component: _login_entrance_page__WEBPACK_IMPORTED_MODULE_6__["LoginEntrancePage"]
    }
];
let LoginEntrancePageModule = class LoginEntrancePageModule {
};
LoginEntrancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_entrance_page__WEBPACK_IMPORTED_MODULE_6__["LoginEntrancePage"]]
    })
], LoginEntrancePageModule);



/***/ }),

/***/ "./src/app/pages/login-entrance/login-entrance.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/login-entrance/login-entrance.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-size: cover;\n  background-position: center;\n}\nion-content .o_section {\n  position: fixed;\n  top: 80%;\n  width: 100%;\n  left: 0%;\n}\nion-content ion-button {\n  background: #0a64eb;\n  height: 50px;\n  color: #ffffff;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9sb2dpbi1lbnRyYW5jZS9sb2dpbi1lbnRyYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luLWVudHJhbmNlL2xvZ2luLWVudHJhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHNCQUFBO0VBQ0EsMkJBQUE7QUNBRjtBRFVFO0VBQ0UsZUFBQTtFQUVBLFFBQUE7RUFDQSxXQUFBO0VBRUEsUUFBQTtBQ1ZKO0FEWUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLG1CQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi1lbnRyYW5jZS9sb2dpbi1lbnRyYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLy8gIC0tYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWcvbWVudS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIC8vIEBrZXlmcmFtZXMgYnVtcCB7XHJcbiAgLy8gICAwJSB7XHJcbiAgLy8gICAgIHRvcDogMTAwJTtcclxuICAvLyAgIH1cclxuICAvLyAgIC8vIDUwJSB7dG9wOiA5MCU7fVxyXG4gIC8vICAgMTAwJSB7XHJcbiAgLy8gICAgIHRvcDogODAlO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAub19zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8vICBiYWNrZ3JvdW5kOiBjb2xvcigkY29sb3JzLCBwcmltYXJ5LCBiYXNlKTtcclxuICAgIHRvcDogODAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6ICRidXR0b25SYWRpdXM7XHJcbiAgICBsZWZ0OiAwJTtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAsIDEwMCwgMjM1KTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHdpa2k7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAub19zZWN0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDgwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMwYTY0ZWI7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHdpa2k7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login-entrance/login-entrance.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/login-entrance/login-entrance.page.ts ***!
  \*************************************************************/
/*! exports provided: LoginEntrancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEntrancePage", function() { return LoginEntrancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");





let LoginEntrancePage = class LoginEntrancePage {
    constructor(navCtrl, lp, settings, zone, load) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.zone = zone;
        this.load = load;
    }
    ngOnInit() {
        console.log('ionViewDidLoad startup');
    }
    GotoLogin() {
        this.zone.run(() => {
            this.navCtrl.navigateRoot('login');
        });
    }
    GotoSignup() {
        this.navCtrl.navigateRoot('signup');
    }
};
LoginEntrancePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoginEntrancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-entrance',
        template: __webpack_require__(/*! raw-loader!./login-entrance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login-entrance/login-entrance.page.html"),
        styles: [__webpack_require__(/*! ./login-entrance.page.scss */ "./src/app/pages/login-entrance/login-entrance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
        src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], LoginEntrancePage);



/***/ })

}]);
//# sourceMappingURL=pages-login-entrance-login-entrance-module-es2015.js.map