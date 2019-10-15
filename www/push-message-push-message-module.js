(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["push-message-push-message-module"],{

/***/ "./src/app/push-message/push-message.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/push-message/push-message.module.ts ***!
  \*****************************************************/
/*! exports provided: PushMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushMessagePageModule", function() { return PushMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _push_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./push-message.page */ "./src/app/push-message/push-message.page.ts");







var routes = [
    {
        path: '',
        component: _push_message_page__WEBPACK_IMPORTED_MODULE_6__["PushMessagePage"]
    }
];
var PushMessagePageModule = /** @class */ (function () {
    function PushMessagePageModule() {
    }
    PushMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_push_message_page__WEBPACK_IMPORTED_MODULE_6__["PushMessagePage"]]
        })
    ], PushMessagePageModule);
    return PushMessagePageModule;
}());



/***/ }),

/***/ "./src/app/push-message/push-message.page.html":
/*!*****************************************************!*\
  !*** ./src/app/push-message/push-message.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Push Message</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Congratulation!</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      You get price from our sponsor:\n      <h2>{{price}}</h2>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/push-message/push-message.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/push-message/push-message.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1c2gtbWVzc2FnZS9wdXNoLW1lc3NhZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/push-message/push-message.page.ts":
/*!***************************************************!*\
  !*** ./src/app/push-message/push-message.page.ts ***!
  \***************************************************/
/*! exports provided: PushMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushMessagePage", function() { return PushMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PushMessagePage = /** @class */ (function () {
    function PushMessagePage(route) {
        this.route = route;
        this.price = '';
    }
    PushMessagePage.prototype.ngOnInit = function () {
        this.price = this.route.snapshot.params['price'];
    };
    PushMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-push-message',
            template: __webpack_require__(/*! ./push-message.page.html */ "./src/app/push-message/push-message.page.html"),
            styles: [__webpack_require__(/*! ./push-message.page.scss */ "./src/app/push-message/push-message.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PushMessagePage);
    return PushMessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=push-message-push-message-module.js.map