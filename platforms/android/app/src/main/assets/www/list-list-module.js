(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/pages/list/list.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.module.ts ***!
  \*******************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/list/list.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
    }
];
var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/list/list.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"Listas Slidding\"></app-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list #lista>\r\n      <ion-item-sliding *ngFor=\"let usuario of usuarios | async\">\r\n        <ion-item>\r\n          <ion-label>\r\n            <h3>{{ usuario.name }}</h3>\r\n            <p>\r\n              {{ usuario.email }}\r\n            </p>\r\n            </ion-label>\r\n            <ion-label slot=\"end\" text-right>{{ usuario.phone}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-options side=\"start\">\r\n          <!--\r\n          <ion-item-option (click)=\"favorite(item)\">Favorite</ion-item-option>\r\n          <ion-item-option color=\"danger\" (click)=\"share(item)\">Share</ion-item-option>\r\n          -->\r\n          <ion-item-option (click)=\"favorite(usuario)\">\r\n            <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\r\n          </ion-item-option>\r\n          <ion-item-option color=\"secondary\" (click)=\"share(usuario)\">\r\n            <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\r\n          </ion-item-option>\r\n          \r\n        </ion-item-options>\r\n    \r\n        <ion-item-options side=\"end\">\r\n            <ion-item-option color=\"danger\" (click)=\"borrar(usuario)\">\r\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n            </ion-item-option>\r\n        </ion-item-options>\r\n\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/list/list.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/list/list.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/list/list.page.ts ***!
  \*****************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ListPage = /** @class */ (function () {
    function ListPage(dataService, toastController) {
        this.dataService = dataService;
        this.toastController = toastController;
    }
    ListPage.prototype.ngOnInit = function () {
        this.usuarios = this.dataService.getUsers();
    };
    ListPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                            color: 'primary'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListPage.prototype.favorite = function (user) {
        // console.log('favorite', user);
        this.presentToast('Guardo en favoritos.');
        this.lista.closeSlidingItems();
    };
    ListPage.prototype.share = function (user) {
        // console.log('share', user);
        this.presentToast('Compartio.');
        this.lista.closeSlidingItems();
    };
    ListPage.prototype.borrar = function (user) {
        // console.log('borrar', user);
        this.presentToast('Borro el usuario.');
        this.lista.closeSlidingItems();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lista'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
    ], ListPage.prototype, "lista", void 0);
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/pages/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map