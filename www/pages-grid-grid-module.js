(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grid-grid-module"],{

/***/ "./src/app/pages/grid/grid.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/grid/grid.module.ts ***!
  \*******************************************/
/*! exports provided: GridPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPageModule", function() { return GridPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid.page */ "./src/app/pages/grid/grid.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _grid_page__WEBPACK_IMPORTED_MODULE_6__["GridPage"]
    }
];
var GridPageModule = /** @class */ (function () {
    function GridPageModule() {
    }
    GridPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_grid_page__WEBPACK_IMPORTED_MODULE_6__["GridPage"]]
        })
    ], GridPageModule);
    return GridPageModule;
}());



/***/ }),

/***/ "./src/app/pages/grid/grid.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/grid/grid.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"Grid - Row\"></app-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let c of [1,1,1,1,1,1,1,1,1,1,1,1]\"\r\n                size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n      <ion-card>\r\n        <ion-img src=\"/assets/shapes.svg\"></ion-img>\r\n\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\r\n          <ion-card-title>Card Title</ion-card-title>\r\n        </ion-card-header>\r\n        \r\n        <ion-card-content>\r\n          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, neque ad dolor eius obcaecati vero repellat ipsa error harum vitae beatae, natus at molestiae doloremque mollitia officia est tenetur iusto.\r\n        </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/grid/grid.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/grid/grid.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyaWQvZ3JpZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/grid/grid.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/grid/grid.page.ts ***!
  \*****************************************/
/*! exports provided: GridPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPage", function() { return GridPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridPage = /** @class */ (function () {
    function GridPage() {
    }
    GridPage.prototype.ngOnInit = function () {
    };
    GridPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.page.html */ "./src/app/pages/grid/grid.page.html"),
            styles: [__webpack_require__(/*! ./grid.page.scss */ "./src/app/pages/grid/grid.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridPage);
    return GridPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-grid-grid-module.js.map