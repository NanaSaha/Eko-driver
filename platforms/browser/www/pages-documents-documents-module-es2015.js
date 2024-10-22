(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-documents-documents-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documents/documents.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documents/documents.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar style=\"margin-top: 20px\">\n    <ion-button (click)=\"goBack()\" color=\"primary\" fill=\"clear\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n      <span style=\"margin-left: 30px; font-size: 1.4em\">Documents</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" class=\"ion-text-center\" class=\"yes-scroll\">\n  <div class=\"followed-items\">\n    <ion-list class=\"ion-text-center\" inset=\"false\">\n      <div class=\"ion-text-center\" *ngFor=\"let event of eventList\">\n        <!-- <ion-item class=\"driver\" (click)=\"GotoItem(event)\">\n          <img class=\"profile-pic\" [src]=\"event.license_picture\" />\n        </ion-item>\n        <ion-item>\n          <h3 style=\"font-size: 1.2em\">License Number: {{event.license}}</h3>\n        </ion-item>\n\n        <ion-item class=\"driver\">\n          <img class=\"profile-pic\" [src]=\"event.car_picture\" />\n        </ion-item>\n\n        <ion-item>\n          <h3 style=\"font-size: 1.2em\">Car Plate Number: {{event.plate}}</h3>\n        </ion-item> -->\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6>\n              <img [src]=\"event.license_picture\" />\n              <h4>License Image</h4>\n            </ion-col>\n\n            <ion-col col-6>\n              <img [src]=\"event.car_picture\" />\n              <h4>Picture of Car</h4>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6>\n              <img [src]=\"event.driver_picture\" />\n              <h4>Driver Picture</h4>\n            </ion-col>\n\n            <ion-col col-6>\n              <img [src]=\"event.insurance_picture\" />\n              <h4>DVLA / Insurance</h4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <h1 style=\"text-align: center; color: #fbb91d\">Other Details:</h1>\n        <ion-item>\n          <ion-icon\n            name=\"checkmark-circle-outline\"\n            style=\"padding-right: 20px\"\n          ></ion-icon>\n          <h4 style=\"text-align: center\">\n            Car Name: <span style=\"color: #fbb91d\"> {{event.carName}}</span>\n          </h4>\n        </ion-item>\n        <ion-item>\n          <ion-icon\n            name=\"checkmark-circle-outline\"\n            style=\"padding-right: 20px\"\n          ></ion-icon>\n          <h4 style=\"text-align: center\">\n            Car Model:<span style=\"color: #fbb91d\"> {{event.carmodel}}</span>\n          </h4>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon\n            name=\"checkmark-circle-outline\"\n            style=\"padding-right: 20px\"\n          ></ion-icon>\n          <h4 style=\"text-align: center\">\n            Car Year:<span style=\"color: #fbb91d\">\n              {{event.caryear | date:'mediumDate'}}\n            </span>\n          </h4>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon\n            name=\"checkmark-circle-outline\"\n            style=\"padding-right: 20px\"\n          ></ion-icon>\n          <h4 style=\"text-align: center\">\n            Car Plate: <span style=\"color: #fbb91d\">{{event.plate}}</span>\n          </h4>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon\n            name=\"checkmark-circle-outline\"\n            style=\"padding-right: 20px\"\n          ></ion-icon>\n          <h4 style=\"text-align: center\">\n            License Number:\n            <span style=\"color: #fbb91d\"> {{event.license}} </span>\n          </h4>\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer> </ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/documents/documents.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/documents/documents.module.ts ***!
  \*****************************************************/
/*! exports provided: DocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageModule", function() { return DocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documents.page */ "./src/app/pages/documents/documents.page.ts");







const routes = [
    {
        path: '',
        component: _documents_page__WEBPACK_IMPORTED_MODULE_6__["DocumentsPage"]
    }
];
let DocumentsPageModule = class DocumentsPageModule {
};
DocumentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_documents_page__WEBPACK_IMPORTED_MODULE_6__["DocumentsPage"]]
    })
], DocumentsPageModule);



/***/ }),

