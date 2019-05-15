(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-card-card-module"],{

/***/ "./src/app/pages/card/card.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.module.ts ***!
  \*******************************************/
/*! exports provided: CardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageModule", function() { return CardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.page */ "./src/app/pages/card/card.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]
    }
];
var CardPageModule = /** @class */ (function () {
    function CardPageModule() {
    }
    CardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]]
        })
    ], CardPageModule);
    return CardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/card/card.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"Cards\"></app-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-card mode=\"ios\">\r\n        <ion-card-header color=\"primary\">\r\n          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\r\n          <ion-card-title>Card Title</ion-card-title>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>\r\n          Keep close to Nature's heart... and break clear away, once in awhile,\r\n          and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n        </ion-card-content>\r\n      </ion-card>\r\n      \r\n      <ion-card>\r\n        <ion-item color=\"danger\">\r\n          <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\r\n          <ion-label>ion-item in a card, icon left, button right</ion-label>\r\n          <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\r\n        </ion-item>\r\n      \r\n        <ion-card-content>\r\n          This is content, without any paragraph or header tags,\r\n          within an ion-card-content element.\r\n        </ion-card-content>\r\n      </ion-card>\r\n      \r\n      <ion-card>\r\n        <ion-item href=\"#\" class=\"activated\">\r\n          <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\r\n          <ion-label>Card Link Item 1 .activated</ion-label>\r\n        </ion-item>\r\n      \r\n        <ion-item href=\"#\">\r\n          <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\r\n          <ion-label>Card Link Item 2</ion-label>\r\n        </ion-item>\r\n      \r\n        <ion-item class=\"activated\">\r\n          <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\r\n          <ion-label>Card Button Item 1 .activated</ion-label>\r\n        </ion-item>\r\n      \r\n        <ion-item>\r\n          <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\r\n          <ion-label>Card Button Item 2</ion-label>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/card/card.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmQvY2FyZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/card/card.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/card/card.page.ts ***!
  \*****************************************/
/*! exports provided: CardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPage", function() { return CardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardPage = /** @class */ (function () {
    function CardPage() {
    }
    CardPage.prototype.ngOnInit = function () {
    };
    CardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.page.html */ "./src/app/pages/card/card.page.html"),
            styles: [__webpack_require__(/*! ./card.page.scss */ "./src/app/pages/card/card.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardPage);
    return CardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-card-card-module.js.map