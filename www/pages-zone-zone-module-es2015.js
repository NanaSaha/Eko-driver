(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-zone-zone-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/zone/zone.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/zone/zone.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar style=\"margin-top:20px\">\n    <ion-button (click)=\"goBack()\" color=\"primary\" fill=\"clear\">\n      <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon> <span\n        style=\"margin-left:30px; font-size: 1.4em\">Zones</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <ion-list class=\"ion-text-center\">\n    <div class=\"ion-text-center\" *ngFor=\"let event of eventList\">\n      <ion-item>\n        <div>\n          <ion-title>{{event.name}}</ion-title>\n        </div>\n\n        <ion-button (click)=\"UseZone(event.zone_lat, event.zone_lng)\" color=\"primary\" expand=\"clear\">Use Zone\n        </ion-button>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/zone/zone.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/zone/zone.module.ts ***!
  \*******************************************/
/*! exports provided: ZonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonePageModule", function() { return ZonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _zone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zone.page */ "./src/app/pages/zone/zone.page.ts");







const routes = [
    {
        path: '',
        component: _zone_page__WEBPACK_IMPORTED_MODULE_6__["ZonePage"]
    }
];
let ZonePageModule = class ZonePageModule {
};
ZonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_zone_page__WEBPACK_IMPORTED_MODULE_6__["ZonePage"]]
    })
], ZonePageModule);



/***/ }),

/***/ "./src/app/pages/zone/zone.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/zone/zone.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .drive {\n  color: black;\n}\nion-content .drive ion-icon {\n  font-size: 0.8em;\n  padding: 12px;\n  color: #248cd2;\n}\nion-content .price {\n  color: #3eab0f;\n  font-size: 1.67em;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-radius: 12px;\n}\nion-content .price ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\nion-content .date {\n  color: orange;\n  font-size: 1.47em;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n}\nion-content .date ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\nion-content .location {\n  width: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nion-content .location p {\n  font-size: 1.3em;\n  height: auto;\n}\nion-content .location ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: orange;\n}\nion-content .destination {\n  width: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nion-content .destination ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: darkslateblue;\n}\nion-content p {\n  font-size: 1.3em;\n  height: auto;\n  line-height: 100px;\n  width: auto;\n}\n#topcontent {\n  width: 100%;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  font-size: 1.27em;\n  color: white;\n}\n#topcontent button {\n  border: 1px solid #f7f7f7;\n  vertical-align: middle;\n  width: 100%;\n}\nh1 {\n  background: #248cd2;\n  font-size: 1.67em;\n  padding-top: 7px;\n  width: auto;\n  padding-bottom: 7px;\n}\n.followed-items ion-item {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  border-radius: 12px;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n}\n.topped-items ion-item {\n  margin-top: 0px;\n  margin-bottom: 6px;\n}\n.topped-items h2 {\n  color: orange;\n  font-size: 1.27em;\n  padding: 2px;\n}\n.topped-items ion-label {\n  color: #0099ff !important;\n  font-size: 1em;\n  padding: 2px;\n}\nbutton {\n  border-radius: 12px;\n}\nion-footer {\n  border-top: 1.4px solid rgba(212, 212, 212, 0.93);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy96b25lL3pvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy96b25lL3pvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ047QURHRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxtQkFBQTtBQ0ZKO0FER0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRE47QURLRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrREFBQTtBQ0hKO0FES0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDSE47QURPRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTEo7QURNSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0pOO0FET0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDTE47QURTRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUEo7QURRSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDTk47QURVRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1JKO0FEWUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1RGO0FEVUU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1JKO0FEWUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNURjtBRGFFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNWSjtBRGVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDWko7QURjRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNaSjtBRGVFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ2JKO0FEaUJBO0VBQ0UsbUJBQUE7QUNkRjtBRGlCQTtFQUNFLGlEQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy96b25lL3pvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5kcml2ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMzYsIDE0MCwgMjEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmljZSB7XHJcbiAgICBjb2xvcjogIzNlYWIwZjtcclxuICAgIGZvbnQtc2l6ZTogMS42N2VtO1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMzYsIDE0MCwgMjEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXRlIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBmb250LXNpemU6IDEuNDdlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgY29sb3I6IHJnYigzNiwgMTQwLCAyMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvY2F0aW9uIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc3RpbmF0aW9uIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbiN0b3Bjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgZm9udC1zaXplOiAxLjI3ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaDEge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgMTQwLCAyMTApO1xyXG4gIGZvbnQtc2l6ZTogMS42N2VtO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG5cclxuLmZvbGxvd2VkLWl0ZW1zIHtcclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gIH1cclxufVxyXG5cclxuLnRvcHBlZC1pdGVtcyB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgZm9udC1zaXplOiAxLjI3ZW07XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IHJnYigwLCAxNTMsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICBib3JkZXItdG9wOiAxLjRweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG59XHJcbiIsImlvbi1jb250ZW50IC5kcml2ZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbmlvbi1jb250ZW50IC5kcml2ZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDEycHg7XG4gIGNvbG9yOiAjMjQ4Y2QyO1xufVxuaW9uLWNvbnRlbnQgLnByaWNlIHtcbiAgY29sb3I6ICMzZWFiMGY7XG4gIGZvbnQtc2l6ZTogMS42N2VtO1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5pb24tY29udGVudCAucHJpY2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjMjQ4Y2QyO1xufVxuaW9uLWNvbnRlbnQgLmRhdGUge1xuICBjb2xvcjogb3JhbmdlO1xuICBmb250LXNpemU6IDEuNDdlbTtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbn1cbmlvbi1jb250ZW50IC5kYXRlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzI0OGNkMjtcbn1cbmlvbi1jb250ZW50IC5sb2NhdGlvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuaW9uLWNvbnRlbnQgLmxvY2F0aW9uIHAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5pb24tY29udGVudCAubG9jYXRpb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5pb24tY29udGVudCAuZGVzdGluYXRpb24ge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbmlvbi1jb250ZW50IC5kZXN0aW5hdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XG59XG5pb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4jdG9wY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICBmb250LXNpemU6IDEuMjdlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuI3RvcGNvbnRlbnQgYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgYmFja2dyb3VuZDogIzI0OGNkMjtcbiAgZm9udC1zaXplOiAxLjY3ZW07XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuXG4uZm9sbG93ZWQtaXRlbXMgaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xufVxuXG4udG9wcGVkLWl0ZW1zIGlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4udG9wcGVkLWl0ZW1zIGgyIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAxLjI3ZW07XG4gIHBhZGRpbmc6IDJweDtcbn1cbi50b3BwZWQtaXRlbXMgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDk5ZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDEuNHB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/zone/zone.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/zone/zone.page.ts ***!
  \*****************************************/