/***/ "./src/app/pages/documents/documents.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/documents/documents.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .followed-items .driver {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  padding: 10px;\n  width: 100%;\n}\nion-content .followed-items .driver p {\n  font-size: 16px;\n  font-size: 4vw;\n  color: white;\n}\nion-content .followed-items .user {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 30px;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n  padding: 10px;\n  float: left;\n  width: 80%;\n}\nion-content .followed-items .user p {\n  font-size: 16px;\n  font-size: 4vw;\n  color: white;\n}\nion-content .topped-items ion-item {\n  margin-top: 0px;\n  margin-bottom: 6px;\n}\nion-content .topped-items h2 {\n  color: #fbb91d;\n  font-size: 1.27em;\n  padding: 2px;\n}\nion-content .topped-items ion-label {\n  font-size: 1em;\n  padding: 2px;\n}\n#container_1 {\n  margin-top: 2%;\n  height: auto;\n  width: 100%;\n  padding: 25px;\n  border-radius: 4px;\n  color: white;\n  text-align: center;\n  background: #fbb91d;\n  overflow: hidden;\n}\n#container_1 ion-icon {\n  color: #ffffff;\n}\n#container_1 h2 {\n  font-size: 1em;\n  height: auto;\n}\n#container_1 ion-icon {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9kb2N1bWVudHMvZG9jdW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRzL2RvY3VtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFFQSxXQUFBO0FDUE47QURTTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1BSO0FEV0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBRUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDVk47QURZTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1ZSO0FEZ0JJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDZE47QURnQkk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDZE47QURpQkk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ2ZOO0FEb0JBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtBQ2xCRjtBRG1CRTtFQUNFLGNBQUE7QUNqQko7QURtQkU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ2pCSjtBRG9CRTtFQUNFLFdBQUE7QUNsQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kb2N1bWVudHMvZG9jdW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAvLyAucHJvZmlsZS1waWMge1xyXG4gIC8vICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuXHJcbiAgLmZvbGxvd2VkLWl0ZW1zIHtcclxuICAgIC5kcml2ZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VyIHtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcblxyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b3BwZWQtaXRlbXMge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICNmYmI5MWQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yN2VtO1xyXG4gICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNjb250YWluZXJfMSB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZiYjkxZDtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQgLmZvbGxvd2VkLWl0ZW1zIC5kcml2ZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5mb2xsb3dlZC1pdGVtcyAuZHJpdmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCAuZm9sbG93ZWQtaXRlbXMgLnVzZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA4MCU7XG59XG5pb24tY29udGVudCAuZm9sbG93ZWQtaXRlbXMgLnVzZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiA0dnc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC50b3BwZWQtaXRlbXMgaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbmlvbi1jb250ZW50IC50b3BwZWQtaXRlbXMgaDIge1xuICBjb2xvcjogI2ZiYjkxZDtcbiAgZm9udC1zaXplOiAxLjI3ZW07XG4gIHBhZGRpbmc6IDJweDtcbn1cbmlvbi1jb250ZW50IC50b3BwZWQtaXRlbXMgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuI2NvbnRhaW5lcl8xIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmYmI5MWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jY29udGFpbmVyXzEgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbiNjb250YWluZXJfMSBoMiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG4jY29udGFpbmVyXzEgaW9uLWljb24ge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/documents/documents.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/documents/documents.page.ts ***!
  \***************************************************/
/*! exports provided: DocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPage", function() { return DocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let DocumentsPage = class DocumentsPage {
    constructor(navCtrl, camera, lp, settings, pop, load, profile, alert, eventProvider, route) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.lp = lp;
        this.settings = settings;
        this.pop = pop;
        this.load = load;
        this.profile = profile;
        this.alert = alert;
        this.eventProvider = eventProvider;
        this.route = route;
    }
    ionViewDidEnter() {
        this.eventList = [];
        this.profile
            .getUserProfil()
            .child(this.profile.id)
            .on("value", (userProfileSnapshot) => {
            console.log(userProfileSnapshot.val());
            userProfileSnapshot.forEach((snap) => {
                console.log("SNAP", snap);
                console.log("SNAP", snap.val().license);
                this.eventList.push({
                    license: snap.val().license,
                    license_picture: snap.val().license_picture,
                    car_picture: snap.val().img,
                    plate: snap.val().plate,
                    carName: snap.val().carName,
                    carmodel: snap.val().carmodel,
                    caryear: snap.val().caryear,
                    insurance_picture: snap.val().insurance_picture,
                    driver_picture: snap.val().picture,
                });
            });
        });
        // this.profile.getCompanies().child('Driver/documents').once('value', snapshot => {
        //   snapshot.forEach(snap => {
        //     if (snap.child(this.profile.id).val()) {
        //       const today = new Date();
        //       const expire = new Date(snap.child(this.profile.id).val().expired);
        //       const day = this.days;
        //       console.log(day);
        //       console.log(this.calcDate(today, expire));
        //       this.eventList.push({
        //         id: snap.key,
        //         permission: snap.val().permission,
        //         filetype: snap.val().filetype,
        //         title: snap.val().title,
        //         approved: snap.child(this.profile.id).val().approved,
        //         client: snap.child(this.profile.id).val().client,
        //         comment: snap.child(this.profile.id).val().comment,
        //         data: snap.child(this.profile.id).val().data,
        //         denied: snap.child(this.profile.id).val().denied,
        //         expired: this.calcDate(today, expire),
        //         expiredate: day
        //       });
        //     } else {
        //       this.eventList.push({
        //         id: snap.key,
        //         permission: snap.val().permission,
        //         filetype: snap.val().filetype,
        //         title: snap.val().title,
        //       });
        //     }
        //     return false;
        //   });
        //   this.profile.getCompanies().child('Driver/documents').off('value');
        // });
    }
    goBack() {
        this.navCtrl.navigateBack("home");
    }
    calcDate(date1, date2) {
        const diff = Math.floor(date2.getTime() - date1.getTime());
        const day = 1000 * 60 * 60 * 24;
        const days = Math.floor(diff / day);
        const months = Math.floor(days / 31);
        const years = Math.floor(months / 12);
        console.log(days);
        this.days = days;
        let message = " Expires in ";
        message += days + " days ";
        if (months !== 0) {
            message += months + " months ";
            message += years + " years \n";
        }
        return message;
    }
    presentRouteLoader(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.load.create({
                // tslint:disable-next-line: object-literal-shorthand
                message: message,
            });
            loading.present();
            const myInterval = setInterval(() => {
                if (this.eventList != null) {
                    loading.dismiss();
                    clearInterval(myInterval);
                }
            }, 1000);
        });
    }
    GotoItem(h) {
        console.log(h);
        this.route.navigate(["documentdetail"], { queryParams: h });
    }
};
DocumentsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
    { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_7__["PopUpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
DocumentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-documents",
        template: __webpack_require__(/*! raw-loader!./documents.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documents/documents.page.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./documents.page.scss */ "./src/app/pages/documents/documents.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"],
        src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
        src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_7__["PopUpService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], DocumentsPage);



/***/ })

}]);
//# sourceMappingURL=pages-documents-documents-module-es2015.js.map