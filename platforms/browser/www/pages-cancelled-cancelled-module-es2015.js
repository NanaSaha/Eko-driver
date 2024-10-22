(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cancelled-cancelled-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cancelled/cancelled.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cancelled/cancelled.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\n  <ion-toolbar style=\"margin-top:20px\">\n    <ion-button (click)=\"goBack()\" color=\"primary\" fill=\"clear\">\n      <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon> <span\n        style=\"margin-left:30px; font-size: 1.4em\">Cancelled Rides</span>\n    </ion-button>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding class='yes-scroll'>\n  <div class='followed-items'>\n    <ion-list>\n      <div>\n        <ion-item class='hists' no-lines *ngFor=\"let event of eventList\">\n          <ion-grid>\n            <ion-row>\n              <ion-label class='drive'><strong>{{event?.name}}</strong></ion-label>\n\n            </ion-row>\n            <ion-row>\n              <ion-label class='price'><strong>{{settings.appcurrency}}{{event?.price}}</strong></ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-label class='date'><strong>{{event?.date}}</strong></ion-label>\n            </ion-row>\n            <ion-row>\n\n              <ion-label class='location'><strong>{{event?.location}}</strong></ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-label class='destination'><strong>{{event?.destination}}</strong></ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-label class='drive'>Charge: <strong>{{event?.charge}}</strong></ion-label>\n            </ion-row>\n\n            <ion-row>\n              <ion-label class='date'>Reason: <strong>{{event?.reason}}</strong></ion-label>\n            </ion-row>\n          </ion-grid>\n\n\n\n\n\n\n\n\n\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cancelled/cancelled.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/cancelled/cancelled.module.ts ***!
  \*****************************************************/
/*! exports provided: CancelledPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelledPageModule", function() { return CancelledPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cancelled_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancelled.page */ "./src/app/pages/cancelled/cancelled.page.ts");







const routes = [
    {
        path: '',
        component: _cancelled_page__WEBPACK_IMPORTED_MODULE_6__["CancelledPage"]
    }
];
let CancelledPageModule = class CancelledPageModule {
};
CancelledPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cancelled_page__WEBPACK_IMPORTED_MODULE_6__["CancelledPage"]]
    })
], CancelledPageModule);



/***/ }),

