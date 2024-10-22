(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-documentdetail-documentdetail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documentdetail/documentdetail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documentdetail/documentdetail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar style=\"margin-top: 25px\">\n    <ion-button (click)=\"goBack()\" color=\"primary\" fill=\"clear\">\n      <ion-icon name=\"arrow-back\"></ion-icon> <span style=\"margin-left:30px; font-size: 1.4em\">Document Detail</span>\n    </ion-button>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content class=\"scroll\">\n  <ion-row padding>\n  </ion-row>\n  <div>\n    <div text-center>\n      <h3 class='name'>{{data.title}}</h3>\n      <h1 class='name'>Comment :{{data.comment}}</h1>\n      <hr>\n    </div>\n\n    <div>\n\n\n      <ion-button padding *ngIf='data.filetype == 0' class='button' expand='block' (click)='UploadFile(data.id)'>\n        Add File\n      </ion-button>\n\n\n      <ion-button padding *ngIf='data.filetype == 1' class='button' expand='block' (click)='AddFile(data.id, true)'>\n        Add Info\n      </ion-button>\n\n    </div>\n\n    <div text-center>\n      <h1 class='name'> Current File :{{data.comment}}</h1>\n    </div>\n\n\n    <div *ngIf=\"data.data\">\n      <img id=\"my-pic\" [src]=\"data.data\" />\n    </div>\n\n    <div *ngIf=\"!data.data\">\n      <img id=\"my-pic\" [src]=\"captureDataUrl\" *ngIf=\"captureDataUrl\" />\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/documentdetail/documentdetail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/documentdetail/documentdetail.module.ts ***!
  \***************************************************************/
/*! exports provided: DocumentdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentdetailPageModule", function() { return DocumentdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _documentdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentdetail.page */ "./src/app/pages/documentdetail/documentdetail.page.ts");







