(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-historydetail-historydetail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/historydetail/historydetail.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/historydetail/historydetail.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-button (click)=\"goBack()\" ion-button color=\"primary\" fill=\"clear\">\n      <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"yes-scroll\" color=\"light\">\n  <div id=\"dvMap\" style=\"width: auto; height: 180px\"></div>\n\n  <ion-item class=\"hists\" lines=\"none\">\n    <div>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"date\">\n              <ion-icon name=\"calendar-outline\"></ion-icon\n              ><strong>{{currentEvent?.date}}</strong>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <!-- <h3 class='price'><ion-icon name=\"cash\"></ion-icon> <strong>{{settings.appcurrency}}{{riderpaid}}</strong></h3> -->\n            <ion-label class=\"location\">\n              <ion-icon name=\"locate\"></ion-icon\n              ><strong>{{currentEvent?.location}}</strong>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <!-- <h3 class='price'><ion-icon name=\"cash\"></ion-icon> <strong>{{settings.appcurrency}}{{riderpaid}}</strong></h3> -->\n            <ion-label class=\"destination\">\n              <ion-icon name=\"flag\"></ion-icon\n              ><strong>{{currentEvent?.destination}}</strong>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <!-- <h3 class='price'><ion-icon name=\"cash\"></ion-icon> <strong>{{settings.appcurrency}}{{riderpaid}}</strong></h3> -->\n            <ion-label class=\"price\">\n              <ion-icon name=\"contact\"></ion-icon><strong>{{prof.name}}</strong>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <!-- <h3 class='price'><ion-icon name=\"cash\"></ion-icon> <strong>{{settings.appcurrency}}{{riderpaid}}</strong></h3> -->\n            <ion-label class=\"date\">\n              <ion-icon name=\"car\"></ion-icon\n              ><strong>{{currentEvent?.name}} </strong>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <!-- <h3 class='price'><ion-icon name=\"cash\"></ion-icon> <strong>{{settings.appcurrency}}{{riderpaid}}</strong></h3> -->\n            <!-- <ion-label class='location'>\n              <ion-icon name=\"home\"></ion-icon>Dispatch Base: <strong>Ride FHV</strong>\n            </ion-label> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-item>\n  <ion-title padding text-center>RIDER PAID</ion-title>\n  <ion-title padding text-center\n    ><strong>{{settings.appcurrency}}{{(riderpaid)}}</strong></ion-title\n  >\n\n  <ion-item lines=\"none\" padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label\n            text-center\n            style=\"\n              font-weight: 600;\n              color: rgb(75, 75, 75);\n              margin: 5px;\n              text-align: center;\n            \"\n          >\n            Ride Cost</ion-label\n          >\n        </ion-col>\n        <ion-col>\n          <ion-label text-center style=\"margin: 5px\">\n            <strong\n              >{{settings.appcurrency}}{{(currentPrie)}}</strong\n            ></ion-label\n          >\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <!-- <div *ngFor=\"let surge of surcharges\">\n    <div *ngIf='surge.owner != 0'>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div class=\"ion-text-center\">\n              <h3 style=\" margin: 5px;\">\n                <strong>{{surge.title}}</strong></h3>\n            </div>\n\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-text-center\">\n          <ion-col>\n            <ion-label *ngIf='surge.bone == 1' class=\"ion-text-center\">\n              <strong>${{((surge.price/100) * currentEvent?.realPrice).toFixed(2)}}</strong></ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-text-center\">\n          <ion-col>\n            <ion-label class=\"ion-text-center\" *ngIf='surge.bone == 0'> <strong>${{surge.price}}</strong></ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div> -->\n\n  <!-- <div *ngIf='osc'>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col size='9'>\n            <ion-label> <strong>Out Of State\n                Surcharge</strong></ion-label>\n          </ion-col>\n          <ion-col size='3'>\n            <ion-label> <strong>${{osc}}</strong></ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </div> -->\n  <!-- <ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label padding text-center\n            style=\" font-weight: 600; color: rgb(75, 75, 75); margin: 5px;text-align: center;\">Tolls\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label padding style=\"text-overflow: inherit; white-space: normal; margin: 5px; \">\n            <strong>{{settings.appcurrency}}{{(total).toFixed(2)}}</strong></ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item> -->\n\n  <!-- \n  <div text-center style=\"border: 1px solid rgb(83, 83, 83);\" padding *ngFor=\"let tollprice of tolls\">\n\n\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-title style=\"text-overflow: inherit; white-space: normal; margin: 5px; \">\n            <strong>{{(tollprice.name)}}</strong>\n          </ion-title>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-title *ngIf='tollprice.start' style=\"text-overflow: inherit; white-space: normal; margin: 5px; \">\n            <strong>{{(tollprice.start.name)}}</strong></ion-title>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label padding style=\"text-overflow: inherit; white-space: normal; margin: 5px; \">\n            <strong>${{(tollprice.tagCost)}}</strong></ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n\n\n\n  </div> -->\n\n  <ion-title padding text-center>DRIVER MADE</ion-title>\n  <ion-title text-center\n    ><strong>{{settings.appcurrency}}{{(driverMade)}}</strong></ion-title\n  >\n\n  <ion-item padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label\n            text-center\n            style=\"\n              font-weight: 600;\n              color: rgb(75, 75, 75);\n              margin: 5px;\n              text-align: center;\n            \"\n            >Ride Cost\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label text-center style=\"margin: 5px\">\n            <strong>{{settings.appcurrency}}{{(riderpaid)}}</strong></ion-label\n          >\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <!-- \n  <div text-center *ngFor=\"let surge of surcharges\">\n    <div *ngIf=\"surge.owner == 0\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-title\n              padding\n              style=\"text-overflow: inherit; white-space: normal; margin: 5px\"\n              >{{surge.title}}\n            </ion-title>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label *ngIf=\"surge.bone == 0\" padding>\n              <strong>-${{(surge.price)}}</strong></ion-label\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label *ngIf=\"surge.bone == 1\" padding>\n              <strong>-${{((surge.price/100) * riderpaid).toFixed(2)}}</strong>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div> -->\n  <!-- \n  <div *ngIf=\"currentEvent?.tip != 0\">\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-title padding text-center>TIPS</ion-title>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-title text-center\n              ><strong>{{settings.appcurrency}}{{myTip}}</strong></ion-title\n            >\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item class=\"hists\" no-lines padding text-cente>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-label\n              style=\"\n                margin: 5px;\n                text-overflow: inherit;\n                white-space: normal;\n                font-weight: 600;\n                color: dimgray;\n              \"\n            >\n              Date\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-label\n              style=\"text-overflow: inherit; white-space: normal; margin: 5px\"\n            >\n              <strong>{{dateOfTip}}</strong></ion-label\n            >\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <div text-center *ngFor=\"let surge of surcharges\">\n      <div *ngIf=\"surge.owner == 0\">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-title\n                padding\n                style=\"text-overflow: inherit; white-space: normal; margin: 5px\"\n                >{{surge.title}}\n              </ion-title>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-label *ngIf=\"surge.bone == 0\" padding>\n                <strong>-${{(surge.price)}}</strong></ion-label\n              >\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-label *ngIf=\"surge.bone == 1\" padding>\n                <strong>-${{((surge.price/100) * myTip).toFixed(2)}}</strong>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-title padding text-center\n            >Final Tip :\n            <strong>{{settings.appcurrency}}{{(totemTIPS)|| 0}}</strong>\n          </ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/historydetail/historydetail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/historydetail/historydetail.module.ts ***!
  \*************************************************************/
/*! exports provided: HistorydetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorydetailPageModule", function() { return HistorydetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _historydetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historydetail.page */ "./src/app/pages/historydetail/historydetail.page.ts");







