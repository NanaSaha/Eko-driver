(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addphotoinfo-addphotoinfo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addphotoinfo/addphotoinfo.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addphotoinfo/addphotoinfo.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-button (click)=\"goBack()\" ion-button color=\"dark\">\n      <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon>\n      <ion-title>Step 4</ion-title>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n  <div id=\"overlay\">\n    <div style=\"display: flex; flex-direction: column; justify-content: center\">\n      <h4>Upload Picture of your Driving license</h4>\n      <div (click)=\"choosePic_2()\">\n        <img id=\"my-pic\" [src]=\"captureDataUrl2\" *ngIf=\"captureDataUrl2\" />\n        <img\n          id=\"my-pic\"\n          *ngIf=\"!captureDataUrl2\"\n          src=\"data:image/png;base64,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\"\n        />\n      </div>\n      <ion-button expand=\"block\" size=\"large\" (click)=\"choosePic_2()\">\n        <ion-icon name=\"ios-camera-outline\" slot=\"start\"></ion-icon>\n        Add License Picture\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/addphotoinfo/addphotoinfo.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/addphotoinfo/addphotoinfo.module.ts ***!
  \***********************************************************/
/*! exports provided: AddphotoinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddphotoinfoPageModule", function() { return AddphotoinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addphotoinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addphotoinfo.page */ "./src/app/pages/addphotoinfo/addphotoinfo.page.ts");







const routes = [
    {
        path: '',
        component: _addphotoinfo_page__WEBPACK_IMPORTED_MODULE_6__["AddphotoinfoPage"]
    }
];
let AddphotoinfoPageModule = class AddphotoinfoPageModule {
};
AddphotoinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addphotoinfo_page__WEBPACK_IMPORTED_MODULE_6__["AddphotoinfoPage"]]
    })
], AddphotoinfoPageModule);



/***/ }),

/***/ "./src/app/pages/addphotoinfo/addphotoinfo.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/addphotoinfo/addphotoinfo.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selfie {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#my-pic {\n  width: 90% !important;\n  height: 45% !important;\n  border-radius: 12px;\n  border: 1px solid #f7f7f7;\n  vertical-align: center;\n  margin: 5%;\n}\n\n.background {\n  height: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  align-content: center;\n  text-align: center;\n}\n\n#overlay {\n  /* display: none; */\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fffdfdd6;\n  z-index: 10;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9hZGRwaG90b2luZm8vYWRkcGhvdG9pbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkcGhvdG9pbmZvL2FkZHBob3RvaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBSUUsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUVFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkcGhvdG9pbmZvL2FkZHBob3RvaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZmllIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNteS1waWMge1xyXG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQ1JSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuIC8vIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3BhdHRlcm4uanBlZyk7XHJcblxyXG4gIC8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9wYXR0ZXJuLmpwZWcpO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI292ZXJsYXkge1xyXG4gIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZGQ2O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIuc2VsZmllIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNteS1waWMge1xuICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDUlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmN2Y3Zjc7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNSU7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNvdmVybGF5IHtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGZkZDY7XG4gIHotaW5kZXg6IDEwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/addphotoinfo/addphotoinfo.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/addphotoinfo/addphotoinfo.page.ts ***!
  \*********************************************************/
/*! exports provided: AddphotoinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddphotoinfoPage", function() { return AddphotoinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");










let AddphotoinfoPage = class AddphotoinfoPage {
    constructor(navCtrl, platform, http, lp, settings, actionSheetCtrl, pop, ph, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.lp = lp;
        this.settings = settings;
        this.actionSheetCtrl = actionSheetCtrl;
        this.pop = pop;
        this.ph = ph;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.completed = false;
        this.profileUploaded = false;
        this.licenceUploaded = false;
        this.NidUploaded = false;
        this.http = http;
    }
    ngOnInit() {
        console.log("ionViewDidLoad AddphotoinfoPage");
    }
    Next() {
        if (this.licenceUploaded) {
        }
        else {
            this.pop.showAlertNormal(this.lp.translate()[0].b5, "", false);
        }
    }
    goBack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateRoot("more-info");
        });
    }
    choosePic_2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.lp.translate()[0].b6,
                buttons: [
                    {
                        text: this.lp.translate()[0].b7,
                        icon: "ios-camera",
                        handler: () => {
                            this.capture2();
                        },
                    },
                    {
                        text: this.lp.translate()[0].b8,
                        icon: "ios-folder",
                        handler: () => {
                            this.capture2FromFile();
                        },
                    },
                    {
                        text: this.lp.translate()[0].b9,
                        icon: "close",
                        role: "cancel",
                        handler: () => {
                            console.log("Cancel clicked");
                        },
                    },
                ],
            });
            actionSheet.present();
        });
    }
    capture2() {
        const options = {
            quality: 40,
            targetWidth: 300,
            targetHeight: 200,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.captureDataUrl2 = "data:image/jpeg;base64," + imageData;
            this.processLicensePicture(this.captureDataUrl2);
        }, (err) => {
            // Handle error
        });
    }
    capture2FromFile() {
        const options = {
            quality: 40,
            targetWidth: 300,
            targetHeight: 200,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.captureDataUrl2 = "data:image/jpeg;base64," + imageData;
            this.processLicensePicture(this.captureDataUrl2);
        });
    }
    processLicensePicture(captureData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
            // Create a timestamp as filename
            const filename = Math.floor(Date.now() / 1000);
            const loading = yield this.loadingCtrl.create();
            loading.present();
            // Create a reference to 'images/todays-date.jpg'
            const imageRef = storageRef.child(`driverPictures/${filename}.jpg`);
            imageRef
                .putString(captureData, firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"].StringFormat.DATA_URL)
                .then((snapshot) => {
                imageRef
                    .getDownloadURL()
                    .then((url) => {
                    this.ph
                        .UpdateLPhotoInfo(url)
                        .then((success) => {
                        loading.dismiss();
                        this.navCtrl.navigateRoot("addphoto2");
                    })
                        .catch((error) => {
                        console.log("1 ERROR", error);
                        loading.dismiss();
                        this.pop.alertMe("Check Your Internet Connection and try again");
                    });
                })
                    .catch((error) => {
                    console.log("2 ERROR", error);
                    loading.dismiss();
                    this.pop.alertMe("Check Your Internet Connection and try again");
                });
            })
                .catch((error) => {
                console.log("3 ERROR", error);
                loading.dismiss();
                this.pop.alertMe("Check Your Internet Connection and try again");
            });
        });
    }
};
AddphotoinfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__["PopUpService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
AddphotoinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-addphotoinfo",
        template: __webpack_require__(/*! raw-loader!./addphotoinfo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addphotoinfo/addphotoinfo.page.html"),
        styles: [__webpack_require__(/*! ./addphotoinfo.page.scss */ "./src/app/pages/addphotoinfo/addphotoinfo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"],
        src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__["PopUpService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], AddphotoinfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-addphotoinfo-addphotoinfo-module-es2015.js.map