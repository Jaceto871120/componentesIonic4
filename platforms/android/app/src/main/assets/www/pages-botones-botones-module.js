(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-botones-botones-module"],{

/***/ "./src/app/pages/botones/botones.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.module.ts ***!
  \*************************************************/
/*! exports provided: BotonesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPageModule", function() { return BotonesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _botones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./botones.page */ "./src/app/pages/botones/botones.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]
    }
];
var BotonesPageModule = /** @class */ (function () {
    function BotonesPageModule() {
    }
    BotonesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]]
        })
    ], BotonesPageModule);
    return BotonesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/botones/botones.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"Botones\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- Default -->\r\n<ion-button>Default</ion-button>\r\n\r\n<!-- Anchor -->\r\n<ion-button href=\"#\">Anchor</ion-button>\r\n\r\n<!-- Colors -->\r\n<ion-button color=\"primary\">Primary</ion-button>\r\n<ion-button color=\"secondary\">Secondary</ion-button>\r\n<ion-button color=\"tertiary\">Tertiary</ion-button>\r\n<ion-button color=\"success\">Success</ion-button>\r\n<ion-button color=\"warning\">Warning</ion-button>\r\n<ion-button color=\"danger\">Danger</ion-button>\r\n<ion-button color=\"light\">Light</ion-button>\r\n<ion-button color=\"medium\">Medium</ion-button>\r\n<ion-button color=\"dark\">Dark</ion-button>\r\n\r\n<!-- Expand -->\r\n<ion-button expand=\"full\">Full Button</ion-button>\r\n<ion-button expand=\"block\">Block Button</ion-button>\r\n\r\n<!-- Round -->\r\n<ion-button shape=\"round\">Round Button</ion-button>\r\n\r\n<!-- Fill -->\r\n<ion-button expand=\"full\" fill=\"outline\">Outline + Full</ion-button>\r\n<ion-button expand=\"block\" fill=\"outline\">Outline + Block</ion-button>\r\n<ion-button shape=\"round\" fill=\"outline\">Outline + Round</ion-button>\r\n\r\n<!-- Icons -->\r\n<ion-button>\r\n  <ion-icon slot=\"start\" name=\"star\"></ion-icon>\r\n  Left Icon\r\n</ion-button>\r\n\r\n<ion-button>\r\n  Right Icon\r\n  <ion-icon slot=\"end\" name=\"star\"></ion-icon>\r\n</ion-button>\r\n\r\n<ion-button>\r\n  <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\r\n</ion-button>\r\n\r\n<!-- Sizes -->\r\n<ion-button size=\"large\">Large</ion-button>\r\n<ion-button>Default</ion-button>\r\n<ion-button size=\"small\">Small</ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/botones/botones.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvdG9uZXMvYm90b25lcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/botones/botones.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/botones/botones.page.ts ***!
  \***********************************************/
/*! exports provided: BotonesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPage", function() { return BotonesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BotonesPage = /** @class */ (function () {
    function BotonesPage() {
    }
    BotonesPage.prototype.ngOnInit = function () {
    };
    BotonesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-botones',
            template: __webpack_require__(/*! ./botones.page.html */ "./src/app/pages/botones/botones.page.html"),
            styles: [__webpack_require__(/*! ./botones.page.scss */ "./src/app/pages/botones/botones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BotonesPage);
    return BotonesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-botones-botones-module.js.map