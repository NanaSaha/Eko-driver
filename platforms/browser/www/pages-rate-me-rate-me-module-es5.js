(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rate-me-rate-me-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/rate-me/rate-me.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/rate-me/rate-me.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\">\n  <ion-title class=\"ion-padding\" class=\"ion-text-center\">\n    <h1>RATE RIDER</h1>\n  </ion-title>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button\n          class=\"button\"\n          expand=\"block\"\n          (click)=\"Approve()\"\n          size=\"large\"\n        >\n          <ion-icon name=\"thumbs-up\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button\n          color=\"danger\"\n          class=\"button\"\n          expand=\"block\"\n          (click)=\"Disapprove()\"\n          size=\"large\"\n        >\n          <ion-icon name=\"thumbs-down\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-title class=\"ion-text-center\" class=\"ion-padding\">\n    <h1>+{{positive_Rate}}% / {{negative_Rate}}%</h1>\n  </ion-title>\n\n  <div *ngIf=\"hasRated\" class=\"reviewspace\" class=\"ion-padding\">\n    <ion-title>Write A Review</ion-title>\n    <form (ngSubmit)=\"logForm()\">\n      <ion-textarea\n        #myInput\n        id=\"myInput\"\n        rows=\"1\"\n        maxLength=\"500\"\n        [(ngModel)]=\"todo.description\"\n        name=\"description\"\n      >\n      </ion-textarea>\n      <ion-button class=\"button\" type=\"submit\" expand=\"block\"\n        >Submit</ion-button\n      >\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/rate-me/rate-me.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/rate-me/rate-me.module.ts ***!
  \*************************************************/
/*! exports provided: RateMePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateMePageModule", function() { return RateMePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rate_me_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rate-me.page */ "./src/app/pages/rate-me/rate-me.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");








var routes = [
    {
        path: '',
        component: _rate_me_page__WEBPACK_IMPORTED_MODULE_5__["RateMePage"]
    }
];
var RateMePageModule = /** @class */ (function () {
    function RateMePageModule() {
    }
    RateMePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _rate_me_page__WEBPACK_IMPORTED_MODULE_5__["RateMePage"] //<----- this is if it is going to be used else where
            ],
            declarations: [_rate_me_page__WEBPACK_IMPORTED_MODULE_5__["RateMePage"]],
            entryComponents: [_rate_me_page__WEBPACK_IMPORTED_MODULE_5__["RateMePage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RateMePageModule);
    return RateMePageModule;
}());



/***/ }),

/***/ "./src/app/pages/rate-me/rate-me.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/rate-me/rate-me.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reviewspace {\n  margin-top: 30%;\n}\n\nform {\n  height: 200px auto;\n}\n\nform .button {\n  border-radius: 12px;\n}\n\n#myInput {\n  border: 1.5px solid #0a64eb;\n  border-radius: 12px;\n  height: 70%;\n  margin-left: 0%;\n  margin-bottom: 6%;\n}\n\n.sc-ion-modal-md-h {\n  --width: 86%;\n  --min-width: auto;\n  --max-width: auto;\n  --height: 70% !important;\n  --min-height: auto;\n  --max-height: auto;\n  --overflow: hidden;\n  --border-radius: 0;\n  --border-width: 0;\n  --border-style: none;\n  --border-color: transparent;\n  --background: var(--ion-background-color, #fff);\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9yYXRlLW1lL3JhdGUtbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yYXRlLW1lL3JhdGUtbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURBRTtFQUNFLG1CQUFBO0FDRUo7O0FERUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmF0ZS1tZS9yYXRlLW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXZpZXdzcGFjZSB7XHJcbiAgbWFyZ2luLXRvcDogMzAlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBoZWlnaHQ6IDIwMHB4IGF1dG87XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuI215SW5wdXQge1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiKDEwLCAxMDAsIDIzNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBoZWlnaHQ6IDcwJTtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbn1cclxuXHJcbi5zYy1pb24tbW9kYWwtbWQtaCB7XHJcbiAgLS13aWR0aDogODYlO1xyXG4gIC0tbWluLXdpZHRoOiBhdXRvO1xyXG4gIC0tbWF4LXdpZHRoOiBhdXRvO1xyXG4gIC0taGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcclxuICAtLW1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgLS1tYXgtaGVpZ2h0OiBhdXRvO1xyXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAvLyBsZWZ0OiAwO1xyXG4gIC8vIHJpZ2h0OiAwO1xyXG4gIC8vIHRvcDogMDtcclxuICAvLyBib3R0b206IDA7XHJcbiAgLy8gZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyBjb250YWluOiBzdHJpY3Q7XHJcbn1cclxuIiwiLnJldmlld3NwYWNlIHtcbiAgbWFyZ2luLXRvcDogMzAlO1xufVxuXG5mb3JtIHtcbiAgaGVpZ2h0OiAyMDBweCBhdXRvO1xufVxuZm9ybSAuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuI215SW5wdXQge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMwYTY0ZWI7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGhlaWdodDogNzAlO1xuICBtYXJnaW4tbGVmdDogMCU7XG4gIG1hcmdpbi1ib3R0b206IDYlO1xufVxuXG4uc2MtaW9uLW1vZGFsLW1kLWgge1xuICAtLXdpZHRoOiA4NiU7XG4gIC0tbWluLXdpZHRoOiBhdXRvO1xuICAtLW1heC13aWR0aDogYXV0bztcbiAgLS1oZWlnaHQ6IDcwJSAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IGF1dG87XG4gIC0tbWF4LWhlaWdodDogYXV0bztcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/rate-me/rate-me.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/rate-me/rate-me.page.ts ***!
  \***********************************************/