/*! exports provided: ZonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonePage", function() { return ZonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var src_app_services_location_tracker_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/location-tracker.service */ "./src/app/services/location-tracker.service.ts");
/* harmony import */ var src_app_services_directionservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/directionservice.service */ "./src/app/services/directionservice.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");











let ZonePage = class ZonePage {
    constructor(navCtrl, authProvider, eventProvider, locationTracker, dProvider, One, platform, pop, ph, lp, load) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.eventProvider = eventProvider;
        this.locationTracker = locationTracker;
        this.dProvider = dProvider;
        this.One = One;
        this.platform = platform;
        this.pop = pop;
        this.ph = ph;
        this.lp = lp;
        this.load = load;
    }
    ngOnInit() {
        this.ph.getDatabaseProfile().child('admin_zones').on('value', passengerSnapshot => {
            this.eventList = [];
            console.log(passengerSnapshot.val());
            passengerSnapshot.forEach(element => {
                this.eventList.push({
                    key: element.key,
                    name: element.val().title,
                    zone_lat: element.val().zone_lat,
                    zone_lng: element.val().zone_lng
                });
                return false;
            });
        });
    }
    UseZone(lat, lng) {
        this.ph.isZone(lat, lng).then(() => {
            this.pop.showPimp('Restart The App To Use The Selected Zone.');
        });
    }
    goBack() {
        this.navCtrl.navigateBack('home');
    }
};
ZonePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] },
    { type: src_app_services_location_tracker_service__WEBPACK_IMPORTED_MODULE_6__["LocationTrackerService"] },
    { type: src_app_services_directionservice_service__WEBPACK_IMPORTED_MODULE_7__["DirectionserviceService"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__["PopUpService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ZonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-zone',
        template: __webpack_require__(/*! raw-loader!./zone.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/zone/zone.page.html"),
        styles: [__webpack_require__(/*! ./zone.page.scss */ "./src/app/pages/zone/zone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"], src_app_services_location_tracker_service__WEBPACK_IMPORTED_MODULE_6__["LocationTrackerService"],
        src_app_services_directionservice_service__WEBPACK_IMPORTED_MODULE_7__["DirectionserviceService"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__["PopUpService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], ZonePage);



/***/ })

}]);
//# sourceMappingURL=pages-zone-zone-module-es2015.js.map