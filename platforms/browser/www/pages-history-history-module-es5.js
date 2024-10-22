(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" (click)=\"goBack()\" color=\"primary\">\n      <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon>\n      <span style=\"margin-left: 30px; font-size: 1.4em\"\n        >{{lp.translate()[0].b10}}</span\n      >\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"padding\" class=\"yes-scroll\">\n  <div class=\"followed-items\">\n    <ion-list class=\"ion-text-center\" class=\"padding\">\n      <div *ngFor=\"let event of eventList\">\n        <ion-item class=\"hists\" lines=\"none\">\n          <div *ngIf=\"event.name != null\" (click)=\"goToEventDetail(event.id)\">\n            <!-- <h2 class='location'><strong>{{settings.appcurrency}}\n                {{((event?.price) + (event?.tip || 0)).toFixed(2)}}</strong></h2> -->\n\n            <h2 class=\"location\">\n              <strong>{{settings.appcurrency}} {{event?.realPrice}}</strong>\n            </h2>\n            <h2 class=\"date\"><strong>{{event?.date}}</strong></h2>\n          </div>\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div>\n          <h1 style=\"color: rgb(0, 110, 0); text-align: center\">\n            <strong>{{settings.appcurrency}} {{mr}}</strong>\n          </h1>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <!-- <ion-button\n    size=\"large\"\n    shape=\"round\"\n    color=\"light\"\n    expand=\"block\"\n    (click)=\"OpenCancelled()\"\n  >\n    <span style=\"color: blue\">View Cancelled Trips</span>\n  </ion-button> -->\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/history/history.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");







var routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93) !important;\n}\nion-content .drive {\n  color: #f7f7f7;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\nion-content .price {\n  color: lime;\n}\nion-content .date {\n  color: #fbb91d;\n}\nion-content .destination {\n  color: #f6fcff;\n}\nion-content .location {\n  color: whitesmoke;\n}\nion-content ion-item {\n  margin-top: 24px;\n  box-shadow: none;\n}\n.hists {\n  border: 1px solid;\n  margin: 8px;\n  border-radius: 20px;\n  --background: rgb(0, 0, 0);\n  color: light;\n}\n.price {\n  color: #006e00;\n}\nion-footer {\n  border-top: 1.4px solid rgba(212, 212, 212, 0.93);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBMkJFLDZEQUFBO0FDekJGO0FEREU7RUFDRSxjQUFBO0VBQ0Esd0VBQUE7QUNHSjtBREFFO0VBQ0UsV0FBQTtBQ0VKO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7QUNBSjtBREdFO0VBQ0UsaUJBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7RUFFQSxnQkFBQTtBQ0hKO0FEUUE7RUFDRSxpQkFBQTtFQUVBLFdBQUE7RUFFQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0FDUEY7QURVQTtFQUNFLGlEQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5kcml2ZSB7XHJcbiAgICBjb2xvcjogI2Y3ZjdmNztcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAucHJpY2Uge1xyXG4gICAgY29sb3I6IHJnYigwLCAyNTUsIDApO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgY29sb3I6ICNmYmI5MWQ7XHJcbiAgfVxyXG5cclxuICAuZGVzdGluYXRpb24ge1xyXG4gICAgY29sb3I6IHJnYigyNDYsIDI1MiwgMjU1KTtcclxuICB9XHJcblxyXG4gIC5sb2NhdGlvbiB7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhpc3RzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuXHJcbiAgbWFyZ2luOiA4cHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgY29sb3I6IGxpZ2h0O1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gIGNvbG9yOiByZ2IoMCwgMTEwLCAwKTtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogMS40cHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuZHJpdmUge1xuICBjb2xvcjogI2Y3ZjdmNztcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50IC5wcmljZSB7XG4gIGNvbG9yOiBsaW1lO1xufVxuaW9uLWNvbnRlbnQgLmRhdGUge1xuICBjb2xvcjogI2ZiYjkxZDtcbn1cbmlvbi1jb250ZW50IC5kZXN0aW5hdGlvbiB7XG4gIGNvbG9yOiAjZjZmY2ZmO1xufVxuaW9uLWNvbnRlbnQgLmxvY2F0aW9uIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5pb24tY29udGVudCBpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5oaXN0cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XG4gIGNvbG9yOiBsaWdodDtcbn1cblxuLnByaWNlIHtcbiAgY29sb3I6ICMwMDZlMDA7XG59XG5cbmlvbi1mb290ZXIge1xuICBib3JkZXItdG9wOiAxLjRweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/history/history.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");








var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, lp, settings, pop, load, profile, alert, eventProvider) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.pop = pop;
        this.load = load;
        this.profile = profile;
        this.alert = alert;
        this.eventProvider = eventProvider;
        this.math = Math;
        this.float = parseFloat;
        var d = new Date();
        this.today = d.getDay();
    }
    HistoryPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var n = [];
        var sum = 0;
        this.pop.showLoader("").then(function () {
            _this.pop.hideLoader();
        });
        this.eventProvider.getEventList().on("value", function (snapshot) {
            _this.eventList = [];
            snapshot.forEach(function (snap) {
                _this.eventList.push({
                    id: snap.key,
                    name: snap.val().name,
                    price: snap.val().price -
                        _this.check(snap.val().price, snap.val().surcharge || []),
                    date: snap.val().date,
                    location: snap.val().location,
                    destination: snap.val().destination,
                    tip: snap.val().tip -
                        _this.checkMe(snap.val().tip, snap.val().surcharge || []),
                    upvote: snap.val().upvote || 0,
                    downvote: snap.val().downvote || 0,
                    toll: snap.val().tolls,
                    surcharge: snap.val().surcharge,
                    realPrice: snap.val().realPrice,
                    osc: snap.val().osc,
                });
                _this.eventList.sort();
                _this.eventList.reverse();
                console.log(_this.eventList);
                return false;
            });
        });
        // this.presentRouteLoader(this.lp.translate()[0].c4);
        this.profile.getUserProfile().on("value", function (userProfileSnapshot) {
            _this.earnings = Math.floor(userProfileSnapshot.val().earnings);
        });
        // for (let index = 0; index < this.eventList.length; index++) {
        //   const element = this.eventList[index];
        //   console.log(element.realPrice, element.tip, index, this.eventList.length);
        //   //taking tip off
        //   n.push(this.eventList[index].realPrice || 0);
        //   const add4 = (a, b) => a + b;
        //   const result4 = n.reduce(add4);
        //   this.mr = result4.toFixed(2);
        //   // sum += this.eventList[index].price + element.tip || 0;
        // }
        for (var index = 0; index < this.eventList.length; index++) {
            var element = this.eventList[index];
            // console.log(element.price.replace(/[^\d\.]/g, ''));
            // n.push(parseFloat(this.eventList[index].price.replace(/[^\d\.]/g, '')));
            n.push(parseFloat(this.eventList[index].price));
            var add4 = function (a, b) { return a + b; };
            var result4 = n.reduce(add4);
            this.mr = result4.toFixed(2);
            // sum += this.eventList[index].price + element.tip || 0;
        }
        console.log(this.mr);
    };
    HistoryPage.prototype.goBack = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.navCtrl.navigateRoot("home");
                return [2 /*return*/];
            });
        });
    };
    HistoryPage.prototype.checkMe = function (price, surcharge) {
        var _this = this;
        var g = [];
        var b = [];
        var k = [];
        var o = [];
        var c = [];
        var n = [];
        console.log(surcharge);
        surcharge.forEach(function (element) {
            _this.riderpaid = parseFloat(price).toFixed(2);
            //if driver
            if (element.owner == 0) {
                //if percent
                if (element.bone == 1) {
                    var nb = element.price / 100;
                    console.log(nb * _this.riderpaid);
                    var fo = nb * _this.riderpaid;
                    n.push(fo);
                    var add2 = function (a, b) { return a + b; };
                    var result2 = n.reduce(add2);
                    _this.percentDriver = result2;
                    console.log((Math.floor(element.price) / 100) * _this.riderpaid);
                }
                //if flat fee
                if (element.bone == 0) {
                    c.push(parseFloat(element.price));
                    var add4 = function (a, b) { return a + b; };
                    var result4 = c.reduce(add4);
                    _this.flatDriver = result4;
                    console.log(result4);
                }
                _this.totalDriverSurge = _this.flatDriver + _this.percentDriver;
                console.log(_this.totalDriverSurge, _this.flatDriver, _this.percentDriver);
            }
        });
        return this.totalDriverSurge;
    };
    HistoryPage.prototype.check = function (price, surcharge) {
        var _this = this;
        var g = [];
        var b = [];
        var k = [];
        var o = [];
        var c = [];
        var n = [];
        console.log(surcharge);
        surcharge.forEach(function (element) {
            _this.wef = parseFloat(price).toFixed(2);
            //if driver
            if (element.owner == 0) {
                //if percent
                if (element.bone == 1) {
                    var nb = element.price / 100;
                    console.log(nb * _this.wef);
                    var fo = nb * _this.wef;
                    n.push(fo);
                    var add2 = function (a, b) { return a + b; };
                    var result2 = n.reduce(add2);
                    _this.percent2Driver = result2;
                    console.log((Math.floor(element.price) / 100) * _this.wef);
                }
                //if flat fee
                if (element.bone == 0) {
                    c.push(parseFloat(element.price));
                    var add4 = function (a, b) { return a + b; };
                    var result4 = c.reduce(add4);
                    _this.flat2Driver = result4;
                    console.log(result4);
                }
                _this.myDriverSurge = _this.flat2Driver + _this.percent2Driver;
                console.log(_this.myDriverSurge, _this.flatDriver, _this.percentDriver);
            }
        });
        return this.myDriverSurge;
    };
    HistoryPage.prototype.presentRouteLoader = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, myInterval;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load.create({
                            message: message,
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        myInterval = setInterval(function () {
                            if (_this.eventList != null) {
                                loading.dismiss();
                                clearInterval(myInterval);
                            }
                        }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoryPage.prototype.goToEventDetail = function (eventId) {
        this.navCtrl.navigateRoot(["historydetail", { eventId: eventId }]);
    };
    // Request(eventId){
    //   let alert = this.alert.create({
    //     title: this.lp.translate()[0].c5,
    //     buttons: [ {
    //       text: this.lp.translate()[0].c6,
    //       role: 'cancel',
    //       handler: () => {
    //       }
    //     },
    //     {
    //       text: this.lp.translate()[0].c7,
    //       handler: () => {
    //         this.eventProvider.getEventDetail(eventId).update({
    //           paid: 2,
    //         }).then((suc) =>{
    //           this.pop.alertMe('Your Request Has Been Recieved And Is Biegn Processed. This May Take Up To 30 minutes')
    //         });
    //     }
    //     },],
    //     enableBackdropDismiss: false
    //   });
    //   alert.present();
    // }
    HistoryPage.prototype.OpenCancelled = function () {
        this.navCtrl.navigateRoot("cancelled");
    };
    HistoryPage.prototype.Delete = function (eventId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: this.lp.translate()[0].c5,
                            buttons: [
                                {
                                    text: this.lp.translate()[0].c6,
                                    role: "cancel",
                                    handler: function () { },
                                },
                                {
                                    text: this.lp.translate()[0].c7,
                                    handler: function () {
                                        _this.eventProvider
                                            .getEventDetail(eventId)
                                            .update({
                                            hidden: true,
                                        })
                                            .then(function (success) { });
                                    },
                                },
                            ],
                            backdropDismiss: false,
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoryPage.prototype.ngOnInit = function () { };
    HistoryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] },
        { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"] },
        { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_4__["PopUpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] }
    ]; };
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-history",
            template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
            src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"],
            src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_4__["PopUpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module-es5.js.map