/***/ "./src/app/pages/cancelled/cancelled.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/cancelled/cancelled.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .drive {\n  color: #f7f7f7;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\nion-content .price {\n  color: #8fff8f;\n}\nion-content .date {\n  color: #ffc8b4;\n}\nion-content .destination {\n  color: #75faff;\n}\nion-content .location {\n  color: whitesmoke;\n}\nion-content ion-item {\n  margin-top: 24px;\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93) !important;\n}\nion-content .hists {\n  border: 1px solid;\n  box-shadow: 0px 0px 7px 0px rgba(3, 3, 3, 0.479);\n  margin-top: 8px;\n  border-radius: 12px;\n  --background: blue;\n  color: light;\n}\nion-content .button {\n  color: blue;\n}\nion-content .button .icon {\n  color: blue;\n}\nion-content .button .icons {\n  color: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9jYW5jZWxsZWQvY2FuY2VsbGVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FuY2VsbGVkL2NhbmNlbGxlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR007RUFDSSxjQUFBO0VBQ0Esd0VBQUE7QUNGVjtBREtNO0VBQ0UsY0FBQTtBQ0hSO0FETU07RUFDRSxjQUFBO0FDSlI7QURPTTtFQUNFLGNBQUE7QUNMUjtBRFFNO0VBQ0UsaUJBQUE7QUNOUjtBRFVRO0VBQ0UsZ0JBQUE7RUFFQSw2REFBQTtBQ1RWO0FEYU07RUFDRSxpQkFBQTtFQUNBLGdEQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDWFI7QURjTTtFQUNFLFdBQUE7QUNaUjtBRGFRO0VBQ0UsV0FBQTtBQ1hWO0FEYVE7RUFDRSxjQUFBO0FDWFYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYW5jZWxsZWQvY2FuY2VsbGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgXHJcbiAgICAgIC5kcml2ZXtcclxuICAgICAgICAgIGNvbG9yOiNmN2Y3Zjc7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnByaWNle1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTQzLCAyNTUsIDE0Myk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmRhdGV7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDIwMCwgMTgwKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZGVzdGluYXRpb257XHJcbiAgICAgICAgY29sb3I6IHJnYigxMTcsIDI1MCwgMjU1KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubG9jYXRpb257XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgXHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45MykgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgICAuaGlzdHN7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDMsIDMsIDMsIDAuNDc5KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICAgICAgY29sb3I6IGxpZ2h0O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5idXR0b257XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgLmljb257XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb25ze1xyXG4gICAgICAgICAgY29sb3I6I2Y3ZjdmNztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgIFxyXG4gICAgIFxyXG4gIH1cclxuICBcclxuICAiLCJpb24tY29udGVudCAuZHJpdmUge1xuICBjb2xvcjogI2Y3ZjdmNztcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50IC5wcmljZSB7XG4gIGNvbG9yOiAjOGZmZjhmO1xufVxuaW9uLWNvbnRlbnQgLmRhdGUge1xuICBjb2xvcjogI2ZmYzhiNDtcbn1cbmlvbi1jb250ZW50IC5kZXN0aW5hdGlvbiB7XG4gIGNvbG9yOiAjNzVmYWZmO1xufVxuaW9uLWNvbnRlbnQgLmxvY2F0aW9uIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5pb24tY29udGVudCBpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuaGlzdHMge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMywgMywgMywgMC40NzkpO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYmFja2dyb3VuZDogYmx1ZTtcbiAgY29sb3I6IGxpZ2h0O1xufVxuaW9uLWNvbnRlbnQgLmJ1dHRvbiB7XG4gIGNvbG9yOiBibHVlO1xufVxuaW9uLWNvbnRlbnQgLmJ1dHRvbiAuaWNvbiB7XG4gIGNvbG9yOiBibHVlO1xufVxuaW9uLWNvbnRlbnQgLmJ1dHRvbiAuaWNvbnMge1xuICBjb2xvcjogI2Y3ZjdmNztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cancelled/cancelled.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cancelled/cancelled.page.ts ***!
  \***************************************************/
/*! exports provided: CancelledPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelledPage", function() { return CancelledPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");








let CancelledPage = class CancelledPage {
    constructor(navCtrl, ph, alertCtrl, lp, settings, pop, load, eventProvider) {
        this.navCtrl = navCtrl;
        this.ph = ph;
        this.alertCtrl = alertCtrl;
        this.lp = lp;
        this.settings = settings;
        this.pop = pop;
        this.load = load;
        this.eventProvider = eventProvider;
    }
    ionViewDidEnter() {
        // this.pop.presentLoader('')
        this.eventProvider.getCancelledList().on('value', snapshot => {
            this.eventList = [];
            // this.pop.dismissLoader()
            console.log(snapshot.val());
            snapshot.forEach(snap => {
                this.eventList.push({
                    id: snap.key,
                    name: snap.val().name,
                    price: snap.val().price,
                    date: snap.val().date,
                    location: snap.val().location,
                    destination: snap.val().destination,
                    tip: snap.val().tip,
                    upvote: snap.val().upvote,
                    downvote: snap.val().downvote,
                    charge: snap.val().charge,
                    reason: snap.val().reason
                });
                this.eventList.sort();
                this.eventList.reverse();
                return false;
            });
        });
    }
    goToEventDetail(eventId) {
        this.navCtrl.navigateRoot(['historydetail', { 'eventId': eventId }]);
    }
    goBack() {
        this.navCtrl.navigateRoot('history');
    }
    ngOnInit() {
    }
};
CancelledPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
    { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"] }
];
CancelledPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cancelled',
        template: __webpack_require__(/*! raw-loader!./cancelled.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cancelled/cancelled.page.html"),
        styles: [__webpack_require__(/*! ./cancelled.page.scss */ "./src/app/pages/cancelled/cancelled.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"], src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"], src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]])
], CancelledPage);



/***/ })

}]);
//# sourceMappingURL=pages-cancelled-cancelled-module-es2015.js.map