const routes = [
    {
        path: '',
        component: _historydetail_page__WEBPACK_IMPORTED_MODULE_6__["HistorydetailPage"]
    }
];
let HistorydetailPageModule = class HistorydetailPageModule {
};
HistorydetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_historydetail_page__WEBPACK_IMPORTED_MODULE_6__["HistorydetailPage"]]
    })
], HistorydetailPageModule);



/***/ }),

/***/ "./src/app/pages/historydetail/historydetail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/historydetail/historydetail.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .drive {\n  color: black;\n}\nion-content .drive ion-label {\n  font-size: 0.8em;\n  padding: 12px;\n  color: #248cd2;\n}\nion-content .price {\n  color: #3eab0f;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-radius: 12px;\n}\nion-content .price ion-label {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\nion-content .date {\n  color: #fbb91d;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n}\nion-content .date ion-label {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\nion-content .location {\n  width: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nion-content .location p {\n  height: auto;\n}\nion-content .location ion-label {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #fbb91d;\n}\nion-content .destination {\n  width: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\nion-content .destination ion-label {\n  font-size: 0.8em;\n  padding: 5px;\n  color: darkslateblue;\n}\nion-content p {\n  font-size: 1.3em;\n  height: auto;\n  line-height: 100px;\n  width: auto;\n}\n#topcontent {\n  width: 100%;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  font-size: 1.27em;\n  color: white;\n}\n#topcontent ion-button {\n  border: 1px solid #f7f7f7;\n  vertical-align: middle;\n  width: 100%;\n}\nh1 {\n  background: #248cd2;\n  font-size: 1.67em;\n  padding-top: 7px;\n  width: auto;\n  padding-bottom: 7px;\n}\n.followed-items ion-item {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  border-radius: 12px;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n}\n.topped-items ion-item {\n  margin-top: 0px;\n  margin-bottom: 6px;\n}\n.topped-items h2 {\n  color: #fbb91d;\n  font-size: 1.27em;\n  padding: 2px;\n}\n.topped-items ion-label {\n  color: #0099ff !important;\n  font-size: 1em;\n  padding: 2px;\n}\nion-button {\n  border-radius: 12px;\n}\nion-footer {\n  border-top: 1.4px solid rgba(212, 212, 212, 0.93);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9oaXN0b3J5ZGV0YWlsL2hpc3RvcnlkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3J5ZGV0YWlsL2hpc3RvcnlkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ047QURHRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsbUJBQUE7QUNGSjtBREdJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0ROO0FES0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtEQUFBO0FDSEo7QURLSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNITjtBRE9FO0VBQ0UsV0FBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRE9JO0VBQ0UsWUFBQTtBQ0xOO0FEUUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTk47QURVRTtFQUNFLFdBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDVEo7QURVSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDUk47QURZRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEY0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1hGO0FEWUU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEY0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNYRjtBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNaSjtBRGlCRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2RKO0FEZ0JFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ2RKO0FEaUJFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ2ZKO0FEbUJBO0VBQ0UsbUJBQUE7QUNoQkY7QURtQkE7RUFDRSxpREFBQTtBQ2hCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnlkZXRhaWwvaGlzdG9yeWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLmRyaXZlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMzYsIDE0MCwgMjEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmljZSB7XHJcbiAgICBjb2xvcjogIzNlYWIwZjtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgY29sb3I6IHJnYigzNiwgMTQwLCAyMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgY29sb3I6ICNmYmI5MWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBjb2xvcjogcmdiKDM2LCAxNDAsIDIxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9jYXRpb24ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgY29sb3I6ICNmYmI5MWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzdGluYXRpb24ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4jdG9wY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gIGZvbnQtc2l6ZTogMS4yN2VtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDM2LCAxNDAsIDIxMCk7XHJcbiAgZm9udC1zaXplOiAxLjY3ZW07XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uZm9sbG93ZWQtaXRlbXMge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcbiAgfVxyXG59XHJcblxyXG4udG9wcGVkLWl0ZW1zIHtcclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjZmJiOTFkO1xyXG4gICAgZm9udC1zaXplOiAxLjI3ZW07XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IHJnYigwLCAxNTMsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogMS40cHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxufVxyXG4iLCJpb24tY29udGVudCAuZHJpdmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCAuZHJpdmUgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMTJweDtcbiAgY29sb3I6ICMyNDhjZDI7XG59XG5pb24tY29udGVudCAucHJpY2Uge1xuICBjb2xvcjogIzNlYWIwZjtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgLnByaWNlIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICMyNDhjZDI7XG59XG5pb24tY29udGVudCAuZGF0ZSB7XG4gIGNvbG9yOiAjZmJiOTFkO1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xufVxuaW9uLWNvbnRlbnQgLmRhdGUgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzI0OGNkMjtcbn1cbmlvbi1jb250ZW50IC5sb2NhdGlvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuaW9uLWNvbnRlbnQgLmxvY2F0aW9uIHAge1xuICBoZWlnaHQ6IGF1dG87XG59XG5pb24tY29udGVudCAubG9jYXRpb24gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogI2ZiYjkxZDtcbn1cbmlvbi1jb250ZW50IC5kZXN0aW5hdGlvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuaW9uLWNvbnRlbnQgLmRlc3RpbmF0aW9uIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XG59XG5pb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4jdG9wY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICBmb250LXNpemU6IDEuMjdlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuI3RvcGNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmN2Y3Zjc7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oMSB7XG4gIGJhY2tncm91bmQ6ICMyNDhjZDI7XG4gIGZvbnQtc2l6ZTogMS42N2VtO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cblxuLmZvbGxvd2VkLWl0ZW1zIGlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbn1cblxuLnRvcHBlZC1pdGVtcyBpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLnRvcHBlZC1pdGVtcyBoMiB7XG4gIGNvbG9yOiAjZmJiOTFkO1xuICBmb250LXNpemU6IDEuMjdlbTtcbiAgcGFkZGluZzogMnB4O1xufVxuLnRvcHBlZC1pdGVtcyBpb24tbGFiZWwge1xuICBjb2xvcjogIzAwOTlmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDEuNHB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/historydetail/historydetail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/historydetail/historydetail.page.ts ***!
  \***********************************************************/
