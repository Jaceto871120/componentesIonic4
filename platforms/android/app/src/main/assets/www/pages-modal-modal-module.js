(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-modal-module"],{

/***/ "./src/app/pages/modal-info/modal-info.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.module.ts ***!
  \*******************************************************/
/*! exports provided: ModalInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoPageModule", function() { return ModalInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-info.page */ "./src/app/pages/modal-info/modal-info.page.ts");






var ModalInfoPageModule = /** @class */ (function () {
    function ModalInfoPageModule() {
    }
    ModalInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            declarations: [_modal_info_page__WEBPACK_IMPORTED_MODULE_5__["ModalInfoPage"]]
        })
    ], ModalInfoPageModule);
    return ModalInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/modal-info/modal-info.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title text-capitalize>{{nombre}} - {{pais}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-button expand=\"full\" (click)=\"salirSinArgumentos()\">\r\n    Salir sin argumentos\r\n  </ion-button>\r\n\r\n  <ion-button color=\"secondary\" expand=\"full\" (click)=\"salirConArgumentos()\">\r\n    Salir con argumentos\r\n  </ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/modal-info/modal-info.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsLWluZm8vbW9kYWwtaW5mby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/modal-info/modal-info.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.page.ts ***!
  \*****************************************************/
/*! exports provided: ModalInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoPage", function() { return ModalInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ModalInfoPage = /** @class */ (function () {
    function ModalInfoPage(modalControler) {
        this.modalControler = modalControler;
    }
    ModalInfoPage.prototype.ngOnInit = function () {
    };
    ModalInfoPage.prototype.salirSinArgumentos = function () {
        this.modalControler.dismiss();
    };
    ModalInfoPage.prototype.salirConArgumentos = function () {
        this.modalControler.dismiss({
            nombre: 'Felipe',
            pais: 'Espana'
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalInfoPage.prototype, "nombre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalInfoPage.prototype, "pais", void 0);
    ModalInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-info',
            template: __webpack_require__(/*! ./modal-info.page.html */ "./src/app/pages/modal-info/modal-info.page.html"),
            styles: [__webpack_require__(/*! ./modal-info.page.scss */ "./src/app/pages/modal-info/modal-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ModalInfoPage);
    return ModalInfoPage;
}());



/***/ }),

/***/ "./src/app/pages/modal/modal.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.module.ts ***!
  \*********************************************/
/*! exports provided: ModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.page */ "./src/app/pages/modal/modal.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _modal_info_modal_info_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-info/modal-info.module */ "./src/app/pages/modal-info/modal-info.module.ts");
/* harmony import */ var _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-info/modal-info.page */ "./src/app/pages/modal-info/modal-info.page.ts");










var routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]
    }
];
var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_9__["ModalInfoPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _modal_info_modal_info_module__WEBPACK_IMPORTED_MODULE_8__["ModalInfoPageModule"]
            ],
            declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]]
        })
    ], ModalPageModule);
    return ModalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/modal/modal.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"Modal\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-button expand=\"full\" (click)=\"onClick()\">\r\n    Abrir Modal\r\n  </ion-button>\r\n\r\n  <p>\r\n    Jair - Colombia\r\n  </p>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/modal/modal.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/modal/modal.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/modal/modal.page.ts ***!
  \*******************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-info/modal-info.page */ "./src/app/pages/modal-info/modal-info.page.ts");




var ModalPage = /** @class */ (function () {
    function ModalPage(modalController) {
        this.modalController = modalController;
    }
    ModalPage.prototype.ngOnInit = function () {
    };
    ModalPage.prototype.onClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_3__["ModalInfoPage"],
                            componentProps: {
                                nombre: 'Jair',
                                pais: 'Colombia'
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log('Retorno del modal', data);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.page.html */ "./src/app/pages/modal/modal.page.html"),
            styles: [__webpack_require__(/*! ./modal.page.scss */ "./src/app/pages/modal/modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ModalPage);
    return ModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-modal-modal-module.js.map