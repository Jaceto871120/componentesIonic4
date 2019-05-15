(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-searchbar-searchbar-module"],{

/***/ "./src/app/pages/searchbar/searchbar.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchbarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPageModule", function() { return SearchbarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchbar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchbar.page */ "./src/app/pages/searchbar/searchbar.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _searchbar_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarPage"]
    }
];
var SearchbarPageModule = /** @class */ (function () {
    function SearchbarPageModule() {
    }
    SearchbarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
            ],
            declarations: [_searchbar_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarPage"]]
        })
    ], SearchbarPageModule);
    return SearchbarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/searchbar/searchbar.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Searchbar</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-searchbar placeholder=\"Buscar\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\"></ion-searchbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let album of albums | filtro:textoBuscar:'title'\">\r\n      <ion-label>{{album.title}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/searchbar/searchbar.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaGJhci9zZWFyY2hiYXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/searchbar/searchbar.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar.page.ts ***!
  \***************************************************/
/*! exports provided: SearchbarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPage", function() { return SearchbarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");



var SearchbarPage = /** @class */ (function () {
    function SearchbarPage(dataService) {
        this.dataService = dataService;
        this.albums = [];
        this.textoBuscar = '';
    }
    SearchbarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAlbums().subscribe(function (albums) {
            console.log(albums);
            _this.albums = albums;
        });
    };
    SearchbarPage.prototype.onSearchChange = function (event) {
        console.log(event);
        this.textoBuscar = event.detail.value;
    };
    SearchbarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! ./searchbar.page.html */ "./src/app/pages/searchbar/searchbar.page.html"),
            styles: [__webpack_require__(/*! ./searchbar.page.scss */ "./src/app/pages/searchbar/searchbar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SearchbarPage);
    return SearchbarPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-searchbar-searchbar-module.js.map