(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fab-fab-module"],{

/***/ "./src/app/pages/fab/fab.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/fab/fab.module.ts ***!
  \*****************************************/
/*! exports provided: FabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPageModule", function() { return FabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab.page */ "./src/app/pages/fab/fab.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _fab_page__WEBPACK_IMPORTED_MODULE_6__["FabPage"]
    }
];
var FabPageModule = /** @class */ (function () {
    function FabPageModule() {
    }
    FabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_fab_page__WEBPACK_IMPORTED_MODULE_6__["FabPage"]]
        })
    ], FabPageModule);
    return FabPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fab/fab.page.html":
/*!*****************************************!*\
  !*** ./src/app/pages/fab/fab.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"Fab\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"facebook\"><ion-icon name=\"logo-facebook\"></ion-icon></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"><ion-icon name=\"logo-twitter\"></ion-icon></ion-fab-button>\r\n      <ion-fab-button color=\"github\"><ion-icon name=\"logo-github\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n    <ion-fab-list side=\"start\">\r\n      <ion-fab-button color=\"vimeo\"><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n      <ion-fab-button color=\"google\"><ion-icon name=\"logo-google\"></ion-icon></ion-fab-button>\r\n      <ion-fab-button color=\"youtube\"><ion-icon name=\"logo-youtube\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n  </ion-fab>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let i of data; let index = index\">\r\n      Item {{ index + 1 }}\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-title>Este es el Footer</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/fab/fab.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/fab/fab.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhYi9mYWIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/fab/fab.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/fab/fab.page.ts ***!
  \***************************************/
/*! exports provided: FabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPage", function() { return FabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FabPage = /** @class */ (function () {
    function FabPage() {
        this.data = Array(100);
    }
    FabPage.prototype.ngOnInit = function () {
    };
    FabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fab',
            template: __webpack_require__(/*! ./fab.page.html */ "./src/app/pages/fab/fab.page.html"),
            styles: [__webpack_require__(/*! ./fab.page.scss */ "./src/app/pages/fab/fab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FabPage);
    return FabPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fab-fab-module.js.map