/*! exports provided: HistorydetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorydetailPage", function() { return HistorydetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");







let HistorydetailPage = class HistorydetailPage {
    constructor(navCtrl, prof, settings, eventProvider, route) {
        this.navCtrl = navCtrl;
        this.prof = prof;
        this.settings = settings;
        this.eventProvider = eventProvider;
        this.route = route;
        this.currentEvent = {};
        this.total = 0;
        this.allTotals = 0;
        this.driverMade = 0;
        this.surcharges = [];
        this.totalSurge = 0;
        this.actual = 0;
        this.riderPaid = 0;
        this.totalRiderSurge = 0;
        this.totalDriverSurge = 0;
        this.percentRider = 0;
        this.flatRider = 0;
        this.percentDriver = 0;
        this.flatDriver = 0;
        this.riderPercents = [];
        this.driverPercents = [];
        this.math = Math;
        this.riderpaid = 0;
    }
    ionViewDidEnter() {
        let g = [];
        let f = [];
        let b = [];
        let k = [];
        let o = [];
        let c = [];
        let n = [];
        let j = [];
        let m = [];
        let sa;
        console.log(this.route.snapshot.paramMap.get("eventId"));
        this.eventProvider
            .getEventDetail(this.route.snapshot.paramMap.get("eventId"))
            .on("value", (eventSnapshot) => {
            this.currentEvent = eventSnapshot.val();
            this.currentEvent.id = eventSnapshot.key;
            console.log("EVENTS:", eventSnapshot.val());
            this.dateOfTip = this.currentEvent.date;
            this.tolls = this.currentEvent.toll;
            this.currentPrie = this.currentEvent.realPrice;
            this.surcharges = this.currentEvent.surcharge;
            this.osc = this.currentEvent.osc;
            this.riderpaid = this.currentEvent.realPrice;
            this.driverMade = this.currentEvent.realPrice;
            if (this.currentEvent.surcharge)
                for (let index = 0; index < this.currentEvent.surcharge.length; index++) {
                    k.push(parseFloat(this.currentEvent.surcharge[index].price));
                    const add = (a, b) => a + b;
                    const result = k.reduce(add);
                    this.totalSurge = result;
                    this.actual = this.currentEvent.price - this.totalSurge;
                    console.log(this.totalSurge);
                    this.currentEvent.surcharge[index].price;
                }
            if (this.surcharges)
                this.surcharges.forEach((element) => {
                    //if rider
                    if (element.owner == 1) {
                        //if percent
                        if (element.bone == 1) {
                            let fo = (element.price / 100) * this.currentEvent.realPrice;
                            console.log(element.price);
                            o.push(fo);
                            const add1 = (a, b) => a + b;
                            const result1 = o.reduce(add1);
                            this.percentRider = result1;
                            console.log(this.percentRider);
                        }
                        if (element.bone == 0) {
                            g.push(parseFloat(element.price));
                            const add = (a, b) => a + b;
                            const result = g.reduce(add);
                            this.flatRider = result;
                            console.log(result);
                            element.price;
                        }
                        this.totalRiderSurge = this.flatRider + this.percentRider;
                        console.log(this.totalRiderSurge);
                    }
                    this.riderpaid = this.currentEvent.realPrice;
                    //if driver
                    if (element.owner == 0) {
                        //if percent
                        if (element.bone == 1) {
                            let nb = element.price / 100;
                            console.log(nb * this.currentEvent.tip);
                            let fo = nb * this.currentEvent.tip;
                            j.push(fo);
                            const add2 = (a, b) => a + b;
                            const result2 = j.reduce(add2);
                            this.percentDrive = result2;
                            console.log((Math.floor(element.price) / 100) * this.currentEvent.tip);
                        }
                        //if flat fee
                        if (element.bone == 0) {
                            m.push(parseFloat(element.price));
                            const add4 = (a, b) => a + b;
                            const result4 = m.reduce(add4);
                            this.flatDrive = result4;
                            console.log(result4);
                        }
                        this.totalDriverSurg = this.flatDrive + this.percentDrive;
                        //console.log(this.totalDriverSurge, this.flatDriver, this.percentDriver);
                    }
                    //if driver
                    if (element.owner == 0) {
                        //if percent
                        if (element.bone == 1) {
                            let nb = element.price / 100;
                            console.log(nb * this.riderpaid);
                            let fo = nb * this.riderpaid;
                            n.push(fo);
                            const add2 = (a, b) => a + b;
                            const result2 = n.reduce(add2);
                            this.percentDriver = result2;
                            console.log((Math.floor(element.price) / 100) * this.riderpaid);
                        }
                        //if flat fee
                        if (element.bone == 0) {
                            c.push(parseFloat(element.price));
                            const add4 = (a, b) => a + b;
                            const result4 = c.reduce(add4);
                            this.flatDriver = result4;
                            console.log(result4);
                        }
                        this.totalDriverSurge = this.flatDriver + this.percentDriver;
                        console.log(this.totalDriverSurge, this.flatDriver, this.percentDriver);
                    }
                });
            console.log(this.totalDriverSurg);
            this.totemTIPS =
                (parseFloat(this.currentEvent.tip) - this.totalDriverSurg).toFixed(2) || 0;
            if (!this.totemTIPS) {
                this.totemTIPS = 0;
            }
            // console.log(this.actual, g, this.currentEvent.surcharge[index].price);
            console.log(this.currentEvent.tolls);
            if (this.currentEvent.toll) {
                for (let index = 0; index < this.currentEvent.toll.length; index++) {
                    b.push(this.currentEvent.toll[index].tagCost);
                    const add = (a, b) => a + b;
                    const result = b.reduce(add);
                    this.total = result;
                    console.log(this.total, g);
                }
            }
            if (!this.currentEvent.tip) {
                this.currentEvent.tip = 0;
            }
            this.myTip = parseFloat(this.currentEvent.tip).toFixed(2);
            //SURGE NOT WORKING NOW
            // this.driverMade = ((this.riderpaid) - (this.totalDriverSurge)).toFixed(2);
            this.driverMade = this.riderpaid;
            // console.log(jndf, this.totalDriverSurge);
            //this.LoadMap(this.currentEvent.location, this.currentEvent.destination);
            this.GetRoute(this.currentEvent.location, this.currentEvent.destination);
        });
    }
    goBack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateRoot("history");
        });
    }
    GetRoute(location, destination) {
        var source, destination;
        var directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true,
        });
        var mumbai = new google.maps.LatLng(18.975, 72.8258);
        var mapOptions = {
            zoom: 7,
            center: mumbai,
            disableDefaultUI: true,
        };
        let map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
        directionsDisplay.setMap(map);
        //directionsDisplay.setPanel(document.getElementById('dvPanel'));
        //*********DIRECTIONS AND ROUTE**********************//
        source = location;
        destination = destination;
        var request = {
            origin: source,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
        };
        directionsService.route(request, (response, status) => {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
        //*********DISTANCE AND DURATION**********************//
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [source],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        }, (response, status) => {
            if (status == google.maps.DistanceMatrixStatus.OK &&
                response.rows[0].elements[0].status != "ZERO_RESULTS") {
                var distance = response.rows[0].elements[0].distance.text;
                var duration = response.rows[0].elements[0].duration.text;
                // var dvDistance = document.getElementById("dvDistance");
                //  dvDistance.innerHTML = "";
                // dvDistance.innerHTML += "Distance: " + distance + "<br />";
                // dvDistance.innerHTML += "Duration:" + duration;
            }
            else {
                alert("Unable to find the distance via road.");
            }
        });
    }
    ngOnInit() { }
};
HistorydetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
HistorydetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-historydetail",
        template: __webpack_require__(/*! raw-loader!./historydetail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/historydetail/historydetail.page.html"),
        styles: [__webpack_require__(/*! ./historydetail.page.scss */ "./src/app/pages/historydetail/historydetail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
        src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], HistorydetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-historydetail-historydetail-module-es2015.js.map