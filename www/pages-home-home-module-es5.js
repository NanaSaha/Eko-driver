(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/accept/accept.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/accept/accept.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-content class=\"scroll\">\n  <div class=\"whiteFlap\">\n    <h4 *ngIf=\"status\">\n      <ion-icon name=\"checkmark-circle\"></ion-icon>\n      <strong style=\"color: green\">{{info}}</strong>Verified\n    </h4>\n\n    <h4 *ngIf=\"!status\">\n      <ion-icon color=\"danger\" name=\"close\"></ion-icon>\n      <strong>Rider</strong>Unverified\n    </h4>\n\n    <div class=\"bars\">\n      <h2>\n        <ion-icon name=\"cash\"></ion-icon>\n        {{settings.appcurrency}}{{charge}}\n      </h2>\n    </div>\n\n    <h4><ion-icon name=\"star\"></ion-icon> {{up}}/{{down}}</h4>\n\n    <p><ion-icon name=\"pin\"></ion-icon> <strong> </strong>{{loc}}</p>\n\n    <p><ion-icon name=\"navigate\"></ion-icon> <strong> </strong>{{des}}</p>\n\n    <div style=\"border: 1px solid lightgreen\">\n      <div id=\"dvMap\" style=\"width: auto; height: 120px\"></div>\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button\n            [ngStyle]=\"{'margin-top': 20 + 'px', 'font-size': 1.1 + 'em'}\"\n            color=\"danger\"\n            expand=\"block\"\n            shape=\"round\"\n            (click)=\"closeModal()\"\n          >\n            IGNORE\n          </button>\n        </ion-col>\n\n        <ion-col>\n          <button\n            [ngStyle]=\"{'margin-top': 20 + 'px', 'font-size': 1.1 + 'em'}\"\n            color=\"green\"\n            expand=\"block\"\n            shape=\"round\"\n            (click)=\"acceptModal()\"\n          >\n            ACCEPT\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content> -->\n\n<ion-content class=\"backgroundColor\">\n  <div class=\"driverFound\">\n    <div class=\"ion-padding\" class=\"request-for-ride2\">\n      <div class=\"headSection\">\n        <div class=\"moveHeader\">\n          <span style=\"font-size: 25px; font-weight: 800\">\n            <strong>Incoming Request!</strong></span\n          >\n        </div>\n      </div>\n\n      <div class=\"resultContainer\">\n        <span style=\"font-size: 30px; font-weight: 800\">\n          <ion-icon\n            name=\"checkmark-circle\"\n            style=\"color: #fbb91d; margin-left: 10%\"\n          ></ion-icon>\n          <strong style=\"color: green\">{{info}} </strong></span\n        >\n        <div style=\"display: inline\">\n          <div class=\"resultContainer2\">\n            <div style=\"display: inline\">\n              <div class=\"img-wrapper\">\n                <ion-icon name=\"pin\"></ion-icon>\n              </div>\n              <div class=\"content-wrap2\">\n                <span\n                  style=\"font-size: 16px; font-weight: 500\"\n                  class=\"bookPrice\"\n                  >{{loc}}\n                </span>\n              </div>\n            </div>\n            <br />\n\n            <div style=\"display: inline\">\n              <div class=\"img-wrapper\">\n                <ion-icon name=\"navigate\"></ion-icon>\n              </div>\n\n              <div class=\"content-wrap2\">\n                <span\n                  style=\"font-size: 16px; font-weight: 500; color: #fbb91d\"\n                  class=\"bookPrice\"\n                  >{{des}}\n                </span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"content-wrap\">\n            <h4 class=\"butt\" class=\"ion-text-center\">\n              {{settings.appcurrency}}\n              <span style=\"font-size: 40px; font-weight: 800\">\n                <strong>{{charge}}</strong></span\n              >\n            </h4>\n          </div>\n        </div>\n      </div>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button\n              [ngStyle]=\"{'margin-top': 20 + 'px', 'font-size': 1.1 + 'em'}\"\n              color=\"dark\"\n              expand=\"block\"\n              shape=\"round\"\n              (click)=\"acceptModal()\"\n            >\n              ACCEPT\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button\n              [ngStyle]=\"{'margin-top': 20 + 'px', 'font-size': 1.1 + 'em'}\"\n              color=\"danger\"\n              expand=\"block\"\n              shape=\"round\"\n              (click)=\"closeModal()\"\n            >\n              IGNORE\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chat/chat.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chat/chat.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border>\n  <ion-toolbar style=\"margin-top: 10px\">\n    <ion-title>Chat with Rider</ion-title>\n    <ion-button icon-only (click)=\"closeChat()\" slot=\"end\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-button>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" class=\"ion-text-center\" class=\"yes-scroll\">\n  <div class=\"followed-items\">\n    <ion-list class=\"ion-text-center\" lines=\"none\">\n      <div class=\"ion-text-center\" *ngFor=\"let event of eventList\">\n        <div text-wrap color=\"primary\" class=\"driver\" *ngIf=\"!event.user\">\n          <p>{{event.driver}}</p>\n        </div>\n        <div text-wrap color=\"primary\" class=\"user\" *ngIf=\"!event.driver\">\n          <p>{{event.user}}</p>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-input type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\" (click)=\"Send()\">\n        <ion-icon name=\"paper-plane\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n\n<!-- <ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button\n          id=\"container_1\"\n          color=\"primary\"\n          (click)=\"closeChat()\"\n          shape=\"round\"\n        >\n          Close\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button\n          id=\"container_1\"\n          color=\"primary\"\n          (click)=\"Send()\"\n          shape=\"round\"\n        >\n          New Message\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"no-scroll\">\n  <div id=\"map-canvas\" [ngClass]=\"{'mess2_short': shortMap == false,'mess_defualt': defaultMap == true}\">\n    <div class=\"topBar\">\n      <ion-menu-toggle (click)=\"toggle()\" autoHide=\"false\">\n        <!-- *ngIf=\"hasNotPicked && hasEnded\" -->\n        <ion-button class=\"round\" color=\"trans\" style=\"\n            --border-radius: 100%;\n            width: 60px;\n            height: 60px;\n            --vertical-align: middle;\n            --padding-start: -5px;\n            --padding-end: -5px;\n          \">\n          <ion-icon name=\"ios-menu\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n\n      <div id=\"buttonContainer\">\n        \n      \n\n\n        <ion-button *ngIf=\"this.pop.loggedOff == false\" size=\"large\" shape=\"round\" color=\"primary\" class=\"button\"\n          (click)=\"goOffline()\">\n          <ion-grid style=\"color: #f00a0a\">\n            <ion-row>\n              <ion-col>\n                GO OFFLINE\n                <ion-title style=\"color: #fbb91d\"></ion-title>\n              </ion-col>\n            </ion-row>\n            <!-- <ion-row>\n                      <ion-col>\n                        <ion-title\n                          style=\"color: rgb(175, 236, 255)\"\n                          id=\"demo2\"\n                        ></ion-title>\n                      </ion-col>\n                    </ion-row> -->\n          </ion-grid>\n        </ion-button>\n\n      \n\n        <ion-button class=\"button\" size=\"large\" color=\"primary\" shape=\"round\"\n          *ngIf=\"this.pop.loggedOff && hasEnded && !hasNotFoundMap || ph.isOffline == true\" (click)=\"goOnline()\">\n          <!-- <div style=\"color: #f00a0a\">OFFLINE</div> -->\n          <div style=\"color: #228b22\">GO ONLINE</div>\n          <!-- <div *ngIf=\"this.zoner\">ZONE MODE</div> -->\n        </ion-button>\n\n        <ion-button *ngIf=\"this.pop.loggedOff && hasNotFoundMap\">\n          <ion-spinner color=\"#ffffff\" name=\"bubbles\"></ion-spinner>\n        </ion-button>\n      </div>\n\n      <div class=\"mid-right\">\n        <ion-fab slot=\"fixed\">\n          <ion-fab-button color=\"trans\"> SOS </ion-fab-button>\n          <ion-fab-list side=\"top\">\n            <ion-fab-button (click)=\"call_phone()\"><ion-icon name=\"call\"> </ion-icon></ion-fab-button>\n          </ion-fab-list>\n\n          <ion-fab-list side=\"start\">\n            <ion-fab-button (click)=\"call_phone_other()\"><ion-icon name=\"body\"> </ion-icon></ion-fab-button>\n          </ion-fab-list>\n\n          <ion-fab-list side=\"bottom\">\n            <ion-fab-button (click)=\"call_phone_other()\"><ion-icon name=\"bonfire\"> </ion-icon></ion-fab-button>\n          </ion-fab-list>\n        </ion-fab>\n      </div>\n\n      <div *ngIf=\"isArrived == true && isPiked == true\">\n        <div class=\"mid-right2\">\n          <ion-fab slot=\"fixed\">\n            <ion-fab-button (click)=\"gotoDestination()\">\n              <ion-icon name=\"navigate\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n        </div>\n      </div>\n\n      <div *ngIf=\"!hasEnded\">\n        <div *ngIf=\"!isArrived\">\n          <div class=\"mid-right2\">\n            <ion-fab slot=\"fixed\">\n              <ion-fab-button (click)=\"gotoMap()\">\n                <ion-icon name=\"compass\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"isArrived == true && isPiked == true\">\n        <div class=\"mid-right3\">\n          <ion-fab slot=\"fixed\">\n            <ion-button (click)=\"presentActionSheet()\" color=\"dark\">\n              <ion-icon name=\"share\"></ion-icon>\n              Share Trip\n            </ion-button>\n      \n          </ion-fab>\n        </div>\n      </div>\n\n\n      <!-- <div *ngIf=\"isArrived == true && isPiked == false\">\n        <div class=\"mid-right4\">\n      \n          <ion-fab slot=\"fixed\">\n      \n            <ion-button color=\"dark\">\n              <ion-icon name=\"alarm\"> </ion-icon>\n              <span style=\"text-transform: none\">Wait Time for:: </span> <br>\n              <span id=\"wait_time\"> </span>\n            </ion-button>\n      \n          </ion-fab>\n        </div>\n      </div> -->\n      \n      \n      <div *ngIf=\"isPaused == true\">\n        <div class=\"mid-right5\">\n      \n          <ion-fab slot=\"fixed\">\n      \n            <ion-button color=\"dark\">\n              <ion-icon name=\"alarm\"> </ion-icon>\n              <span style=\"text-transform: none\">Paused Time for:: </span> <br>\n              <span id=\"pause_time\"> </span>\n            </ion-button>\n      \n          </ion-fab>\n        </div>\n      </div>\n\n\n  \n    </div>\n  </div>\n\n\n\n  <div id=\"map_layer\">\n  \n    <label *ngIf=\"hasEnded == false\">\n      <input type=\"checkbox\" name=\"run\" value=\"click\" (click)=\"completeItem()\" />\n      <div id=\"button1\" class=\"button\" style=\"z-index: 999999999999\">\n        <ion-icon name=\"ios-more\" style=\"font-size: 34px; margin-top: 13px\"></ion-icon>\n  \n        <button class=\"main-con\">\n          <div class=\"driverFoundNew\" *ngIf=\"hasEnded == false\">\n            <div class=\"ion-padding\" class=\"request-for-ride2\">\n              <div class=\"headSection\" *ngIf=\"hasNotPicked && pop.hasPicked == false\">\n                <div class=\"moveHeader\">\n                  <span style=\"\n                          font-size: 25px;\n                          font-weight: 800;\n                          margin-left: 10%;\n                        \">\n                    <strong>Pickup Rider</strong></span>\n                  <br />\n                  <span class=\"centerText\">ETA {{dProvider.time}}</span>\n                </div>\n              </div>\n  \n              <div class=\"headSection\" *ngIf=\"!hasNotPicked && isPiked == true\">\n                <div class=\"moveHeader\">\n                  <span style=\"\n                          font-size: 25px;\n                          font-weight: 800;\n                          margin-left: 10%;\n                        \">\n                    <strong>Start Your Ride</strong></span>\n                  <br />\n                  <span class=\"centerText\">ETA {{dProvider.time2}}</span>\n                </div>\n              </div>\n  \n              <div class=\"headSection\" [hidden]=\"!pop.hasPicked\">\n                <div class=\"moveHeader\">\n                  <span style=\"\n                          font-size: 25px;\n                          font-weight: 800;\n                          margin-left: 10%;\n                        \">\n                    <strong>Enroute to destination</strong></span>\n                  <br />\n                  <span class=\"centerText\">ETA {{dProvider.time2}}</span>\n                </div>\n              </div>\n  \n              <div class=\"resultContainer\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"3\">\n                      <div class=\"img-wrapper\">\n                        <ion-icon name=\"contact\" id=\"drivericonSize\" (click)=\"OpenInfo()\"></ion-icon>\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"5\">\n                      <div class=\"content-wrap\">\n                        <span class=\"bookTitle\">Rider</span>\n                        <br />\n                        <span style=\"font-size: 30px; font-weight: 800\" class=\"bookPrice\">{{name}}</span>\n                      </div>\n                    </ion-col>\n  \n                    <ion-col size=\"4\">\n                      <div class=\"content-wrap\">\n                        <span class=\"bookTitle\">\n                          <img src=\"assets/icon/chat.svg\" class=\"chatIcon\" (click)=\"SendMessage()\" /></span>\n                        <br />\n                      </div>\n  \n                      <div class=\"content-wrap\">\n                        <span class=\"bookTitle\">\n                          <ion-icon name=\"call\" class=\"callIcon\" (click)=\"call()\"></ion-icon>\n                        </span>\n                        <br />\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n  \n              <div class=\"resultContainer2\" *ngIf=\"hasNotPicked && pop.hasPicked == false\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"2\">\n                      <div class=\"img-wrapper\">\n                        <img src=\"assets/icon/pin.png\" class=\"dott\" />\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"10\">\n                      <div class=\"content-wrap2\">\n                        <span style=\"font-size: 16px; font-weight: 500\" class=\"bookPrice\">{{myGcode.locationName}}\n                        </span>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n  \n              <!-- <div class=\"resultContainer2\" [hidden]=\"timeOver && !isArrived\"> -->\n              <div class=\"resultContainer2\" [hidden]=\"!pop.hasPicked\">\n  \n                <ion-item> <ion-icon name=\"pin\" style=\"color: #fbb91d\"></ion-icon> &nbsp;{{destination}}</ion-item>\n  \n                <ion-item *ngIf=\"newDestinationStop\"> <ion-icon name=\"pin\"></ion-icon> {{newDestinationStop}}&nbsp;\n                  <ion-badge color=\"success\">\n                    New Stop</ion-badge></ion-item>\n  \n  \n                <!-- <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"2\">\n                        <div class=\"img-wrapper\">\n                          <img src=\"assets/icon/pin.png\" class=\"dott\" />\n                        </div>\n                      </ion-col>\n                      <ion-col size=\"10\">\n                        <div class=\"content-wrap2\">\n                          <span style=\"font-size: 16px; font-weight: 500\" class=\"bookPrice\">{{destination}}\n                          </span>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                    <ion-item *ngIf=\"newDestinationStop\"> <ion-icon name=\"pin\"></ion-icon> {{newDestinationStop}}&nbsp; <ion-badge color=\"success\">\n                      New Stop</ion-badge></ion-item>\n                  </ion-grid> -->\n              </div>\n  \n              <div [hidden]=\"!pop.hasPicked\">\n  \n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"6\">\n  \n                      <div id=\"btn-center\">\n                        <div *ngIf=\"isPaused == false\">\n                          <ion-button class=\"button\" size=\"large\" color=\"danger\" shape=\"round\" (click)=\"ConfirmDrop()\">\n                            <div>END TRIP</div>\n                          </ion-button>\n                        </div>\n                      </div>\n                    </ion-col>\n  \n                    <ion-col size=\"6\">\n                      <div id=\"btn-center\" *ngIf=\"isPaused == false\">\n                        <div>\n                          <ion-button class=\"button\" size=\"large\" color=\"warning\" shape=\"round\" (click)=\"pauseRide()\">\n                            <div>PAUSE TRIP</div>\n                          </ion-button>\n                        </div>\n                      </div>\n                    </ion-col>\n  \n                    <ion-col size=\"12\">\n                      <div id=\"btn-center\" *ngIf=\"isPaused == true\">\n                        <div>\n                          <ion-button class=\"button\" size=\"large\" color=\"success\" shape=\"round\" (click)=\"resumeRide()\">\n                            <div>RESUME TRIP</div>\n                          </ion-button>\n                        </div>\n                      </div>\n                    </ion-col>\n  \n  \n                  </ion-row>\n                </ion-grid>\n  \n              </div>\n  \n              <div [hidden]=\"isPiked == true\">\n                <div id=\"btn-center\">\n                  <div>\n                    <ion-button class=\"button\" size=\"large\" color=\"primary\" shape=\"round\" (click)=\"ConfirmPickup()\">\n                      <div>START TRIP</div>\n                    </ion-button>\n                  </div>\n                </div>\n              </div>\n  \n              <div *ngIf=\"isArrived && !remove_arrived \">\n                <div id=\"btn-center\">\n                  <div>\n                    <ion-button class=\"button\" size=\"large\" color=\"dark\" shape=\"round\" (click)=\"HasArrived()\">\n                      <div>ARRIVED</div>\n                    </ion-button>\n                  </div>\n                </div>\n              </div>\n  \n  \n  \n              <div [hidden]=\"isArrived\">\n                <div id=\"btn-center\">\n                  <div>\n                    <ion-button class=\"button\" size=\"large\" color=\"success\" shape=\"round\" (click)=\"driveToPickup()\">\n                      <div>Drive to Pickup</div>\n                    </ion-button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </button>\n      </div>\n    </label>\n    <!-- END DRIVER MODE-->\n  \n  \n  </div>\n  \n  </ion-content>\n  \n  <ion-footer no-border id=\"lower_items\" *ngIf=\"hasEnded\">\n    <ion-button expand=\"block\" ion-text-center color=\"primary\" (click)=\"hoseMe()\">\n      <ion-icon *ngIf=\"!hideMe\" name=\"arrow-round-up\" color=\"dark\"></ion-icon>\n      <ion-icon *ngIf=\"hideMe\" name=\"arrow-round-down\" color=\"dark\"></ion-icon>\n    </ion-button>\n    <div [hidden]=\"!isNotDestinyOption\" *ngIf=\"hideMe\" style=\"background-color: white;\">\n      <h3 class=\"centerEarnings\">Earnings</h3>\n      <div class=\"topped\">\n        <ion-badge id=\"myBadge\" color=\"primary\" slot=\"end\">{{settings.appcurrency}} {{mr}}\n        </ion-badge>\n      </div>\n    </div>\n  </ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/paymentpage/paymentpage.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/paymentpage/paymentpage.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"backgroundColor\">\n  <div class=\"driverFound\">\n    <div class=\"ion-padding\" class=\"request-for-ride2\">\n      <div class=\"headSection\">\n        <div class=\"moveHeader\">\n          <span style=\"font-size: 25px; font-weight: 800\">\n            <strong>Trip Fare</strong></span\n          >\n        </div>\n      </div>\n\n      <div class=\"resultContainer\">\n        <span\n          style=\"\n            font-size: 30px;\n            font-weight: 200;\n            text-align: center;\n            margin-left: 20%;\n          \"\n        >\n          Rider will pay</span\n        >\n        <div style=\"display: inline\">\n          <div class=\"content-wrap\">\n            <h4 class=\"butt\" class=\"ion-text-center\">\n              {{settings.appcurrency}}\n              <span\n                style=\"font-size: 60px; font-weight: 800; text-align: center\"\n              >\n                <strong>{{amount}}</strong></span\n              >\n            </h4>\n          </div>\n        </div>\n      </div>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button\n              [ngStyle]=\"{'margin-top': 20 + 'px', 'font-size': 1.1 + 'em'}\"\n              color=\"dark\"\n              expand=\"block\"\n              shape=\"round\"\n              (click)=\"closeModal()\"\n            >\n              ACCEPT\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tripinfo/tripinfo.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tripinfo/tripinfo.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-button (click)=\"closeModal()\" ion-button color=\"primary\" fill=\"clear\">\n    <ion-icon style=\"font-size: 1.5em\" name=\"arrow-back\"></ion-icon>\n    <span style=\"margin-left: 30px; font-size: 1.4em\">CLOSE</span>\n  </ion-button>\n</ion-header>\n\n<ion-content class=\"scroll\" padding>\n  <!-- <ion-title text-center>FARE BREAKDOWN</ion-title>\n\n  <ion-title padding text-center>RIDER PAY</ion-title>\n  <ion-title padding text-center\n    ><strong>{{settings.appcurrency}}{{(riderpaid)}}</strong></ion-title\n  > -->\n\n  <!-- <ion-item no-lines padding>\n    <div text-center>\n      <ion-title>Ride Cost</ion-title>\n      <ion-title padding text-center\n        ><strong>{{settings.appcurrency}}{{(riderpaid)}}</strong></ion-title\n      >\n    </div>\n  </ion-item> -->\n\n  <div text-center class=\"whiteFlap\">\n    <ion-title>Trip Information</ion-title>\n  </div>\n  <div text-center class=\"whiteFlap\">\n    <ion-item>\n      <h4 text-center>Pickup {{info.Client_locationName}}</h4></ion-item\n    >\n    <ion-item>Drop off {{info.Client_destinationName}}</ion-item>\n    <!-- <ion-item><h4 text-center>Time Accepted {{accepted}}</h4> </ion-item> -->\n    <ion-item> <h4 text-center>Time Arrived {{arrived}}</h4></ion-item>\n  </div>\n\n  <div padding text-center id=\"buttonContainer2\">\n    <ion-item no-lines detail-none ion-item class=\"guttonz\">\n      <ion-label class=\"stack\" (click)=\"onChange($event)\">\n        <h1 style=\"text-align: center\">CANCEL THIS TRIP</h1>\n      </ion-label>\n      <!-- <ion-select\n        [(ngModel)]=\"currentCar\"\n        (ionChange)=\"onChange($event)\"\n        multiple=\"false\"\n      >\n        <div *ngFor=\"let item of items\">\n          <ion-select-option value=\"{{item.text}}\"\n            >{{item.text}}</ion-select-option\n          >\n        </div>\n      </ion-select> -->\n    </ion-item>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v11.10.6
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(this, (function () { 'use strict';

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }

  var RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  var globalState = {};
  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  var restoreActiveElement = function restoreActiveElement(returnFocus) {
    return new Promise(function (resolve) {
      if (!returnFocus) {
        return resolve();
      }
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  var swalPrefix = 'swal2-';

  /**
   * @typedef
   * { | 'container'
   *   | 'shown'
   *   | 'height-auto'
   *   | 'iosfix'
   *   | 'popup'
   *   | 'modal'
   *   | 'no-backdrop'
   *   | 'no-transition'
   *   | 'toast'
   *   | 'toast-shown'
   *   | 'show'
   *   | 'hide'
   *   | 'close'
   *   | 'title'
   *   | 'html-container'
   *   | 'actions'
   *   | 'confirm'
   *   | 'deny'
   *   | 'cancel'
   *   | 'default-outline'
   *   | 'footer'
   *   | 'icon'
   *   | 'icon-content'
   *   | 'image'
   *   | 'input'
   *   | 'file'
   *   | 'range'
   *   | 'select'
   *   | 'radio'
   *   | 'checkbox'
   *   | 'label'
   *   | 'textarea'
   *   | 'inputerror'
   *   | 'input-label'
   *   | 'validation-message'
   *   | 'progress-steps'
   *   | 'active-progress-step'
   *   | 'progress-step'
   *   | 'progress-step-line'
   *   | 'loader'
   *   | 'loading'
   *   | 'styled'
   *   | 'top'
   *   | 'top-start'
   *   | 'top-end'
   *   | 'top-left'
   *   | 'top-right'
   *   | 'center'
   *   | 'center-start'
   *   | 'center-end'
   *   | 'center-left'
   *   | 'center-right'
   *   | 'bottom'
   *   | 'bottom-start'
   *   | 'bottom-end'
   *   | 'bottom-left'
   *   | 'bottom-right'
   *   | 'grow-row'
   *   | 'grow-column'
   *   | 'grow-fullscreen'
   *   | 'rtl'
   *   | 'timer-progress-bar'
   *   | 'timer-progress-bar-container'
   *   | 'scrollbar-measure'
   *   | 'icon-success'
   *   | 'icon-warning'
   *   | 'icon-info'
   *   | 'icon-question'
   *   | 'icon-error'
   * } SwalClass
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  var classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error'];
  var swalClasses = classNames.reduce(function (acc, className) {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  var icons = ['success', 'warning', 'info', 'question', 'error'];
  var iconTypes = icons.reduce(function (acc, icon) {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});

  var consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  var previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  var warnOnce = function warnOnce(message) {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */
  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */
  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };

  /**
   * @param {any} arg
   * @returns {Promise<any>}
   */
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getIcon = function getIcon() {
    return elementByClass(swalClasses.icon);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getIconContent = function getIconContent() {
    return elementByClass(swalClasses['icon-content']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };

  /**
   * @returns {HTMLButtonElement | null}
   */
  var getConfirmButton = function getConfirmButton() {
    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };

  /**
   * @returns {HTMLButtonElement | null}
   */
  var getCancelButton = function getCancelButton() {
    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };

  /**
   * @returns {HTMLButtonElement | null}
   */
  var getDenyButton = function getDenyButton() {
    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  };

  // https://github.com/jkup/focusable/blob/master/index.js
  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  /**
   * @returns {HTMLElement[]}
   */
  var getFocusableElements = function getFocusableElements() {
    var popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    var focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    var focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort(function (a, b) {
      var tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      var tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    var otherFocusableElements = popup.querySelectorAll(focusable);
    var otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return _toConsumableArray(new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))).filter(function (el) {
      return isVisible$1(el);
    });
  };

  /**
   * @returns {boolean}
   */
  var isModal = function isModal() {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  var isToast = function isToast() {
    var popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  var isLoading = function isLoading() {
    var popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  var setInnerHtml = function setInnerHtml(elem, html) {
    elem.textContent = '';
    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      var head = parsed.querySelector('head');
      head && Array.from(head.childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      var body = parsed.querySelector('body');
      body && Array.from(body.childNodes).forEach(function (child) {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }
    var classList = className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  var removeCustomClasses = function removeCustomClasses(elem, params) {
    Array.from(elem.classList).forEach(function (className) {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);
    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
        return;
      }
      addClass(elem, params.customClass[className]);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */
  var getInput$1 = function getInput(popup, inputClass) {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));
      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));
      case 'radio':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));
      case 'range':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));
      default:
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  var focusInput = function focusInput(input) {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(function (className) {
      if (Array.isArray(target)) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  var getDirectChildByClass = function getDirectChildByClass(elem, className) {
    var children = Array.from(elem.children);
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style.setProperty(property, typeof value === 'number' ? "".concat(value, "px") : value);
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem && (elem.style.display = display);
  };

  /**
   * @param {HTMLElement | null} elem
   */
  var hide = function hide(elem) {
    elem && (elem.style.display = 'none');
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  var showWhenInnerHtmlPresent = function showWhenInnerHtmlPresent(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
    if (!elem) {
      return;
    }
    new MutationObserver(function () {
      toggle(elem, elem.innerHTML, display);
    }).observe(elem, {
      childList: true,
      subtree: true
    });
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  var setStyle = function setStyle(parent, selector, property, value) {
    /** @type {HTMLElement | null} */
    var el = parent.querySelector(selector);
    if (el) {
      el.style.setProperty(property, value);
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */
  var toggle = function toggle(elem, condition) {
    var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */
  var isVisible$1 = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };

  /**
   * @returns {boolean}
   */
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
  };

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  };

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" id=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\" id=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" id=\"").concat(swalClasses.checkbox, "\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\" id=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  var resetValidationMessage$1 = function resetValidationMessage() {
    globalState.currentInstance.resetValidationMessage();
  };
  var addInputChangeListeners = function addInputChangeListeners() {
    var popup = getPopup();
    var input = getDirectChildByClass(popup, swalClasses.input);
    var file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    var range = popup.querySelector(".".concat(swalClasses.range, " input"));
    /** @type {HTMLOutputElement} */
    var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    var select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = function () {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = function () {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  /**
   * @param {SweetAlertOptions} params
   */
  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };

  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */
  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    var container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (_typeof(param) === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {any} param
   * @param {HTMLElement} target
   */
  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {any} elem
   */
  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';
    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */
  var animationEndEvent = function () {
    // Prevent run in Node env
    if (isNodeEnv()) {
      return false;
    }
    var testEl = document.createElement('div');

    // Chrome, Safari and Opera
    if (typeof testEl.style.webkitAnimation !== 'undefined') {
      return 'webkitAnimationEnd';
    }

    // Standard syntax
    if (typeof testEl.style.animation !== 'undefined') {
      return 'animationend';
    }
    return false;
  }();

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }
    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    var buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params["show".concat(buttonName, "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")] || ''); // Set caption text
    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses["grow-".concat(grow)]);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /** @type {InputClass[]} */
  var inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderInput = function renderInput(instance, params) {
    var popup = getPopup();
    if (!popup) {
      return;
    }
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(function (inputClass) {
      var inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      if (!inputContainer) {
        return;
      }

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  var showInput = function showInput(params) {
    if (!params.input) {
      return;
    }
    if (!renderInputType[params.input]) {
      error("Unexpected type of input! Expected ".concat(Object.keys(renderInputType).join(' | '), ", got \"").concat(params.input, "\""));
      return;
    }
    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(function () {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;
      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  var setAttributes = function setAttributes(inputClass, inputAttributes) {
    var input = getInput$1(getPopup(), inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (var attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);
    if (_typeof(params.customClass) === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (_typeof(params.customClass) === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */
  var getInputContainer = function getInputContainer(inputType) {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  var checkAndSetInputValue = function checkAndSetInputValue(input, inputValue) {
    if (['string', 'number'].includes(_typeof(inputValue))) {
      input.value = "".concat(inputValue);
    } else if (!isPromise(inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(inputValue), "\""));
    }
  };

  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  var renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = function (input, params) {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = function (select, params) {
    select.textContent = '';
    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = function (textarea, params) {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    var getMargin = function getMargin(el) {
      return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
    };

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(function () {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        var textareaResizeHandler = function textareaResizeHandler() {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }
          var textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderContent = function renderContent(instance, params) {
    var htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    showWhenInnerHtmlPresent(htmlContainer);
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    if (!footer) {
      return;
    }
    showWhenInnerHtmlPresent(footer);
    toggle(footer, params.footer, 'block');
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance);
    var icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  var applyStyles = function applyStyles(icon, params) {
    for (var _i = 0, _Object$entries = Object.entries(iconTypes); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        iconType = _Object$entries$_i[0],
        iconClassName = _Object$entries$_i[1];
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  var adjustSuccessIconBackgroundColor = function adjustSuccessIconBackgroundColor() {
    var popup = getPopup();
    if (!popup) {
      return;
    }
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };
  var successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
  var errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  var setContent = function setContent(icon, params) {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    var oldContent = icon.innerHTML;
    var newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (var _i2 = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i2 < _arr.length; _i2++) {
      var sel = _arr[_i2];
      setStyle(icon, sel, 'background-color', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderImage = function renderImage(instance, params) {
    var image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderPopup = function renderPopup(instance, params) {
    var container = getContainer();
    var popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      var loader = getLoader();
      loader && popup.insertBefore(loader, getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  var addClasses$1 = function addClasses(popup, params) {
    var showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : '');
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    var progressSteps = params.progressSteps,
      currentProgressStep = params.currentProgressStep;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    if (!title) {
      return;
    }
    showWhenInnerHtmlPresent(title);
    toggle(title, params.title || params.titleText, 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    var popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  var isVisible = function isVisible() {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  var clickConfirm = function clickConfirm() {
    var _dom$getConfirmButton;
    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };

  /*
   * Global function to click 'Deny' button
   */
  var clickDeny = function clickDeny() {
    var _dom$getDenyButton;
    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  var clickCancel = function clickCancel() {
    var _dom$getCancelButton;
    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };

  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

  /** @type {Record<DismissReason, DismissReason>} */
  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  var removeKeydownHandler = function removeKeydownHandler(globalState) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */
  var addKeydownHandler = function addKeydownHandler(globalState, innerParams, dismissWith) {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(innerParams, e, dismissWith);
      };
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  var setFocus = function setFocus(index, increment) {
    var _dom$getPopup;
    var focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */
  var keydownHandler = function keydownHandler(innerParams, event, dismissWith) {
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  var handleEnter = function handleEnter(event, innerParams) {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    var input = getInput$1(getPopup(), innerParams.input);
    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }
      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  var handleTab = function handleTab(event) {
    var targetElement = event.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;
    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  var handleArrows = function handleArrows(key) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();
    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */
    var buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    var sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement;
    if (!buttonToFocus) {
      return;
    }
    for (var i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  var handleEsc = function handleEsc(event, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      event.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  // @ts-ignore
  var isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */
  var iOSfix = function iOSfix() {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  var lockBodyScroll = function lockBodyScroll() {
    var container = getContainer();
    if (!container) {
      return;
    }
    /** @type {boolean} */
    var preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = function (event) {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = function (event) {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();
    var htmlContainer = getHtmlContainer();
    if (!container || !htmlContainer) {
      return false;
    }
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(htmlContainer) &&
    // #1944
    htmlContainer.contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */
  var isStylus = function isStylus(event) {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  var isZoom = function isZoom(event) {
    return event.touches && event.touches.length > 1;
  };
  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  var previousBodyPadding = null;

  /**
   * @param {string} initialBodyOverflow
   */
  var replaceScrollbarWithPadding = function replaceScrollbarWithPadding(initialBodyOverflow) {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoReplaceScrollbarWithPadding = function undoReplaceScrollbarWithPadding() {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    var didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  var triggerClosePopup = function triggerClosePopup(instance) {
    var popup = getPopup();
    if (!popup) {
      return false;
    }
    var innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {any} error
   */
  function rejectPromise(error) {
    var rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  var handleAwaitingPromise = function handleAwaitingPromise(instance) {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */
  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer();
    // If animation is supported, animate
    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
    if (!animationEndEvent) {
      return;
    }
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */
  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();
    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }
    popup = getPopup();
    if (!popup) {
      return;
    }
    var loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  var replaceButton = function replaceButton(popup, buttonToReplace) {
    var actions = getActions();
    var loader = getLoader();
    if (!actions || !loader) {
      return;
    }
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(function (i) {
      return i === params.input;
    }) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  var getFileValue = function getFileValue(input) {
    return input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var handleInputOptions = function handleInputOptions(instance, params) {
    var popup = getPopup();
    if (!popup) {
      return;
    }
    /**
     * @param {Record<string, any>} inputOptions
     */
    var processInputOptions = function processInputOptions(inputOptions) {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    if (!input) {
      return;
    }
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateSelectOptions(popup, inputOptions, params) {
    var select = getDirectChildByClass(popup, swalClasses.select);
    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
    var renderOption = function renderOption(parent, optionLabel, optionValue) {
      var option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        var optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now
        select.appendChild(optgroup);
        optionLabel.forEach(function (o) {
          return renderOption(optgroup, o[1], o[0]);
        });
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateRadioOptions(popup, inputOptions, params) {
    var radio = getDirectChildByClass(popup, swalClasses.radio);
    if (!radio) {
      return;
    }
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      var label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');
    if (radios.length) {
      radios[0].focus();
    }
  }

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */
  var formatInputOptions = function formatInputOptions(inputOptions) {
    /** @type {InputOptionFlattened[]} */
    var result = [];
    if (inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;
        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];
        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */
  var isSelected = function isSelected(optionValue, inputValue) {
    return !!inputValue && inputValue.toString() === optionValue.toString();
  };

  var _this = undefined;

  /**
   * @param {SweetAlert} instance
   */
  var handleConfirmButtonClick = function handleConfirmButtonClick(instance) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  var handleDenyButtonClick = function handleDenyButtonClick(instance) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, type) {
    var innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
      return;
    }
    var input = instance.getInput();
    var inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */
  var handleInputValidator = function handleInputValidator(instance, inputValue, type) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  var deny = function deny(instance, value) {
    var innerParams = privateProps.innerParams.get(instance || _this);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      })["catch"](function (error) {
        return rejectWith(instance || _this, error);
      });
    } else {
      instance.close({
        isDenied: true,
        value: value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  var succeedWith = function succeedWith(instance, value) {
    instance.close({
      isConfirmed: true,
      value: value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  var rejectWith = function rejectWith(instance, error) {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */
  var confirm = function confirm(instance, value) {
    var innerParams = privateProps.innerParams.get(instance || _this);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      })["catch"](function (error) {
        return rejectWith(instance || _this, error);
      });
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  var showRelatedButton = function showRelatedButton(domCache) {
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */
  function getInput() {
    var innerParams = privateProps.innerParams.get(this);
    var domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    var popup = getPopup();
    if (!popup || !input) {
      return;
    }
    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      var radios = popup.querySelectorAll("[name=\"".concat(swalClasses.radio, "\"]"));
      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   * @this {SweetAlert}
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   * @this {SweetAlert}
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */
  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    var input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */
  function resetValidationMessage() {
    var domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    var input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];

  /** @type {Record<string, string>} */
  var deprecatedParams = {};
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  /**
   * @param {string} param
   */
  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  /**
   * @param {string} param
   */
  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    var isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  var showWarningsForParams = function showWarningsForParams(params) {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    for (var param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
      return;
    }
    var validUpdatableParams = filterValidParams(params);
    var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  var filterValidParams = function filterValidParams(params) {
    var validUpdatableParams = {};
    Object.keys(params).forEach(function (param) {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: ".concat(param));
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  var disposeSwal = function disposeSwal(instance) {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  var disposeWeakMaps = function disposeWeakMaps(instance) {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise;
      // Unset instance methods
      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */
  var unsetWeakMaps = function unsetWeakMaps(obj, instance) {
    for (var i in obj) {
      obj[i]["delete"](instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  var handlePopupClick = function handlePopupClick(innerParams, domCache, dismissWith) {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  var handleToastClick = function handleToastClick(innerParams, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  var isAnyButtonShown = function isAnyButtonShown(innerParams) {
    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };
  var ignoreOutsideClick = false;

  /**
   * @param {DomCache} domCache
   */
  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = function () {};
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {DomCache} domCache
   */
  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = function () {};
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  var handleModalClick = function handleModalClick(innerParams, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };
  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };
  var argsToParams = function argsToParams(args) {
    var params = {};
    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire() {
    var Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);
      function MixinSwal() {
        _classCallCheck(this, MixinSwal);
        return _callSuper(this, MixinSwal, arguments);
      }
      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, priorityMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
        }
      }]);
      return MixinSwal;
    }(this); // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */
  var increaseTimer = function increaseTimer(ms) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  var isTimerRunning = function isTimerRunning() {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  var bodyClickListener = function bodyClickListener(event) {
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  var Timer = /*#__PURE__*/function () {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }
        return this.remaining;
      }

      /**
       * @returns {number}
       */
    }, {
      key: "stop",
      value: function stop() {
        if (this.started && this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date().getTime() - this.started.getTime();
        }
        return this.remaining;
      }

      /**
       * @param {number} n
       * @returns {number}
       */
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;
        if (running) {
          this.stop();
        }
        this.remaining += n;
        if (running) {
          this.start();
        }
        return this.remaining;
      }

      /**
       * @returns {number}
       */
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }
        return this.remaining;
      }

      /**
       * @returns {boolean}
       */
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);
    return Timer;
  }();

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  var getTemplateParams = function getTemplateParams(params) {
    /** @type {HTMLTemplateElement} */
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    var templateContent = template.content;
    showWarningsForElements(templateContent);
    var result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */
    var swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (_typeof(defaultParams[paramName]) === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalFunctionParams = function getSwalFunctionParams(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */
    var swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(function (param) {
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');
      result[paramName] = new Function("return ".concat(value))();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */
    var swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    /** @type {HTMLElement} */
    var image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    /** @type {HTMLElement} */
    var icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        /** @type {SweetAlertIcon} */
        // @ts-ignore
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    /** @type {HTMLElement} */
    var input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      /** @type {SweetAlertInput} */
      // @ts-ignore
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    var inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */
  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};
    for (var i in paramNames) {
      var paramName = paramNames[i];
      /** @type {HTMLElement} */
      var tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  var showWarningsForElements = function showWarningsForElements(templateContent) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(function (el) {
      var tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    Array.from(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    }
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {AnimationEvent} event
   */
  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();
    if (event.target !== popup || !animationEndEvent) {
      return;
    }
    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    }

    // sweetalert2/issues/1247
    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  var addClasses = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    if (params.animation) {
      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
      popup.style.setProperty('opacity', '0', 'important');
      show(popup, 'grid');
      setTimeout(function () {
        // Animate popup right after showing it
        addClass(popup, params.showClass.popup);
        // and remove the opacity workaround
        popup.style.removeProperty('opacity');
      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    } else {
      show(popup, 'grid');
    }
    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  var currentInstance;
  var _promise = /*#__PURE__*/new WeakMap();
  var SweetAlert = /*#__PURE__*/function () {
    /**
     * @param {...any} args
     * @this {SweetAlert}
     */
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);
      /**
       * @type {Promise<SweetAlertResult>}
       */
      _classPrivateFieldInitSpec(this, _promise, {
        writable: true,
        value: void 0
      });
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      _classPrivateFieldSet(this, _promise, this._main(currentInstance.params));
    }
    _createClass(SweetAlert, [{
      key: "_main",
      value: function _main(userParams) {
        var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        showWarningsForParams(Object.assign({}, mixinParams, userParams));
        if (globalState.currentInstance) {
          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
          var isAwaitingPromise = globalState.currentInstance.isAwaitingPromise;
          globalState.currentInstance._destroy();
          if (!isAwaitingPromise) {
            swalPromiseResolve({
              isDismissed: true
            });
          }
          if (isModal()) {
            unsetAriaHidden();
          }
        }
        globalState.currentInstance = currentInstance;
        var innerParams = prepareParams(userParams, mixinParams);
        setParameters(innerParams);
        Object.freeze(innerParams);

        // clear the previous timer
        if (globalState.timeout) {
          globalState.timeout.stop();
          delete globalState.timeout;
        }

        // clear the restore focus timeout
        clearTimeout(globalState.restoreFocusTimeout);
        var domCache = populateDomCache(currentInstance);
        render(currentInstance, innerParams);
        privateProps.innerParams.set(currentInstance, innerParams);
        return swalPromise(currentInstance, domCache, innerParams);
      }

      // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    }, {
      key: "then",
      value: function then(onFulfilled) {
        return _classPrivateFieldGet(this, _promise).then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        return _classPrivateFieldGet(this, _promise)["finally"](onFinally);
      }
    }]);
    return SweetAlert;
  }();

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve, reject) {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      var dismissWith = function dismissWith(dismiss) {
        instance.close({
          isDismissed: true,
          dismiss: dismiss
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = function () {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = function () {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = function () {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = function () {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);
    var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    if (params.animation === false) {
      params.showClass = {
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  var setupTimer = function setupTimer(globalState, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(function () {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }
    if (!callIfFunction(innerParams.allowEnterKey)) {
      blurActiveElement();
      return;
    }
    if (!focusButton(domCache, innerParams)) {
      setFocus(-1, 1);
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Dear russian users visiting russian sites. Let's have fun.
  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    var now = new Date();
    var initiationDate = localStorage.getItem('swal-initiation');
    if (!initiationDate) {
      localStorage.setItem('swal-initiation', "".concat(now));
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(function () {
        document.body.style.pointerEvents = 'none';
        var ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(function () {
          ukrainianAnthem.play()["catch"](function () {
            // ignore
          });
        }, 2500);
      }, 500);
    }
  }

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(function (key) {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance && currentInstance[key]) {
        var _currentInstance;
        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.10.6';

  var Swal = SweetAlert;
  // @ts-ignore
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}");

/***/ }),

/***/ "./src/app/pages/accept/accept.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/accept/accept.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner-scroll {\n  left: 0px;\n  right: 0px;\n  top: calc(var(--offset-top) * -1);\n  bottom: calc(var(--offset-bottom) * -1);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: calc(var(--padding-top) + var(--offset-top));\n  padding-bottom: calc( var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom) );\n  position: absolute;\n  background: #cf0d0dc7 !important;\n  color: var(--color);\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.driverFound {\n  height: 47%;\n  width: 90%;\n  margin-left: 5%;\n  background: white;\n  position: absolute;\n  bottom: 30%;\n  z-index: 1;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.request-for-ride2 {\n  height: 200px;\n}\n\n.headSection {\n  background-color: #000000;\n  color: #fbb91d;\n  margin-top: -6%;\n  border-top-left-radius: 27px;\n  border-top-right-radius: 30px;\n  display: inline-block;\n  width: 100%;\n  height: 35%;\n  text-align: center;\n}\n\n.moveHeader {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  align-items: center;\n  margin-top: 20px;\n  margin-left: 0%;\n  margin-right: 0%;\n  width: 100%;\n}\n\n.centerText {\n  text-align: center;\n  font-size: 16px !important;\n}\n\n.resultContainer {\n  width: 100%;\n  position: relative;\n  left: 0;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding: 10px;\n  border-bottom: #bababa solid 1px;\n}\n\n.content-wrap,\n.img-wrapper {\n  display: inline-block;\n  margin-left: 20px;\n}\n\n#drivericonSize {\n  font-size: 70px !important;\n}\n\n.bookImage,\n.bookTitle,\n.bookPrice {\n  margin-left: 20px;\n}\n\n.resultContainer2 {\n  width: 100%;\n  position: relative;\n  left: 0;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding: 10px;\n}\n\n.content-wrap2 {\n  display: inline-block;\n}\n\n.dott {\n  width: 20px;\n  height: 20px;\n}\n\n.centerBtn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.whiteFlap {\n  text-align: center;\n}\n\n.button {\n  height: 70px;\n}\n\n.butt {\n  display: inline-table;\n  height: auto;\n  overflow: hidden;\n}\n\n.price {\n  color: #248cd2;\n  font-size: 1.67em;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-radius: 12px;\n}\n\n.price ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\n\n.location {\n  width: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.location p {\n  font-size: 1.3em;\n  height: auto;\n}\n\n.location ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: orange;\n}\n\n.date {\n  color: orange;\n  font-size: 1.47em;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n}\n\n.date ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\n\n.destination {\n  width: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.destination ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: darkslateblue;\n}\n\n#envelope {\n  height: auto;\n  width: 6em;\n}\n\n.bars {\n  margin-top: 0%;\n  padding: 12px;\n}\n\n.bars .poiter {\n  z-index: 5;\n  margin-left: 1%;\n  background: white;\n  border-left: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-right: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-top: 1px solid rgba(212, 212, 212, 0.93);\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n}\n\n.bars .bars-locate {\n  height: 50px;\n  width: 100%;\n  background: white;\n  border-left: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-right: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-top: 1px solid rgba(212, 212, 212, 0.93);\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n  margin-left: 0%;\n  z-index: 3;\n  border-radius: 12px;\n  overflow: hidden;\n  line-height: 20px;\n  font-size: 1.2em;\n  text-align: center;\n}\n\n.bars .bars-locate ion-icon {\n  position: absolute;\n  font-size: 1em;\n  left: 2%;\n  color: blue;\n  padding: 5px;\n}\n\n.bars .bars-destinate {\n  height: 100px;\n  width: 100%;\n  background: white;\n  margin: 3% 0 0 -50px;\n  margin-left: 0%;\n  z-index: 3;\n  border-left: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-right: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-top: 1px solid rgba(212, 212, 212, 0.93);\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n  overflow: hidden;\n  border-radius: 50px;\n  line-height: 20px;\n  font-size: 1.2em;\n  text-align: center;\n}\n\n.bars .bars-destinate ion-icon {\n  position: absolute;\n  font-size: 1em;\n  left: 2%;\n  padding: 5px;\n  color: #248cd2;\n}\n\n.bars .bars-price {\n  height: 50px;\n  width: 100%;\n  background: #ffffff;\n  border-left: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-right: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-top: 1px solid rgba(212, 212, 212, 0.93);\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n  z-index: 3;\n  border-radius: 12px;\n  overflow: hidden;\n  line-height: 20px;\n  font-size: 1.2em;\n  text-align: center;\n}\n\n.bars .bars-price ion-icon {\n  position: absolute;\n  font-size: 1em;\n  left: 2%;\n  color: blue;\n  padding: 5px;\n}\n\n#position {\n  text-align: center;\n  padding-left: 17px;\n}\n\n#whereto {\n  text-align: center;\n  padding-left: 17px;\n}\n\n#stuff {\n  color: #248cd2;\n  width: 100%;\n  height: 60% !important;\n  border: 1px solid #248cd2;\n}\n\n.no-scroll {\n  background: blue;\n}\n\n.sc-ion-modal-md-h {\n  --width: 86%;\n  --min-width: auto;\n  --max-width: auto;\n  --height: 70% !important;\n  --min-height: auto;\n  --max-height: auto;\n  --overflow: hidden;\n  --border-radius: 0;\n  --border-width: 0;\n  --border-style: none;\n  --border-color: transparent;\n  --background: var(--ion-background-color, #fff);\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9hY2NlcHQvYWNjZXB0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjZXB0L2FjY2VwdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseURBQUE7RUFDQSw2RkFBQTtFQUdBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURVQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNQRjs7QURVQTtFQUNFLGFBQUE7QUNQRjs7QURVQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUEY7O0FEU0E7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDTkY7O0FEU0E7O0VBRUUscUJBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBQ0UsMEJBQUE7QUNORjs7QURTQTs7O0VBR0UsaUJBQUE7QUNORjs7QURTQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDTkY7O0FEU0E7RUFDRSxxQkFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNORjs7QURTQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTkY7O0FEV0E7RUFDRSxrQkFBQTtBQ1JGOztBRFdBO0VBQ0UsWUFBQTtBQ1JGOztBRFVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QUNSRjs7QURXQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxtQkFBQTtBQ1RGOztBRFVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ1JKOztBRFlBO0VBQ0UsV0FBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUNWRjs7QURXRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ1RKOztBRFlFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1ZKOztBRGNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtEQUFBO0FDWEY7O0FEZUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDYko7O0FEaUJBO0VBQ0UsV0FBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QURnQkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ2RKOztBRGtCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDZkY7O0FEa0JBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNmRjs7QURpQkU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7QUNmSjs7QURrQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7RUFFQSxlQUFBO0VBRUEsVUFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNuQko7O0FEcUJJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDbkJOOztBRHVCRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDckJKOztBRHVCSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ3JCTjs7QUR5QkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7RUFJQSxVQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzNCSjs7QUQ2Qkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUMzQk47O0FEZ0NBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQzdCRjs7QURnQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDN0JGOztBRGdDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQzdCRjs7QURnQ0E7RUFDRSxnQkFBQTtBQzdCRjs7QURnQ0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FDN0JGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjZXB0L2FjY2VwdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL05FVyBERVNJR04gQ1NTXHJcblxyXG4uaW5uZXItc2Nyb2xsIHtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IGNhbGModmFyKC0tb2Zmc2V0LXRvcCkgKiAtMSk7XHJcbiAgYm90dG9tOiBjYWxjKHZhcigtLW9mZnNldC1ib3R0b20pICogLTEpO1xyXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1zdGFydCk7XHJcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1lbmQpO1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZGRpbmctdG9wKSArIHZhcigtLW9mZnNldC10b3ApKTtcclxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyhcclxuICAgIHZhcigtLXBhZGRpbmctYm90dG9tKSArIHZhcigtLWtleWJvYXJkLW9mZnNldCkgKyB2YXIoLS1vZmZzZXQtYm90dG9tKVxyXG4gICk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNjZjBkMGRjNyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vLyAuYmFja2dyb3VuZENvbG9yIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4vLyAgIGhlaWdodDogOTBweDtcclxuLy8gfVxyXG4uZHJpdmVyRm91bmQge1xyXG4gIGhlaWdodDogNDclO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDMwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LWZvci1yaWRlMiB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmhlYWRTZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmJiOTFkO1xyXG4gIG1hcmdpbi10b3A6IC02JTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1vdmVIZWFkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2VudGVyVGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVzdWx0Q29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogI2JhYmFiYSBzb2xpZCAxcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXAsXHJcbi5pbWctd3JhcHBlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4jZHJpdmVyaWNvblNpemUge1xyXG4gIGZvbnQtc2l6ZTogNzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9va0ltYWdlLFxyXG4uYm9va1RpdGxlLFxyXG4uYm9va1ByaWNlIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnJlc3VsdENvbnRhaW5lcjIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXAyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kb3R0IHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXJCdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gRU5EIE5FVyBERVNJR04gQ1NTXHJcblxyXG4ud2hpdGVGbGFwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGhlaWdodDogNzBweDtcclxufVxyXG4uYnV0dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBjb2xvcjogcmdiKDM2LCAxNDAsIDIxMCk7XHJcbiAgZm9udC1zaXplOiAxLjY3ZW07XHJcbiAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiByZ2IoMzYsIDE0MCwgMjEwKTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2NhdGlvbiB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGNvbG9yKCRjb2xvcnMsIGxpZ2h0LCBiYXNlKTtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgfVxyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxuICBmb250LXNpemU6IDEuNDdlbTtcclxuICBwYWRkaW5nLXRvcDogMTRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBjb2xvcigkY29sb3JzLCBsaWdodCwgYmFzZSk7XHJcbiAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgY29sb3IoJGNvbG9ycywgbGlnaHQsIGJhc2UpO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiByZ2IoMzYsIDE0MCwgMjEwKTtcclxuICB9XHJcbn1cclxuXHJcbi5kZXN0aW5hdGlvbiB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGNvbG9yKCRjb2xvcnMsIGxpZ2h0LCBiYXNlKTtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xyXG4gIH1cclxufVxyXG5cclxuI2VudmVsb3BlIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDZlbTtcclxufVxyXG5cclxuLmJhcnMge1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcblxyXG4gIC5wb2l0ZXIge1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1sZWZ0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICB9XHJcblxyXG4gIC5iYXJzLWxvY2F0ZSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1sZWZ0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICAgIC8vICBtYXJnaW46IC0xMiUgMCAwIC01MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG5cclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBsZWZ0OiAyJTtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iYXJzLWRlc3RpbmF0ZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBtYXJnaW46IDMlIDAgMCAtNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3JkZXItbGVmdDogMS4xcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICAgIGJvcmRlci1yaWdodDogMS4xcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMzYsIDE0MCwgMjEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iYXJzLXByaWNlIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1sZWZ0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICAgIC8vICBtYXJnaW46IC0xMiUgMCAwIC01MHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDIyJSBhdXRvO1xyXG5cclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBsZWZ0OiAyJTtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNwb3NpdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMTdweDtcclxufVxyXG5cclxuI3doZXJldG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbn1cclxuXHJcbiNzdHVmZiB7XHJcbiAgY29sb3I6IHJnYigzNiwgMTQwLCAyMTApO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM2LCAxNDAsIDIxMCk7XHJcbn1cclxuXHJcbi5uby1zY3JvbGwge1xyXG4gIGJhY2tncm91bmQ6IGJsdWU7XHJcbn1cclxuXHJcbi5zYy1pb24tbW9kYWwtbWQtaCB7XHJcbiAgLS13aWR0aDogODYlO1xyXG4gIC0tbWluLXdpZHRoOiBhdXRvO1xyXG4gIC0tbWF4LXdpZHRoOiBhdXRvO1xyXG4gIC0taGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcclxuICAtLW1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgLS1tYXgtaGVpZ2h0OiBhdXRvO1xyXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAvLyBsZWZ0OiAwO1xyXG4gIC8vIHJpZ2h0OiAwO1xyXG4gIC8vIHRvcDogMDtcclxuICAvLyBib3R0b206IDA7XHJcbiAgLy8gZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyBjb250YWluOiBzdHJpY3Q7XHJcbn1cclxuIiwiLmlubmVyLXNjcm9sbCB7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiBjYWxjKHZhcigtLW9mZnNldC10b3ApICogLTEpO1xuICBib3R0b206IGNhbGModmFyKC0tb2Zmc2V0LWJvdHRvbSkgKiAtMSk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1zdGFydCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZW5kKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFkZGluZy10b3ApICsgdmFyKC0tb2Zmc2V0LXRvcCkpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyggdmFyKC0tcGFkZGluZy1ib3R0b20pICsgdmFyKC0ta2V5Ym9hcmQtb2Zmc2V0KSArIHZhcigtLW9mZnNldC1ib3R0b20pICk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2NmMGQwZGM3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kcml2ZXJGb3VuZCB7XG4gIGhlaWdodDogNDclO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzAlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbn1cblxuLnJlcXVlc3QtZm9yLXJpZGUyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhlYWRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6ICNmYmI5MWQ7XG4gIG1hcmdpbi10b3A6IC02JTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb3ZlSGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZW50ZXJUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnJlc3VsdENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAjYmFiYWJhIHNvbGlkIDFweDtcbn1cblxuLmNvbnRlbnQtd3JhcCxcbi5pbWctd3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiNkcml2ZXJpY29uU2l6ZSB7XG4gIGZvbnQtc2l6ZTogNzBweCAhaW1wb3J0YW50O1xufVxuXG4uYm9va0ltYWdlLFxuLmJvb2tUaXRsZSxcbi5ib29rUHJpY2Uge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnJlc3VsdENvbnRhaW5lcjIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbnRlbnQtd3JhcDIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kb3R0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmNlbnRlckJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2hpdGVGbGFwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uYnV0dCB7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJpY2Uge1xuICBjb2xvcjogIzI0OGNkMjtcbiAgZm9udC1zaXplOiAxLjY3ZW07XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5wcmljZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICMyNDhjZDI7XG59XG5cbi5sb2NhdGlvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmxvY2F0aW9uIHAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubG9jYXRpb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5kYXRlIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAxLjQ3ZW07XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG59XG4uZGF0ZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICMyNDhjZDI7XG59XG5cbi5kZXN0aW5hdGlvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmRlc3RpbmF0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcbn1cblxuI2VudmVsb3BlIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNmVtO1xufVxuXG4uYmFycyB7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmJhcnMgLnBvaXRlciB7XG4gIHotaW5kZXg6IDU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBib3JkZXItcmlnaHQ6IDEuMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbn1cbi5iYXJzIC5iYXJzLWxvY2F0ZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItbGVmdDogMS4xcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYm9yZGVyLXJpZ2h0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbiAgei1pbmRleDogMztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYXJzIC5iYXJzLWxvY2F0ZSBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxlZnQ6IDIlO1xuICBjb2xvcjogYmx1ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuLmJhcnMgLmJhcnMtZGVzdGluYXRlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDMlIDAgMCAtNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICB6LWluZGV4OiAzO1xuICBib3JkZXItbGVmdDogMS4xcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYm9yZGVyLXJpZ2h0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFycyAuYmFycy1kZXN0aW5hdGUgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZWZ0OiAyJTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzI0OGNkMjtcbn1cbi5iYXJzIC5iYXJzLXByaWNlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWxlZnQ6IDEuMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIGJvcmRlci1yaWdodDogMS4xcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICB6LWluZGV4OiAzO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhcnMgLmJhcnMtcHJpY2UgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZWZ0OiAyJTtcbiAgY29sb3I6IGJsdWU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuI3Bvc2l0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG59XG5cbiN3aGVyZXRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG59XG5cbiNzdHVmZiB7XG4gIGNvbG9yOiAjMjQ4Y2QyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI0OGNkMjtcbn1cblxuLm5vLXNjcm9sbCB7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG59XG5cbi5zYy1pb24tbW9kYWwtbWQtaCB7XG4gIC0td2lkdGg6IDg2JTtcbiAgLS1taW4td2lkdGg6IGF1dG87XG4gIC0tbWF4LXdpZHRoOiBhdXRvO1xuICAtLWhlaWdodDogNzAlICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0bztcbiAgLS1tYXgtaGVpZ2h0OiBhdXRvO1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/accept/accept.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/accept/accept.page.ts ***!
  \*********************************************/
/*! exports provided: AcceptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptPage", function() { return AcceptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AcceptPage = /** @class */ (function () {
    function AcceptPage(navCtrl, lp, settings, pop, modal, activatedRoute) {
        // this.distance = Math.round(this.distance1);
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.pop = pop;
        this.modal = modal;
        this.activatedRoute = activatedRoute;
        this.draco = true;
        this.cost = this.activatedRoute.snapshot.paramMap.get("charge");
        // console.log("CHARGES IN ACCEPT PAGE", this.charge);
        // this.cost = this.charge.toFixed(2);
        // console.log("CHARGES IN ACCEPT PAGE", this.cost);
    }
    AcceptPage.prototype.ionViewDidEnter = function () {
        this.pop.showLoader("");
    };
    AcceptPage.prototype.closeModal = function () {
        this.modal.dismiss(2);
    };
    AcceptPage.prototype.acceptModal = function () {
        console.log("ACCEPTED REQUEST");
        this.modal.dismiss(1);
    };
    AcceptPage.prototype.ngOnInit = function () { };
    AcceptPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] },
        { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
        { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcceptPage.prototype, "loc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcceptPage.prototype, "des", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcceptPage.prototype, "charge", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcceptPage.prototype, "info", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcceptPage.prototype, "up", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcceptPage.prototype, "down", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcceptPage.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcceptPage.prototype, "time", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AcceptPage.prototype, "distance1", void 0);
    AcceptPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-accept",
            template: __webpack_require__(/*! raw-loader!./accept.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/accept/accept.page.html"),
            styles: [__webpack_require__(/*! ./accept.page.scss */ "./src/app/pages/accept/accept.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
            src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AcceptPage);
    return AcceptPage;
}());



/***/ }),

/***/ "./src/app/pages/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content h1 {\n  font-size: 1.67em;\n  padding-top: 7px;\n  width: auto;\n  padding-bottom: 7px;\n}\nion-content .followed-items .driver {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 30px;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n  background-color: #fbb91d;\n  padding: 10px;\n  float: right;\n  width: 80%;\n  color: black;\n}\nion-content .followed-items .driver p {\n  font-size: 16px;\n  font-size: 4vw;\n  color: black;\n}\nion-content .followed-items .user {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-radius: 30px;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n  background-color: #101110;\n  padding: 10px;\n  float: left;\n  width: 80%;\n  color: #fbb91d;\n}\nion-content .followed-items .user p {\n  font-size: 16px;\n  font-size: 4vw;\n  color: #fbb91d;\n}\nion-content .topped-items ion-item {\n  margin-top: 0px;\n  margin-bottom: 6px;\n}\nion-content .topped-items h2 {\n  color: orange;\n  font-size: 1.27em;\n  padding: 2px;\n}\nion-content .topped-items ion-label {\n  color: #0099ff !important;\n  font-size: 1em;\n  padding: 2px;\n}\nion-footer #container_1 {\n  margin-top: 2%;\n  height: 70px;\n  width: 148px;\n  color: white;\n  text-align: center;\n  background-position: left;\n  overflow: hidden;\n}\nion-footer #container_1 ion-icon {\n  color: #ffffff;\n}\nion-footer #container_1 h2 {\n  font-size: 1em;\n  height: auto;\n}\nion-footer #container_1 ion-icon {\n  margin: 5px;\n}\nion-footer #container_1 .profile-pic {\n  width: 15%;\n  height: 18%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUUsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0RKO0FES0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDSE47QURLTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0hSO0FET0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDTE47QURPTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0xSO0FEV0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNUTjtBRFdJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1ROO0FEWUk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDVk47QURnQkU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtFQUNBLGdCQUFBO0FDZko7QURnQkk7RUFDRSxjQUFBO0FDZE47QURnQkk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ2ROO0FEaUJJO0VBQ0UsV0FBQTtBQ2ZOO0FEa0JJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNoQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIGgxIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigzNiwgMTQwLCAyMTApO1xyXG4gICAgZm9udC1zaXplOiAxLjY3ZW07XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gIH1cclxuXHJcbiAgLmZvbGxvd2VkLWl0ZW1zIHtcclxuICAgIC5kcml2ZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYjkxZDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMTEwO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgY29sb3I6ICNmYmI5MWQ7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgICAgY29sb3I6ICNmYmI5MWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b3BwZWQtaXRlbXMge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICAgZm9udC1zaXplOiAxLjI3ZW07XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBjb2xvcjogcmdiKDAsIDE1MywgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgI2NvbnRhaW5lcl8xIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDE0OHB4O1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1waWMge1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgICBoZWlnaHQ6IDE4JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDEuNjdlbTtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5pb24tY29udGVudCAuZm9sbG93ZWQtaXRlbXMgLmRyaXZlciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiOTFkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA4MCU7XG4gIGNvbG9yOiBibGFjaztcbn1cbmlvbi1jb250ZW50IC5mb2xsb3dlZC1pdGVtcyAuZHJpdmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCAuZm9sbG93ZWQtaXRlbXMgLnVzZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTExMDtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA4MCU7XG4gIGNvbG9yOiAjZmJiOTFkO1xufVxuaW9uLWNvbnRlbnQgLmZvbGxvd2VkLWl0ZW1zIC51c2VyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBjb2xvcjogI2ZiYjkxZDtcbn1cbmlvbi1jb250ZW50IC50b3BwZWQtaXRlbXMgaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbmlvbi1jb250ZW50IC50b3BwZWQtaXRlbXMgaDIge1xuICBjb2xvcjogb3JhbmdlO1xuICBmb250LXNpemU6IDEuMjdlbTtcbiAgcGFkZGluZzogMnB4O1xufVxuaW9uLWNvbnRlbnQgLnRvcHBlZC1pdGVtcyBpb24tbGFiZWwge1xuICBjb2xvcjogIzAwOTlmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24tZm9vdGVyICNjb250YWluZXJfMSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxNDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tZm9vdGVyICNjb250YWluZXJfMSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuaW9uLWZvb3RlciAjY29udGFpbmVyXzEgaDIge1xuICBmb250LXNpemU6IDFlbTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWZvb3RlciAjY29udGFpbmVyXzEgaW9uLWljb24ge1xuICBtYXJnaW46IDVweDtcbn1cbmlvbi1mb290ZXIgI2NvbnRhaW5lcl8xIC5wcm9maWxlLXBpYyB7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMTglO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");






var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, plat, alert, modal, eventProvider, ph, lp) {
        this.navCtrl = navCtrl;
        this.plat = plat;
        this.alert = alert;
        this.modal = modal;
        this.eventProvider = eventProvider;
        this.ph = ph;
        this.lp = lp;
        this.data = { type: '', nickname: '', message: '' };
    }
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('inregf');
        this.eventProvider.getChatList(this.id).on('value', function (snapshot) {
            _this.eventList = [];
            console.log('sjiy');
            snapshot.forEach(function (snap) {
                _this.eventList.push({
                    id: snap.key,
                    driver: snap.val().Driver_Message,
                    user: snap.val().Client_Message,
                });
                console.log(_this.eventList);
                return false;
            });
        });
    };
    ChatPage.prototype.closeChat = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.Send = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('MESSAGE', this.data.message);
                this.eventProvider.SendMessage(this.data.message, this.id);
                this.data.message = '';
                return [2 /*return*/];
            });
        });
    };
    ChatPage.prototype.ngOnInit = function () {
    };
    ChatPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }
    ]; };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _accept_accept_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../accept/accept.page */ "./src/app/pages/accept/accept.page.ts");
/* harmony import */ var _chat_chat_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chat/chat.page */ "./src/app/pages/chat/chat.page.ts");
/* harmony import */ var _tripinfo_tripinfo_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tripinfo/tripinfo.page */ "./src/app/pages/tripinfo/tripinfo.page.ts");
/* harmony import */ var _paymentpage_paymentpage_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../paymentpage/paymentpage.page */ "./src/app/pages/paymentpage/paymentpage.page.ts");











var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: "",
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                    },
                ]),
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _accept_accept_page__WEBPACK_IMPORTED_MODULE_7__["AcceptPage"], _chat_chat_page__WEBPACK_IMPORTED_MODULE_8__["ChatPage"], _tripinfo_tripinfo_page__WEBPACK_IMPORTED_MODULE_9__["TripinfoPage"], _paymentpage_paymentpage_page__WEBPACK_IMPORTED_MODULE_10__["PaymentpagePage"]],
            entryComponents: [_accept_accept_page__WEBPACK_IMPORTED_MODULE_7__["AcceptPage"], _chat_chat_page__WEBPACK_IMPORTED_MODULE_8__["ChatPage"], _tripinfo_tripinfo_page__WEBPACK_IMPORTED_MODULE_9__["TripinfoPage"], _paymentpage_paymentpage_page__WEBPACK_IMPORTED_MODULE_10__["PaymentpagePage"]],
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  overflow: visible !important;\n  margin-top: 0% !important;\n}\nion-content .drive {\n  color: #f7f7f7;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\nion-content .price {\n  color: lime;\n}\nion-content .date {\n  color: #ffcc3e;\n}\nion-content .destination {\n  color: #f6fcff;\n}\nion-content .location {\n  color: whitesmoke;\n}\nion-content #map-canvas {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\nion-content .mess_defualt {\n  width: 100%;\n  height: 75% !important;\n  z-index: 1;\n}\nion-content .map_change {\n  width: 80%;\n  height: 100%;\n  z-index: 1;\n}\nion-content .mess2_short {\n  width: 100%;\n  height: 50% !important;\n  z-index: 1;\n}\nlabel > input {\n  display: none;\n}\n#button0 {\n  position: absolute;\n  line-height: 45px;\n  font-weight: bold;\n  text-align: center;\n  display: inline-block;\n  height: 50px;\n  width: 50px;\n  border: 2px dashed black;\n  box-sizing: border-box;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  opacity: 0.5;\n}\nlabel > input ~ .button {\n  cursor: pointer;\n  position: absolute;\n  line-height: 45px;\n  font-weight: bold;\n  text-align: center;\n  display: inline-block;\n  height: 50px;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\nlabel > input ~ #button1 {\n  z-index: 999999999999;\n  left: 0;\n  top: 0;\n  top: 50%;\n  background-color: #f2f2f2;\n  color: black;\n  margin-top: -6%;\n  border-top-left-radius: 27px;\n  border-top-right-radius: 30px;\n  display: inline-block;\n  text-align: center;\n}\nlabel > input:checked ~ #button1 {\n  z-index: 999999999999;\n  left: calc(0% - 0px);\n  top: calc(80% - 0%);\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n}\nlabel > input:checked ~ #button1 #map-canvas {\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.main-con {\n  background: transparent;\n}\n.driverFoundNew {\n  left: 0%;\n  top: 147%;\n  height: 50%;\n  width: 95%;\n  margin-left: 1.5%;\n  background: white;\n  position: absolute;\n  bottom: 0%;\n  z-index: 10000000000000002000000000000;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n@-webkit-keyframes wiki {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes wiki {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nion-footer .bars {\n  width: 100%;\n  position: absolute;\n  background: #f7f7f7;\n  height: auto;\n  z-index: 4;\n  line-height: 50px;\n  text-align: center;\n}\nion-footer .bars .name_text {\n  z-index: 3;\n  font-size: 1.2em;\n  text-align: center;\n  margin-top: 0%;\n}\nion-footer .bars .profile_bar {\n  margin-top: 5%;\n}\nion-footer .bars button {\n  margin-top: 16%;\n  height: auto;\n  width: 95%;\n  border-radius: 12px;\n  text-align: center;\n}\nion-footer #myButtin {\n  border-radius: 12px;\n  margin-top: 3%;\n  padding: 5px;\n  font-size: 1.2em;\n  color: #ffffff;\n}\nion-footer p {\n  padding: 0px;\n  margin: 0px;\n}\nion-footer #aButton {\n  background: #248cd2;\n  color: #f7f7f7;\n  border-radius: 12px;\n  padding: 10px;\n  width: 90%;\n}\nion-footer ion-title {\n  color: #f7f7f7 !important;\n}\n@-webkit-keyframes left_right {\n  0% {\n    top: 75%;\n  }\n  50% {\n    top: 80%;\n  }\n  100% {\n    top: 75%;\n  }\n}\n@keyframes left_right {\n  0% {\n    top: 75%;\n  }\n  50% {\n    top: 80%;\n  }\n  100% {\n    top: 75%;\n  }\n}\n.rate {\n  position: absolute;\n  margin-left: 80%;\n  margin-top: -10%;\n  color: white;\n  top: 14%;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n  z-index: 4;\n  width: 50px;\n  border-radius: 12px;\n}\n.rate ion-icon {\n  font-size: 1.8em;\n  color: white;\n  z-index: 4;\n}\n#title {\n  height: 2% !important;\n}\n#mytite {\n  padding: 2px !important;\n  background: #f7f7f7;\n  border-radius: 30px;\n  margin-left: 19%;\n  margin-top: 2%;\n  width: 45%;\n  height: 14%;\n}\n#mytite ion-icon {\n  width: 10%;\n  margin: 2px;\n}\n#leftshit {\n  margin: 2%;\n  border: 2px solid #fbb91d;\n  border-radius: 17px;\n  padding: 5px;\n  color: white;\n  background: #fbb91d;\n  left: 35% !important;\n  position: relative;\n}\n#star {\n  border: 1px solid rgba(212, 212, 212, 0.93);\n  margin-top: 1%;\n}\n#rides {\n  border-radius: 12px;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n}\n#unstar_1 {\n  margin-top: 3%;\n  background-size: contain;\n  border: 1px solid #fbb91d;\n}\n#unstar_1 h2 {\n  padding: 4px !important;\n  background: #fbb91d;\n  border-radius: 30px;\n}\n#unstar {\n  margin-top: 3%;\n  margin-left: 2.5% !important;\n}\n#unstar_2 {\n  margin-top: 3%;\n  margin-left: 2.5% !important;\n  background-size: cover;\n  border: 1px solid #fbb91d;\n}\n#unstar_2 h2 {\n  padding: 4px !important;\n  background: #fbb91d;\n  border-radius: 30px;\n}\n#top_container {\n  height: 30%;\n  width: 100%;\n  overflow: hidden;\n  background-size: cover;\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n}\n#top_container .stuff {\n  margin-top: 10%;\n}\n#buttonContainer {\n  float: right;\n}\n#buttonContainer button {\n  background: black;\n  color: #ffffff;\n}\n#buttonContainer .button {\n  font-size: 1em;\n  width: 130px;\n  height: 50px;\n  font-weight: bolder;\n}\n#buttonContainer2 button {\n  background: black;\n  color: #ffffff;\n}\n#buttonContainer2 .button {\n  font-size: 1em;\n  width: 130px;\n  height: 50px;\n  font-weight: bolder;\n}\n.gutton {\n  height: auto;\n  width: 100%;\n  font-size: 1.1em;\n  text-align: center;\n}\n#container {\n  margin-top: 2%;\n  height: auto;\n  width: 100%;\n  padding: 5px;\n  color: white;\n  text-align: center;\n}\n#container h2 {\n  font-size: 1em;\n  height: auto;\n}\n#container ion-icon {\n  margin: 3px;\n}\n#container_1 {\n  padding: 10px;\n  width: 50%;\n  color: white;\n  margin: 1px;\n  border-radius: 20px;\n  font-size: 1.3em;\n  font-weight: 600;\n  text-align: center;\n  border: 0.5px solid #f8f8f8;\n}\n#container_1 ion-icon {\n  color: #ffffff;\n}\n#container_1 h2 {\n  font-size: 1em;\n}\n#container_1 .profile-pic {\n  width: 15%;\n  height: 18%;\n}\nion-toggle {\n  float: right;\n  width: 100%;\n  border: 2px solid #f7f7f7;\n  border-radius: 30px;\n  background: #ffffff;\n  padding: auto;\n  margin-top: 4% !important;\n  margin: 3%;\n}\n#header {\n  height: auto;\n  width: 100%;\n  padding: 5px;\n  border-radius: 0px;\n  color: black;\n  text-align: center;\n  background: #f7f7f7;\n}\n#slopw {\n  width: 100%;\n  margin-left: -1%;\n  overflow: auto !important;\n  padding: 10px;\n}\n.mid-right {\n  padding-left: 80%;\n  margin-top: 20%;\n  z-index: 3;\n}\n.mid-right ion-icon {\n  color: #0a0a0a !important;\n}\n.topBar {\n  height: auto;\n  width: 100%;\n  margin-top: 5%;\n  z-index: 3;\n  padding: 8px;\n}\n.topBar button {\n  background: black;\n  border-radius: 12px;\n  color: #ffffff;\n  margin: 6px;\n  padding: 15px;\n}\n.topBar ion-icon {\n  font-size: 2em;\n  color: #000000;\n  padding: 15px;\n}\n.topBar .button-right {\n  float: left;\n}\n#myBadge {\n  height: auto;\n  font-size: 1.6em;\n  border-radius: 12px;\n}\n#map_layer {\n  z-index: 251;\n  position: unset !important;\n  -webkit-animation-name: wiki;\n          animation-name: wiki;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  padding: 5px;\n  overflow: auto !important;\n}\n#map_layer .button {\n  margin-top: 0% !important;\n  text-align: center;\n}\n#map_layer .button ion-icon {\n  color: #000000;\n}\n#map_layer .guts {\n  border-radius: 12px;\n  background: white;\n}\n#map_layer .button_1 {\n  background: #ffffff;\n  margin-top: 2px;\n  height: auto;\n  width: 100%;\n  border-radius: 12px;\n  text-align: center;\n}\n#map_layer .button_1 .profile-pic {\n  height: 70%;\n  width: 43%;\n  border: 1.6px solid white;\n}\n#map_layer .button_2 {\n  background: #9d08e2;\n  margin-top: 2px;\n  height: auto;\n  width: 100%;\n  border-radius: 12px;\n  text-align: center;\n  background-position: left;\n}\nh1 {\n  color: #ffffff;\n  font-size: 1.4em;\n}\n.stack {\n  text-align: center;\n  font-size: 0.5em;\n  color: white;\n}\n.guttonz {\n  background: red;\n  border-radius: 15px;\n  height: auto;\n  width: 50%;\n  margin-left: 4%;\n  color: white;\n}\n.mid-right {\n  padding-left: 80%;\n  margin-top: 20%;\n  z-index: 3;\n}\n.mid-right2 {\n  padding-left: 80%;\n  margin-top: 40%;\n  z-index: 3;\n}\n.mid-right2 ion-icon {\n  color: #0a0a0a !important;\n}\n.mid-right3 {\n  padding-right: 80%;\n  margin-top: 40%;\n  z-index: 3;\n}\n.mid-right3 ion-icon {\n  color: #ffffff !important;\n}\n.mid-right5 {\n  float: left;\n  margin-top: 10%;\n  z-index: 3;\n}\n.mid-right5 ion-icon {\n  color: #ffffff !important;\n}\nion-footer {\n  background: #00000015;\n}\nion-footer #lower_items {\n  height: auto;\n  width: 100%;\n  color: white !important;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  z-index: 15;\n}\nion-footer .button {\n  width: 100%;\n}\nion-footer .buttons {\n  margin-top: 10% !important;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  text-align: center;\n  margin-left: 60%;\n  padding: auto !important;\n  background: #fbb91d;\n  z-index: 300 !important;\n  border: 0.7px solid #fbb91d;\n  color: white;\n  font-size: 17px;\n}\nion-footer #rides {\n  border-radius: 30px;\n  margin: 1px;\n  border: 1px solid rgba(212, 212, 212, 0.93);\n}\nion-footer #rides ion-title {\n  color: white;\n}\nion-footer .back_col {\n  background: #1e181f;\n  color: white;\n}\n.driverFound {\n  height: 50%;\n  width: 95%;\n  margin-left: 1.5%;\n  background: white;\n  position: absolute;\n  bottom: 2%;\n  z-index: 1;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n.headSection {\n  background-color: #000000;\n  color: #fbb91d;\n  margin-top: -6%;\n  border-top-left-radius: 27px;\n  border-top-right-radius: 30px;\n  display: inline-block;\n  width: 100%;\n  height: 88px;\n  text-align: center;\n}\n.moveHeader {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  align-items: center;\n  margin-top: 20px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.request-for-ride2 {\n  height: 200px;\n  background: white;\n  z-index: 10000000000000002000000000000;\n}\n.centerText {\n  text-align: center;\n  font-size: 16px !important;\n}\n.resultContainer {\n  width: 100%;\n  position: relative;\n  left: 0;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-right: 5%;\n  padding-left: 5%;\n  border-bottom: #bababa solid 1px;\n  background-color: white;\n}\n.resultContainer2 {\n  width: 100%;\n  position: relative;\n  left: 0;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding: 10px;\n  background-color: white;\n}\n.bookImage,\n.bookTitle,\n.bookPrice {\n  margin-left: 7px;\n}\n.content-wrap,\n.img-wrapper {\n  display: inline-block;\n  margin-left: 0px;\n}\n.content-wrap2 {\n  display: inline-block;\n}\n#drivericonSize {\n  font-size: 90px !important;\n}\n.centerBtn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#btn-center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: white;\n}\n.chatIcon {\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n.callIcon {\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n.dott {\n  width: 20px;\n  height: 20px;\n}\n.buttons123 {\n  margin-top: 10% !important;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  text-align: center;\n  margin-left: 60%;\n  padding: auto !important;\n  background: #fbb91d;\n  z-index: 300 !important;\n  color: #050505;\n  font-size: 17px;\n}\n.button-native {\n  box-shadow: none !important;\n}\n.centerEarnings {\n  text-align: center;\n  margin: 10px;\n  font-weight: 600;\n  color: #fbb91d;\n}\n.topped {\n  text-align: center;\n}\n/* your custom CSS \\*/\n@keyframes pulsate {\n  from {\n    -moz-transform: scale(0.25);\n    opacity: 1;\n  }\n  95% {\n    -moz-transform: scale(1.3);\n    opacity: 0;\n  }\n  to {\n    -moz-transform: scale(0.3);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulsate {\n  from {\n    -webkit-transform: scale(0.25);\n    opacity: 1;\n  }\n  95% {\n    -webkit-transform: scale(1.3);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: scale(0.3);\n    opacity: 0;\n  }\n}\n/* get the container that's just outside the marker image, \n\t\twhich just happens to have our Marker title in it */\n#map-canvas div[title=pinIcon] {\n  -moz-animation: pulsate 1.5s ease-in-out infinite;\n  -webkit-animation: pulsate 1.5s ease-in-out infinite;\n  border: 1pt solid #fff;\n  /* make a circle */\n  border-radius: 51px;\n  /* multiply the shadows, inside and outside the circle */\n  box-shadow: inset 0 0 5px #fbb91d, inset 0 0 5px #fbb91d, inset 0 0 5px #fbb91d, 0 0 5px #fbb91d, 0 0 5px #fbb91d, 0 0 5px #fbb91d;\n  /* set the ring's new dimension and re-center it */\n  height: 51px !important;\n  margin: -18px 0 0 -18px;\n  width: 51px !important;\n  z-index: 0;\n}\n/* hide the superfluous marker image since it would expand and shrink with its containing element */\n/*\t#map-canvas div[style*=\"987654\"][title] img {*/\n#map-canvas div[title=pinIcon] img {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSx5QkFBQTtBQ0NGO0FES0U7RUFDRSxjQUFBO0VBQ0Esd0VBQUE7QUNISjtBRE1FO0VBQ0UsV0FBQTtBQ0pKO0FET0U7RUFDRSxjQUFBO0FDTEo7QURRRTtFQUNFLGNBQUE7QUNOSjtBRFNFO0VBQ0UsaUJBQUE7QUNQSjtBRFVFO0VBQ0UsV0FBQTtFQUVDLFlBQUE7RUFFRCxVQUFBO0FDVko7QURlQTtFQUNDLFdBQUE7RUFDQyxzQkFBQTtFQUNBLFVBQUE7QUNiRjtBRGdCQTtFQUNFLFVBQUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ2RKO0FEaUJBO0VBRUUsV0FBQTtFQUNBLHNCQUFBO0VBQ0UsVUFBQTtBQ2hCSjtBRHlCQTtFQUNFLGFBQUE7QUN0QkY7QUQwQkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO0VBRUEsMkJBQUE7RUFDQSxZQUFBO0FDdkJGO0FEMEJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0dBQUEscUJBQUE7T0FBQSxpQkFBQTtFQUNBLHlCQUFBO0FDeEJGO0FEMkJBO0VBQ0cscUJBQUE7RUFFRCxPQUFBO0VBQ0UsTUFBQTtFQUNBLFFBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7QUMzQko7QUQrQkE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBRUEsbUJBQUE7RUFFQSxzQ0FBQTtFQUNBLDhCQUFBO0FDOUJGO0FEZ0NHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDOUJKO0FEbUNBO0VBQ0UsdUJBQUE7QUNoQ0Y7QURtQ0U7RUFDQSxRQUFBO0VBRUksU0FBQTtFQUNGLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ2pDSjtBRHNDRTtFQUNFO0lBQ0UsVUFBQTtFQ25DSjtFRHNDRTtJQUNFLFVBQUE7RUNwQ0o7QUFDRjtBRDZCRTtFQUNFO0lBQ0UsVUFBQTtFQ25DSjtFRHNDRTtJQUNFLFVBQUE7RUNwQ0o7QUFDRjtBRHVDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDckNKO0FEdUNJO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDckNOO0FEd0NJO0VBQ0UsY0FBQTtBQ3RDTjtBRHlDSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBR0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUN6Q047QUQ2Q0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFHQSxjQUFBO0FDN0NKO0FEZ0RFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUM5Q0o7QURpREU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDL0NKO0FEbURFO0VBQ0UseUJBQUE7QUNqREo7QURxREE7RUFDRTtJQUNFLFFBQUE7RUNsREY7RURxREE7SUFDRSxRQUFBO0VDbkRGO0VEc0RBO0lBQ0UsUUFBQTtFQ3BERjtBQUNGO0FEeUNBO0VBQ0U7SUFDRSxRQUFBO0VDbERGO0VEcURBO0lBQ0UsUUFBQTtFQ25ERjtFRHNEQTtJQUNFLFFBQUE7RUNwREY7QUFDRjtBRHVEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDckRGO0FEc0RFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3BESjtBRHdEQTtFQUNFLHFCQUFBO0FDckRGO0FEMERBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUN2REY7QUR3REU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ3RESjtBRDREQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUN6REY7QUQ0REE7RUFFRSwyQ0FBQTtFQUNBLGNBQUE7QUMxREY7QUQ4REE7RUFDRSxtQkFBQTtFQUNBLDJDQUFBO0FDM0RGO0FEOERBO0VBQ0UsY0FBQTtFQUdBLHdCQUFBO0VBQ0EseUJBQUE7QUM3REY7QUQrREU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUM3REo7QURpRUE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7QUM5REY7QURtRUE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFHQSxzQkFBQTtFQUNBLHlCQUFBO0FDbEVGO0FEb0VFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDbEVKO0FEc0VBO0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBRUEsc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsMENBQUE7QUNyRUY7QUR1RUU7RUFDRSxlQUFBO0FDckVKO0FEMEVBO0VBRUUsWUFBQTtBQ3hFRjtBRHlFRTtFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBQ3hFSjtBRDJFRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDekVKO0FEOEVFO0VBRUUsaUJBQUE7RUFDQSxjQUFBO0FDNUVKO0FEK0VFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUM3RUo7QURpRkE7RUFHRSxZQUFBO0VBQ0EsV0FBQTtFQUlBLGdCQUFBO0VBQ0Esa0JBQUE7QUNuRkY7QURzRkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0FDcEZGO0FEeUZFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUN2Rko7QUQwRkU7RUFDRSxXQUFBO0FDeEZKO0FEOEZBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUMzRkY7QUQ0RkU7RUFDRSxjQUFBO0FDMUZKO0FENEZFO0VBQ0UsY0FBQTtBQzFGSjtBRDZGRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDM0ZKO0FEK0ZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEseUJBQUE7RUFDQSxVQUFBO0FDN0ZGO0FEa0dBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQy9GRjtBRG9HQTtFQUVFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ2xHRjtBRHFHQTtFQUtFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUN0R0Y7QURnR0U7RUFDRSx5QkFBQTtBQzlGSjtBRHNHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDbkdGO0FEc0dFO0VBRUUsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtBQ3RHSjtBRHdHRTtFQUNFLGNBQUE7RUFFQSxjQUFBO0VBQ0EsYUFBQTtBQ3ZHSjtBRHlHRTtFQUNFLFdBQUE7QUN2R0o7QUQyR0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3hHRjtBRDJHQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUVBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0FDMUdGO0FENEdFO0VBQ0UseUJBQUE7RUFJQSxrQkFBQTtBQzdHSjtBRGdISTtFQUNFLGNBQUE7QUM5R047QURrSEU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDaEhKO0FEbUhFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDakhKO0FEa0hJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ2hITjtBRHFIRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDbkhKO0FEMkhBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDeEhGO0FEMkhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUN4SEY7QUQySEE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0FDekhGO0FENEhBO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQzFIRjtBRDZIQTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUMzSEY7QUQ2SEU7RUFDRSx5QkFBQTtBQzNISjtBRCtIQTtFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUM3SEY7QUQ4SEk7RUFDQSx5QkFBQTtBQzVISjtBRGlJQTtFQUVFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQy9IRjtBRGdJSTtFQUNBLHlCQUFBO0FDOUhKO0FEbUlBO0VBQ0UscUJBQUE7QUNoSUY7QURpSUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUVBLFdBQUE7QUNoSUo7QURtSUU7RUFDRSxXQUFBO0FDaklKO0FEcUlFO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNuSUo7QURzSUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQ3BJSjtBRHNJSTtFQUNFLFlBQUE7QUNwSU47QUR3SUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUN0SUo7QUQySUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ3hJRjtBRDJJQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDeElGO0FEMElBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3ZJRjtBRDBJQTtFQUNFLGFBQUE7RUFDQyxpQkFBQTtFQUNBLHNDQUFBO0FDdklIO0FEMElBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQ3ZJRjtBRDBJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQyxpQkFBQTtFQUNDLGdCQUFBO0VBQ0YsZ0NBQUE7RUFDQSx1QkFBQTtBQ3hJRjtBRDBJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUN2SUY7QUQwSUE7OztFQUdFLGdCQUFBO0FDdklGO0FEMElBOztFQUVFLHFCQUFBO0VBQ0EsZ0JBQUE7QUN2SUY7QUQwSUE7RUFDRSxxQkFBQTtBQ3ZJRjtBRDBJQTtFQUNFLDBCQUFBO0FDdklGO0FEMElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUN2SUY7QUQwSUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0UsaUJBQUE7QUN2SUo7QUQwSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDdklGO0FENElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3pJRjtBRDhJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDM0lGO0FEOElBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FDNUlGO0FEK0lBO0VBQ0UsMkJBQUE7QUM1SUY7QUQ4SUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUMzSUY7QUQ4SUE7RUFDRSxrQkFBQTtBQzNJRjtBRDBKQSxxQkFBQTtBQUNBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUN2SkY7RUR5SkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUN2SkY7RUR5SkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUN2SkY7QUFDRjtBRHlKQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxVQUFBO0VDdkpGO0VEeUpBO0lBQ0UsNkJBQUE7SUFDQSxVQUFBO0VDdkpGO0VEeUpBO0lBQ0UsNkJBQUE7SUFDQSxVQUFBO0VDdkpGO0FBQ0Y7QUR5SkE7cURBQUE7QUFFQTtFQUNFLGlEQUFBO0VBQ0Esb0RBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBR0EsbUJBQUE7RUFDQSx3REFBQTtFQUtBLGtJQUFBO0VBRUEsa0RBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDMUpGO0FENEpBLG1HQUFBO0FBQ0EsaURBQUE7QUFDQTtFQUNFLGFBQUE7QUN6SkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwJSAhaW1wb3J0YW50OyAvLyBjaGFuZ2UgaGVyIGZvciBpb3NcblxuICAvLyBbbm9TY3JvbGxdIHtcbiAgLy8gICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLyB9XG5cbiAgLmRyaXZlIHtcbiAgICBjb2xvcjogI2Y3ZjdmNztcbiAgICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLnByaWNlIHtcbiAgICBjb2xvcjogcmdiKDAsIDI1NSwgMCk7XG4gIH1cblxuICAuZGF0ZSB7XG4gICAgY29sb3I6IHJnYigyNTUsIDIwNCwgNjIpO1xuICB9XG5cbiAgLmRlc3RpbmF0aW9uIHtcbiAgICBjb2xvcjogcmdiKDI0NiwgMjUyLCAyNTUpO1xuICB9XG5cbiAgLmxvY2F0aW9uIHtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgfVxuXG4gICNtYXAtY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG5cblxuLm1lc3NfZGVmdWFsdCB7XG4gd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzUlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tYXBfY2hhbmdlIHtcbiAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLm1lc3MyX3Nob3J0IHtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDsgXG4gICAgei1pbmRleDogMTtcbn1cblxuXG5cbiAgXG59XG5cbi8vTkV3IFRyYW5zaXRpb25cbmxhYmVsID4gaW5wdXQgeyBcbiAgZGlzcGxheTogbm9uZTtcbiAgIFxufVxuXG4jYnV0dG9uMCB7ICBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4OyAgXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBibGFjaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxubGFiZWwgPiBpbnB1dCB+IC5idXR0b24geyBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7ICBcbiAgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG5sYWJlbCA+IGlucHV0IH4gI2J1dHRvbjEgeyBcbiAgIHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcbiBcbiAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgdG9wOiA1MCU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAtNiU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjdweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5sYWJlbCA+IGlucHV0OmNoZWNrZWQgfiAjYnV0dG9uMSB7IFxuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk7XG4gIGxlZnQ6IGNhbGMoMCUgLSAwcHgpO1xuICAvLyB0b3A6IDkwJTtcbiAgdG9wOiBjYWxjKDgwJSAtIDAlKTtcbiBcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcblxuICAgI21hcC1jYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG5cblxuLm1haW4tY29ue1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuICAuZHJpdmVyRm91bmROZXd7XG4gIGxlZnQ6IDAlO1xuICAgXG4gICAgICB0b3A6IDE0NyU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tbGVmdDogMS41JTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwJTtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIH1cbi8vRU5ERVxuXG5pb24tZm9vdGVyIHtcbiAgQGtleWZyYW1lcyB3aWtpIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAuYmFycyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLm5hbWVfdGV4dCB7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIH1cblxuICAgIC5wcm9maWxlX2JhciB7XG4gICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMTYlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgLy8gbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgICAvLyBwYWRkaW5nOiAwcHg7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAjbXlCdXR0aW4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLy9iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgLy9cbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIHAge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gICNhQnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDE0MCwgMjEwKTtcbiAgICBjb2xvcjogI2Y3ZjdmNztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICAvL21hcmdpbi1sZWZ0OiA3cHg7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsZWZ0X3JpZ2h0IHtcbiAgMCUge1xuICAgIHRvcDogNzUlO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0b3A6IDgwJTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRvcDogNzUlO1xuICB9XG59XG5cbi5yYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogODAlO1xuICBtYXJnaW4tdG9wOiAtMTAlO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0b3A6IDE0JTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgei1pbmRleDogNDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgei1pbmRleDogNDtcbiAgfVxufVxuXG4jdGl0bGUge1xuICBoZWlnaHQ6IDIlICFpbXBvcnRhbnQ7XG4gIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgLy8gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbn1cblxuI215dGl0ZSB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTklO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgd2lkdGg6IDQ1JTtcbiAgaGVpZ2h0OiAxNCU7XG4gIGlvbi1pY29uIHtcbiAgICB3aWR0aDogMTAlO1xuICAgIG1hcmdpbjogMnB4O1xuICB9XG4gIC8vIGhlaWdodDoxNCUgO1xuICAvLyAgYm9yZGVyOiAxcHggc29saWQgI2ZiYjkxZDtcbn1cblxuI2xlZnRzaGl0IHtcbiAgbWFyZ2luOiAyJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZiYjkxZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweCs1O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2ZiYjkxZDtcbiAgbGVmdDogMzUlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3N0YXIge1xuICAvLyBjb2xvcjogY29sb3IoJGNvbG9ycywgZGFyaywgYmFzZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIG1hcmdpbi10b3A6IDElO1xuICAvL1xufVxuXG4jcmlkZXMge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xufVxuXG4jdW5zdGFyXzEge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9jYXIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmJiOTFkO1xuICAvL1xuICBoMiB7XG4gICAgcGFkZGluZzogNHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZiYjkxZDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG59XG5cbiN1bnN0YXIge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IDIuNSUgIWltcG9ydGFudDtcbiAgLy9cbiAgLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgzOSwgMTgsIDM3LCAwLjU0MSksIHJnYmEoNjksIDIzLCA3MywgMC42MjMpIHJnYmEoOTAsIDE4LCA5MCwgMC4zMzYpKSAsIHVybCgkbXlVcmwpIG5vLXJlcGVhdDtcbn1cblxuI3Vuc3Rhcl8yIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlICFpbXBvcnRhbnQ7XG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWcvYS1zcGxhc2gtMS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmJiOTFkO1xuICAvL1xuICBoMiB7XG4gICAgcGFkZGluZzogNHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZiYjkxZDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG59XG5cbiN0b3BfY29udGFpbmVyIHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9sb2dvLWljb24ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGhlaWdodDogMzAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLy9cbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcblxuICAuc3R1ZmYge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxuICAvL2JhY2tncm91bmQ6ICNmN2Y3Zjc7XG59XG5cbiNidXR0b25Db250YWluZXIge1xuICAvLyBtYXJnaW4tdG9wOiAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBidXR0b24ge1xuICAgIC8vaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIH1cbn1cblxuI2J1dHRvbkNvbnRhaW5lcjIge1xuICBidXR0b24ge1xuICAgIC8vaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIH1cbn1cblxuLmd1dHRvbiB7XG4gIC8vICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxLCAxNywgNDEsIDAuODkpLCByZ2JhKDgsIDI1LCA0NCwgMC42MjMpIHJnYmEoMywgMTcsIDMxLCAwLjQzOCkpICwgdXJsKCRteVVybCkgbm8tcmVwZWF0O1xuXG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIC8vbWFyZ2luLWxlZnQ6IDI2JTtcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAjZmJiOTFkO1xuICAvL2JhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIC8vIGJvcmRlci1yYWRpdXM6MTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIGJhY2tncm91bmQ6ICNmYmI5MWQ7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmYmI5MWQ7XG4gIC8vXG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgbWFyZ2luOiAzcHg7XG4gIH1cbn1cblxuXG5cbiNjb250YWluZXJfMSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAucHJvZmlsZS1waWMge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAxOCU7XG4gIH1cbn1cblxuaW9uLXRvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmN2Y3Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IGF1dG87XG5cbiAgbWFyZ2luLXRvcDogNCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAzJTtcbn1cblxuXG5cbiNoZWFkZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIC8vb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbn1cblxuI3Nsb3B3IHtcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1pZC1yaWdodCB7XG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzBhMGEwYSAhaW1wb3J0YW50O1xuICB9XG5cbiAgcGFkZGluZy1sZWZ0OiA4MCU7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgei1pbmRleDogMztcbn1cblxuLnRvcEJhciB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUlOyAvL2NoYW5nZSB0byAxMCVcbiAgei1pbmRleDogMztcbiAgcGFkZGluZzogOHB4O1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg5NSwgOTQsIDk0LCAwLjA0MSksIHJnYmEoMiwgOTIsIDE2MSwgMCkgMzgpO1xuXG4gIGJ1dHRvbiB7XG4gICAgLy9oZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogNnB4O1xuICAgIC8vIGJvcmRlcjogNnB4IHNvbGlkI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDJlbTtcblxuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmJ1dHRvbi1yaWdodCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cblxuI215QmFkZ2Uge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbiNtYXBfbGF5ZXIge1xuICB6LWluZGV4OiAyNTE7XG4gIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAvLyBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBhbmltYXRpb24tbmFtZTogd2lraTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgcGFkZGluZzogNXB4O1xuICAvLyBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAvLyBtYXJnaW4tdG9wOiAyMCUgIWltcG9ydGFudDtcbiAgLmJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMCUgIWltcG9ydGFudDtcbiAgICAvLyBoZWlnaHQ6IGF1dG87XG4gICAgLy93aWR0aDogMTAwJTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvL21hcmdpbjogNXB4O1xuICAgIC8vIHBhZGRpbmc6IDIwcHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuICB9XG5cbiAgLmd1dHMge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG5cbiAgLmJ1dHRvbl8xIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLnByb2ZpbGUtcGljIHtcbiAgICAgIGhlaWdodDogNzAlO1xuICAgICAgd2lkdGg6IDQzJTtcbiAgICAgIGJvcmRlcjogMS42cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIH1cbiAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIH1cblxuICAuYnV0dG9uXzIge1xuICAgIGJhY2tncm91bmQ6ICM5ZDA4ZTI7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICB9XG5cbiAgLy8gaW9uLWljb257XG4gIC8vICAgY29sb3I6I2ZmZmZmZjtcbiAgLy8gfVxufVxuXG5oMSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG4uc3RhY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmd1dHRvbnoge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xuICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggY29sb3IoJGNvbG9ycywgbmF2LXNoYWRvdywgYmFzZSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1pZC1yaWdodCB7XG4gIC8vIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1sZWZ0OiA4MCU7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgei1pbmRleDogMztcbn1cblxuLm1pZC1yaWdodDIge1xuICAvLyBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctbGVmdDogODAlO1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIHotaW5kZXg6IDM7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMGEwYTBhICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm1pZC1yaWdodDN7XG4gIC8vIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogODAlO1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIHotaW5kZXg6IDM7XG4gICAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxufVxuXG4ubWlkLXJpZ2h0NXtcbiBcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgei1pbmRleDogMztcbiAgICBpb24taWNvbiB7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgfVxuXG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMTU7XG4gICNsb3dlcl9pdGVtcyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC8vIGJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICB6LWluZGV4OiAxNTtcbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMTAlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XG4gICAgcGFkZGluZzogYXV0byAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmYmI5MWQ7XG4gICAgei1pbmRleDogMzAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwLjdweCBzb2xpZCAjZmJiOTFkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cblxuICAjcmlkZXMge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWFyZ2luOiAxcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcblxuICAgIGlvbi10aXRsZSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgLmJhY2tfY29sIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWUxODFmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4vL05FVyBERVNJR05HU1xuLmRyaXZlckZvdW5kIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbn1cblxuLmhlYWRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6ICNmYmI5MWQ7XG4gIG1hcmdpbi10b3A6IC02JTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1vdmVIZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5yZXF1ZXN0LWZvci1yaWRlMiB7XG4gIGhlaWdodDogMjAwcHg7XG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk7XG59XG5cbi5jZW50ZXJUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnJlc3VsdENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAvLyBwYWRkaW5nOiAxMHB4O1xuICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgYm9yZGVyLWJvdHRvbTogI2JhYmFiYSBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnJlc3VsdENvbnRhaW5lcjIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ib29rSW1hZ2UsXG4uYm9va1RpdGxlLFxuLmJvb2tQcmljZSB7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5cbi5jb250ZW50LXdyYXAsXG4uaW1nLXdyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5jb250ZW50LXdyYXAyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jZHJpdmVyaWNvblNpemUge1xuICBmb250LXNpemU6IDkwcHggIWltcG9ydGFudDtcbn1cblxuLmNlbnRlckJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYnRuLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jaGF0SWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gbWFyZ2luLWxlZnQ6IDAlO1xuICAvLyBtYXJnaW4tdG9wOiAtMTIlO1xufVxuXG4uY2FsbEljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIC8vIG1hcmdpbi10b3A6IC0xMiU7XG59XG5cbi5kb3R0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbnMxMjMge1xuICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA2MCU7XG4gIHBhZGRpbmc6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZiYjkxZDtcbiAgei1pbmRleDogMzAwICFpbXBvcnRhbnQ7XG5cbiAgY29sb3I6ICMwNTA1MDU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmJ1dHRvbi1uYXRpdmUge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY2VudGVyRWFybmluZ3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmYmI5MWQ7XG59XG5cbi50b3BwZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIG1hcmdpbjogMTBweDtcbiAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcbiAgLy8gY29sb3I6ICNmYmI5MWQ7XG59XG5cbi8vIC5pb24tY29sb3ItZGFyayB7XG4vLyAgIC0taW9uLWNvbG9yLWJhc2U6ICNmYmI5MWQgIWltcG9ydGFudDtcbi8vICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6ICNmYmI5MWQgIWltcG9ydGFudDtcbi8vICAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNmYmI5MWQgIWltcG9ydGFudDtcbi8vICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiAjZmJiOTFkICFpbXBvcnRhbnQ7XG4vLyAgIC0taW9uLWNvbG9yLXNoYWRlOiAjZmJiOTFkICFpbXBvcnRhbnQ7XG4vLyAgIC0taW9uLWNvbG9yLXRpbnQ6ICNmYmI5MWQgIWltcG9ydGFudDtcbi8vIH1cblxuLyogeW91ciBjdXN0b20gQ1NTIFxcKi9cbkBrZXlmcmFtZXMgcHVsc2F0ZSB7XG4gIGZyb20ge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk1JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNhdGUge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA5NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi8qIGdldCB0aGUgY29udGFpbmVyIHRoYXQncyBqdXN0IG91dHNpZGUgdGhlIG1hcmtlciBpbWFnZSwgXG5cdFx0d2hpY2gganVzdCBoYXBwZW5zIHRvIGhhdmUgb3VyIE1hcmtlciB0aXRsZSBpbiBpdCAqL1xuI21hcC1jYW52YXMgZGl2W3RpdGxlPVwicGluSWNvblwiXSB7XG4gIC1tb3otYW5pbWF0aW9uOiBwdWxzYXRlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzYXRlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGJvcmRlcjogMXB0IHNvbGlkICNmZmY7XG4gIC8qIG1ha2UgYSBjaXJjbGUgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUxcHg7XG4gIC8qIG11bHRpcGx5IHRoZSBzaGFkb3dzLCBpbnNpZGUgYW5kIG91dHNpZGUgdGhlIGNpcmNsZSAqL1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggI2ZiYjkxZCwgaW5zZXQgMCAwIDVweCAjZmJiOTFkLCBpbnNldCAwIDAgNXB4ICNmYmI5MWQsXG4gICAgMCAwIDVweCAjZmJiOTFkLCAwIDAgNXB4ICNmYmI5MWQsIDAgMCA1cHggI2ZiYjkxZDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICNmYmI5MWQsIGluc2V0IDAgMCA1cHggI2ZiYjkxZCwgaW5zZXQgMCAwIDVweCAjZmJiOTFkLFxuICAgIDAgMCA1cHggI2ZiYjkxZCwgMCAwIDVweCAjZmJiOTFkLCAwIDAgNXB4ICNmYmI5MWQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggI2ZiYjkxZCwgaW5zZXQgMCAwIDVweCAjZmJiOTFkLCBpbnNldCAwIDAgNXB4ICNmYmI5MWQsXG4gICAgMCAwIDVweCAjZmJiOTFkLCAwIDAgNXB4ICNmYmI5MWQsIDAgMCA1cHggI2ZiYjkxZDtcbiAgLyogc2V0IHRoZSByaW5nJ3MgbmV3IGRpbWVuc2lvbiBhbmQgcmUtY2VudGVyIGl0ICovXG4gIGhlaWdodDogNTFweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IC0xOHB4IDAgMCAtMThweDtcbiAgd2lkdGg6IDUxcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMDtcbn1cbi8qIGhpZGUgdGhlIHN1cGVyZmx1b3VzIG1hcmtlciBpbWFnZSBzaW5jZSBpdCB3b3VsZCBleHBhbmQgYW5kIHNocmluayB3aXRoIGl0cyBjb250YWluaW5nIGVsZW1lbnQgKi9cbi8qXHQjbWFwLWNhbnZhcyBkaXZbc3R5bGUqPVwiOTg3NjU0XCJdW3RpdGxlXSBpbWcgeyovXG4jbWFwLWNhbnZhcyBkaXZbdGl0bGU9XCJwaW5JY29uXCJdIGltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCJpb24tY29udGVudCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuZHJpdmUge1xuICBjb2xvcjogI2Y3ZjdmNztcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50IC5wcmljZSB7XG4gIGNvbG9yOiBsaW1lO1xufVxuaW9uLWNvbnRlbnQgLmRhdGUge1xuICBjb2xvcjogI2ZmY2MzZTtcbn1cbmlvbi1jb250ZW50IC5kZXN0aW5hdGlvbiB7XG4gIGNvbG9yOiAjZjZmY2ZmO1xufVxuaW9uLWNvbnRlbnQgLmxvY2F0aW9uIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5pb24tY29udGVudCAjbWFwLWNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG5pb24tY29udGVudCAubWVzc19kZWZ1YWx0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzUlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDE7XG59XG5pb24tY29udGVudCAubWFwX2NoYW5nZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbmlvbi1jb250ZW50IC5tZXNzMl9zaG9ydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxO1xufVxuXG5sYWJlbCA+IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2J1dHRvbjAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBibGFjaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxubGFiZWwgPiBpbnB1dCB+IC5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmxhYmVsID4gaW5wdXQgfiAjYnV0dG9uMSB7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB0b3A6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAtNiU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGFiZWwgPiBpbnB1dDpjaGVja2VkIH4gI2J1dHRvbjEge1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk7XG4gIGxlZnQ6IGNhbGMoMCUgLSAwcHgpO1xuICB0b3A6IGNhbGMoODAlIC0gMCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xufVxubGFiZWwgPiBpbnB1dDpjaGVja2VkIH4gI2J1dHRvbjEgI21hcC1jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAwO1xufVxuXG4ubWFpbi1jb24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRyaXZlckZvdW5kTmV3IHtcbiAgbGVmdDogMCU7XG4gIHRvcDogMTQ3JTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICB6LWluZGV4OiAxMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG5cbkBrZXlmcmFtZXMgd2lraSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmlvbi1mb290ZXIgLmJhcnMge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDQ7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tZm9vdGVyIC5iYXJzIC5uYW1lX3RleHQge1xuICB6LWluZGV4OiAzO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDAlO1xufVxuaW9uLWZvb3RlciAuYmFycyAucHJvZmlsZV9iYXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbmlvbi1mb290ZXIgLmJhcnMgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTYlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5NSU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1mb290ZXIgI215QnV0dGluIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5pb24tZm9vdGVyIHAge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuaW9uLWZvb3RlciAjYUJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMyNDhjZDI7XG4gIGNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuaW9uLWZvb3RlciBpb24tdGl0bGUge1xuICBjb2xvcjogI2Y3ZjdmNyAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGxlZnRfcmlnaHQge1xuICAwJSB7XG4gICAgdG9wOiA3NSU7XG4gIH1cbiAgNTAlIHtcbiAgICB0b3A6IDgwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDc1JTtcbiAgfVxufVxuLnJhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIG1hcmdpbi10b3A6IC0xMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdG9wOiAxNCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIHotaW5kZXg6IDQ7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnJhdGUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuOGVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDQ7XG59XG5cbiN0aXRsZSB7XG4gIGhlaWdodDogMiUgIWltcG9ydGFudDtcbn1cblxuI215dGl0ZSB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTklO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgd2lkdGg6IDQ1JTtcbiAgaGVpZ2h0OiAxNCU7XG59XG4jbXl0aXRlIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEwJTtcbiAgbWFyZ2luOiAycHg7XG59XG5cbiNsZWZ0c2hpdCB7XG4gIG1hcmdpbjogMiU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmYmI5MWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZmJiOTFkO1xuICBsZWZ0OiAzNSUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jc3RhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG4jcmlkZXMge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xufVxuXG4jdW5zdGFyXzEge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmJiOTFkO1xufVxuI3Vuc3Rhcl8xIGgyIHtcbiAgcGFkZGluZzogNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmYmI5MWQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbiN1bnN0YXIge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IDIuNSUgIWltcG9ydGFudDtcbn1cblxuI3Vuc3Rhcl8yIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmYmI5MWQ7XG59XG4jdW5zdGFyXzIgaDIge1xuICBwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZiYjkxZDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuI3RvcF9jb250YWluZXIge1xuICBoZWlnaHQ6IDMwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG4jdG9wX2NvbnRhaW5lciAuc3R1ZmYge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbiNidXR0b25Db250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG4jYnV0dG9uQ29udGFpbmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbiNidXR0b25Db250YWluZXIgLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuI2J1dHRvbkNvbnRhaW5lcjIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuI2J1dHRvbkNvbnRhaW5lcjIgLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmd1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2NvbnRhaW5lciBoMiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG4jY29udGFpbmVyIGlvbi1pY29uIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbiNjb250YWluZXJfMSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZjhmOGY4O1xufVxuI2NvbnRhaW5lcl8xIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4jY29udGFpbmVyXzEgaDIge1xuICBmb250LXNpemU6IDFlbTtcbn1cbiNjb250YWluZXJfMSAucHJvZmlsZS1waWMge1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDE4JTtcbn1cblxuaW9uLXRvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmN2Y3Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IGF1dG87XG4gIG1hcmdpbi10b3A6IDQlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMyU7XG59XG5cbiNoZWFkZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59XG5cbiNzbG9wdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogLTElO1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWlkLXJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiA4MCU7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgei1pbmRleDogMztcbn1cbi5taWQtcmlnaHQgaW9uLWljb24ge1xuICBjb2xvcjogIzBhMGEwYSAhaW1wb3J0YW50O1xufVxuXG4udG9wQmFyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHotaW5kZXg6IDM7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi50b3BCYXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDZweDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi50b3BCYXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4udG9wQmFyIC5idXR0b24tcmlnaHQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuI215QmFkZ2Uge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbiNtYXBfbGF5ZXIge1xuICB6LWluZGV4OiAyNTE7XG4gIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZTogd2lraTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgcGFkZGluZzogNXB4O1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufVxuI21hcF9sYXllciAuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI21hcF9sYXllciAuYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4jbWFwX2xheWVyIC5ndXRzIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4jbWFwX2xheWVyIC5idXR0b25fMSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI21hcF9sYXllciAuYnV0dG9uXzEgLnByb2ZpbGUtcGljIHtcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA0MyU7XG4gIGJvcmRlcjogMS42cHggc29saWQgd2hpdGU7XG59XG4jbWFwX2xheWVyIC5idXR0b25fMiB7XG4gIGJhY2tncm91bmQ6ICM5ZDA4ZTI7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG4uc3RhY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmd1dHRvbnoge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5taWQtcmlnaHQge1xuICBwYWRkaW5nLWxlZnQ6IDgwJTtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICB6LWluZGV4OiAzO1xufVxuXG4ubWlkLXJpZ2h0MiB7XG4gIHBhZGRpbmctbGVmdDogODAlO1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIHotaW5kZXg6IDM7XG59XG4ubWlkLXJpZ2h0MiBpb24taWNvbiB7XG4gIGNvbG9yOiAjMGEwYTBhICFpbXBvcnRhbnQ7XG59XG5cbi5taWQtcmlnaHQzIHtcbiAgcGFkZGluZy1yaWdodDogODAlO1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIHotaW5kZXg6IDM7XG59XG4ubWlkLXJpZ2h0MyBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5taWQtcmlnaHQ1IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgei1pbmRleDogMztcbn1cbi5taWQtcmlnaHQ1IGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAxNTtcbn1cbmlvbi1mb290ZXIgI2xvd2VyX2l0ZW1zIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgei1pbmRleDogMTU7XG59XG5pb24tZm9vdGVyIC5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1mb290ZXIgLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA2MCU7XG4gIHBhZGRpbmc6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZiYjkxZDtcbiAgei1pbmRleDogMzAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMC43cHggc29saWQgI2ZiYjkxZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tZm9vdGVyICNyaWRlcyB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xufVxuaW9uLWZvb3RlciAjcmlkZXMgaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWZvb3RlciAuYmFja19jb2wge1xuICBiYWNrZ3JvdW5kOiAjMWUxODFmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kcml2ZXJGb3VuZCB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogMS41JTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyJTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG5cbi5oZWFkU2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiAjZmJiOTFkO1xuICBtYXJnaW4tdG9wOiAtNiU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vdmVIZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5yZXF1ZXN0LWZvci1yaWRlMiB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAwMDtcbn1cblxuLmNlbnRlclRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuXG4ucmVzdWx0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBib3JkZXItYm90dG9tOiAjYmFiYWJhIHNvbGlkIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5yZXN1bHRDb250YWluZXIyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYm9va0ltYWdlLFxuLmJvb2tUaXRsZSxcbi5ib29rUHJpY2Uge1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4uY29udGVudC13cmFwLFxuLmltZy13cmFwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uY29udGVudC13cmFwMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI2RyaXZlcmljb25TaXplIHtcbiAgZm9udC1zaXplOiA5MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXJCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2J0bi1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNoYXRJY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FsbEljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kb3R0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbnMxMjMge1xuICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA2MCU7XG4gIHBhZGRpbmc6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZiYjkxZDtcbiAgei1pbmRleDogMzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDUwNTA1O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5idXR0b24tbmF0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyRWFybmluZ3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmYmI5MWQ7XG59XG5cbi50b3BwZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHlvdXIgY3VzdG9tIENTUyBcXCovXG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xuICBmcm9tIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA5NSUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzYXRlIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgOTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4vKiBnZXQgdGhlIGNvbnRhaW5lciB0aGF0J3MganVzdCBvdXRzaWRlIHRoZSBtYXJrZXIgaW1hZ2UsIFxuXHRcdHdoaWNoIGp1c3QgaGFwcGVucyB0byBoYXZlIG91ciBNYXJrZXIgdGl0bGUgaW4gaXQgKi9cbiNtYXAtY2FudmFzIGRpdlt0aXRsZT1waW5JY29uXSB7XG4gIC1tb3otYW5pbWF0aW9uOiBwdWxzYXRlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzYXRlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGJvcmRlcjogMXB0IHNvbGlkICNmZmY7XG4gIC8qIG1ha2UgYSBjaXJjbGUgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUxcHg7XG4gIC8qIG11bHRpcGx5IHRoZSBzaGFkb3dzLCBpbnNpZGUgYW5kIG91dHNpZGUgdGhlIGNpcmNsZSAqL1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggI2ZiYjkxZCwgaW5zZXQgMCAwIDVweCAjZmJiOTFkLCBpbnNldCAwIDAgNXB4ICNmYmI5MWQsIDAgMCA1cHggI2ZiYjkxZCwgMCAwIDVweCAjZmJiOTFkLCAwIDAgNXB4ICNmYmI5MWQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjZmJiOTFkLCBpbnNldCAwIDAgNXB4ICNmYmI5MWQsIGluc2V0IDAgMCA1cHggI2ZiYjkxZCwgMCAwIDVweCAjZmJiOTFkLCAwIDAgNXB4ICNmYmI5MWQsIDAgMCA1cHggI2ZiYjkxZDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjZmJiOTFkLCBpbnNldCAwIDAgNXB4ICNmYmI5MWQsIGluc2V0IDAgMCA1cHggI2ZiYjkxZCwgMCAwIDVweCAjZmJiOTFkLCAwIDAgNXB4ICNmYmI5MWQsIDAgMCA1cHggI2ZiYjkxZDtcbiAgLyogc2V0IHRoZSByaW5nJ3MgbmV3IGRpbWVuc2lvbiBhbmQgcmUtY2VudGVyIGl0ICovXG4gIGhlaWdodDogNTFweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IC0xOHB4IDAgMCAtMThweDtcbiAgd2lkdGg6IDUxcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMDtcbn1cblxuLyogaGlkZSB0aGUgc3VwZXJmbHVvdXMgbWFya2VyIGltYWdlIHNpbmNlIGl0IHdvdWxkIGV4cGFuZCBhbmQgc2hyaW5rIHdpdGggaXRzIGNvbnRhaW5pbmcgZWxlbWVudCAqL1xuLypcdCNtYXAtY2FudmFzIGRpdltzdHlsZSo9XCI5ODc2NTRcIl1bdGl0bGVdIGltZyB7Ki9cbiNtYXAtY2FudmFzIGRpdlt0aXRsZT1waW5JY29uXSBpbWcge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_location_tracker_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/location-tracker.service */ "./src/app/services/location-tracker.service.ts");
/* harmony import */ var _services_directionservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/directionservice.service */ "./src/app/services/directionservice.service.ts");
/* harmony import */ var _services_onesignal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/onesignal.service */ "./src/app/services/onesignal.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _services_geocoder_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/geocoder.service */ "./src/app/services/geocoder.service.ts");
/* harmony import */ var _services_pop_up_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _news_news_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../news/news.page */ "./src/app/pages/news/news.page.ts");
/* harmony import */ var _chat_chat_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../chat/chat.page */ "./src/app/pages/chat/chat.page.ts");
/* harmony import */ var _paymentpage_paymentpage_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../paymentpage/paymentpage.page */ "./src/app/pages/paymentpage/paymentpage.page.ts");
/* harmony import */ var src_app_pages_accept_accept_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/pages/accept/accept.page */ "./src/app/pages/accept/accept.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tripinfo_tripinfo_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../tripinfo/tripinfo.page */ "./src/app/pages/tripinfo/tripinfo.page.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/insomnia/ngx */ "./node_modules/@ionic-native/insomnia/ngx/index.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_30__);






















// import { AcceptPage } from"../../pages/accept/accept.page";










// declare var Stripe;
var HomePage = /** @class */ (function () {
    function HomePage(share, vibration, lp, modalCtrl, storage, settings, One, statusBar, loadingCtrl, router, locationTracker, myGcode, dProvider, platform, // tslint:disable-next-line: no-shadowed-variable
    OneSignal, alert, pop, auth, ph, navCtrl, eventProvider, menu, call1, geo, insomnia, actionSheetController, backgroundMode) {
        var _this = this;
        this.share = share;
        this.vibration = vibration;
        this.lp = lp;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.settings = settings;
        this.One = One;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.locationTracker = locationTracker;
        this.myGcode = myGcode;
        this.dProvider = dProvider;
        this.platform = platform;
        this.OneSignal = OneSignal;
        this.alert = alert;
        this.pop = pop;
        this.auth = auth;
        this.ph = ph;
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
        this.menu = menu;
        this.call1 = call1;
        this.geo = geo;
        this.insomnia = insomnia;
        this.actionSheetController = actionSheetController;
        this.backgroundMode = backgroundMode;
        this.colors = ["#1E90FF", "#FF1493", "#32CD32", "#FF8C00", "#4B0082"];
        this.colorButtons = {};
        this.toggleMore = false;
        this.geocoder = new google.maps.Geocoder();
        this.gpsIson = false;
        this.hideMe = false;
        this.hasArrived = false;
        this.poolRequest = false;
        this.hasAdded_Destination2 = false;
        this.hasPooled = true;
        this.poolEnd = true;
        this.hasDone = true;
        this.isPaused = false;
        this.isArrived = false;
        this.remove_arrived = false;
        this.isBlocked = false;
        this.canLoad = true;
        this.doneK = true;
        this.canDO = true;
        this.IamOffline = false;
        this.returningUser = true;
        this.NotifyTimes = -1;
        this.timerBeforeNotify = 2000;
        this.mapSection = false;
        this.toggleButtons = false;
        this.moreText = "Hide All";
        this.moreIcon = "ios-arrow-up";
        this.canShowOther = false;
        this.hasNotPicked = true;
        this.hasNotPicked2 = true;
        this.hasPooled2 = true;
        this.hideNews = false;
        this.notification = false;
        this.mapFalse = false;
        this.connected = false;
        this.toggleStatus = false;
        // notify_ID: any;
        this.isNotDestinyOption = true;
        this.userHasPhone = false;
        this.hasAdded_Destination = false;
        this.canEnd2 = true;
        this.connect = false;
        this.canEnd = true;
        this.rating = 0;
        this.ratingText = "Cool";
        this.appReady = false;
        this.hasSent = false;
        this.canStopCheck = false;
        this.canStop = false;
        this.isNetwork = true;
        this.greut = true;
        this.called = true;
        this.showGps = false;
        this.hasEnded = true;
        this.called2 = true;
        this.called_2 = true;
        this.itsOver = true;
        this.called_22 = true;
        this.tacktime = true;
        this.dropped = true;
        this.dropped2 = true;
        this.cliet = true;
        this.clientClrCheck = false;
        this.PoolClrCheck = false;
        this.done = true;
        this.hasNotFoundMap = true;
        this.showPassenger2 = false;
        this.c_picked = true;
        this.c_dropped = true;
        this.c_ended = true;
        this.c_added = true;
        this.c_complete = true;
        this.isInBooking = true;
        this.canListen = true;
        this.isPassengerCleared = true;
        this.hasG = true;
        this.isPickedDone = false;
        this.canStart = false;
        this.isUser = true;
        this.rating_positive = 1;
        this.rating_negative = 1;
        this.zoner = false;
        this.canIncur = false;
        this.hasTimed = true;
        this.scope = false;
        this.radius = false;
        this.timeLeft = 120;
        this.Arrined = false;
        this.isPiked = true;
        this.jkl = true;
        this.hour = 1;
        this.hours = 0;
        this.hasPAused = false;
        this.seconds = 1;
        this.minutes = 0;
        this.clock_minutes = 0;
        this.pauseCost = 0;
        this.canBe = true;
        this.currency = "GHC";
        this.currencyIcon = "C";
        this.stripe_key = "pk_test_8tqD66FgCZq0DosnjKmXqdHe00aCCiUfTN";
        this.cardDetails = {};
        this.totalTipped = 0;
        this.mr = 0;
        this.subscribed = false;
        this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
        //OneSignal: any;
        //showLoadRefresh: any;
        this.shortMap = true;
        this.platform.ready().then(function () {
            _this.onResumme();
            _this.goOnline();
            _this.locationTracker.loadMap();
            _this.NowWaitingForID();
            //SUBSCRIBE TO ONE SIGNAL
            _this.subscribeToOnesignal();
        });
    }
    HomePage.prototype.playNotificationSound = function () {
        this.audioPlayer.play();
    };
    HomePage.prototype.onResumme = function () {
        // ON RESUME CHECKING FROM STORAGE
        var _this = this;
        this.storage.get("LoggedOff").then(function (value) {
            if (value == null) {
            }
            else {
                _this.pop.loggedOff = value;
            }
        });
        this.storage.get("shortMap").then(function (value) {
            if (value == null) {
            }
            else {
                _this.shortMap = value;
            }
        });
        this.storage.get("isPaused").then(function (value) {
            if (value == null) {
            }
            else {
                _this.isPaused = value;
            }
        });
        this.storage.get("isNotDestinyOption").then(function (value) {
            if (value == null) {
            }
            else {
                _this.isNotDestinyOption = value;
            }
        });
        this.storage.get("hideMe").then(function (value) {
            if (value == null) {
            }
            else {
                _this.hideMe = value;
            }
        });
        this.storage.get("myLat").then(function (value) {
            if (value == null) {
            }
            else {
                _this.locationTracker.myLat = value;
            }
        });
        this.storage.get("myLng").then(function (value) {
            if (value == null) {
            }
            else {
                _this.locationTracker.myLng = value;
            }
        });
        this.storage.get("data").then(function (value) {
            if (value == null) {
            }
            else {
                _this.data = value;
            }
        });
        this.storage.get("destination").then(function (value) {
            if (value == null) {
            }
            else {
                _this.destination = value;
            }
        });
        this.storage.get("remove_arrived").then(function (value) {
            if (value == null) {
            }
            else {
                _this.remove_arrived = value;
            }
        });
        this.storage.get("canListen").then(function (value) {
            if (value == null) {
            }
            else {
                _this.canListen = value;
            }
        });
        this.storage.get("canStart").then(function (value) {
            if (value == null) {
            }
            else {
                _this.canStart = value;
            }
        });
        this.storage.get("customeID").then(function (value) {
            if (value == null) {
            }
            else {
                _this.customeID = value;
            }
        });
        this.storage.get("jkl").then(function (value) {
            if (value == null) {
            }
            else {
                _this.jkl = value;
            }
        });
        this.storage.get("defaultMap").then(function (value) {
            if (value == null) {
            }
            else {
                _this.defaultMap = value;
            }
        });
        this.storage.get("customerPhone").then(function (value) {
            if (value == null) {
            }
            else {
                _this.customerPhone = value;
            }
        });
        this.storage.get("hasEnded").then(function (value) {
            if (value == null) {
            }
            else {
                _this.hasEnded = value;
            }
        });
        this.storage.get("hasNotFoundMap").then(function (value) {
            if (value == null) {
            }
            else {
                _this.hasNotFoundMap = value;
            }
        });
        this.storage.get("ph.isOffline").then(function (value) {
            if (value == null) {
            }
            else {
                _this.ph.isOffline = value;
            }
        });
        this.storage.get("isArrived").then(function (value) {
            if (value == null) {
            }
            else {
                _this.isArrived = value;
            }
        });
        this.storage.get("hasNotPicked").then(function (value) {
            if (value == null) {
            }
            else {
                _this.hasNotPicked = value;
            }
        });
        this.storage.get("pop.hasPicked").then(function (value) {
            if (value == null) {
            }
            else {
                _this.pop.hasPicked = value;
            }
        });
        this.storage.get("time").then(function (value) {
            if (value == null) {
            }
            else {
                _this.dProvider.time = value;
            }
        });
        this.storage.get("time2").then(function (value) {
            if (value == null) {
            }
            else {
                _this.dProvider.time2 = value;
            }
        });
        this.storage.get("price").then(function (value) {
            if (value == null) {
            }
            else {
                _this.dProvider.price = value;
            }
        });
        this.storage.get("isPiked").then(function (value) {
            if (value == null) {
            }
            else {
                _this.isPiked = value;
            }
        });
        this.storage.get("bull").then(function (value) {
            if (value == null) {
            }
            else {
                _this.bull = value;
            }
        });
        this.storage.get("pickArrived").then(function (value) {
            if (value == null) {
            }
            else {
                _this.pickArrived = value;
            }
        });
        this.storage.get("isDrop").then(function (value) {
            if (value == null) {
            }
            else {
                _this.isDrop = value;
            }
        });
        this.storage.get("distance2").then(function (value) {
            if (value == null) {
            }
            else {
                _this.dProvider.distance2 = value;
            }
        });
        this.storage.get("name").then(function (value) {
            if (value == null) {
            }
            else {
                _this.name = value;
            }
        });
        this.storage.get("notify_ID").then(function (value) {
            if (value == null) {
            }
            else {
                _this.notify_ID = value;
            }
        });
    };
    HomePage.prototype.removeStorage = function () {
        this.storage.remove("LoggedOff");
        this.storage.remove("shortMap");
        this.storage.remove("isPaused");
        this.storage.remove("isNotDestinyOption");
        this.storage.remove("hideMe");
        this.storage.remove("myLat");
        this.storage.remove("myLng");
        this.storage.remove("data");
        this.storage.remove("destination");
        this.storage.remove("remove_arrived");
        this.storage.remove("canListen");
        this.storage.remove("canStart");
        this.storage.remove("customeID");
        this.storage.remove("jkl");
        this.storage.remove("defaultMap");
        this.storage.remove("customerPhone");
        this.storage.remove("hasEnded");
        this.storage.remove("hasNotFoundMap");
        this.storage.remove("ph.isOffline");
        this.storage.remove("isArrived");
        this.storage.remove("hasNotPicked");
        this.storage.remove("pop.hasPicked");
        this.storage.remove("time");
        this.storage.remove("time2");
        this.storage.remove("price");
        this.storage.remove("isPiked");
        this.storage.remove("bull");
        this.storage.remove("pickArrived");
        this.storage.remove("isDrop");
        this.storage.remove("distance2");
        this.storage.remove("name");
        this.storage.remove("notify_ID");
    };
    HomePage.prototype.completeItem = function () {
        this.shortMap = !this.shortMap;
        this.defaultMap = !this.defaultMap;
        console.log("IS defaultMap IS ", this.defaultMap);
        console.log("shortMap IS ", this.shortMap);
    };
    HomePage.prototype.subscribeToOnesignal = function () {
        var _this = this;
        if (!this.platform.is("cordova")) {
            this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
            this.locationTracker.notifID = this.notify_ID;
            this.OneSignal.notif_id = this.notify_ID;
            this.storage.set("notify_ID", this.notify_ID);
            this.StartListeningForChanges(this.notify_ID);
        }
        else if (this.platform.is("desktop")) {
            this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
            this.storage.set("notify_ID", this.notify_ID);
            this.StartListeningForChanges(this.notify_ID);
        }
        else if (this.platform.is("mobileweb")) {
            this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
            this.storage.set("notify_ID", this.notify_ID);
            this.StartListeningForChanges(this.notify_ID);
        }
        else {
            this.One.getIds().then(function (success) {
                _this.notify_ID = success.userId;
                _this.OneSignal.notif_id = success.userId;
                _this.locationTracker.notifID = _this.notify_ID;
                _this.storage.set("notify_ID", _this.notify_ID);
                _this.StartListeningForChanges(_this.notify_ID);
            });
        }
    };
    HomePage.prototype.toggle = function () {
        this.menu.enable(true);
        this.menu.open();
    };
    HomePage.prototype.checkTotalEarnings = function () {
        var _this = this;
        var n = [];
        this.pop.showLoader("").then(function () {
            _this.pop.hideLoader();
        });
        this.eventProvider.getEventList().on("value", function (snapshot) {
            _this.eventList = [];
            snapshot.forEach(function (snap) {
                _this.eventList.push({ price: snap.val().price, tip: snap.val().tip, });
                _this.eventList.sort();
                _this.eventList.reverse();
                console.log(_this.eventList);
                return false;
            });
        });
        for (var index = 0; index < this.eventList.length; index++) {
            var element = this.eventList[index];
            // console.log(element.price.replace(/[^\d\.]/g, ''));
            // n.push(this.eventList[index].price || 0);
            // n.push(parseFloat(this.eventList[index].price.replace(/[^\d\.]/g, '')));
            n.push(parseFloat(this.eventList[index].price));
            var add4 = function (a, b) { return a + b; };
            var result4 = n.reduce(add4);
            this.mr = result4.toFixed(2);
            // sum += this.eventList[index].price + element.tip || 0;
        }
        console.log("HOW MUCH MADE::", this.mr);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.onResumme();
        this.audioPlayer = new Audio('/assets/sounds/drivermatch.mp3');
        this.checkTotalEarnings();
        this.StartTracker();
        console.log("LATTITUDE FIRSTD::", this.locationTracker.driver_lat);
        if (this.locationTracker.watch)
            this.locationTracker.watch.unsubscribe();
        if (this.isInBooking) {
            this.platform.ready().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.subscribeToOnesignal();
                    console.log("PAGE HAS ENTERED--");
                    if (!this.platform.is("cordova")) {
                        this.locationTracker.driver_lat = 5.7186233;
                        this.locationTracker.driver_lng = -0.0240626;
                        console.log("LATTITUDE SEC::", this.locationTracker.driver_lat);
                    }
                    this.eventProvider.getUserProfiler().on("value", function (userProfileSnapshot) {
                        console.log(userProfileSnapshot.val().userInfo);
                        if (userProfileSnapshot.val().userInfo.rating_positive) {
                            _this.rating_positive = userProfileSnapshot.val().userInfo.rating_positive;
                            _this.eventProvider.getUserProfiler().off("value");
                        }
                        if (userProfileSnapshot.val().userInfo.rating_negative) {
                            _this.rating_negative = userProfileSnapshot.val().userInfo.rating_negative;
                            _this.eventProvider.getUserProfiler().off("value");
                        }
                    });
                    if (this.appReady && this.locationTracker.driver_lat != 0) {
                        console.log(this.settings.current_ID);
                        if (!this.platform.is("cordova")) {
                            if (this.hasEnded) {
                                console.log("Updating car on database.");
                            }
                        }
                        if (this.platform.is("cordova")) {
                            if (this.hasEnded) {
                                this.subscription =
                                    this.platform.backButton.subscribe(function () {
                                        navigator["app"].exitApp();
                                        _this.subscription.unsubscribe();
                                    });
                            }
                            if (this.settings.current_ID) {
                                this.showLoadRefresh().then(function () {
                                    _this.notify_ID = _this.settings.id;
                                    _this.storage.set("notify_ID", _this.notify_ID);
                                });
                            }
                        }
                        else {
                            if (this.settings.current_ID) {
                                this.showLoadRefresh().then(function () {
                                    _this.notify_ID = _this.settings.id;
                                    _this.storage.set("notify_ID", _this.notify_ID);
                                });
                            }
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.onResumme();
        this.StartTracker();
        this.subscribeToOnesignal();
        //GET USER PROFILE DETAILS
        this.ph.getUserProfile().on("value", function (userProfileSnapshot) {
            console.log("USER PROFILE:: " + userProfileSnapshot.val());
            _this.emergenc = userProfileSnapshot.val().emergencyNumber;
            _this.first_name = userProfileSnapshot.val().first_name;
            _this.last_name = userProfileSnapshot.val().last_name;
            _this.picture = userProfileSnapshot.val().picture;
            _this.phonenumber = userProfileSnapshot.val().phonenumber;
            _this.unique = userProfileSnapshot.val().unique_number;
            _this.has_subscribed = userProfileSnapshot.val().subscribe;
            console.log("first_name:: " + _this.first_name);
            console.log("picture:: " + _this.picture);
            console.log("EMERGENCY NUM:: " + _this.emergenc);
            console.log("SUBSCRIBEDD????:: " + _this.has_subscribed);
        });
        this.ph.getUserProfile().once("value", function (us) {
            if (us.val().favoriteSeek) {
            }
            if (us.val().isOffline != null)
                if (us.val().isOffline) {
                    _this.isBlocked = true;
                    _this.pop.loggedOff = true;
                    console.log("The user is offline");
                    _this.canTrack = false;
                    _this.pop.presentToast("You Are Offline, Will not recieve any jobs.");
                }
                else {
                    _this.isBlocked = false;
                    _this.pop.loggedOff = false;
                    console.log("The user is online");
                    _this.canTrack = true;
                    // this.starTimer();
                }
            // this.ph.getUserProfile().off("value"); }); 
            _this.NowWaitingForID();
        });
    };
    HomePage.prototype.goBack = function () {
        console.log("Hittine back");
        this.navCtrl.navigateBack("home");
    };
    HomePage.prototype.UpdateCredits = function (number) {
        return this.userProfile.update({
            credits: number,
        });
    };
    HomePage.prototype.checkMe = function (price, surcharge) {
        var _this = this;
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
                    console.log((Math.floor(element.price) /
                        100) * _this.riderpaid);
                } //if flat fee 
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
    HomePage.prototype.check = function (price, surcharge) {
        var _this = this;
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
                //if    flat fee 
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
    HomePage.prototype.ionViewDidExit = function () {
        this.pauseTimer();
    };
    HomePage.prototype.RemoveZones = function () {
        var _this = this;
        this.ph.userProfile.child("zone_lat").remove();
        this.ph.userProfile.child("zone_lng").remove();
        this.ph.ActiveState().then(function () {
            _this.pop.showPimp("Restart The App To  Use Normal Mode.");
        });
    };
    HomePage.prototype.starTimer = function () {
        var _this = this;
        this.canBe = true;
        this.ph.getDatabaseProfile().on("value", function (snapshot) {
            _this.manTime = 0;
            // if
            //     (snapshot.val().timeOn) {
            //     this.manTime = snapshot.val().timeOn;
            //     this.manTime = 0;
            // }
            // else {
            //     this.manTime = 0;
            // }
            _this.ph.getDatabaseProfile().off();
        });
        this.ph.getUserProfile().on("value", function (us) {
            if (us.val().seconds)
                _this.seconds = us.val().seconds;
            if (us.val().minutes)
                _this.minutes =
                    us.val().minutes;
            _this.ph.getUserProfile().off("value");
            if (us.val().elapse)
                _this.noww = us.val().elapse;
            console.log(_this.noww);
        });
        this.myVal = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(1000).subscribe(function () {
            var demo = document.getElementById("demo");
            _this.trop = new Date().getHours() - new Date(_this.noww).getHours();
            if (_this.trop >= _this.manTime && _this.canBe) {
                _this.ph.getUserProfile().off("value");
                _this.closEm();
                _this.canBe =
                    false;
                _this.seconds = 1;
                _this.minutes = 0;
                _this.hours = 0;
            }
            if (demo)
                if (_this.seconds) {
                    _this.seconds++;
                    _this.ph.getUserProfile().update({
                        seconds: _this.seconds,
                    });
                    if (_this.seconds >= 60) {
                        _this.minutes++;
                        _this.seconds = 1;
                        console.log(_this.minutes);
                        _this.ph.getUserProfile().update({
                            minutes: _this.minutes,
                        });
                    }
                    if (_this.minutes >= 60) {
                        _this.hours++;
                        _this.minutes = 1;
                        console.log(_this.minutes);
                        _this.ph.getUserProfile().update({
                            hours: _this.hours,
                        });
                    }
                    // Output the result in an element with id="demo"
                    demo.innerHTML = _this.hours + "h : " + _this.minutes + "m : " +
                        _this.seconds + "s ";
                }
        });
    };
    HomePage.prototype.closEm = function () {
        this.ph.getUserProfile().update({
            seconds: 0,
        });
        this.ph.getUserProfile().update({ minutes: 0, });
        this.ph.getUserProfile().update({ hours: 0, });
        this.ph.getUserProfile().update({ elapse: 0, });
    };
    HomePage.prototype.pauseTimer = function () {
        //this.myVal.unsubscribe();
        console.log(this.noww);
        this.noww = new Date();
        this.ph.getUserProfile().update({ elapse: this.noww, });
    };
    HomePage.prototype.startCountdown = function () {
        var _this = this;
        this.manTime = 0;
        this.myVal = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(1000).subscribe(function () {
            var wait_time = document.getElementById("wait_time");
            _this.trop = new Date().getHours() - new Date().getHours();
            if (wait_time) {
                if (_this.seconds) {
                    _this.seconds++;
                    if (_this.seconds >= 60) {
                        _this.minutes++;
                        _this.seconds = 1;
                    }
                    if (_this.minutes >= 5) {
                        _this.myVal.unsubscribe();
                        _this.waitTimeAlert();
                    }
                    wait_time.innerHTML = _this.minutes + "min : " +
                        _this.seconds + "secs ";
                }
            }
        });
    };
    HomePage.prototype.pausingCountdown = function () {
        var _this = this;
        this.manTime = 0;
        this.myVal = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(1000).subscribe(function () {
            var pause_time = document.getElementById("pause_time");
            if (pause_time) {
                if (_this.seconds) {
                    _this.seconds++;
                    if (_this.seconds >= 60) {
                        _this.minutes++;
                        _this.clock_minutes++;
                        _this.seconds = 1;
                    }
                    if (_this.minutes >= 1) {
                        _this.pauseCost = _this.pauseCost + 0.20;
                        _this.minutes = 0;
                        // this.myVal.unsubscribe();
                        // this.waitTimeAlert()
                    }
                    pause_time.innerHTML = _this.clock_minutes + "min : " +
                        _this.seconds + "secs ";
                }
            }
        });
    };
    HomePage.prototype.waitTimeAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: "Passenger meeting you soon....",
                            subHeader: "Hello, you have been waiting for 5mins. Kindly call or wait for passenger",
                            buttons: [
                                {
                                    text: "Keep Waiting",
                                    role: "cancel",
                                    handler: function () {
                                    },
                                },
                                {
                                    text: "Call Rider",
                                    handler: function () {
                                        _this.call();
                                    },
                                },
                            ],
                            backdropDismiss: false,
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
    HomePage.prototype.anyAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: message, buttons: [{
                                    text: "OK", role: "cancel", handler: function () { },
                                },], backdropDismiss: true,
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showMe = function (name, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: name + " Wants To Add You As A Favorite.",
                            buttons: [{
                                    text: "Yes", role: "cancel", handler: function () {
                                        _this.ph.doShit();
                                    },
                                }, {
                                    text: "No", role: "cancel", handler: function () {
                                        _this.ph.RejectFavorite(id);
                                    },
                                },], backdropDismiss: true,
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showMe3 = function (name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: "You Were Rated. " + name, buttons: [{
                                    text: "Okay", role: "cancel", handler: function () { _this.ph.doShit3(); },
                                },],
                            backdropDismiss: true,
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showMe2 = function (name, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: "You Were Tipped. " +
                                name, buttons: [{
                                    text: "Okay", role: "cancel", handler: function () {
                                        _this.ph.doShit2(id, name);
                                    },
                                },], backdropDismiss: true,
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.toggleMapFalse = function () {
        this.mapFalse = this.mapFalse ?
            false : true;
    };
    HomePage.prototype.openNews = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mod;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({ component: _news_news_page__WEBPACK_IMPORTED_MODULE_18__["NewsPage"], })];
                    case 1:
                        mod = _a.sent();
                        return [4 /*yield*/, mod.present()];
                    case 2:
                        _a.sent();
                        mod.onDidDismiss().then(function () {
                            _this.hideNews = true;
                            _this.storage.set("News", _this.news);
                        });
                        return [4 /*yield*/, mod.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.togglePassengers = function () {
        this.showPassenger2 = this.showPassenger2 ? false : true;
        console.log("Now Toggling");
    };
    HomePage.prototype.gotoSupport = function () {
        var _this = this;
        this.navCtrl.navigateRoot("Suppor");
        this.platform.backButton.subscribe(function () { return _this.navCtrl.pop(); });
    };
    HomePage.prototype.hoseMe = function () {
        this.hideMe = this.hideMe ? false : true;
    };
    HomePage.prototype.showMoreRating = function () {
        this.pop.showPimp(this.ratingText);
    };
    HomePage.prototype.showMoreMessage = function () {
        this.pop.showPimp(this.message);
    };
    HomePage.prototype.call_phone = function () {
        var customerPhone = this.emergenc;
        window.open("tel:" +
            customerPhone);
    };
    HomePage.prototype.call_phone_other = function () {
        window.open("tel:+233276113371");
        //window.open("tel:" + this.emergenc); 
    };
    HomePage.prototype.gotoScheduled = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () { return _this.navCtrl.pop(); });
        this.router.navigate(["schedule", {
                lat: this.locationTracker.driver_lat, lng: this.locationTracker.driver_lng, notif: this.notify_ID,
            },]);
        // Push your "OtherPage"
    };
    HomePage.prototype.ionViewDidLoad = function () {
        // this.locationTracker.loadMap();
        // this.NowWaitingForID();
        // this.showLoadRefresh().then(() => {
        //   console.log("ABOUT TO LOAD MAP");
        // });
    };
    HomePage.prototype.NowWaitingForID = function () {
        var _this = this;
        var location_locationTracker_loop = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(3000).subscribe(function () {
            console.log("WAITING FOR ID:: IF  LOCATION hasShown:: ", _this.locationTracker.hasShown);
            //this.watchPositionSubscription.clearWatch(this.mapTracker)
            if (_this.locationTracker.hasShown) {
                location_locationTracker_loop.unsubscribe();
                console.log("LONGITIUDESHOWIN", _this.locationTracker.driver_lng);
                _this.OneSignal.UpdateInfo(_this.locationTracker.driver_lat, _this.locationTracker.driver_lng, _this.ph.carType);
                _this.showGps = false;
                _this.locationTracker.mapLoadComplete = true;
                _this.toggleStatus = true;
                _this.hasNotFoundMap = false;
                _this.storage.set("hasNotFoundMap", _this.hasNotFoundMap);
                // if (!this.isBlocked) {
                //   this.Register();
                // }
            }
            else {
                _this.hasNotFoundMap = false;
                _this.storage.set("hasNotFoundMap", _this.hasNotFoundMap);
                _this.NowWaitingForID();
                location_locationTracker_loop.unsubscribe();
            }
        });
    };
    HomePage.prototype.Register = function () {
        var _this = this;
        this.pop.loggedOff = false;
        this.storage.set("LoggedOff", this.pop.loggedOff);
        this.StartTracker();
        if (this.platform.is("cordova")) {
            this.myListening = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(3000).subscribe(function () {
                _this.StartListeningForChanges(_this.notify_ID);
            });
        }
        else {
            this.myListening = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(3000).subscribe(function () {
                _this.StartListeningForChanges(_this.notify_ID);
            });
        }
        this.appReady = true;
        this.OneSignal.UpdateInfo(this.locationTracker.driver_lat, this.locationTracker.driver_lng, this.ph.carType);
        this.myGcode.Reverse_Geocode(this.locationTracker.driver_lat, this.locationTracker.driver_lng, this.locationTracker.map1, false);
    };
    HomePage.prototype.StartTracker = function () {
        var _this = this;
        console.log("start tracking..........");
        this.watch = this.geo.watchPosition({ enableHighAccuracy: true, timeout: 10000 }).subscribe(function (position) {
            if (position.coords != undefined) {
                // if (this.locationTracker.marker && this.canTrack) {
                var geoposition = position;
                _this.currLat = geoposition.coords.latitude,
                    _this.currLng = geoposition.coords.longitude;
                _this.OneSignal.UpdateInfo(_this.currLat, _this.currLng, _this.ph.carType); //push Driver info to be avaolable
            }
            else {
                var positionError = position;
            }
        });
    };
    HomePage.prototype.gotoProfile = function () {
        var _this = this;
        this.navCtrl.navigateRoot("proflie");
        this.platform.backButton.subscribe(function () { return _this.navCtrl.pop(); });
    };
    HomePage.prototype.gotoEarnings = function () {
        var _this = this;
        this.navCtrl.navigateRoot("payment");
        this.platform.backButton.subscribe(function () { return _this.navCtrl.pop(); });
    };
    HomePage.prototype.SendMessage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _chat_chat_page__WEBPACK_IMPORTED_MODULE_19__["ChatPage"], componentProps: { id: this.notify_ID },
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss().then(function () {
                                _this.notification
                                    = false;
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.gotoHistory = function () {
        var _this = this;
        this.navCtrl.navigateRoot("history");
        this.platform.backButton.subscribe(function () { return _this.navCtrl.pop(); });
    };
    HomePage.prototype.goOnline = function () {
        // this.pauseTimer(); 
        // if (this.locationTracker.driver_lat != 0) {
        this.Register();
        this.ph.ActiveState();
        this.pop.presentToast(this.lp.translate()[0].e5);
        this.starTimer();
        this.pop.loggedOff = false;
        this.storage.set("LoggedOff", this.pop.loggedOff);
        this.pop.presentToast(this.lp.translate()[0].e5);
        this.OneSignal.UpdateInfo(this.locationTracker.driver_lat, this.locationTracker.driver_lng, this.ph.carType);
        //push Driver info to be avaolable
        this.canTrack = true;
        this.canListen = true;
        this.storage.set("canListen", this.canListen);
        // } else {
        //   this.pop.alertMe("No latitude and Longitude On Your Device. Are You running on an emulator ? ");
        // }
    };
    HomePage.prototype.goOffline = function () {
        this.canTrack = false;
        this.pop.GoOffline();
        this.canListen = false;
        this.storage.set("canListen", this.canListen);
        if (this.watch) {
            this.watch.unsubscribe();
        }
        this.pop.loggedOff = true;
        this.storage.set("LoggedOff", this.pop.loggedOff);
        this.ph.InActiveState();
        this.pauseTimer();
    };
    HomePage.prototype.HasArrived = function () {
        this.pauseTimer();
        //this.startCountdown();
        if (this.platform.is("cordova")) {
            this.sendPush(this.customerID, "Driver has arrived");
        }
        else if (this.platform.is("desktop")) {
            this.pop.presentToast("Driver has arrived");
        }
        else if (this.platform.is("mobileweb")) {
            this.pop.presentToast("Driver has arrived");
        }
        this.isArrived = true;
        this.storage.set("isArrived", this.isArrived);
        this.remove_arrived = true;
        this.storage.set("remove_arrived", this.remove_arrived);
        this.eventProvider.ApprovedArrival(true, this.notify_ID);
        this.startTimer();
        this.isPiked = false;
        this.storage.set("isPiked", this.isPiked);
        this.Arrined = true;
        var currentdate = new Date();
        var datetime = this.paddNumber(currentdate.getMonth() + 1, "00") + "-" + this.paddNumber(currentdate.getDate(), "00") + "-" + currentdate.getFullYear() + " @ " + this.paddNumber((currentdate.getHours() + 24) % 12 || 12, "00") + ":" + ("0" + currentdate.getMinutes()).slice(-2) + " " + (currentdate.getHours() > 11 ? "PM" : "AM");
        this.pickArrived = datetime;
        this.storage.set("pickArrived", this.pickArrived);
    };
    HomePage.prototype.driveToPickup = function () {
        this.isArrived = true;
        this.storage.set("isArrived", this.isArrived);
        this.remove_arrived = false;
        this.storage.set("remove_arrived", this.remove_arrived);
    };
    HomePage.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
                _this.timeOver = false;
            }
            else {
                clearInterval(_this.interval);
                _this.timeOver = true;
            }
        }, 1000);
    };
    HomePage.prototype.moonTimer = function () {
        clearInterval(this.interval);
    };
    HomePage.prototype.OpenInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var obj, myAlert2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {
                            info: this.bull, accepted: this.pickArrived, arrived: this.isDrop,
                            distance: this.dProvider.distance2,
                        };
                        return [4 /*yield*/, this.modalCtrl.create({ component: _tripinfo_tripinfo_page__WEBPACK_IMPORTED_MODULE_23__["TripinfoPage"], componentProps: obj, })];
                    case 1:
                        myAlert2 = _a.sent();
                        return [4 /*yield*/, myAlert2.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, myAlert2.onDidDismiss().then(function (data) {
                                if (data.data == null) { //this.onChange(data); //this.ReturnHome(); 
                                }
                                else {
                                    _this.onChange(data); // this.ReturnHome(); // this.onChanger(data);
                                }
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ReturnHome = function () {
        this.platform.backButton.subscribe(function () {
            navigator["app"].exitApp();
        });
    };
    HomePage.prototype.call = function () {
        window.open("tel:" +
            this.customerPhone);
    };
    HomePage.prototype.clearConnection = function () {
        var _this = this;
        var customer = firebase__WEBPACK_IMPORTED_MODULE_5___default.a.database().ref("Customer/" + this.notify_ID);
        customer.remove().then(function () {
            _this.pop.hasPicked = false;
            _this.hasNotPicked = true;
            _this.isPickedDone = false;
            _this.storage.set("hasNotPicked", _this.hasNotPicked);
            _this.storage.set("pop.hasPicked", _this.pop.hasPicked);
        });
        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe();
        }
    };
    // showHelp(){
    // this.pop.alertMe('PLEASE MAKE SURE YOU HAVE GOOGLE MAPS INSTALLED ON
    // YOUR DEVICE.Click on start navigation, to drive to client. ') // }
    HomePage.prototype.onChanger = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: 'A charge Of $5 Will be Incurred',
                            buttons: [{
                                    text: 'Okay',
                                    role: 'cancel',
                                    handler: function () {
                                        var charge = 5;
                                        var r;
                                        _this.ph.getUserProfil().child(_this.ph.id).on('child_added', function (userProfileSnapshot) {
                                            r = userProfileSnapshot.val().credits;
                                            console.log(r);
                                        });
                                        var cred;
                                        _this.ph.getOtherProfile().child(_this.customeID).child('userInfo').on('value', function (snapshot) {
                                            cred = snapshot.val().credits;
                                        });
                                        _this.HideFunk();
                                        var yu = e;
                                        var currentdate = new Date();
                                        var datetime = (_this.paddNumber(currentdate.getMonth() + 1, "00")) +
                                            "-" +
                                            (_this.paddNumber(currentdate.getDate(), "00")) +
                                            "-" +
                                            currentdate.getFullYear() +
                                            " @ " +
                                            _this.paddNumber(((currentdate.getHours() + 24) % 12 || 12), "00") +
                                            ":" +
                                            ('0' + currentdate.getMinutes()).slice(-2) +
                                            " " +
                                            (currentdate.getHours() > 11 ? 'PM' : 'AM');
                                        if (_this.ph.name && datetime && _this.myGcode.locationName && _this.destination && _this.dProvider.price && yu)
                                            _this.ph.Cancelled(_this.client_Name, _this.ph.name, datetime, _this.myGcode.locationName, _this.destination, _this.ridePrice, yu, charge).then(function () {
                                                _this.timeOver = false;
                                                var m;
                                                if (r) {
                                                    var h = r;
                                                    m = h - 5;
                                                    _this.ph.UpdateCredits(m);
                                                }
                                                else {
                                                    _this.ph.UpdateCredits(-5);
                                                }
                                                var g;
                                                if (cred) {
                                                    g = cred + 5;
                                                    console.log(cred);
                                                    _this.ph.UpdateRiderCredits(g, _this.customeID);
                                                    _this.ph.getOtherProfile().child(_this.customeID).child('userInfo').off('value');
                                                }
                                                else {
                                                    _this.ph.UpdateRiderCredits(5, _this.customeID);
                                                    _this.ph.getOtherProfile().child(_this.customeID).child('userInfo').off('value');
                                                }
                                                _this.ph.CancelledMe2(_this.data.Client_username, _this.customeID, _this.ph.name, datetime, _this.myGcode.locationName, _this.destination, _this.ridePrice, yu, charge).then(function () { });
                                                _this.ph.CancelledMe(_this.data.Client_username, _this.ph.name, datetime, _this.myGcode.locationName, _this.destination, _this.ridePrice, yu, charge).then(function () { });
                                                _this.ph.getCancelledProfile().child('Cancelled/documents').on('value', function (snapshot) {
                                                    _this.items = [];
                                                    console.log(snapshot.val());
                                                    _this.currentCar = null;
                                                    snapshot.forEach(function (snap) {
                                                        console.log(snap.val());
                                                        if (snap.val().type == 'Driver')
                                                            _this.items.push({
                                                                key: snap.key,
                                                                text: snap.val().title,
                                                                type: snap.val().type,
                                                                status: snap.val().status
                                                            });
                                                        console.log(snap.val());
                                                        return false;
                                                    });
                                                });
                                            });
                                        console.log(_this.ph.name, datetime, _this.myGcode.locationName, _this.destination, _this.dProvider.price, yu);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                },
                            ],
                            backdropDismiss: false
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.RiderNoSHow = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: 'Are you sure you want to cancel?',
                            buttons: [{
                                    text: 'Okay',
                                    role: 'cancel',
                                    handler: function () {
                                        var charge = 5;
                                        var r;
                                        _this.ph.getUserProfil().child(_this.ph.id).on('child_added', function (userProfileSnapshot) {
                                            r = userProfileSnapshot.val().credits;
                                            console.log(r);
                                        });
                                        var cred;
                                        _this.ph.getOtherProfile().child(_this.customeID).child('userInfo').on('value', function (snapshot) {
                                            cred = snapshot.val().credits;
                                        });
                                        _this.HideFunk();
                                        var yu = 'Rider No Show';
                                        var currentdate = new Date();
                                        var datetime = (_this.paddNumber(currentdate.getMonth() + 1, "00")) +
                                            "-" +
                                            (_this.paddNumber(currentdate.getDate(), "00")) +
                                            "-" +
                                            currentdate.getFullYear() +
                                            " @ " +
                                            _this.paddNumber(((currentdate.getHours() + 24) % 12 || 12), "00") +
                                            ":" +
                                            ('0' + currentdate.getMinutes()).slice(-2) +
                                            " " +
                                            (currentdate.getHours() > 11 ? 'PM' : 'AM');
                                        if (_this.ph.name && datetime && _this.myGcode.locationName && _this.destination && _this.dProvider.price && yu)
                                            _this.ph.Cancelled(_this.data.Client_username, _this.ph.name, datetime, _this.myGcode.locationName, _this.destination, _this.ridePrice, yu, charge).then(function () {
                                                _this.timeOver = false;
                                                var m;
                                                if (r) {
                                                    var h = r;
                                                    m = h + 5;
                                                    _this.ph.UpdateCredits(m);
                                                }
                                                else {
                                                    _this.ph.UpdateCredits(5);
                                                }
                                                var g;
                                                if (cred) {
                                                    g = cred - 5;
                                                    console.log(cred);
                                                    _this.ph.UpdateRiderCredits(g, _this.customeID);
                                                    _this.ph.getOtherProfile().child(_this.customeID).child('userInfo').off('value');
                                                }
                                                else {
                                                    _this.ph.UpdateRiderCredits(-5, _this.customeID);
                                                    _this.ph.getOtherProfile().child(_this.customeID).child('userInfo').off('value');
                                                }
                                                _this.ph.CancelledMe2(_this.data.Client_username, _this.customeID, _this.ph.name, datetime, _this.myGcode.locationName, _this.destination, _this.ridePrice, yu, charge).then(function () { });
                                                _this.ph.CancelledMe(_this.data.Client_username, _this.ph.name, datetime, _this.myGcode.locationName, _this.destination, _this.ridePrice, yu, charge).then(function () { });
                                                _this.ph.getCancelledProfile().child('Cancelled/documents').on('value', function (snapshot) {
                                                    _this.items = [];
                                                    console.log(snapshot.val());
                                                    _this.currentCar = null;
                                                    snapshot.forEach(function (snap) {
                                                        console.log(snap.val());
                                                        if (snap.val().type == 'Driver')
                                                            _this.items.push({
                                                                key: snap.key,
                                                                text: snap.val().title,
                                                                type: snap.val().type,
                                                                status: snap.val().status
                                                            });
                                                        console.log(snap.val());
                                                        return false;
                                                    });
                                                });
                                            });
                                        console.log(_this.ph.name, datetime, _this.myGcode.locationName, _this.destination, _this.dProvider.price, yu);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                },
                            ],
                            backdropDismiss: false
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.paddNumber = function (number, paddingValue) {
        return String(paddingValue +
            number).slice(-paddingValue.length);
    };
    HomePage.prototype.onChange = function (e) {
        var _this = this;
        this.HideFunk();
        var yu = "Wrong Trip";
        var charge = 0;
        var currentdate = new Date();
        var datetime = (this.paddNumber(currentdate.getMonth() + 1, "00")) +
            "-" +
            (this.paddNumber(currentdate.getDate(), "00")) +
            "-" +
            currentdate.getFullYear() +
            " @ " +
            this.paddNumber(((currentdate.getHours() + 24) % 12 || 12), "00") +
            ":" +
            ('0' + currentdate.getMinutes()).slice(-2) +
            " " +
            (currentdate.getHours() > 11 ? 'PM' : 'AM');
        if (this.ph.name && datetime && this.myGcode.locationName && this.destination && this.dProvider.price && yu)
            this.ph.Cancelled(this.data.Client_username, this.ph.name, datetime, this.myGcode.locationName, this.destination, this.ridePrice, yu, charge).then(function () {
                // this.ph.UpdateCredits(5);
                _this.ph.CancelledMe(_this.data.Client_username, _this.ph.name, datetime, _this.myGcode.locationName, _this.destination, _this.ridePrice, yu, charge).then(function () {
                    _this.ph.CancelledMe2(_this.data.Client_username, _this.customeID, _this.ph.name, datetime, _this.myGcode.locationName, _this.destination, _this.ridePrice, yu, charge).then(function () { });
                });
                _this.ph.getCancelledProfile().child('Cancelled/documents').on('value', function (snapshot) {
                    _this.items = [];
                    console.log(snapshot.val());
                    _this.currentCar = null;
                    snapshot.forEach(function (snap) {
                        console.log(snap.val());
                        if (snap.val().type == 'Driver')
                            _this.items.push({
                                key: snap.key,
                                text: snap.val().title,
                                type: snap.val().type,
                                status: snap.val().status
                            });
                        console.log(snap.val());
                        return false;
                    });
                });
            });
        console.log(this.ph.name, datetime, this.myGcode.locationName, this.destination, this.dProvider.price, yu);
    };
    HomePage.prototype.Arrived = function () {
        if (this.platform.is("cordova")) {
            this.sendPush(this.customerID, "Driver has arrived");
        }
        else if (this.platform.is("desktop")) {
            this.pop.presentToast("Driver has arrived");
            console.log("NOTIFCATION IN DESKTOP");
        }
        else if (this.platform.is("mobileweb")) {
            this.pop.presentToast("Driver has arrived");
            console.log("NOTIFCATION IN mobileweb");
        }
        this.hasArrived = false;
        this.eventProvider.ApprovedArrival(true, this.notify_ID);
    };
    HomePage.prototype.sendPush = function (id, message) {
        var notificationObj = {
            include_player_ids: [id], contents: {
                en: message
            },
        };
        this.One.postNotification(notificationObj).then(function (good) {
            console.log("NOTIFICATIONS SENT");
        }, function (error) {
            console.log("ERROR SENDING NOTIFICATIONS " + error);
            //this.pop.presentToast("Push notification failed");
        });
    };
    HomePage.prototype.showFilters = function () {
        this.isNotDestinyOption = this.isNotDestinyOption ? false : true;
        this.scope = false;
        this.radius = false;
    };
    HomePage.prototype.Scope = function () {
        var _this = this;
        this.scope = true;
        var polyOptions = {
            strokeWeight: 0,
            fillOpacity: 0.45,
            editable: true
        };
        // Creates a drawing manager attached to the map that allows the user to draw
        // markers, lines, and shapes.
        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['polygon']
            },
            markerOptions: {
                draggable: true
            },
            polylineOptions: {
                editable: true
            },
            polygonOptions: polyOptions,
            map: this.thatmap
        });
        google.maps.event.addListener(this.drawingManager, 'overlaycomplete', function (e) {
            if (e.type != google.maps.drawing.OverlayType.MARKER) {
                // Switch back to non-drawing mode after drawing a shape.
                _this.drawingManager.setDrawingMode(null);
            }
        });
    };
    HomePage.prototype.Radius = function () {
        var _this = this;
        this.radius = true;
        var polyOptions = {
            strokeWeight: 0,
            fillOpacity: 0.45,
            editable: true
        };
        // Creates a drawing manager attached to the map that allows the user to draw
        // markers, lines, and shapes.
        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.CIRCLE,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['circle']
            },
            markerOptions: {
                draggable: true
            },
            polylineOptions: {
                editable: true
            },
            // rectangleOptions: polyOptions,
            // circleOptions: polyOptions,
            polygonOptions: polyOptions,
            map: this.thatmap
        });
        google.maps.event.addListener(this.drawingManager, 'overlaycomplete', function (e) {
            if (e.type != google.maps.drawing.OverlayType.MARKER) {
                // Switch back to non-drawing mode after drawing a shape.
                _this.drawingManager.setDrawingMode(null);
            }
        });
    };
    HomePage.prototype.pauseRide = function () {
        this.isPaused = true;
        this.eventProvider.pauseTrip(true, this.notify_ID);
        this.pausingCountdown();
        this.alerting("Trip Paused", "You have paused the ongoing trip\nPlease note there will be additional cost charged per minute whiles the trip is paused", "warning");
        this.storage.set("isPaused", this.isPaused);
    };
    HomePage.prototype.resumeRide = function () {
        this.isPaused = false;
        this.myVal.unsubscribe();
        this.eventProvider.pauseTrip(false, this.notify_ID);
        this.alerting("Trip Resumed", "You  have resume the trip \nEnjoy the ride", "success");
        this.storage.set("isPaused", this.isPaused);
    };
    HomePage.prototype.alerting = function (title, msg, icon) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_30___default.a.fire({
            title: title,
            text: msg,
            icon: icon,
            heightAuto: false
        });
    };
    HomePage.prototype.Pickup = function () {
        var _this = this;
        this.locationTracker.isPickedUp = false;
        this.eventProvider.ApprovePickup(true, this.notify_ID);
        //this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher);
        this.pop.hasPicked = true;
        this.isPickedDone = true;
        this.moonTimer();
        // this.hasNotPicked = false;
        if (this.platform.is("cordova")) {
            this.sendPush(this.customerID, "Driver has started trip");
        }
        else if (this.platform.is("desktop")) {
            this.pop.presentToast("Driver has started trip");
            console.log("NOTIFCATION IN DESKTOP");
        }
        else if (this.platform.is("mobileweb")) {
            this.pop.presentToast("Driver has started trip");
            console.log("NOTIFCATION IN mobileweb");
        }
        // this.locationTracker.hasTransactionEnded = false
        // clearTimeout(this.locationTracker.tracking_timeout)
        this.locationTracker.ClearDetection = true;
        //clearInterval(this.locationTracker.detectCarChange)
        this.myGcode.Reverse_Geocode(this.locationTracker.driver_lat, this.locationTracker.driver_lng, this.locationTracker.map1, false);
        if (this.platform.is('cordova')) {
            console.log('this detiny ' + this.destination);
            this.geocoder.geocode({ 'address': this.destination }, function (results, status) {
                if (status == 'OK') {
                    var position = results[0].geometry.location;
                    var lat = position.lat();
                    var lng = position.lng();
                    var urPos = new google.maps.LatLng(lat, lng);
                    var uLOC = new google.maps.LatLng(_this.locationTracker.driver_lat, _this.locationTracker.driver_lng);
                    console.log(lat, lng);
                    _this.showLoadRefresh();
                    _this.locationTracker.setMarkersDestination(lat, lng, _this.notify_ID);
                    _this.dProvider.calcDestRoute(_this.name, uLOC, urPos, _this.destination, _this.notify_ID);
                }
            });
        }
        else {
            var urPos = new google.maps.LatLng(5.4975394, 7.5029374);
            var uLOC = new google.maps.LatLng(this.locationTracker.driver_lat, this.locationTracker.driver_lng);
            this.dProvider.calcDestRoute(this.name, uLOC, urPos, this.destination, this.notify_ID);
            // this.pop.hideLoader();
        }
    };
    HomePage.prototype.Drop = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var urPos, uLOC, latlng, obj, payme;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.removeStorage();
                        if (this.locationTracker.watch_draw_poly) {
                            this.locationTracker.watch_draw_poly.unsubscribe();
                        }
                        urPos = new google.maps.LatLng(this.locationTracker.myLat, this.locationTracker.myLng);
                        uLOC = new google.maps.LatLng(this.locationTracker.driver_lat, this.locationTracker.driver_lng);
                        if (this.platform.is("cordova")) {
                            console.log("this detiny " + this.destination);
                            latlng = {
                                lat: this.locationTracker.myLat,
                                lng: this.locationTracker.myLng,
                            };
                            this.geocoder.geocode({ location: latlng }, function (results, status) {
                                if (status === "OK") {
                                    if (results[0]) {
                                        var desty = results[0].formatted_address;
                                        _this.dProvider.calcPrice(uLOC, urPos, desty, _this.notify_ID);
                                    }
                                    else { }
                                }
                                else {
                                    // window.alert('Geocoderfailed due to: ' + status);
                                }
                            });
                        }
                        obj = {
                            amount: this.data.Client_price,
                            pauseCost: this.pauseCost || 0,
                            payment_method: 0,
                            client_name: this.name
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _paymentpage_paymentpage_page__WEBPACK_IMPORTED_MODULE_20__["PaymentpagePage"], componentProps: obj,
                            })];
                    case 1:
                        payme = _a.sent();
                        return [4 /*yield*/, payme.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, payme.onDidDismiss().then(function () {
                                _this.Finalize();
                                _this.pop.showLoader("Please Wait...");
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.HideFunk = function () {
        this.canListen = true;
        this.c_dropped = true;
        this.c_picked = true;
        this.c_ended = true;
        this.c_added = true;
        this.hasTimed = true;
        this.shortMap = true;
        this.storage.set("shortMap", this.shortMap);
        //for toggline
        this.defaultMap;
        this.storage.set("canListen", this.canListen);
        this.locationTracker.isPickedUp = false;
        this.locationTracker.isDropped = false;
        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe();
        }
        this.ph.getUserAsClientInfo(this.notify_ID).off('child_removed');
        this.ph.getUserAsClientInfo(this.notify_ID).off('child_changed');
        this.ph.getUserAsClientInfo(this.notify_ID).off('child_added');
        this.ph.getUserAsClientInfo(this.notify_ID).off('value');
        this.locationTracker.hasCompleted = true;
        this.c_complete = true;
        this.clearConnection();
        this.clearAllNow();
        this.removeStorage();
    };
    HomePage.prototype.clearAllNow = function () {
        var _this = this;
        this.removeStorage();
        this.hasArrived = true;
        this.locationTracker.routeNumber = 0;
        this.timeLeft = 120;
        this.hour = 1;
        this.locationTracker.ClearDetection = true;
        this.jkl = true;
        this.locationTracker.isDestination = false;
        this.canIncur = false;
        this.timeOver = false;
        this.isArrived = false;
        this.storage.set("isArrived", this.isArrived);
        this.storage.set("jkl", this.jkl);
        this.hasPooled2 = true;
        this.hasPooled = true;
        this.clientClrCheck = false;
        this.PoolClrCheck = false;
        this.canEnd = true;
        this.canEnd2 = true;
        this.isInBooking = true;
        this.hasDone = true;
        this.hasEnded = true;
        this.storage.set("hasEnded", this.hasEnded);
        this.shortMap = true; //this is for toggle on hompage
        this.storage.set("shortMap", this.shortMap);
        this.defaultMap;
        this.canShowOther = false;
        this.itsOver = false;
        this.locationTracker.driver = false;
        this.OneSignal.isInDeepSh_t = false;
        if (this.platform.is("cordova")) {
            this.locationTracker.map1.setClickable(true);
        }
        this.hasNotPicked = true;
        this.storage.set("hasNotPicked", this.hasNotPicked);
        clearTimeout(this.locationTracker.tracking_timeout);
        this.locationTracker.canTrack_ = false;
        this.locationTracker.hasTransactionEnded = false;
        this.pop.hasPicked = false;
        this.storage.set("pop.hasPicked", this.pop.hasPicked);
        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe();
        }
        this.ph.getUserProfile().once("value", function (userProfileSnapshot) {
            _this.earnings = Math.floor(userProfileSnapshot.val().earnings);
        });
        this.isArrived = false;
        this.storage.set("isArrived", this.isArrived);
        this.locationTracker.hasCompleted = true;
        this.platform.ready().then(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(1000).subscribe(function () {
                _this.StartListeningForChanges(_this.notify_ID);
                _this.StartTracker();
                _this.locationTracker.refreshForChangesRemove();
                _this.isUser = true;
                _this.isPassengerCleared = true;
            });
            _this.subscription = _this.platform.backButton.subscribe(function () {
                // navigator["app"].exitApp();
            });
            _this.subscription.unsubscribe();
            _this.OneSignal.UpdateInfo(_this.locationTracker.driver_lat, _this.locationTracker.driver_lng, _this.ph.carType);
        });
    };
    HomePage.prototype.hasCompletedRide = function (driverSnap) {
        var _this = this;
        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe();
        }
        if (this.c_complete) {
            this.showLoadRefresh();
            this.ph.getUserProfile()
                .child("favorite").on("value", function (us) {
                console.log(us.val());
                if (us.val())
                    if (us.val().favoriteSeek) {
                    }
                _this.ph.getUserProfile().child("favorite").off("value");
            });
            this.ph
                .getUserProfile().child("tipper").on("value", function (us) {
                if (us.val())
                    if (us.val().tipped != null) {
                        _this.totalTipped = us.val().tipped;
                        console.log(_this.totalTipped);
                        if (_this.eventProvider.historyKey != null) {
                            _this.eventProvider.UpdateTip(_this.totalTipped).then(function () {
                                _this.ph.getUserProfile().child("tipper").remove();
                                //this.pop.presentToast('You Were Tipped.') 
                                //this.ph.getUserProfile().child('tipper').off('value');
                            });
                        }
                    }
            });
            this.ph
                .getUserProfile().child("rater").on("value", function (us) {
                console.log(us.val());
                if (us.val())
                    if (us.val().rating != null) {
                        _this.ph.getUserProfile().child("rater").remove();
                        //this.showMe3(us.val().rate); // this.pop.presentToast('You were Tipped')
                    }
                _this.ph.getUserProfile().child("rater").off("value");
            }); // this.pop.loading.dismiss(); 
            var currentdate = new Date();
            var datetime = this.paddNumber(currentdate.getMonth() + 1, "00") + "-" +
                this.paddNumber(currentdate.getDate(), "00") + "-" +
                currentdate.getFullYear() + " @ " +
                this.paddNumber((currentdate.getHours() + 24) % 12 || 12, "00") + ":" +
                ("0" + currentdate.getMinutes()).slice(-2) + " " + (currentdate.getHours()
                > 11 ? "PM" : "AM"); // this.showLoadRefresh() 
            this.ph
                .UpdateEarnings(driverSnap.Client_realPrice + this.totalTipped || 0)
                .then(function () {
                var toll = driverSnap.Client_toll || [];
                _this.eventProvider
                    .createHistory(driverSnap.Client_realPrice, driverSnap.Client_username, driverSnap.Client_price, datetime, driverSnap.Client_locationName, driverSnap.Client_destinationName, currentdate.getDay(), driverSnap.Client_Surcharges || 0, toll, driverSnap.Client_OutOfStateCharge, driverSnap.Client_ID, _this.totalTipped).then(function () {
                    _this.router.navigate(["rate", {
                            eventId: driverSnap.Client_ID, name: driverSnap.Client_username, lat: _this.locationTracker.driver_lat, lng: _this.locationTracker.driver_lng, cartype: _this.ph.carType, positive_Rating: driverSnap.Client_Positive_rating,
                            negative_Rating: driverSnap.Client_Negative_rating, price: driverSnap.Client_price - driverSnap.Client_DriverSurharge, time: _this.dProvider.time2, distance: _this.dProvider.distance,
                        },]).then(function () {
                        _this.locationTracker.map1.clear().then(function () {
                            console.log("CLEARED MAP AFTER RATING....");
                            _this.locationTracker.yellow_markersArray = [];
                            _this.locationTracker.driver_markersArray = [];
                            _this.locationTracker.client_markersArray = [];
                            _this.locationTracker.flag_markersArray = [];
                        });
                        // this.notify_ID = null;
                        _this.HideFunk();
                        _this.ph.getUserProfile().child("tipper").remove();
                        _this.Arrined = false;
                        //this.isPiked = true;
                        _this.timeOver = false;
                        //this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher)
                    });
                });
            });
            this.c_complete = false;
        }
    };
    HomePage.prototype.UserChanged = function (driverSnap) {
        if (driverSnap.Client_hasPaid) {
            this.pop.hideLoader();
        }
        if (driverSnap.Pool_ended) {
            this.pop.presentToast("Passenger Has Cancelled Request");
        }
        if (driverSnap.Client_PickedUp && this.c_picked) {
            this.c_picked = false;
            this.pop.hasPicked = true;
            this.storage.set("pop.hasPicked", this.pop.hasPicked);
        }
    };
    HomePage.prototype.UserRemoved = function () {
        this.showLoadRefresh();
        this.HideFunk();
    };
    HomePage.prototype.showLoadRefresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present().then(function () {
                                var myTimeout = setTimeout(function () {
                                    clearTimeout(myTimeout);
                                    loading.dismiss();
                                }, 300);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.NewClientFound = function (client_locationName, location, client_name, picture, destinationName, rate, ratingText, price) {
        this.name = client_name;
        this.picture = picture;
        this.location = client_locationName;
        this.destination = destinationName;
        this.rating = rate;
        this.ratingText = ratingText;
        this.ridePrice = price;
        this.isInBooking = false;
        //this.locationTracker.setMarkers(location) 
        this.storage.set("name", this.name);
        this.storage.set("destination", this.destination);
        var urPos = new google.maps.LatLng(location[0], location[1]);
        var uLOC = new google.maps.LatLng(this.locationTracker.driver_lat, this.locationTracker.driver_lng);
        // console.log(price)
        this.userLat = location[0];
        this.userLng = location[1];
        this.locationTracker.userLat = location[0];
        this.locationTracker.userLng = location[1];
        this.locationTracker.D_lat = location[0];
        this.locationTracker.D_lat = location[1];
        this.showLoadRefresh();
        this.dProvider.calcRoute(this.name, uLOC, urPos, this.location, false);
        this.myGcode.Reverse_Geocode(this.locationTracker.driver_lat, this.locationTracker.driver_lng, this.locationTracker.map1, false);
    };
    HomePage.prototype.gotoMap = function () {
        if (this.platform.is("android"))
            console.log("MAP IN ANDROID");
        var destination = this.locationTracker.driver_lat + "," + this.locationTracker.driver_lng;
        window.open("https://www.google.com/maps/search/?api=1&query=" + destination, '_system');
        if (this.platform.is("ios"))
            console.log("MAP IN IOS");
        var destination1 = this.locationTracker.driver_lat + "," + this.locationTracker.driver_lng;
        window.open("https://www.google.com/maps/search/?api=1&query=" + destination1, '_system');
        if (this.platform.is("mobileweb"))
            console.log("MAP IN MOBILE");
        var destination2 = this.locationTracker.driver_lat + "," +
            this.locationTracker.driver_lng;
        window.open("https://www.google.com/maps/search/?api=1&query=" + destination2, '_system');
    };
    HomePage.prototype.gotoDestination = function () {
        var _this = this;
        this.pop.showLoader(this.lp.translate()[0].e10);
        console.log("the result..........");
        this.geocoder.geocode({
            address: this.destination
        }, function (results, status) {
            if (status == "OK") {
                var position = results[0].geometry.location;
                var lat = position.lat();
                var lng = position.lng();
                console.log("This is the result..........");
                console.log("DESTINATION LAT && LNG.........." + lat, lng);
                // this.locationTracker.driver_lat = 5.614818
                // this.locationTracker.driver_lng = - 0.205874,
                _this.pop.hideLoader();
                if (_this.platform.is("android")) {
                    var destination = _this.locationTracker.driver_lat + "," + _this.locationTracker.driver_lng;
                    window.open("https://www.google.com/maps/search/?api=1&query=" + destination, '_system');
                }
                if (_this.platform.is("ios")) {
                    var destination = _this.locationTracker.driver_lat + "," + _this.locationTracker.driver_lng;
                    window.open("https://www.google.com/maps/search/?api=1&query=" + destination, '_system');
                }
                if (_this.platform.is("mobileweb")) {
                    var destination = _this.locationTracker.driver_lat + "," +
                        _this.locationTracker.driver_lng;
                    window.open("https://www.google.com/maps/search/?api=1&query=" + destination, '_system');
                }
            }
            else {
                _this.pop.showPimp(_this.lp.translate()[0].f1);
            }
        });
    };
    HomePage.prototype.HideFunc = function () {
        this.canListen = true;
        this.c_dropped = true;
        this.c_picked = true;
        this.c_ended = true;
        this.c_added = true;
        this.c_complete = true;
        this.storage.set("canListen", this.canListen);
    };
    HomePage.prototype.RejectJob = function () {
        var _this = this;
        this.canStart = false;
        this.storage.set("canStart", this.canStart);
        this.hasEnded = true;
        this.storage.set("hasEnded", this.hasEnded);
        this.shortMap = true; //this is for toggle on hompage
        this.storage.set("shortMap", this.shortMap);
        this.defaultMap;
        this.isPassengerCleared = false;
        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe();
        }
        this.platform.ready().then(function () {
            if (_this.notify_ID)
                _this.ph.getUserAsClientInfo(_this.notify_ID).remove();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(1200).subscribe(function () {
                _this.canStart = true;
                _this.jkl = true;
                _this.storage.set("canStart", _this.canStart);
                _this.storage.set("jkl", _this.jkl);
            });
            _this.OneSignal.UpdateInfo(_this.locationTracker.driver_lat, _this.locationTracker.driver_lng, _this.ph.carType);
        });
        if (this.myAlert) {
            this.myAlert.dismiss();
        }
    };
    HomePage.prototype.AcceptJob = function () {
        var _this = this;
        this.called = true;
        this.canListen = false;
        this.called_2 = true;
        this.storage.set("canListen", this.canListen);
        //this.watchPositionSubscription.clearWatch(this.mapTracker);
        this.watch.unsubscribe();
        this.dropped2 = true;
        this.done = true;
        this.connected = true;
        if (this.driverLoc != null) {
            this.locationTracker.hasTransactionEnded = true;
            this.locationTracker.canTrack_ = true;
            this.platform.ready().then(function () {
                _this.platform.backButton.subscribe(function () { return _this.pop.presentToast(_this.lp.translate()[0].e4); });
            });
            this.OneSignal.isInDeepSh_t = true;
            if (!this.ph.rating) {
                this.ph.rateText = "";
                this.ph.rating = 0;
            }
            if (!this.platform.is("cordova")) {
                console.log("removed now" + this.first_name, this.picture, this.notify_ID, 5.4975394, 7.5029374, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating, this.phonenumber);
                this.createUserInformation(this.first_name, this.picture, this.notify_ID, 5.4975394, 7.5029374, this.myGcode.locationName, 90, this.ph.plate, this.ph.seat, this.ph.carType, this.rating_positive, this.rating_negative, this.ph.rateText, this.phonenumber);
            }
            else {
                console.log("removed now"
                    + this.first_name, this.picture, this.notify_ID, this.locationTracker.driver_lat, this.locationTracker.driver_lng, this.myGcode.locationName, this.ph.plate, this.ph.carType, this.ph.rating, this.phonenumber);
                this.createUserInformation(this.first_name, this.picture, this.notify_ID, this.locationTracker.driver_lat, this.locationTracker.driver_lng, this.myGcode.locationName, this.locationTracker.driver_bearing, this.ph.plate, this.ph.seat, this.ph.carType, this.rating_positive, this.rating_negative, this.ph.rateText, this.phonenumber);
            }
        }
    };
    HomePage.prototype.createUserInformation = function (name, picture, id, lat, lng, locationName, driver_bearing, plate, seats, carType, positive, negative, rateText, number) {
        var _this = this;
        this.eventProvider
            .PushUserDetails(name, picture, id, lat, lng, locationName, plate, carType, positive, negative, rateText, number, this.notify_ID, driver_bearing).then(function () {
            _this.locationTracker.map1.clear().then(function () {
                _this.locationTracker.yellow_markersArray = [];
                _this.locationTracker.driver_markersArray = [];
                _this.locationTracker.client_markersArray = [];
                _this.locationTracker.flag_markersArray = [];
                _this.showLoadRefresh();
                //commenting all remove out
                _this.locationTracker.hasCompleted = false;
                _this.locationTracker.setMarkers(_this.notify_ID, _this.passenger_Lat, _this.passenger_Lng);
            });
        });
    };
    HomePage.prototype.Finalize = function () {
        var _this = this;
        this.removeStorage();
        if (this.platform.is("cordova")) {
            this.sendPush(this.customerID, "Trip Ended");
        }
        else if (this.platform.is("desktop")) {
            this.pop.presentToast("Trip Ended");
        }
        else if (this.platform.is("mobileweb")) {
            this.pop.presentToast("Trip Ended");
        }
        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe();
        }
        if (this.locationTracker.watch2) {
            this.locationTracker.watch2.unsubscribe();
        }
        if (this.watch) {
            this.watch.unsubscribe();
        }
        clearTimeout(this.locationTracker.tracking_timeout);
        this.locationTracker.canTrack_ = false;
        this.locationTracker.hasTransactionEnded = false;
        this.locationTracker.hasCompleted = true;
        this.eventProvider.ApproveDrop(true, this.notify_ID).then(function () {
            _this.isPassengerCleared = false;
            _this.c_dropped = false;
            _this.pop.hideLoader();
            // this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher
            _this.ph.getUserAsClientInfo(_this.notify_ID).off("child_removed");
            _this.ph.getUserAsClientInfo(_this.notify_ID).off("child_changed");
            _this.ph.getUserAsClientInfo(_this.notify_ID).off("child_added");
            _this.hasCompletedRide(_this.data); // this.clearDuty();
            _this.locationTracker.hasTransactionEnded = false;
            _this.OneSignal.isInDeepSh_t = false;
            _this.c_ended = false;
            _this.canEnd = false;
        });
    };
    HomePage.prototype.ConfirmDrop = function () {
        this.Drop();
        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe();
        }
        var currentdate = new Date();
        var datetime = this.paddNumber(currentdate.getMonth() + 1, "00") + "-" +
            this.paddNumber(currentdate.getDate(), "00") + "-" +
            currentdate.getFullYear() + " @ " +
            this.paddNumber((currentdate.getHours() + 24) % 12 || 12, "00") + ":" +
            ("0" + currentdate.getMinutes()).slice(-2) + " " + (currentdate.getHours()
            > 11 ? "PM" : "AM");
        this.isDrop = datetime;
        this.storage.set("isDrop", this.isDrop);
        this.removeStorage();
    };
    HomePage.prototype.ConfirmPickup = function () {
        this.isPiked = true;
        this.storage.set("isPiked", this.isPiked);
        this.Pickup();
    };
    HomePage.prototype.StartListeningForChanges = function (id) {
        var _this = this;
        console.log("<><><><App has started listening <><><><", this.canListen, id);
        if (this.canListen) {
            this.notify_ID = id;
            if (this.settings.current_ID) {
                this.storage.set("currentUserId", this.notify_ID).then(function () {
                });
            }
            this.eventProvider
                .getChatList(this.notify_ID).on("child_added", function (snapshot) {
                if (_this.canStart || _this.canStart == null) {
                    if (snapshot.val().Client_Message) {
                        _this.notification = true;
                        _this.pop.presentToast("New Message From Client");
                        _this.vibration.vibrate(3000);
                        _this.audioPlayer.play();
                    }
                }
            });
            this.ph.getUserAsClientInfo(this.notify_ID).on("child_added", function () {
                console.log("------>>> ANOTHER CLIENT ADDED --->>>.....", _this.notify_ID);
                _this.ph.getUserAsClientInfo(_this.notify_ID).once("value", function (driverSnap) {
                    _this.bull = driverSnap.val().client;
                    _this.storage.set("bull", _this.bull);
                    _this.customeID = driverSnap.val().client.Client_ID;
                    _this.storage.set("customeID", _this.customeID);
                    if (!driverSnap.val().Client_Driver_Reject) {
                        if (_this.jkl) {
                            if (driverSnap.val().client.Client_username) {
                                _this.Client_Added(driverSnap.val().client, driverSnap.val().client.Client_username);
                                _this.hasEnded = false;
                                _this.storage.set("hasEnded", _this.hasEnded);
                                _this.shortMap = false; //this is for toggle on hompage
                                _this.storage.set("shortMap", _this.shortMap);
                                _this.myListening.unsubscribe();
                            }
                            else {
                                _this.ph.getUserAsClientInfo(_this.notify_ID).remove();
                            }
                            _this.jkl = false;
                            _this.storage.set("jkl", _this.jkl);
                        }
                    }
                    if ((_this.canStart && driverSnap.val().client.Client_location) || (_this.canStart == null && driverSnap.val().client.Client_location)) {
                        _this.locationTracker.D_lat = driverSnap.val().client.Client_location[0];
                        _this.locationTracker.D_lat = driverSnap.val().client.Client_location[1];
                    }
                    _this.ph.getUserAsClientInfo(_this.notify_ID).off("value");
                });
            });
            this.ph.getUserAsClientInfo(this.notify_ID).on("child_changed", function () {
                _this.ph.getUserAsClientInfo(_this.notify_ID).once("value", function (driverSnap) {
                    if (driverSnap.val().client.Client_location != undefined) {
                        if ((_this.canStart && driverSnap.val().client.Client_location[0]) || (_this.canStart == null && driverSnap.val().client.Client_location)) {
                            _this.data = driverSnap.val().client;
                            _this.customeID = driverSnap.val().client.Client_ID;
                            _this.client_Name = _this.data.Client_username;
                            _this.UserChanged(driverSnap.val().client);
                            _this.locationTracker.D_lat = driverSnap.val().client.Client_location[0];
                            _this.locationTracker.D_lat = driverSnap.val().client.Client_location[1];
                            _this.newDestinationStop = _this.data.Client_new_destinationName;
                            _this.storage.set("data", _this.data);
                            _this.storage.set("newDestinationStop", _this.newDestinationStop);
                            _this.storage.set("customeID", _this.customeID);
                            _this.ph.getUserAsClientInfo(_this.notify_ID).off("value");
                        }
                    }
                });
            });
            this.ph.getUserAsClientInfo(this.notify_ID).on("child_removed", function () {
                if (_this.canStart || _this.canStart == null) {
                    if (_this.isPassengerCleared) {
                        _this.UserRemoved();
                        if (_this.isUser)
                            //this.pop.showPimp("Passenger Ended The Trip");
                            _this.myListening.unsubscribe();
                    }
                    else {
                        if (_this.myAlert) {
                            _this.RejectJob();
                            _this.myAlert = false;
                            // this.myAlert.dismiss();
                        }
                    }
                    _this.ph.getUserAsClientInfo(_this.notify_ID).off("value");
                }
            });
            //  this.canListen = false;
            //  this.storage.set("canListen", this.canListen);
        }
    };
    HomePage.prototype.Client_Added = function (rp, f) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var obj, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.NewClientFound(rp.Client_locationName, rp.Client_location, rp.Client_username, rp.Client_picture, rp.Client_destinationName, rp.Client_Rating, rp.Client_RatingText, rp.Client_price);
                        this.pauseTimer();
                        this.rateUp = rp.Client_Positive_rating;
                        this.rateDown = rp.Client_Negative_rating;
                        console.log("CLIENT INFORMATION::", rp);
                        console.log("PROVIDER TIME::", this.dProvider.time);
                        console.log("DISTANCE::", this.dProvider.distance2);
                        console.log("CHARGE::", rp.Client_price);
                        console.log(rp.Client_locationName, rp.Client_destinationName);
                        obj = {
                            info: f, loc: rp.Client_locationName, des: rp.Client_destinationName,
                            charge: rp.Client_price, up: rp.Client_Positive_rating, down: rp.Client_Negative_rating, status: rp.Client_status, time: this.dProvider.time, distance: this.dProvider.distance2,
                        };
                        _a = this;
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: src_app_pages_accept_accept_page__WEBPACK_IMPORTED_MODULE_21__["AcceptPage"], componentProps: obj,
                            })];
                    case 1:
                        _a.myAlert =
                            _b.sent();
                        return [4 /*yield*/, this.myAlert.present()];
                    case 2:
                        _b.sent();
                        if (rp.Client_pold) {
                            this.locationTracker.routeNumber = rp.Client_pold;
                            console.log(rp.Client_pold);
                        }
                        if (this.platform.is("cordova"))
                            this.vibration.vibrate(1000);
                        this.audioPlayer.play();
                        return [4 /*yield*/, this.myAlert.onDidDismiss().then(function (data) {
                                if (data.data == 1) {
                                    _this.ph
                                        .getUserAsClientInfo(_this.notify_ID).once("value", function (driverSnap) {
                                        _this.driverLoc = rp.Client_location;
                                        if (driverSnap.val() != null) {
                                            _this.AcceptJob();
                                            _this.canListen = false;
                                            _this.canStart = true;
                                            _this.storage.set("canStart", _this.canStart);
                                            _this.storage.set("canListen", _this.canListen);
                                            _this.passenger_Lat = rp.Client_location[0];
                                            _this.passenger_Lng = rp.Client_location[1];
                                            _this.rateUp = rp.Client_Positive_rating;
                                            _this.rateDown = rp.Client_Negative_rating;
                                            _this.mapSection = true;
                                            _this.canDO = true;
                                            _this.hideNews = true;
                                            _this.userHasPhone = true;
                                            _this.c_added = false;
                                            _this.customerPhone = rp.Client_phoneNumber;
                                            _this.destination = rp.Client_destinationName;
                                            _this.customerID = rp.Client_Notif;
                                            _this.storage.set("customerPhone", _this.customerPhone);
                                            _this.storage.set("destination", _this.destination);
                                        }
                                        else {
                                            _this.pop.presentToast("You Lost the Job");
                                            _this.RejectJob();
                                            _this.canStart = false;
                                            _this.canListen = true;
                                            _this.storage.set("canStart", _this.canStart);
                                            _this.storage.set("canListen", _this.canListen);
                                        }
                                        _this.ph.getUserAsClientInfo(_this.notify_ID).off("value");
                                    });
                                }
                                else {
                                    // this.ph.Reject(this.notify_ID);
                                    _this.RejectJob();
                                    _this.canStart = false;
                                    _this.storage.set("canStart", _this.canStart);
                                    _this.isUser = false;
                                }
                            })];
                    case 3:
                        _b.sent();
                        this.myAlert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Share Trip',
                            buttons: [{
                                    text: 'Share to Whatsapp',
                                    role: 'destructive',
                                    icon: 'logo-whatsapp',
                                    handler: function () {
                                        _this.whatsappShare();
                                    }
                                }, {
                                    text: 'Share to Others',
                                    icon: 'share',
                                    handler: function () {
                                        _this.FaceShare();
                                    }
                                }]
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
    HomePage.prototype.FaceShare = function () {
        var source = [this.locationTracker.driver_lat, this.locationTracker.driver_lng]; // source lat,long
        var destination = [this.destination_lat,
            this.destination_lng]; // dest lat,long
        var message = "Hi, i am going to " +
            destination +
            " from " + source;
        var subject = "My trip";
        var file = "https://www.google.com/maps/search/?api=1&query=" + destination;
        var link = "https://www.google.com/maps/search/?api=1&query=" + destination;
        this.share
            .share(message, subject, file, link)
            .then(function () { })
            .catch(function () { });
    };
    HomePage.prototype.whatsappShare = function () {
        var source = [this.locationTracker.driver_lat, this.locationTracker.driver_lng]; // source lat,long
        var destination = [this.destination_lat,
            this.destination_lng]; // dest lat,long
        var message = "Hi, i am going to " +
            destination +
            "from " + source;
        var link = "https://www.google.com/maps/search/?api=1&query=" + destination;
        this.share
            .shareViaWhatsApp(message, null, link)
            .then(function () {
        })
            .catch(function (err) {
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_29__["SocialSharing"] },
        { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_7__["Vibration"] },
        { type: _services_language_service__WEBPACK_IMPORTED_MODULE_13__["LanguageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"] },
        { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"] },
        { type: _services_location_tracker_service__WEBPACK_IMPORTED_MODULE_10__["LocationTrackerService"] },
        { type: _services_geocoder_service__WEBPACK_IMPORTED_MODULE_14__["GeocoderService"] },
        { type: _services_directionservice_service__WEBPACK_IMPORTED_MODULE_11__["DirectionserviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_onesignal_service__WEBPACK_IMPORTED_MODULE_12__["OnesignalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _services_pop_up_service__WEBPACK_IMPORTED_MODULE_15__["PopUpService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"] },
        { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_17__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_16__["EventService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_25__["CallNumber"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_26__["Geolocation"] },
        { type: _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_27__["Insomnia"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_28__["BackgroundMode"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_29__["SocialSharing"],
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_7__["Vibration"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_13__["LanguageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"],
            _services_location_tracker_service__WEBPACK_IMPORTED_MODULE_10__["LocationTrackerService"],
            _services_geocoder_service__WEBPACK_IMPORTED_MODULE_14__["GeocoderService"],
            _services_directionservice_service__WEBPACK_IMPORTED_MODULE_11__["DirectionserviceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_onesignal_service__WEBPACK_IMPORTED_MODULE_12__["OnesignalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_pop_up_service__WEBPACK_IMPORTED_MODULE_15__["PopUpService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_17__["ProfileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_16__["EventService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_25__["CallNumber"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_26__["Geolocation"],
            _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_27__["Insomnia"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_28__["BackgroundMode"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pages/paymentpage/paymentpage.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/paymentpage/paymentpage.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner-scroll {\n  left: 0px;\n  right: 0px;\n  top: calc(var(--offset-top) * -1);\n  bottom: calc(var(--offset-bottom) * -1);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: calc(var(--padding-top) + var(--offset-top));\n  padding-bottom: calc( var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom) );\n  position: absolute;\n  background: #cf0d0dc7 !important;\n  color: var(--color);\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.driverFound {\n  height: 47%;\n  width: 90%;\n  margin-left: 5%;\n  background: white;\n  position: absolute;\n  bottom: 30%;\n  z-index: 1;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.request-for-ride2 {\n  height: 200px;\n}\n\n.headSection {\n  background-color: #000000;\n  color: #fbb91d;\n  margin-top: -6%;\n  border-top-left-radius: 27px;\n  border-top-right-radius: 30px;\n  display: inline-block;\n  width: 100%;\n  height: 35%;\n  text-align: center;\n}\n\n.moveHeader {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  align-items: center;\n  margin-top: 20px;\n  margin-left: 0%;\n  margin-right: 0%;\n  width: 100%;\n}\n\n.centerText {\n  text-align: center;\n  font-size: 16px !important;\n}\n\n.resultContainer {\n  width: 100%;\n  position: relative;\n  left: 0;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding: 10px;\n  border-bottom: #bababa solid 1px;\n}\n\n.content-wrap,\n.img-wrapper {\n  display: inline-block;\n  margin-left: 50px;\n}\n\n#drivericonSize {\n  font-size: 70px !important;\n}\n\n.bookImage,\n.bookTitle,\n.bookPrice {\n  margin-left: 20px;\n}\n\n.resultContainer2 {\n  width: 100%;\n  position: relative;\n  left: 0;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding: 10px;\n}\n\n.content-wrap2 {\n  display: inline-block;\n}\n\n.dott {\n  width: 20px;\n  height: 20px;\n}\n\n.centerBtn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-button {\n  height: 50px;\n}\n\n.butt {\n  display: inline-table;\n  height: auto;\n  overflow: hidden;\n}\n\n.price {\n  color: #248cd2;\n  font-size: 1.67em;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-radius: 12px;\n}\n\n.price ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\n\n.location {\n  width: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.location p {\n  font-size: 1.3em;\n  height: auto;\n}\n\n.location ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: orange;\n}\n\n.date {\n  color: orange;\n  font-size: 1.47em;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n}\n\n.date ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: #248cd2;\n}\n\n.destination {\n  width: auto;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.destination ion-icon {\n  font-size: 0.8em;\n  padding: 5px;\n  color: darkslateblue;\n}\n\n#envelope {\n  height: auto;\n  width: 6em;\n}\n\n.bars {\n  margin-top: 0%;\n  padding: 12px;\n}\n\n.bars .poiter {\n  z-index: 5;\n  margin-left: 1%;\n  background: white;\n  border-left: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-right: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-top: 1px solid rgba(212, 212, 212, 0.93);\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n}\n\n.bars .bars-locate {\n  height: 50px;\n  width: 100%;\n  background: white;\n  border-left: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-right: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-top: 1px solid rgba(212, 212, 212, 0.93);\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n  margin-left: 0%;\n  z-index: 3;\n  border-radius: 12px;\n  overflow: hidden;\n  line-height: 20px;\n  font-size: 1.2em;\n  text-align: center;\n}\n\n.bars .bars-locate ion-icon {\n  position: absolute;\n  font-size: 1em;\n  left: 2%;\n  color: #0a64eb;\n  padding: 5px;\n}\n\n.bars .bars-destinate {\n  height: 100px;\n  width: 100%;\n  background: white;\n  margin: 3% 0 0 -50px;\n  margin-left: 0%;\n  z-index: 3;\n  border-left: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-right: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-top: 1px solid rgba(212, 212, 212, 0.93);\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n  overflow: hidden;\n  border-radius: 50px;\n  line-height: 20px;\n  font-size: 1.2em;\n  text-align: center;\n}\n\n.bars .bars-destinate ion-icon {\n  position: absolute;\n  font-size: 1em;\n  left: 2%;\n  padding: 5px;\n  color: #248cd2;\n}\n\n.bars .bars-price {\n  height: 50px;\n  width: 100%;\n  background: #ffffff;\n  border-left: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-right: 1.1px solid rgba(212, 212, 212, 0.93);\n  border-top: 1px solid rgba(212, 212, 212, 0.93);\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93);\n  z-index: 3;\n  border-radius: 12px;\n  overflow: hidden;\n  line-height: 20px;\n  font-size: 1.2em;\n  text-align: center;\n}\n\n.bars .bars-price ion-icon {\n  position: absolute;\n  font-size: 1em;\n  left: 2%;\n  color: #0a64eb;\n  padding: 5px;\n}\n\n#position {\n  text-align: center;\n  padding-left: 17px;\n}\n\n#whereto {\n  text-align: center;\n  padding-left: 17px;\n}\n\n#stuff {\n  color: #248cd2;\n  width: 100%;\n  height: 60% !important;\n  border: 1px solid #248cd2;\n}\n\n.no-scroll {\n  background: #0a64eb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy9wYXltZW50cGFnZS9wYXltZW50cGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BheW1lbnRwYWdlL3BheW1lbnRwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseURBQUE7RUFDQSw2RkFBQTtFQUdBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNwQkY7O0FEMkJBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ3hCRjs7QUQyQkE7RUFDRSxhQUFBO0FDeEJGOztBRDJCQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDeEJGOztBRDBCQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUN2QkY7O0FEMEJBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQ3ZCRjs7QUQwQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDdkJGOztBRDBCQTs7RUFFRSxxQkFBQTtFQUNBLGlCQUFBO0FDdkJGOztBRDBCQTtFQUNFLDBCQUFBO0FDdkJGOztBRDBCQTs7O0VBR0UsaUJBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUN2QkY7O0FEMEJBO0VBQ0UscUJBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUN2QkY7O0FEMEJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUN2QkY7O0FENEJBO0VBQ0UsWUFBQTtBQ3pCRjs7QUQyQkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtBQ3pCRjs7QUQ0QkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsbUJBQUE7QUMxQkY7O0FEMkJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ3pCSjs7QUQ2QkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzFCRjs7QUQyQkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUN6Qko7O0FENEJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQzFCSjs7QUQ4QkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7QUMzQkY7O0FENkJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzVCRjs7QUQ2QkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQzNCSjs7QUQrQkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQzVCRjs7QUQrQkE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQzVCRjs7QUQ4QkU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7QUM1Qko7O0FEK0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO0VBQ0EsbURBQUE7RUFDQSwrQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsZUFBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDOUJKOztBRGdDSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQzlCTjs7QURrQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtEQUFBO0VBQ0EsbURBQUE7RUFDQSwrQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hDSjs7QURrQ0k7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNoQ047O0FEb0NFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EsbURBQUE7RUFDQSwrQ0FBQTtFQUNBLGtEQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNuQ0o7O0FEcUNJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDbkNOOztBRHdDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNyQ0Y7O0FEd0NBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ3JDRjs7QUR3Q0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNyQ0Y7O0FEd0NBO0VBQ0UsbUJBQUE7QUNyQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50cGFnZS9wYXltZW50cGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL05FVyBERVNJR04gQ1NTXHJcblxyXG4vLyAuc2MtaW9uLW1vZGFsLW1kLWgge1xyXG4vLyAgIC0td2lkdGg6IDg2JTtcclxuLy8gICAtLW1pbi13aWR0aDogYXV0bztcclxuLy8gICAtLW1heC13aWR0aDogYXV0bztcclxuLy8gICAtLWhlaWdodDogNzAlICFpbXBvcnRhbnQ7XHJcbi8vICAgLS1taW4taGVpZ2h0OiBhdXRvO1xyXG4vLyAgIC0tbWF4LWhlaWdodDogYXV0bztcclxuLy8gICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4vLyAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4vLyAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xyXG4vLyAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcclxuLy8gICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLyB9XHJcblxyXG4uaW5uZXItc2Nyb2xsIHtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IGNhbGModmFyKC0tb2Zmc2V0LXRvcCkgKiAtMSk7XHJcbiAgYm90dG9tOiBjYWxjKHZhcigtLW9mZnNldC1ib3R0b20pICogLTEpO1xyXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1zdGFydCk7XHJcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1lbmQpO1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZGRpbmctdG9wKSArIHZhcigtLW9mZnNldC10b3ApKTtcclxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyhcclxuICAgIHZhcigtLXBhZGRpbmctYm90dG9tKSArIHZhcigtLWtleWJvYXJkLW9mZnNldCkgKyB2YXIoLS1vZmZzZXQtYm90dG9tKVxyXG4gICk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNjZjBkMGRjNyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vLyAuYmFja2dyb3VuZENvbG9yIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4vLyAgIGhlaWdodDogOTBweDtcclxuLy8gfVxyXG4uZHJpdmVyRm91bmQge1xyXG4gIGhlaWdodDogNDclO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDMwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LWZvci1yaWRlMiB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmhlYWRTZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmJiOTFkO1xyXG4gIG1hcmdpbi10b3A6IC02JTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1vdmVIZWFkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2VudGVyVGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVzdWx0Q29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogI2JhYmFiYSBzb2xpZCAxcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXAsXHJcbi5pbWctd3JhcHBlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4jZHJpdmVyaWNvblNpemUge1xyXG4gIGZvbnQtc2l6ZTogNzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9va0ltYWdlLFxyXG4uYm9va1RpdGxlLFxyXG4uYm9va1ByaWNlIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnJlc3VsdENvbnRhaW5lcjIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXAyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kb3R0IHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXJCdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gRU5EIE5FVyBERVNJR04gQ1NTXHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmJ1dHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgY29sb3I6IHJnYigzNiwgMTQwLCAyMTApO1xyXG4gIGZvbnQtc2l6ZTogMS42N2VtO1xyXG4gIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogcmdiKDM2LCAxNDAsIDIxMCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICB9XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICBjb2xvcjogb3JhbmdlO1xyXG4gIGZvbnQtc2l6ZTogMS40N2VtO1xyXG4gIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IHJnYigzNiwgMTQwLCAyMTApO1xyXG4gIH1cclxufVxyXG5cclxuLmRlc3RpbmF0aW9uIHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xyXG4gIH1cclxufVxyXG5cclxuI2VudmVsb3BlIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDZlbTtcclxufVxyXG5cclxuLmJhcnMge1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcblxyXG4gIC5wb2l0ZXIge1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1sZWZ0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICB9XHJcblxyXG4gIC5iYXJzLWxvY2F0ZSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1sZWZ0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuXHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBsZWZ0OiAyJTtcclxuICAgICAgY29sb3I6IHJnYigxMCwgMTAwLCAyMzUpO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmFycy1kZXN0aW5hdGUge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgbWFyZ2luOiAzJSAwIDAgLTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEuMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEuMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBsZWZ0OiAyJTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBjb2xvcjogcmdiKDM2LCAxNDAsIDIxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmFycy1wcmljZSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItbGVmdDogMS4xcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICAgIGJvcmRlci1yaWdodDogMS4xcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XHJcblxyXG4gICAgei1pbmRleDogMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgbGVmdDogMiU7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTAsIDEwMCwgMjM1KTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI3Bvc2l0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG59XHJcblxyXG4jd2hlcmV0byB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMTdweDtcclxufVxyXG5cclxuI3N0dWZmIHtcclxuICBjb2xvcjogcmdiKDM2LCAxNDAsIDIxMCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzYsIDE0MCwgMjEwKTtcclxufVxyXG5cclxuLm5vLXNjcm9sbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDEwLCAxMDAsIDIzNSk7XHJcbn1cclxuIiwiLmlubmVyLXNjcm9sbCB7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiBjYWxjKHZhcigtLW9mZnNldC10b3ApICogLTEpO1xuICBib3R0b206IGNhbGModmFyKC0tb2Zmc2V0LWJvdHRvbSkgKiAtMSk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1zdGFydCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZW5kKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFkZGluZy10b3ApICsgdmFyKC0tb2Zmc2V0LXRvcCkpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyggdmFyKC0tcGFkZGluZy1ib3R0b20pICsgdmFyKC0ta2V5Ym9hcmQtb2Zmc2V0KSArIHZhcigtLW9mZnNldC1ib3R0b20pICk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2NmMGQwZGM3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kcml2ZXJGb3VuZCB7XG4gIGhlaWdodDogNDclO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzAlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbn1cblxuLnJlcXVlc3QtZm9yLXJpZGUyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhlYWRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6ICNmYmI5MWQ7XG4gIG1hcmdpbi10b3A6IC02JTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb3ZlSGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZW50ZXJUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnJlc3VsdENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAjYmFiYWJhIHNvbGlkIDFweDtcbn1cblxuLmNvbnRlbnQtd3JhcCxcbi5pbWctd3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbiNkcml2ZXJpY29uU2l6ZSB7XG4gIGZvbnQtc2l6ZTogNzBweCAhaW1wb3J0YW50O1xufVxuXG4uYm9va0ltYWdlLFxuLmJvb2tUaXRsZSxcbi5ib29rUHJpY2Uge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnJlc3VsdENvbnRhaW5lcjIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbnRlbnQtd3JhcDIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kb3R0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmNlbnRlckJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uYnV0dCB7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJpY2Uge1xuICBjb2xvcjogIzI0OGNkMjtcbiAgZm9udC1zaXplOiAxLjY3ZW07XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5wcmljZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICMyNDhjZDI7XG59XG5cbi5sb2NhdGlvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmxvY2F0aW9uIHAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubG9jYXRpb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5kYXRlIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAxLjQ3ZW07XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG59XG4uZGF0ZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICMyNDhjZDI7XG59XG5cbi5kZXN0aW5hdGlvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmRlc3RpbmF0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcbn1cblxuI2VudmVsb3BlIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNmVtO1xufVxuXG4uYmFycyB7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmJhcnMgLnBvaXRlciB7XG4gIHotaW5kZXg6IDU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBib3JkZXItcmlnaHQ6IDEuMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbn1cbi5iYXJzIC5iYXJzLWxvY2F0ZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItbGVmdDogMS4xcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYm9yZGVyLXJpZ2h0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbiAgei1pbmRleDogMztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYXJzIC5iYXJzLWxvY2F0ZSBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxlZnQ6IDIlO1xuICBjb2xvcjogIzBhNjRlYjtcbiAgcGFkZGluZzogNXB4O1xufVxuLmJhcnMgLmJhcnMtZGVzdGluYXRlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDMlIDAgMCAtNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICB6LWluZGV4OiAzO1xuICBib3JkZXItbGVmdDogMS4xcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYm9yZGVyLXJpZ2h0OiAxLjFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFycyAuYmFycy1kZXN0aW5hdGUgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZWZ0OiAyJTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzI0OGNkMjtcbn1cbi5iYXJzIC5iYXJzLXByaWNlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWxlZnQ6IDEuMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIGJvcmRlci1yaWdodDogMS4xcHggc29saWQgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjkzKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45Myk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpO1xuICB6LWluZGV4OiAzO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhcnMgLmJhcnMtcHJpY2UgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZWZ0OiAyJTtcbiAgY29sb3I6ICMwYTY0ZWI7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuI3Bvc2l0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG59XG5cbiN3aGVyZXRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG59XG5cbiNzdHVmZiB7XG4gIGNvbG9yOiAjMjQ4Y2QyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI0OGNkMjtcbn1cblxuLm5vLXNjcm9sbCB7XG4gIGJhY2tncm91bmQ6ICMwYTY0ZWI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/paymentpage/paymentpage.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/paymentpage/paymentpage.page.ts ***!
  \*******************************************************/
/*! exports provided: PaymentpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentpagePage", function() { return PaymentpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







// import { ViewEncapsulation } from "@angular/compiler/src/core";
var PaymentpagePage = /** @class */ (function () {
    function PaymentpagePage(navCtrl, lp, settings, modal, pop, activatedRoute) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.modal = modal;
        this.pop = pop;
        this.activatedRoute = activatedRoute;
        this.payment_method = this.activatedRoute.snapshot.paramMap.get("payment_method");
        this.price = this.activatedRoute.snapshot.paramMap.get("amount");
        console.log("AMOUNT CLIENT IS PAYING");
        // this.amount = this.amount.toFixed(2);
    }
    PaymentpagePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AcceptPage");
    };
    PaymentpagePage.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentpagePage.prototype.acceptModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentpagePage.prototype.ngOnInit = function () { };
    PaymentpagePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] },
        { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaymentpagePage.prototype, "amount", void 0);
    PaymentpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-paymentpage",
            template: __webpack_require__(/*! raw-loader!./paymentpage.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/paymentpage/paymentpage.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./paymentpage.page.scss */ "./src/app/pages/paymentpage/paymentpage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
            src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_pop_up_service__WEBPACK_IMPORTED_MODULE_5__["PopUpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], PaymentpagePage);
    return PaymentpagePage;
}());



/***/ }),

/***/ "./src/app/pages/tripinfo/tripinfo.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/tripinfo/tripinfo.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-trip-info ion-card-header {\n  text-align: center;\n}\npage-trip-info .drive {\n  color: blue;\n}\npage-trip-info .price {\n  color: blue;\n}\npage-trip-info .date {\n  color: red;\n}\npage-trip-info .destination {\n  color: green;\n}\npage-trip-info h3 {\n  font-size: 1.2em;\n  color: blue;\n  text-align: center;\n}\npage-trip-info ion-item {\n  color: black;\n  border-bottom: 1px solid rgba(212, 212, 212, 0.93) !important;\n}\npage-trip-info h1 {\n  text-align: center;\n  font-size: 1.2em;\n  color: blue;\n}\npage-trip-info p {\n  font-size: 1.3em;\n  height: auto;\n  color: black;\n}\npage-trip-info h3 {\n  font-size: 1em;\n  color: #5a5a5a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhhL0lvbmljL0Vrb2RvdC9Ecml2ZXIvc3JjL2FwcC9wYWdlcy90cmlwaW5mby90cmlwaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RyaXBpbmZvL3RyaXBpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FDQUo7QURHRTtFQUNFLFdBQUE7QUNESjtBRElFO0VBQ0UsV0FBQTtBQ0ZKO0FES0U7RUFDRSxVQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFFO0VBRUUsWUFBQTtFQUNBLDZEQUFBO0FDUEo7QURVRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0FDVEo7QURZRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNWSjtBRGFFO0VBQ0UsY0FBQTtFQUVBLGNBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyaXBpbmZvL3RyaXBpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtdHJpcC1pbmZvIHtcclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmRyaXZlIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxuXHJcbiAgLnByaWNlIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5kZXN0aW5hdGlvbiB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgLy93aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcblxyXG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcclxuICB9XHJcblxyXG4gIC8vIC5oaXN0cyB7XHJcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuOTMpICFpbXBvcnRhbnQ7XHJcblxyXG4gIC8vICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAvLyAgIC8vcGFkZGluZzogNnB4O1xyXG4gIC8vICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAvLyAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgLy8gfVxyXG59XHJcbiIsInBhZ2UtdHJpcC1pbmZvIGlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnBhZ2UtdHJpcC1pbmZvIC5kcml2ZSB7XG4gIGNvbG9yOiBibHVlO1xufVxucGFnZS10cmlwLWluZm8gLnByaWNlIHtcbiAgY29sb3I6IGJsdWU7XG59XG5wYWdlLXRyaXAtaW5mbyAuZGF0ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5wYWdlLXRyaXAtaW5mbyAuZGVzdGluYXRpb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG5wYWdlLXRyaXAtaW5mbyBoMyB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiBibHVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5wYWdlLXRyaXAtaW5mbyBpb24taXRlbSB7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC45MykgIWltcG9ydGFudDtcbn1cbnBhZ2UtdHJpcC1pbmZvIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogYmx1ZTtcbn1cbnBhZ2UtdHJpcC1pbmZvIHAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiBibGFjaztcbn1cbnBhZ2UtdHJpcC1pbmZvIGgzIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNWE1YTVhO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tripinfo/tripinfo.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tripinfo/tripinfo.page.ts ***!
  \*************************************************/
/*! exports provided: TripinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripinfoPage", function() { return TripinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var TripinfoPage = /** @class */ (function () {
    function TripinfoPage(navCtrl, prof, lp, settings, eventSerEventService, modal, activatedRoute) {
        this.navCtrl = navCtrl;
        this.prof = prof;
        this.lp = lp;
        this.settings = settings;
        this.eventSerEventService = eventSerEventService;
        this.modal = modal;
        this.activatedRoute = activatedRoute;
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
        // info= this.info;
        // accepted= this.accepted1;
        // arrived= this.arrived1;
        // distance= this.distance1;
        this.riderPercents = [];
        this.driverPercents = [];
        this.math = Math;
        this.riderpaid = 0;
    }
    TripinfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.prof
            .getCompanies()
            .child("Cancelled/documents")
            .on("value", function (snapshot) {
            _this.items = [];
            snapshot.forEach(function (snap) {
                if (snap.val().type == "Driver")
                    _this.items.push({
                        status: snap.val().status,
                        text: snap.val().title,
                    });
                return false;
            });
        });
        var g = [];
        var f = [];
        var b = [];
        var k = [];
        var o = [];
        var c = [];
        var n = [];
        var sa;
        console.log("INFORMATION ICOMING", this.info);
        this.tolls = this.info.Client_toll;
        this.info.Client_realPrice;
        this.osc = this.info.Client_OutOfStateCharge;
        this.surcharges = this.info.Client_Surcharges;
        if (this.surcharges)
            for (var index = 0; index < this.surcharges.length; index++) {
                k.push(parseFloat(this.info.Client_Surcharges[index].price));
                var add = function (a, b) { return a + b; };
                var result = k.reduce(add);
                this.totalSurge = result;
                this.actual = this.info.Client_price - this.totalSurge;
                console.log(this.totalSurge);
                this.info.Client_Surcharges[index].price;
            }
        this.surcharges.forEach(function (element) {
            //if rider
            if (element.owner == 1) {
                //if percent
                if (element.bone == 1) {
                    var fo = (element.price / 100) * _this.info.Client_realPrice;
                    console.log(element.price);
                    o.push(fo);
                    var add1 = function (a, b) { return a + b; };
                    var result1 = o.reduce(add1);
                    _this.percentRider = result1;
                    console.log(_this.percentRider);
                }
                if (element.bone == 0) {
                    g.push(parseFloat(element.price));
                    var add = function (a, b) { return a + b; };
                    var result = g.reduce(add);
                    _this.flatRider = result;
                    console.log(result);
                    element.price;
                }
                _this.totalRiderSurge = _this.flatRider + _this.percentRider;
                console.log(_this.totalRiderSurge);
            }
            // this.riderpaid = (this.info.Client_price);
            _this.riderpaid = parseFloat(_this.info.Client_price).toFixed(2);
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
        // console.log(this.actual, g, this.currentEvent.surcharge[index].price);
        if (this.info.Client_toll)
            for (var index = 0; index < this.info.Client_toll.length; index++) {
                b.push(this.info.Client_toll[index].tagCost);
                var add = function (a, b) { return a + b; };
                var result = b.reduce(add);
                this.total = result;
                console.log(this.total, g);
            }
        this.driverMade = (this.riderpaid - this.totalDriverSurge).toFixed(2);
    };
    TripinfoPage.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.dismiss(null)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TripinfoPage.prototype.onChange = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.dismiss(e)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TripinfoPage.prototype.ngOnInit = function () {
        console.log("INFORMATION ICOMING", this.info);
    };
    TripinfoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] },
        { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
        { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TripinfoPage.prototype, "info", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TripinfoPage.prototype, "accepted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TripinfoPage.prototype, "arrived", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TripinfoPage.prototype, "distance", void 0);
    TripinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tripinfo",
            template: __webpack_require__(/*! raw-loader!./tripinfo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tripinfo/tripinfo.page.html"),
            styles: [__webpack_require__(/*! ./tripinfo.page.scss */ "./src/app/pages/tripinfo/tripinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"],
            src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
            src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], TripinfoPage);
    return TripinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map