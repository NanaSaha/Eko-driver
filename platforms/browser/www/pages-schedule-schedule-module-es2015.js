(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedule-schedule-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/schedule/schedule.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/schedule/schedule.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar style=\"margin-top: 20px\">\n    <ion-button (click)=\"goBack()\" color=\"primary\" fill=\"clear\">\n      <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon> <span\n        style=\"margin-left:30px; font-size: 1.4em\">{{lp.translate()[0].k1}}</span>\n    </ion-button>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content class=\"ion-padding\" class=\"ion-text-center\" class='yes-scroll'>\n  <div class='followed-items'>\n    <ion-list *ngFor=\"let event of scheduleList\" class=\"ion-text-center\">\n      <h2 class=\"ion-text-center\" *ngIf='!event.duedate >= (-1 && !bookable)'>\n        No Rides Around You Or Are Due For Starting.\n      </h2>\n      <ion-item *ngIf='event.duedate >= (-1 && bookable)'>\n\n\n        <h2 *ngIf='event.duedate == -1' class='date'><strong>\n            <ion-icon name=\"calendar\"></ion-icon>{{lp.translate()[0].k2}}\n          </strong></h2>\n        <h2 *ngIf='event.duedate >= 0' class='date'><strong>\n            <ion-icon name=\"calendar\"></ion-icon>{{event?.date}}\n          </strong></h2>\n        <h2 *ngIf='event.duedate >= 0 && event.time != null' class='time'><strong>\n            <ion-icon name=\"clock\"></ion-icon>{{event?.time}}\n          </strong></h2>\n        <h2 class='drive'><strong>\n            <ion-icon name=\"contact\"></ion-icon>{{event?.name}}\n          </strong></h2>\n        <h2 *ngIf='event.price != 0' class='price'><strong>\n            <ion-icon name=\"ios-cash\"></ion-icon>{{settings.appcurrency}}{{event?.price}}\n          </strong></h2>\n        <p class=''>\n          <ion-icon name=\"locate\"></ion-icon>{{event?.location}}\n        </p>\n        <p class='destination'>\n          <ion-icon name=\"flag\"></ion-icon>{{event?.destination}}\n        </p>\n\n\n        <ion-button *ngIf='event.duedate > 0' color=\"gery\" (click)=\"Warn(event.duedate)\">\n          <ion-icon name=\"ios-car\" slot=\"start\"></ion-icon>\n          {{lp.translate()[0].k3}} {{event?.duedate}} {{lp.translate()[0].k4}}\n        </ion-button>\n\n        <ion-button *ngIf='event.duedate == 0' color=\"gery\" (click)=\"Warn(event.duedate)\">\n          <ion-icon name=\"ios-car\" slot=\"start\"></ion-icon>\n          {{lp.translate()[0].k5}}\n        </ion-button>\n\n        <ion-button *ngIf='event.duedate == -1' color=\"gery\" (click)=\"Start(event)\">\n          <ion-icon name=\"ios-car\" slot=\"start\"></ion-icon>\n          {{lp.translate()[0].k6}}\n        </ion-button>\n\n\n      </ion-item>\n    </ion-list>\n\n\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/schedule/schedule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/*! exports provided: SchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.page */ "./src/app/pages/schedule/schedule.page.ts");







const routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]
    }
];
let SchedulePageModule = class SchedulePageModule {
};
SchedulePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]]
    })
], SchedulePageModule);



/***/ }),

