(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["refcode-refcode-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/refcode/refcode.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/refcode/refcode.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar style=\"margin-top: 20px\">\n    <ion-button size=\"large\" fill=\"clear\" (click)=\"goBack()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n      <span style=\"padding-left: 30px; font-size: 1em\">Share Referal Code</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"no-scroll\" padding>\n  <div text-center class=\"whiteFlap\">\n    <div id=\"cash\">${{randomCode}}</div>\n\n    <p>Share app with others. using this referal code. To earn Cash.</p>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button\n            icon-only\n            [ngStyle]=\"{'margin-top': 10 + 'px'}\"\n            style=\"font-size: 10px\"\n            color=\"success\"\n            expand=\"block\"\n            (click)=\"whatsappShare()\"\n          >\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>\n            Share to whatsapp\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button\n            icon-only\n            [ngStyle]=\"{'margin-top': 10 + 'px'}\"\n            style=\"font-size: 10px\"\n            color=\"primary\"\n            expand=\"block\"\n            (click)=\"FaceShare()\"\n          >\n            Share To Others\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf=\"earnings > 0\">\n    <ion-title padding text-center><strong>Referal Earnings</strong></ion-title>\n    <h1 text-center>{{settings.appcurrency}} {{earnings}}</h1>\n\n    <ion-button\n      icon-only\n      [ngStyle]=\"{'margin-top': 20 + 'px'}\"\n      color=\"dark\"\n      expand=\"block\"\n      (click)=\"Request()\"\n    >\n      Request Payment\n    </ion-button>\n  </div>\n  <div *ngIf=\"earnings <= 0 || earnings == undefined\">\n    <ion-title padding text-center><strong>Referal Earnings</strong></ion-title>\n    <h1 text-center>GH₵ 0</h1>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <img src=\"/assets/img/happy.png\" />\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/refcode/refcode.module.ts":
/*!*******************************************!*\
  !*** ./src/app/refcode/refcode.module.ts ***!
  \*******************************************/
/*! exports provided: RefcodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefcodePageModule", function() { return RefcodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _refcode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refcode.page */ "./src/app/refcode/refcode.page.ts");







const routes = [
    {
        path: '',
        component: _refcode_page__WEBPACK_IMPORTED_MODULE_6__["RefcodePage"]
    }
];
let RefcodePageModule = class RefcodePageModule {
};
RefcodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_refcode_page__WEBPACK_IMPORTED_MODULE_6__["RefcodePage"]]
    })
], RefcodePageModule);



/***/ }),

/***/ "./src/app/refcode/refcode.page.scss":
/*!*******************************************!*\
  !*** ./src/app/refcode/refcode.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-bottom: 26px;\n  height: 200px auto;\n  background: white;\n  padding: 15px;\n  border-radius: 12px;\n  margin-top: 20px;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n}\nform ion-button {\n  margin-top: 20px !important;\n}\nform ion-button {\n  border: 1px solid #fbb91d;\n  padding: 10px;\n  background: #fbb91d;\n  color: #f7f7f7;\n}\nion-label {\n  text-align: center;\n}\nion-input {\n  padding: 6px;\n  font-size: 1.3em;\n}\n.invalid {\n  border: 1px solid #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0 !important;\n}\nion-button {\n  border-radius: 12px;\n  height: 50px;\n}\n.butt {\n  display: inline-table;\n  height: 50px;\n  width: 90%;\n}\n#envelope {\n  height: auto;\n  width: 6em;\n}\n.bars {\n  margin-top: 0%;\n  padding: 12px;\n}\n.bars .bars-price {\n  height: 50px;\n  width: 100%;\n  background: #ffffff;\n  border-left: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-right: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-top: 1px solid rgba(212, 212, 212, 0.93);\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n  z-index: 3;\n  border-radius: 12px;\n  overflow: hidden;\n  line-height: 20px;\n  font-size: 1.2em;\n  text-align: center;\n}\n.bars .bars-price ion-icon {\n  position: absolute;\n  font-size: 1em;\n  left: 2%;\n  color: #fbb91d;\n  padding: 5px;\n}\n.footer-md:before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-image: url() !important;\n  background-repeat: repeat-x;\n  content: \"\" !important;\n}\n.footer-ios:before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-image: url();\n  background-repeat: repeat-x;\n  content: \"\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9yZWZjb2RlL3JlZmNvZGUucGFnZS5zY3NzIiwic3JjL2FwcC9yZWZjb2RlL3JlZmNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsMkNBQUE7QUNDRjtBREFFO0VBQ0UsMkJBQUE7QUNFSjtBREFFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRUo7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtBQ0NGO0FERUE7RUFDRSwyQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0VGO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0VGO0FEQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0VGO0FEQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7RUFFQSxVQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBTjtBREtBO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDRkY7QURLQTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcmVmY29kZS9yZWZjb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICBoZWlnaHQ6IDIwMHB4IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiB3aWtpO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICBpb24tYnV0dG9uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmJiOTFkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZiYjkxZDtcbiAgICBjb2xvcjogI2Y3ZjdmNztcbiAgfVxufVxuXG5pb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY2MTUzO1xufVxuXG4uZXJyb3ItbWVzc2FnZSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5idXR0IHtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbiNlbnZlbG9wZSB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDZlbTtcbn1cblxuLmJhcnMge1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgcGFkZGluZzogMTJweDtcblxuICAuYmFycy1wcmljZSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWxlZnQ6IDEuMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuXG4gICAgei1pbmRleDogMztcblxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgbGVmdDogMiU7XG4gICAgICBjb2xvcjogI2ZiYjkxZDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gIH1cbn1cblxuLmZvb3Rlci1tZDpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICB0b3A6IC0ycHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXItaW9zOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTJweDtcbiAgYm90dG9tOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XG59XG4iLCJmb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgaGVpZ2h0OiAyMDBweCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBhbmltYXRpb24tbmFtZTogd2lraTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xufVxuZm9ybSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuZm9ybSBpb24tYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZiYjkxZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZiYjkxZDtcbiAgY29sb3I6ICNmN2Y3Zjc7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWlucHV0IHtcbiAgcGFkZGluZzogNnB4O1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjYxNTM7XG59XG5cbi5lcnJvci1tZXNzYWdlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uYnV0dCB7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4jZW52ZWxvcGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA2ZW07XG59XG5cbi5iYXJzIHtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIHBhZGRpbmc6IDEycHg7XG59XG4uYmFycyAuYmFycy1wcmljZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBib3JkZXItcmlnaHQ6IDEuMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgei1pbmRleDogMztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYXJzIC5iYXJzLXByaWNlIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGVmdDogMiU7XG4gIGNvbG9yOiAjZmJiOTFkO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5mb290ZXItbWQ6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMnB4O1xuICBib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyLWlvczpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICB0b3A6IC0ycHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/refcode/refcode.page.ts":
/*!*****************************************!*\
  !*** ./src/app/refcode/refcode.page.ts ***!
  \*****************************************/
