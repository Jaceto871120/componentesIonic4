(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-reorder-list-reorder-module"],{

/***/ "./src/app/pages/list-reorder/list-reorder.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-reorder/list-reorder.module.ts ***!
  \***********************************************************/
/*! exports provided: ListReorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReorderPageModule", function() { return ListReorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_reorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-reorder.page */ "./src/app/pages/list-reorder/list-reorder.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _list_reorder_page__WEBPACK_IMPORTED_MODULE_6__["ListReorderPage"]
    }
];
var ListReorderPageModule = /** @class */ (function () {
    function ListReorderPageModule() {
    }
    ListReorderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_list_reorder_page__WEBPACK_IMPORTED_MODULE_6__["ListReorderPage"]]
        })
    ], ListReorderPageModule);
    return ListReorderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/list-reorder/list-reorder.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-reorder/list-reorder.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>List - Reorder</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n\r\n    <ion-reorder-group [disabled]=\"false\"\r\n                        (ionItemReorder)=\"reorder($event)\">\r\n      <ion-item *ngFor=\"let personaje of personajes\">\r\n        <ion-label>{{ personaje }}</ion-label>\r\n        <ion-reorder slot=\"end\"></ion-reorder>\r\n      </ion-item>\r\n    </ion-reorder-group>\r\n    \r\n  </ion-list>\r\n\r\n  <ion-button expand=\"full\" (click)=\"onClick()\">\r\n    Guardar\r\n  </ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/list-reorder/list-reorder.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-reorder/list-reorder.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtcmVvcmRlci9saXN0LXJlb3JkZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/list-reorder/list-reorder.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/list-reorder/list-reorder.page.ts ***!
  \*********************************************************/
/*! exports provided: ListReorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReorderPage", function() { return ListReorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListReorderPage = /** @class */ (function () {
    function ListReorderPage() {
        this.personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];
    }
    ListReorderPage.prototype.ngOnInit = function () {
    };
    ListReorderPage.prototype.reorder = function (event) {
        console.log(event);
        var itemMover = this.personajes.splice(event.detail.from, 1)[0];
        this.personajes.splice(event.detail.to, 0, itemMover);
        event.detail.complete();
    };
    ListReorderPage.prototype.onClick = function () {
        console.log(this.personajes);
    };
    ListReorderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-reorder',
            template: __webpack_require__(/*! ./list-reorder.page.html */ "./src/app/pages/list-reorder/list-reorder.page.html"),
            styles: [__webpack_require__(/*! ./list-reorder.page.scss */ "./src/app/pages/list-reorder/list-reorder.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListReorderPage);
    return ListReorderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-reorder-list-reorder-module.js.map