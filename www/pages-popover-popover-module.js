(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popover-popover-module"],{

/***/ "./src/app/pages/popover/popover.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.module.ts ***!
  \*************************************************/
/*! exports provided: PopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover.page */ "./src/app/pages/popover/popover.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/popinfo/popinfo.component */ "./src/app/components/popinfo/popinfo.component.ts");









var routes = [
    {
        path: '',
        component: _popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]
    }
];
var PopoverPageModule = /** @class */ (function () {
    function PopoverPageModule() {
    }
    PopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_8__["PopinfoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]]
        })
    ], PopoverPageModule);
    return PopoverPageModule;
}());



/***/ }),

/***/ "./src/app/pages/popover/popover.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title>Popover</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"mostrarPop($event)\">\r\n        <ion-icon slot=\"icon-only\" name=\"contact\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-button (click)=\"mostrarPop($event)\" expand=\"full\">\r\n    <ion-icon slot=\"start\" name=\"contact\"></ion-icon>\r\n    <ion-label>Popover</ion-label>\r\n  </ion-button>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"mostrarPop($event)\">\r\n        <ion-icon slot=\"icon-only\" name=\"contact\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Footer</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/popover/popover.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcG92ZXIvcG9wb3Zlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/popover/popover.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/popover/popover.page.ts ***!
  \***********************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/popinfo/popinfo.component */ "./src/app/components/popinfo/popinfo.component.ts");




var PopoverPage = /** @class */ (function () {
    function PopoverPage(popOverController) {
        this.popOverController = popOverController;
    }
    PopoverPage.prototype.ngOnInit = function () {
    };
    PopoverPage.prototype.mostrarPop = function (evento) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popOverController.create({
                            component: _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_3__["PopinfoComponent"],
                            event: evento,
                            mode: 'ios',
                            backdropDismiss: false
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, popover.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log('Padre', data);
                        return [2 /*return*/];
                }
            });
        });
    };
    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! ./popover.page.html */ "./src/app/pages/popover/popover.page.html"),
            styles: [__webpack_require__(/*! ./popover.page.scss */ "./src/app/pages/popover/popover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], PopoverPage);
    return PopoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-popover-popover-module.js.map