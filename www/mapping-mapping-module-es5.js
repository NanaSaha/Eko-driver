(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapping-mapping-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mapping/mapping.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mapping/mapping.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mapping/mapping.module.ts":
/*!*******************************************!*\
  !*** ./src/app/mapping/mapping.module.ts ***!
  \*******************************************/
/*! exports provided: MappingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingPageModule", function() { return MappingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mapping_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapping.page */ "./src/app/mapping/mapping.page.ts");







// import { ChatPage } from "../pages/chat/chat.page";
// import { TripinfoPage } from "../pages/tripinfo/tripinfo.page";
// import { PaymentpagePage } from "../pages/paymentpage/paymentpage.page";
// import { AcceptPage } from "../pages/accept/accept.page";
var routes = [
    {
        path: '',
        component: _mapping_page__WEBPACK_IMPORTED_MODULE_6__["MappingPage"]
    }
];
var MappingPageModule = /** @class */ (function () {
    function MappingPageModule() {
    }
    MappingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            // declarations: [MappingPage]
            declarations: [_mapping_page__WEBPACK_IMPORTED_MODULE_6__["MappingPage"]],
        })
    ], MappingPageModule);
    return MappingPageModule;
}());



/***/ }),

/***/ "./src/app/mapping/mapping.page.scss":
/*!*******************************************!*\
  !*** ./src/app/mapping/mapping.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHBpbmcvbWFwcGluZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mapping/mapping.page.ts":
/*!*****************************************!*\
  !*** ./src/app/mapping/mapping.page.ts ***!
  \*****************************************/
/*! exports provided: MappingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingPage", function() { return MappingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MappingPage = /** @class */ (function () {
    function MappingPage() {
    }
    MappingPage.prototype.ngOnInit = function () {
        throw new Error("Method not implemented.");
    };
    MappingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapping',
            template: __webpack_require__(/*! raw-loader!./mapping.page.html */ "./node_modules/raw-loader/index.js!./src/app/mapping/mapping.page.html"),
            styles: [__webpack_require__(/*! ./mapping.page.scss */ "./src/app/mapping/mapping.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MappingPage);
    return MappingPage;
}());



/***/ })

}]);
//# sourceMappingURL=mapping-mapping-module-es5.js.map