/***/ "./src/app/pages/schedule/schedule.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .drive {\n  color: black;\n}\nion-content .drive ion-icon {\n  font-size: 0.8em;\n  padding: 12px;\n  color: #248cd2;\n}\nion-content .price {\n  color: #3eab0f;\n  font-size: 1.67em;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-radius: 12px;\n}\nion-content .price ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\nion-content .date {\n  color: orange;\n  font-size: 1.47em;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n}\nion-content .date ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\nion-content .time {\n  color: #2c88f1;\n  font-size: 1.17em;\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\nion-content .time ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\nion-content .location {\n  width: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nion-content .location p {\n  font-size: 1.3em;\n  height: auto;\n}\nion-content .location ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: orange;\n}\nion-content .destination {\n  width: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nion-content .destination ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: darkslateblue;\n}\nion-content p {\n  font-size: 1.3em;\n  height: auto;\n  line-height: 100px;\n  width: auto;\n}\nion-content .duedate {\n  color: white;\n  width: auto;\n  background: #3eab0f;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: 12px;\n  border: 1px solid #c5c5c5;\n  border-radius: 12px;\n}\nion-content .duedate ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: darkslateblue;\n}\nion-content .onduedate {\n  color: white;\n  width: auto;\n  background: #f53d3d;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: 12px;\n  border: 1px solid #c5c5c5;\n  border-radius: 12px;\n}\nion-content .onduedate ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: darkslateblue;\n}\n#topcontent {\n  width: 100%;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  font-size: 1.27em;\n  color: white;\n}\n#topcontent button {\n  border: 1px solid #f7f7f7;\n  vertical-align: middle;\n  width: 100%;\n}\nh1 {\n  background: #248cd2;\n  font-size: 1.67em;\n  padding-top: 14px;\n  width: auto;\n  padding-bottom: 14px;\n}\n.followed-items ion-item {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  border-radius: 12px;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUNBSjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NOO0FER0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsbUJBQUE7QUNGSjtBREdJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0ROO0FES0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7QUNISjtBREtJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0hOO0FET0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTEo7QURPSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNMTjtBRFNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNQSjtBRFFJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDTk47QURTSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNQTjtBRFdFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNUSjtBRFVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNSTjtBRFlFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDVko7QURhRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNYSjtBRFlJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNWTjtBRGNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1pKO0FEYUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ1hOO0FEZ0JBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNiRjtBRGNFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNaSjtBRGdCQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ2JGO0FEaUJFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNkSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAuZHJpdmUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICBjb2xvcjogcmdiKDM2LCAxNDAsIDIxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJpY2Uge1xyXG4gICAgY29sb3I6ICMzZWFiMGY7XHJcbiAgICBmb250LXNpemU6IDEuNjdlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBjb2xvcjogcmdiKDM2LCAxNDAsIDIxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGF0ZSB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgZm9udC1zaXplOiAxLjQ3ZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMzYsIDE0MCwgMjEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aW1lIHtcclxuICAgIGNvbG9yOiByZ2IoNDQsIDEzNiwgMjQxKTtcclxuICAgIGZvbnQtc2l6ZTogMS4xN2VtO1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgY29sb3I6IHJnYigzNiwgMTQwLCAyMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvY2F0aW9uIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc3RpbmF0aW9uIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIC5kdWVkYXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogIzNlYWIwZjtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M1YzVjNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAub25kdWVkYXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1M2QzZDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M1YzVjNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4jdG9wY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxLjI3ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaDEge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgMTQwLCAyMTApO1xyXG4gIGZvbnQtc2l6ZTogMS42N2VtO1xyXG4gIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG59XHJcblxyXG4uZm9sbG93ZWQtaXRlbXMge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IC5kcml2ZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbmlvbi1jb250ZW50IC5kcml2ZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDEycHg7XG4gIGNvbG9yOiAjMjQ4Y2QyO1xufVxuaW9uLWNvbnRlbnQgLnByaWNlIHtcbiAgY29sb3I6ICMzZWFiMGY7XG4gIGZvbnQtc2l6ZTogMS42N2VtO1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5pb24tY29udGVudCAucHJpY2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjMjQ4Y2QyO1xufVxuaW9uLWNvbnRlbnQgLmRhdGUge1xuICBjb2xvcjogb3JhbmdlO1xuICBmb250LXNpemU6IDEuNDdlbTtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbn1cbmlvbi1jb250ZW50IC5kYXRlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzI0OGNkMjtcbn1cbmlvbi1jb250ZW50IC50aW1lIHtcbiAgY29sb3I6ICMyYzg4ZjE7XG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG5pb24tY29udGVudCAudGltZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICMyNDhjZDI7XG59XG5pb24tY29udGVudCAubG9jYXRpb24ge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbmlvbi1jb250ZW50IC5sb2NhdGlvbiBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLmxvY2F0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogb3JhbmdlO1xufVxuaW9uLWNvbnRlbnQgLmRlc3RpbmF0aW9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5pb24tY29udGVudCAuZGVzdGluYXRpb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xufVxuaW9uLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cbmlvbi1jb250ZW50IC5kdWVkYXRlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZDogIzNlYWIwZjtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNWM1YzU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5pb24tY29udGVudCAuZHVlZGF0ZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XG59XG5pb24tY29udGVudCAub25kdWVkYXRlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZDogI2Y1M2QzZDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNWM1YzU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5pb24tY29udGVudCAub25kdWVkYXRlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcbn1cblxuI3RvcGNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBmb250LXNpemU6IDEuMjdlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuI3RvcGNvbnRlbnQgYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgYmFja2dyb3VuZDogIzI0OGNkMjtcbiAgZm9udC1zaXplOiAxLjY3ZW07XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG5cbi5mb2xsb3dlZC1pdGVtcyBpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/schedule/schedule.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.ts ***!
  \*************************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_location_tracker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/location-tracker.service */ "./src/app/services/location-tracker.service.ts");
