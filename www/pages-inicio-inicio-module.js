(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"],{

/***/ "./src/app/pages/inicio/inicio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");







var routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]
    }
];
var InicioPageModule = /** @class */ (function () {
    function InicioPageModule() {
    }
    InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
        })
    ], InicioPageModule);
    return InicioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <!--\r\n      <ion-button (click)=\"toggleMenu()\">\r\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n      -->\r\n\r\n      <ion-menu-button color=\"primary\"\r\n                        menu=\"primerMenu\"></ion-menu-button>\r\n      \r\n    </ion-buttons>\r\n\r\n    <ion-title color=\"primary\">Componentes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let c of componentes | async\" routerLink=\"{{ c.redirectTo }}\" detail>\r\n      <ion-icon slot=\"start\" name=\"{{ c.icon }}\" color=\"primary\"></ion-icon>\r\n      <ion-label>{{ c.name }}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n<!--\r\n  <ion-button routerLink=\"/alert\">Alert</ion-button>\r\n  <ion-button routerLink=\"/action-sheet\">Action-sheet</ion-button>\r\n-->\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




var InicioPage = /** @class */ (function () {
    function InicioPage(menu, dataService) {
        this.menu = menu;
        this.dataService = dataService;
    }
    InicioPage.prototype.ngOnInit = function () {
        this.componentes = this.dataService.getMenuOpts();
    };
    InicioPage.prototype.toggleMenu = function () {
        this.menu.toggle();
    };
    InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.page.html */ "./src/app/pages/inicio/inicio.page.html"),
            styles: [__webpack_require__(/*! ./inicio.page.scss */ "./src/app/pages/inicio/inicio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], InicioPage);
    return InicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-inicio-inicio-module.js.map