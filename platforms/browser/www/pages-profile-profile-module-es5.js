(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background_whole\" padding>\n  <ion-header no-border>\n    <ion-toolbar>\n      <ion-button size=\"large\" (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n        <ion-title>PROFILE</ion-title>\n      </ion-button>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid style=\"background-color: beige; border-radius: 12px\">\n    <ion-row>\n      <ion-col size=\"8\">\n        <div class=\"content-wrap\" *ngIf=\"first_name\">\n          <span class=\"bookPrice\">{{first_name}} {{last_name}}</span>\n          <br />\n          <span class=\"bookTitle\" style=\"color: red\">{{unique}}</span>\n        </div>\n\n        <div class=\"content-wrap\" *ngIf=\"!first_name\">\n          <span class=\"bookPrice\">EKODOT DRIVER</span>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <div class=\"content-wrap2\" *ngIf=\"ph.picture\">\n          <ion-avatar class=\"avtr\">\n            <img class=\"profile-pic\" [src]=\"ph.picture\" />\n          </ion-avatar>\n        </div>\n\n        <div class=\"content-wrap2\" *ngIf=\"!ph.picture\">\n          <ion-avatar class=\"avtr\">\n            <img class=\"profile-pic\" src=\"assets/img/user-edit-solid.svg\" />\n          </ion-avatar>\n        </div>\n        <!-- <div class=\"centerDiv\" *ngIf=\"ph.picture\" (click)=\"choosePic()\">\n          <ion-avatar\n            style=\"text-align: center; display: inline-flex !important\"\n          >\n            <img class=\"profile-pic\" [src]=\"ph.picture\" />\n          </ion-avatar>\n        </div> -->\n        <!-- <div class=\"centerDiv\" *ngIf=\"!ph.picture\" (click)=\"choosePic()\">\n          <ion-avatar\n            style=\"text-align: center; display: inline-flex !important\"\n          >\n            <img class=\"profile-pic\" src=\"assets/img/user-edit-solid.svg\" />\n          </ion-avatar>\n        </div> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-item (click)=\"updateEmail()\">\n    <ion-icon name=\"ios-mail\" style=\"padding-right: 20px\"></ion-icon>\n    <h4 style=\"text-align: center\" *ngIf=\"!email\">Update Your Email</h4>\n    <h4 style=\"text-align: center\" *ngIf=\"email\">{{email}}</h4>\n\n    <!-- <ion-icon name=\"arrow-dropright\" slot=\"end\"></ion-icon> -->\n  </ion-item>\n\n  <!-- <ion-item>\n    <ion-icon name=\"ios-contact\" style=\"padding-right: 20px\"></ion-icon>\n    <h4 style=\"text-align: center\" *ngIf=\"!first_name\">Ekodot Driver</h4>\n    <h4 style=\"text-align: center\" *ngIf=\"first_name\">\n      {{first_name}} {{last_name}}\n    </h4>\n    <ion-icon name=\"arrow-dropright\" slot=\"end\"></ion-icon>\n  </ion-item> -->\n\n  <ion-item>\n    <ion-icon name=\"ios-call\" style=\"padding-right: 20px\"></ion-icon>\n    <h4 style=\"text-align: center\" *ngIf=\"phoneNumber\">{{phoneNumber}}</h4>\n    <h4 style=\"text-align: center\" *ngIf=\"!phoneNumber\">027XXXXXXX</h4>\n    <!-- <ion-icon name=\"arrow-dropright\" slot=\"end\"></ion-icon> -->\n  </ion-item>\n\n  <ion-item (click)=\"updateEmergencyNumber()\" *ngIf=\"emergencyNumber\">\n    <ion-icon name=\"ios-call\" style=\"padding-right: 10px\"></ion-icon>\n    <h4 style=\"text-align: center\" *ngIf=\"emergencyNumber\">\n      Emergency: <span style=\"color: red\"> {{emergencyNumber}}</span>\n    </h4>\n\n    <!-- <ion-icon name=\"arrow-dropright\" slot=\"end\"></ion-icon> -->\n  </ion-item>\n\n  <div *ngIf=\"!emergencyNumber\" class=\"centerDiv\">\n    <h4 style=\"text-align: center\" *ngIf=\"!emergencyNumber\">\n      <ion-button (click)=\"updateEmergencyNumber()\" color=\"danger\">\n        Add Emergency Number<ion-icon name=\"add\" slot=\"end\"></ion-icon\n      ></ion-button>\n    </h4>\n  </div>\n\n  <div class=\"centerDiv2\">\n    <ion-button (click)=\"logOut()\">\n      Sign Out <ion-icon name=\"power\" slot=\"end\"></ion-icon\n    ></ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item ion-label {\n  margin: 0 !important;\n}\n\nion-list {\n  padding: 0;\n  border-radius: 12px;\n}\n\nion-list-header {\n  background-color: #ececec;\n  margin: 0;\n  padding: 0;\n}\n\n.centerDiv {\n  position: relative;\n  text-align: center;\n}\n\n.centerDiv2 {\n  position: relative;\n  text-align: center;\n}\n\n.background_whole {\n  z-index: 0 !important;\n}\n\n.bookPrice {\n  text-align: center;\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.bookTitle {\n  text-align: center;\n}\n\n.content-wrap,\n.img-wrapper {\n  display: inline-block;\n  margin-left: 40px;\n  margin-top: 10px;\n}\n\n.content-wrap2 {\n  display: inline-block;\n  margin-left: 0px;\n  width: 70px;\n  height: 70px;\n}\n\n.avtr {\n  width: 90px;\n  height: 90px;\n  text-align: center;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n}\n\nion-datetime {\n  padding-left: 3px !important;\n}\n\n.item-inner {\n  border: none !important;\n  padding: 0;\n}\n\n.popover-content {\n  min-height: 0 !important;\n  max-height: 88px !important;\n}\n\n.profile-popover {\n  margin-top: -1px !important;\n}\n\n.placeholder-profile {\n  color: #cccccc;\n}\n\n.dob-label {\n  color: #000000 !important;\n  padding: 10px !important;\n  max-width: 50% !important;\n}\n\n.bar_ridetype {\n  height: auto;\n  width: 91%;\n  background: white;\n  position: absolute;\n  margin-left: 0%;\n  padding: 0px;\n  top: 40%;\n  z-index: 1;\n  border: 1px solid #090a0a;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.8s;\n          animation-duration: 0.8s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n}\n\n.bar_ridetype .btn_cancel ion-icon {\n  font-size: 2em;\n  top: 10px;\n}\n\n.bar_ridetype ion-button {\n  border: 1.3px solid black;\n  height: auto;\n  width: auto;\n  text-align: center;\n  border-radius: 12px;\n}\n\n.bar_ridetype .gutton {\n  bottom: -7.5px;\n  border-radius: 12px;\n  width: 96%;\n  margin-left: 2%;\n}\n\n.bar_ridetype .text {\n  padding-bottom: 0px;\n  font-size: 1.4em;\n}\n\n.bar_ridetype .text ion-spinner {\n  top: 10px;\n}\n\n.top_bar {\n  height: 200px;\n  border-radius: 12px;\n  width: 100%;\n  box-shadow: none;\n  padding: 0px;\n  background: black;\n  color: #fdfdfd;\n  font-weight: bold;\n  font-style: bold;\n  font-size: 1.3em;\n  border-top: 0px;\n}\n\n.top_bar ion-icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBOztFQUVFLHFCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFBQSwrQkFBQTtBQ0ZGOztBRDZCQTtFQUNFLDRCQUFBO0FDMUJGOztBRDZCQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtBQzFCRjs7QUQ2QkE7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO0FDMUJGOztBRDZCQTtFQUNFLDJCQUFBO0FDMUJGOztBRDZCQTtFQUNFLGNBQUE7QUMxQkY7O0FENkJBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FDMUJGOztBRDZCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUMxQkY7O0FENkJJO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUMzQk47O0FEK0JFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUM5Qko7O0FEaUNFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUMvQko7O0FEa0NFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ2hDSjs7QURrQ0k7RUFDRSxTQUFBO0FDaENOOztBRG9DQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDakNGOztBRG1DRTtFQUNFLFlBQUE7QUNqQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2VudGVyRGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVyRGl2MiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kX3dob2xlIHtcclxuICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjZmZmIDUwJSwgI2ZiYjkxZCA1MCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib29rUHJpY2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmJvb2tUaXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwLFxyXG4uaW1nLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcDIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLmF2dHIge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnQge1xyXG4gIC8vIGlvbi1pdGVtIHtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgLy8gICBib3gtc2hhZG93OiAwcHggMXB4IDBweCAwLjVweCByZ2JhKDMsIDMsIDMsIDAuMjUzKTtcclxuICAvLyAgIGhlaWdodDogNTBweDtcclxuICAvLyAgIG1hcmdpbi10b3A6IDMlO1xyXG4gIC8vICAgY29sb3I6IHJnYigzLCAzLCAzKTtcclxuICAvLyAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAvLyAgIGFuaW1hdGlvbi1uYW1lOiB3aWtpO1xyXG4gIC8vICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIC8vICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAvLyB9XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpYyB7XHJcbiAgLy8gd2lkdGg6IDZlbSAhaW1wb3J0YW50O1xyXG4gIC8vIGhlaWdodDogNmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIGlvbi1pdGVtIHtcclxuLy8gICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4vLyB9XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gIHBhZGRpbmctbGVmdDogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLWlubmVyIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucG9wb3Zlci1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogODhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZmlsZS1wb3BvdmVyIHtcclxuICBtYXJnaW4tdG9wOiAtMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wbGFjZWhvbGRlci1wcm9maWxlIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuLmRvYi1sYWJlbCB7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhcl9yaWRldHlwZSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA5MSU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHRvcDogNDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDksIDEwLCAxMCk7XHJcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB3aWtpO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG5cclxuICAuYnRuX2NhbmNlbCB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMS4zcHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcblxyXG4gIC5ndXR0b24ge1xyXG4gICAgYm90dG9tOiAtNy41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG5cclxuICAgIGlvbi1zcGlubmVyIHtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udG9wX2JhciB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICBjb2xvcjogI2ZkZmRmZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgYm9yZGVyLXRvcDogMHB4O1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNlbnRlckRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2VudGVyRGl2MiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2dyb3VuZF93aG9sZSB7XG4gIHotaW5kZXg6IDAgIWltcG9ydGFudDtcbn1cblxuLmJvb2tQcmljZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uYm9va1RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC13cmFwLFxuLmltZy13cmFwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRlbnQtd3JhcDIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5hdnRyIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDNweCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucG9wb3Zlci1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA4OHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLXBvcG92ZXIge1xuICBtYXJnaW4tdG9wOiAtMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbGFjZWhvbGRlci1wcm9maWxlIHtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cbi5kb2ItbGFiZWwge1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG59XG5cbi5iYXJfcmlkZXR5cGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5MSU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbiAgcGFkZGluZzogMHB4O1xuICB0b3A6IDQwJTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5MGEwYTtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBhbmltYXRpb24tbmFtZTogd2lraTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xufVxuLmJhcl9yaWRldHlwZSAuYnRuX2NhbmNlbCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0b3A6IDEwcHg7XG59XG4uYmFyX3JpZGV0eXBlIGlvbi1idXR0b24ge1xuICBib3JkZXI6IDEuM3B4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4uYmFyX3JpZGV0eXBlIC5ndXR0b24ge1xuICBib3R0b206IC03LjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuLmJhcl9yaWRldHlwZSAudGV4dCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG4uYmFyX3JpZGV0eXBlIC50ZXh0IGlvbi1zcGlubmVyIHtcbiAgdG9wOiAxMHB4O1xufVxuXG4udG9wX2JhciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZkZmRmZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGJvcmRlci10b3A6IDBweDtcbn1cbi50b3BfYmFyIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);









var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, lp, ac, pop, camera, alertCtrl, ph, authProvider) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.ac = ac;
        this.pop = pop;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.ph = ph;
        this.authProvider = authProvider;
    }
    ProfilePage.prototype.ngOnInit = function () { };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.ph
            .getUserProfil()
            .child(this.ph.id)
            .on("child_added", function (userProfileSnapshot) {
            _this.ph.number = userProfileSnapshot.val().phoneNumber;
            _this.ph.name = userProfileSnapshot.val().name;
            _this.ph.accountNum = userProfileSnapshot.val().accountNumber;
            _this.ph.bank = userProfileSnapshot.val().Bank;
            _this.ph.carType = userProfileSnapshot.val().Carname;
            _this.ph.caryear = userProfileSnapshot.val().caryear;
            _this.ph.plate = userProfileSnapshot.val().plate;
            _this.ph.seat = userProfileSnapshot.val().seats;
            _this.ph.city = userProfileSnapshot.val().city;
            _this.first_name = userProfileSnapshot.val().first_name;
            _this.last_name = userProfileSnapshot.val().last_name;
            _this.email = userProfileSnapshot.val().email;
            _this.emergencyNumber = userProfileSnapshot.val().emergencyNumber;
            _this.phoneNumber = userProfileSnapshot.val().phonenumber;
            _this.unique = userProfileSnapshot.val().unique_number;
            _this.picture = userProfileSnapshot.val().picture;
        });
    };
    ProfilePage.prototype.goBack = function () {
        this.navCtrl.navigateBack("home");
    };
    ProfilePage.prototype.remove = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.navigateRoot("");
        });
    };
    ProfilePage.prototype.onSelectChange = function (selectedValue) {
        console.log("Selected", selectedValue);
        this.ph.UpdateCartype(selectedValue);
    };
    ProfilePage.prototype.logOut = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.lp.translate()[0].c5,
                            buttons: [
                                {
                                    text: this.lp.translate()[0].i8,
                                },
                                {
                                    text: this.lp.translate()[0].c7,
                                    handler: function (data) {
                                        _this.authProvider.signOut();
                                        _this.navCtrl.navigateRoot("login");
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
    ProfilePage.prototype.updateNumber = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: this.lp.translate()[0].h1,
                            inputs: [
                                {
                                    value: this.ph.number,
                                },
                            ],
                            buttons: [
                                {
                                    text: this.lp.translate()[0].i8,
                                },
                                {
                                    text: this.lp.translate()[0].i9,
                                    handler: function (data) {
                                        console.log(data);
                                        _this.ph.UpdateNumber(data);
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
    ProfilePage.prototype.updateName = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: this.lp.translate()[0].h2,
                            inputs: [
                                {
                                    value: this.ph.name,
                                },
                            ],
                            buttons: [
                                {
                                    text: this.lp.translate()[0].i8,
                                },
                                {
                                    text: this.lp.translate()[0].i9,
                                    handler: function (data) {
                                        console.log(data);
                                        _this.ph.UpdateName(data);
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
    ProfilePage.prototype.updateEmergencyNumber = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "Enter an emergency number",
                            inputs: [
                                {
                                    value: this.emergencyNumber,
                                },
                            ],
                            buttons: [
                                {
                                    text: "Cancel",
                                },
                                {
                                    text: "Accept",
                                    handler: function (data) {
                                        console.log("EMERGENCY NUMBER DATA" + data);
                                        _this.ph.UpdateEmergencyNumbers(data);
                                        _this.navCtrl.navigateBack("home");
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
    ProfilePage.prototype.updateEmail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "Enter Your Email",
                            inputs: [
                                {
                                    value: this.email,
                                },
                            ],
                            buttons: [
                                {
                                    text: "Cancel",
                                },
                                {
                                    text: "Accept",
                                    handler: function (data) {
                                        console.log(data);
                                        _this.ph.updateEmail(data);
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
    ProfilePage.prototype.updateAccountNumber = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: this.lp.translate()[0].h10,
                            inputs: [
                                {
                                    value: this.ph.accountNum,
                                },
                            ],
                            buttons: [
                                {
                                    text: this.lp.translate()[0].i8,
                                },
                                {
                                    text: this.lp.translate()[0].i9,
                                    handler: function (data) {
                                        console.log(data);
                                        _this.ph.UpdateAccountNumber(data);
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
    ProfilePage.prototype.updateBank = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: this.lp.translate()[0].i1,
                            inputs: [
                                {
                                    value: this.ph.bank,
                                },
                            ],
                            buttons: [
                                {
                                    text: this.lp.translate()[0].i8,
                                },
                                {
                                    text: this.lp.translate()[0].i9,
                                    handler: function (data) {
                                        console.log(data);
                                        _this.ph.UpdateBank(data);
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
    ProfilePage.prototype.updateCarModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: this.lp.translate()[0].h6,
                            inputs: [
                                {
                                    value: this.ph.carType,
                                },
                            ],
                            buttons: [
                                {
                                    text: this.lp.translate()[0].i8,
                                },
                                {
                                    text: this.lp.translate()[0].i9,
                                    handler: function (data) {
                                        console.log(data);
                                        _this.ph.UpdateCarModel(data);
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
    ProfilePage.prototype.updateCaryear = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: this.lp.translate()[0].h7,
                            inputs: [
                                {
                                    value: this.ph.caryear,
                                },
                            ],
                            buttons: [
                                {
                                    text: this.lp.translate()[0].i8,
                                },
                                {
                                    text: this.lp.translate()[0].i9,
                                    handler: function (data) {
                                        console.log(data);
                                        _this.ph.UpdateCarYear(data);
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
    ProfilePage.prototype.updatePlate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: this.lp.translate()[0].h8,
                            inputs: [
                                {
                                    value: this.ph.plate,
                                },
                            ],
                            buttons: [
                                {
                                    text: this.lp.translate()[0].i8,
                                },
                                {
                                    text: this.lp.translate()[0].i9,
                                    handler: function (data) {
                                        console.log(data);
                                        _this.ph.UpdatePlate(data);
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
    ProfilePage.prototype.updateCity = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: this.lp.translate()[0].h4,
                            inputs: [
                                {
                                    value: this.ph.city,
                                },
                            ],
                            buttons: [
                                {
                                    text: this.lp.translate()[0].i8,
                                },
                                {
                                    text: this.lp.translate()[0].i9,
                                    handler: function (data) {
                                        console.log(data);
                                        _this.ph.UpdateCity(data);
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
    ProfilePage.prototype.updateSeat = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: this.lp.translate()[0].h9,
                            inputs: [
                                {
                                    value: this.ph.seat,
                                },
                            ],
                            buttons: [
                                {
                                    text: this.lp.translate()[0].i8,
                                },
                                {
                                    text: this.lp.translate()[0].i9,
                                    handler: function (data) {
                                        console.log(data);
                                        _this.ph.UpdateCarSeats(data);
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
    ProfilePage.prototype.choosePic = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ac.create({
                            header: this.lp.translate()[0].i10,
                            buttons: [
                                {
                                    text: this.lp.translate()[0].j1,
                                    icon: "ios-camera",
                                    handler: function () {
                                        _this.changePic();
                                    },
                                },
                                {
                                    text: this.lp.translate()[0].j2,
                                    icon: "ios-folder",
                                    handler: function () {
                                        _this.changePicFromFile();
                                    },
                                },
                                {
                                    text: this.lp.translate()[0].i8,
                                    icon: "close",
                                    role: "cancel",
                                    handler: function () {
                                        console.log("Cancel clicked");
                                    },
                                },
                            ],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.changePic = function () {
        var _this = this;
        var cameraOptions = {
            quality: 16,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl = "data:image/jpeg;base64," + imageData;
            _this.processProfilePicture(_this.captureDataUrl);
        });
    };
    ProfilePage.prototype.changePicFromFile = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 16,
            encodingType: this.camera.EncodingType.PNG,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl = "data:image/jpeg;base64," + imageData;
            _this.processProfilePicture(_this.captureDataUrl);
        });
    };
    ProfilePage.prototype.processProfilePicture = function (captureData) {
        var _this = this;
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref();
        // Create a timestamp as filename
        var filename = Math.floor(Date.now() / 1000);
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("driverPictures/" + filename + ".jpg");
        imageRef
            .putString(captureData, firebase__WEBPACK_IMPORTED_MODULE_8__["storage"].StringFormat.DATA_URL)
            .then(function (snapshot) {
            imageRef
                .getDownloadURL()
                .then(function (url) {
                _this.ph
                    .UpdatePPhotoInfo(url)
                    .then(function (success) {
                    _this.pop.presentToast(_this.lp.translate()[0].j3);
                })
                    .catch(function (error) {
                    alert(error);
                });
            })
                .catch(function (error) {
                alert(error);
            });
        })
            .catch(function (error) {
            alert(error);
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map