/*! exports provided: RateMePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateMePage", function() { return RateMePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_onesignal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/onesignal.service */ "./src/app/services/onesignal.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var RateMePage = /** @class */ (function () {
    function RateMePage(navCtrl, Onesignal, lp, modal, popover, storage, pop, activatedRoute, prof) {
        this.navCtrl = navCtrl;
        this.Onesignal = Onesignal;
        this.lp = lp;
        this.modal = modal;
        this.popover = popover;
        this.storage = storage;
        this.pop = pop;
        this.activatedRoute = activatedRoute;
        this.prof = prof;
        // tslint:disable-next-line: variable-name
        this.positive_Rate = this.activatedRoute.snapshot.paramMap.get("positive_Rating");
        // tslint:disable-next-line: variable-name
        this.negative_Rate = this.activatedRoute.snapshot.paramMap.get("negative_Rating");
        this.rateNumber = 0;
        this.todo = {
            description: "",
        };
        this.hasRated = false;
        // tslint:disable-next-line: variable-name
        this.hasRated_2 = true;
        // tslint:disable-next-line: variable-name
        this.hasRated_1 = true;
        this.lat = this.activatedRoute.snapshot.paramMap.get("lat");
        this.lng = this.activatedRoute.snapshot.paramMap.get("lng");
        this.cartype = this.activatedRoute.snapshot.paramMap.get("cartype");
    }
    RateMePage.prototype.ionViewWillEnter = function () {
        this.modal.dismiss(false);
    };
    RateMePage.prototype.Approve = function () {
        var _this = this;
        if (this.hasRated_2 && this.hasRated_1) {
            var value = this.activatedRoute.snapshot.paramMap.get("eventId");
            var rt = Number(this.positive_Rate) + 1;
            this.prof.PositiveRateDriver(value, rt).then(function () {
                _this.positive_Rate = Number(_this.positive_Rate) + 1;
                console.log("POSITIVE NUMBER", _this.positive_Rate);
            });
            this.hasRated_2 = false;
            this.hasRated = true;
        }
    };
    RateMePage.prototype.Disapprove = function () {
        var _this = this;
        if (this.hasRated_1 && this.hasRated_2) {
            var value = this.activatedRoute.snapshot.paramMap.get("eventId");
            var rt = this.negative_Rate - 1;
            this.prof.NegativeRateDriver(value, rt).then(function () {
                _this.negative_Rate = _this.negative_Rate - 1;
                _this.Hated();
            });
            this.hasRated_1 = false;
            this.hasRated = true;
        }
    };
    RateMePage.prototype.logForm = function () {
        var _this = this;
        console.log(this.todo);
        if (this.hasRated) {
            var value = this.activatedRoute.snapshot.paramMap.get("eventId");
            console.log("RATING NUMBER", this.rateNumber);
            this.prof
                .RateUser(value, this.rateNumber, this.todo.description, true)
                .then(function (suc) {
                _this.Onesignal.UpdateInfo(_this.lat, _this.lng, _this.cartype);
                _this.navCtrl.pop();
            });
        }
        else {
            this.pop.showPimp("Rate First");
        }
    };
    RateMePage.prototype.Hated = function () {
        var _this = this;
        var value = this.activatedRoute.snapshot.paramMap.get("eventId");
        var name = this.activatedRoute.snapshot.paramMap.get("name");
        this.prof.M_updateID(value, name).then(function (suc) {
            _this.navCtrl.pop();
            _this.pop.presentToast("You Will Not Be Paired Again.");
        });
    };
    RateMePage.prototype.ngOnInit = function () { };
    RateMePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_onesignal_service__WEBPACK_IMPORTED_MODULE_4__["OnesignalService"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] }
    ]; };
    RateMePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-rate-me",
            template: __webpack_require__(/*! raw-loader!./rate-me.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/rate-me/rate-me.page.html"),
            styles: [__webpack_require__(/*! ./rate-me.page.scss */ "./src/app/pages/rate-me/rate-me.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_onesignal_service__WEBPACK_IMPORTED_MODULE_4__["OnesignalService"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]])
    ], RateMePage);
    return RateMePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-rate-me-rate-me-module-es5.js.map