var routes = [
    {
        path: '',
        component: _documentdetail_page__WEBPACK_IMPORTED_MODULE_6__["DocumentdetailPage"]
    }
];
var DocumentdetailPageModule = /** @class */ (function () {
    function DocumentdetailPageModule() {
    }
    DocumentdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_documentdetail_page__WEBPACK_IMPORTED_MODULE_6__["DocumentdetailPage"]]
        })
    ], DocumentdetailPageModule);
    return DocumentdetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/documentdetail/documentdetail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/documentdetail/documentdetail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  text-align: center;\n}\n\n.drive {\n  color: #0a64eb;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.drop-zone {\n  background-color: #f6f6f6;\n  border: dotted 3px #dedddd;\n  height: 30vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 20px 0;\n}\n\n.selfie {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#my-pic {\n  width: 90% !important;\n  height: 45% !important;\n  border-radius: 12px;\n  border: 1px solid #f7f7f7;\n  vertical-align: center;\n  margin: 5%;\n}\n\n.file-input-container {\n  text-align: right;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file-input-container label {\n  border: 1px solid #ccc;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.nv-file-over {\n  border: dotted 3px red;\n}\n\n.price {\n  color: green;\n}\n\n.date {\n  color: orangered;\n}\n\n.destination {\n  color: cadetblue;\n}\n\nh3 {\n  font-size: 4em;\n}\n\nion-item {\n  margin-top: 24px;\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9kb2N1bWVudGRldGFpbC9kb2N1bWVudGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50ZGV0YWlsL2RvY3VtZW50ZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esd0VBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURDRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUE7RUFDRSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLDZEQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kb2N1bWVudGRldGFpbC9kb2N1bWVudGRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRyaXZlIHtcclxuICBjb2xvcjogcmdiKDEwLCAxMDAsIDIzNSk7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmRyb3Atem9uZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IGRvdHRlZCAzcHggI2RlZGRkZDtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uc2VsZmllIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNteS1waWMge1xyXG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQ1JSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi5maWxlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubnYtZmlsZS1vdmVyIHtcclxuICBib3JkZXI6IGRvdHRlZCAzcHggcmVkO1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn1cclxuXHJcbi5kZXN0aW5hdGlvbiB7XHJcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRyaXZlIHtcbiAgY29sb3I6ICMwYTY0ZWI7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5kcm9wLXpvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IGRvdHRlZCAzcHggI2RlZGRkZDtcbiAgaGVpZ2h0OiAzMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5zZWxmaWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI215LXBpYyB7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NSUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1JTtcbn1cblxuLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZmlsZS1pbnB1dC1jb250YWluZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmlsZS1pbnB1dC1jb250YWluZXIgbGFiZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubnYtZmlsZS1vdmVyIHtcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDtcbn1cblxuLnByaWNlIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZGF0ZSB7XG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XG59XG5cbi5kZXN0aW5hdGlvbiB7XG4gIGNvbG9yOiBjYWRldGJsdWU7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiA0ZW07XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45MykgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/documentdetail/documentdetail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/documentdetail/documentdetail.page.ts ***!
  \*************************************************************/
/*! exports provided: DocumentdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentdetailPage", function() { return DocumentdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var DocumentdetailPage = /** @class */ (function () {
    function DocumentdetailPage(activatedRoute, navCtrl, actionSheetCtrl, file, camera, lp, settings, pop, load, profile, alert, eventService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.camera = camera;
        this.lp = lp;
        this.settings = settings;
        this.pop = pop;
        this.load = load;
        this.profile = profile;
        this.alert = alert;
        this.eventService = eventService;
        this.currentEvent = {};
        this.activatedRoute.queryParams.subscribe(function (res) {
            console.log(res);
            _this.data = res;
        });
        console.log(this.data);
    }
    DocumentdetailPage.prototype.ionViewDidEnter = function () {
    };
    DocumentdetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DocumentdetailPage.prototype.ngOnInit = function () {
    };
    DocumentdetailPage.prototype.UploadFile = function (eventId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.lp.translate()[0].b6,
                            buttons: [
                                {
                                    text: this.lp.translate()[0].b7,
                                    icon: 'ios-camera',
                                    handler: function () {
                                        _this.capture(eventId);
                                    }
                                }, {
                                    text: this.lp.translate()[0].b8,
                                    icon: 'ios-folder',
                                    handler: function () {
                                        _this.captureFromFile(eventId);
                                    }
                                }, {
                                    text: this.lp.translate()[0].b9,
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocumentdetailPage.prototype.AddFile = function (eventId, state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.profile.theKey);
                        return [4 /*yield*/, this.alert.create({
                                header: 'Entry Name',
                                inputs: [
                                    {
                                        value: ''
                                    },
                                ],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                    },
                                    {
                                        text: "Okay",
                                        handler: function (data) {
                                            console.log(data, eventId);
                                            if (_this.data.approved) {
                                                _this.profile.createDocList(data, eventId);
                                            }
                                            else {
                                                _this.profile.createMyDocList(data, eventId);
                                            }
                                        }
                                    }
                                ],
                                backdropDismiss: false
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
    DocumentdetailPage.prototype.capture = function (id) {
        var _this = this;
        var cameraOptions = {
            quality: 4,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            _this.processProfilePicture(_this.captureDataUrl, id);
        }, function (err) {
            // Handle error
        });
    };
    DocumentdetailPage.prototype.captureFromFile = function (id) {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 20,
            encodingType: this.camera.EncodingType.PNG,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            _this.processProfilePicture(_this.captureDataUrl, id);
        });
    };
    DocumentdetailPage.prototype.processProfilePicture = function (captureData, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var storageRef, filename, loading, imageRef;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
                        filename = Math.floor(Date.now() / 1000);
                        return [4 /*yield*/, this.load.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        imageRef = storageRef.child("myPics/" + filename + ".jpg");
                        imageRef.putString(captureData, firebase_app__WEBPACK_IMPORTED_MODULE_3__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
                            imageRef.getDownloadURL().then(function (url) {
                                console.log(url);
                                console.log(url);
                                _this.load.dismiss();
                                console.log("done");
                                if (_this.data.approved) {
                                    _this.profile.uploadDocFile2(url, id);
                                    _this.pop.hideLoader();
                                }
                                else {
                                    _this.pop.hideLoader();
                                    _this.profile.uploadDocFile(url, id);
                                }
                            }).catch(function (error) { alert('error couldnt do what you asked'); });
                        }).catch(function (error) { alert('error couldnt do what you asked'); });
                        return [2 /*return*/];
                }
            });
        });
    };
    DocumentdetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"] },
        { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"] },
        { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"] }
    ]; };
    DocumentdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentdetail',
            template: __webpack_require__(/*! raw-loader!./documentdetail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documentdetail/documentdetail.page.html"),
            styles: [__webpack_require__(/*! ./documentdetail.page.scss */ "./src/app/pages/documentdetail/documentdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"], src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"], src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"]])
    ], DocumentdetailPage);
    return DocumentdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-documentdetail-documentdetail-module-es5.js.map