/*! exports provided: RefcodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefcodePage", function() { return RefcodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











let RefcodePage = class RefcodePage {
    constructor(ph, share, lp, pop, eProvider, platform, nav, loadingCtrl, location, alertCtrl, settings, formBuilder) {
        this.ph = ph;
        this.share = share;
        this.lp = lp;
        this.pop = pop;
        this.eProvider = eProvider;
        this.platform = platform;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.location = location;
        this.alertCtrl = alertCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.randomCode = "Getting id...";
        this.earnings = 0;
        this.message = null;
        this.file = null;
        this.link = null;
        this.subject = null;
        // this.pop.presentLoader("Getting referal Earnings");
        this.ph.getUserProfile().on("value", (userProfileSnapshot) => {
            if (userProfileSnapshot.val()) {
                console.log("VALUE FROM USER PROFILE" + JSON.stringify(userProfileSnapshot.val()));
                console.log("VALUE FROM USER PROFILE" + this.ph.id);
                console.log("unique_number is " + userProfileSnapshot.val().unique_number);
                this.earnings = userProfileSnapshot.val().refEarning;
                console.log("EARNINGSS" + this.earnings);
                // this.randomCode = userProfileSnapshot.val().id;
                this.randomCode = userProfileSnapshot.val().unique_number;
            }
            else {
                this.earnings = 0;
                console.log("EARNINGSS 0" + this.earnings);
            }
        });
        // this.pop.hideLoader();
        this.cardpaymentForm = formBuilder.group({
            card: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            ],
        });
    }
    ionViewDidEnter() {
        this.message =
            "Share " +
                this.randomCode +
                " to your friends and family and get 1ghc for every ride they make with your promo code  ";
        this.file = "https://ekodot.devdexsoftware.com";
        this.link = "https://ekodot.devdexsoftware.com";
    }
    goBack() {
        // this.location.back();
        this.nav.navigateBack("home");
    }
    gotoEarning() {
        this.nav.navigateRoot("earnings");
    }
    FaceShare() {
        this.share
            .share(this.message, this.subject, this.file, this.link)
            .then(() => { })
            .catch(() => { });
    }
    whatsappShare() {
        this.share
            .shareViaWhatsApp(this.message, null, this.link)
            .then(() => {
            console.log("WhatsApp share successful");
        })
            .catch((err) => {
            console.log("An error occurred ", err);
        });
    }
    Request() {
        // this.send(
        //   "A user wants to request: " + this.ph.phone,
        //   "Trace the driver information to the admin",
        //   this.settings.support_email
        // );
        this.pop.showPimp("You Have Made A Request for your earnings. Ekodot will process this within 24hrs. Thank you...");
    }
    // send(subject: string, message: string, email: string) {
    //   const url =
    //     "https://api.mailgun.net/v3/" + this.settings.mailGUrl + "/messages";
    //   const body = {
    //     from: email,
    //     to: this.settings.companyMail,
    //     // tslint:disable-next-line: object-literal-shorthand
    //     subject: subject,
    //     html:
    //       "<html><body>First Name: " +
    //       this.settings.appName +
    //       "<br>" +
    //       "Last Name: " +
    //       this.settings.appLink +
    //       "<br>" +
    //       "Email: " +
    //       email +
    //       "<br>" +
    //       "Subject: " +
    //       subject +
    //       "<br><br>" +
    //       "Message: " +
    //       message +
    //       "</body></html>",
    //   };
    //   const headers = {
    //     Authorization: "Basic " + this.settings.mailGKey,
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   };
    // }
    ngOnInit() {
        this.file = "https://ekodot.devdexsoftware.com";
        this.link = "https://ekodot.devdexsoftware.com";
    }
};
RefcodePage.ctorParameters = () => [
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
    { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"] },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
RefcodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-refcode",
        template: __webpack_require__(/*! raw-loader!./refcode.page.html */ "./node_modules/raw-loader/index.js!./src/app/refcode/refcode.page.html"),
        styles: [__webpack_require__(/*! ./refcode.page.scss */ "./src/app/refcode/refcode.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"],
        src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"],
        src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], RefcodePage);



/***/ })

}]);
//# sourceMappingURL=refcode-refcode-module-es2015.js.map