/* harmony import */ var src_app_services_onesignal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/onesignal.service */ "./src/app/services/onesignal.service.ts");
/* harmony import */ var src_app_services_geocoder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/geocoder.service */ "./src/app/services/geocoder.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");














let SchedulePage = class SchedulePage {
    constructor(navCtrl, One, lp, events, platform, activatedRoute, gCode, locat, settings, oneSignal, pop, load, profile, alert, eventProvider) {
        this.navCtrl = navCtrl;
        this.One = One;
        this.lp = lp;
        this.events = events;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.gCode = gCode;
        this.locat = locat;
        this.settings = settings;
        this.oneSignal = oneSignal;
        this.pop = pop;
        this.load = load;
        this.profile = profile;
        this.alert = alert;
        this.eventProvider = eventProvider;
        this.bookable = false;
        // tslint:disable-next-line: new-parens
        this.geocoder = new google.maps.Geocoder;
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getUTCMonth() + 1;
        this.currentDay = new Date().getUTCDate();
    }
    ngOnInit() {
        if (this.platform.is('cordova')) {
            this.locat.map1.getMyLocation({
                enableHighAccuracy: true,
            }).then(location => {
                this.lat = location.latLng.lat;
                this.lng = location.latLng.lng;
                this.userPos = new google.maps.LatLng(this.lat, this.lng);
                const latlng = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) };
                this.geocoder.geocode({ location: latlng }, (results, status) => {
                    if (status === 'OK') {
                        this.CheckPossibles();
                        this.locationName = results[0].formatted_address;
                    }
                    else {
                    }
                });
                console.log('How Ploder Goder ....');
            });
        }
        else {
            this.lat = 4.883364;
            this.lng = 7.025034;
            this.userPos = new google.maps.LatLng(this.lat, this.lng);
            const latlng = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) };
            this.geocoder.geocode({ location: latlng }, (results, status) => {
                if (status === 'OK') {
                    this.locationName = results[0].formatted_address;
                    this.CheckPossibles();
                }
                else {
                }
            });
            console.log('How Ploder Goder ....');
        }
    }
    CheckPossibles() {
        this.eventProvider.getScheduleList().on('value', snapshot => {
            this.scheduleList = [];
            snapshot.forEach(snap => {
                console.log(snap.val().Client_Date);
                const today = new Date();
                const future = new Date(snap.val().Client_Date);
                const a = this.calcDate(today, future);
                console.log(a[1], this.userPos);
                const begin = this.userPos;
                const end = new google.maps.LatLng(snap.val().Client_location[0], snap.val().Client_location[1]);
                const suc = google.maps.geometry.spherical.computeDistanceBetween(begin, end);
                console.log(suc);
                if (suc < 1000) {
                    this.bookable = true;
                    console.log('its close enough');
                }
                else {
                    this.bookable = false;
                }
                this.scheduleList.push({
                    id: snap.key,
                    name: snap.val().Client_username,
                    price: snap.val().Client_price,
                    date: a[0],
                    duedate: a[1],
                    canBook: true,
                    time: snap.val().Client_Time,
                    location: snap.val().Client_locationName,
                    destination: snap.val().Client_destinationName,
                    payWith: snap.val().Client_paymentForm,
                    picture: snap.val().Client_picture,
                    phone: snap.val().Client_phoneNumber,
                    lat: snap.val().Client_location[0],
                    lng: snap.val().Client_location[1],
                    rating: snap.val().Client_Rating,
                    ratingText: snap.val().Client_RatingText
                });
                return false;
            });
        });
        this.presentRouteLoader('');
    }
    Warn(time) {
        this.pop.showPimp(this.lp.translate()[0].k7);
    }
    calcDate(date1, date2) {
        const diff = Math.floor(date2.getTime() - date1.getTime());
        const day = 1000 * 60 * 60 * 24;
        const days = Math.floor(diff / day);
        const months = Math.floor(days / 31);
        const years = Math.floor(months / 12);
        console.log(days);
        const message = [date2.toDateString(), days];
        return message;
    }
    presentRouteLoader(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.load.create({
                message: message
            });
            loading.present();
            const myInterval = setInterval(() => {
                if (this.scheduleList != null) {
                    loading.dismiss();
                    clearInterval(myInterval);
                }
            }, 1000);
        });
    }
    Start(e) {
        if (!this.platform.is('cordova')) {
            this.notif_id = '43cd6829-4651-4039-bbc3-aace7fbe7d72';
        }
        else {
            this.One.getIds().then(success => {
                this.notif_id = success.userId;
            });
        }
        console.log(this.notif_id, e.id);
        if (this.notif_id) {
            if (!this.platform.is('cordova')) {
                this.locat.driver_lat = 4.883364;
                this.locat.driver_lng = 7.025034;
                this.gCode.locationName = 'Abuja, Nigeria';
                this.locationName = 'Abuja, Nigeria';
                this.lat = 4.883364;
                this.lng = 7.025034;
            }
        }
        this.settings.id = e.id;
        console.log(this.settings.id);
        this.settings.current_ID = true;
        console.log(e);
        this.locat.hasTransactionEnded = true;
        this.locat.canTrack_ = true;
        console.log('Stopped Normal Movement Of Driver');
        this.oneSignal.isInDeepSh_t = true;
        this.profile.getUserAsClientInfo(this.activatedRoute.snapshot.paramMap.get('notif')).off('child_added');
        this.profile.getUserAsClientInfo(this.activatedRoute.snapshot.paramMap.get('notif')).off('child_changed');
        this.profile.getUserAsClientInfo(this.activatedRoute.snapshot.paramMap.get('notif')).off('child_removed');
        this.eventProvider.getCurrentDriver().remove().then((id) => {
            // Push the drivers information to the customer connection node in the database
            this.eventProvider.getActivityProfile(e.id).set({
                Client_username: e.name,
                Client_Deleted: false,
                Client_location: [e.lat, e.lng],
                Client_locationName: e.location,
                Client_paymentForm: e.payWith,
                Client_picture: e.picture,
                Client_phoneNumber: e.phone,
                Client_destinationName: e.destination,
                Client_CanChargeCard: false,
                Client_PickedUp: false,
                Client_Dropped: false,
                Client_HasRated: false,
                Client_ended: false,
                Client_price: e.price,
                Client_Rating: e.rating,
                Client_RatingText: e.ratingText,
                entered: 0,
                Driver_name: this.profile.name,
                Driver_location: [this.lat, this.lng],
                Driver_locationName: this.locationName,
                Driver_plate: this.profile.plate,
                Driver_picture: this.profile.picture,
                Driver_ID: '43566625',
                Driver_seats: this.profile.seat,
                Driver_carType: this.profile.carType,
                Driver_rating: this.profile.rating,
                Driver_number: this.profile.number,
                Driver_HasRated: false
            }).then(suc => {
                // After removing the driver from the driver node we can then create a push notification to this driver
                if (this.platform.is('cordova')) {
                    this.oneSignal.sendPush(e.id);
                }
                this.platform.ready().then(() => {
                    this.platform.backButton.subscribe(() => this.pop.presentToast(this.lp.translate()[0].k8));
                });
                this.navCtrl.pop().then(() => {
                    /// Trigger custom event and pass data to be send back
                    this.settings.id = e.id;
                    console.log(this.settings.id);
                });
            });
        });
    }
    goBack() {
        this.navCtrl.navigateBack('home');
    }
};
SchedulePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: src_app_services_geocoder_service__WEBPACK_IMPORTED_MODULE_7__["GeocoderService"] },
    { type: src_app_services_location_tracker_service__WEBPACK_IMPORTED_MODULE_5__["LocationTrackerService"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"] },
    { type: src_app_services_onesignal_service__WEBPACK_IMPORTED_MODULE_6__["OnesignalService"] },
    { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_9__["PopUpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_10__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] }
];
SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schedule',
        template: __webpack_require__(/*! raw-loader!./schedule.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/schedule/schedule.page.html"),
        styles: [__webpack_require__(/*! ./schedule.page.scss */ "./src/app/pages/schedule/schedule.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
        src_app_services_geocoder_service__WEBPACK_IMPORTED_MODULE_7__["GeocoderService"], src_app_services_location_tracker_service__WEBPACK_IMPORTED_MODULE_5__["LocationTrackerService"],
        src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"], src_app_services_onesignal_service__WEBPACK_IMPORTED_MODULE_6__["OnesignalService"],
        src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_9__["PopUpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_10__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_event_service__WEBPACK_IMPORTED_MODULE_11__["EventService"]])
], SchedulePage);



/***/ })

}]);
//# sourceMappingURL=pages-schedule-schedule-module-es2015.js.map