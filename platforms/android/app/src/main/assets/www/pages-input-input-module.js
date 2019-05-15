(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-input-input-module"],{

/***/ "./src/app/pages/input/input.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.module.ts ***!
  \*********************************************/
/*! exports provided: InputPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageModule", function() { return InputPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.page */ "./src/app/pages/input/input.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _input_page__WEBPACK_IMPORTED_MODULE_6__["InputPage"]
    }
];
var InputPageModule = /** @class */ (function () {
    function InputPageModule() {
    }
    InputPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_input_page__WEBPACK_IMPORTED_MODULE_6__["InputPage"]]
        })
    ], InputPageModule);
    return InputPageModule;
}());



/***/ }),

/***/ "./src/app/pages/input/input.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo='Inputs y Forms'></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n\r\n    <ion-list-header>\r\n      <ion-label>Nombre: {{ nombre || 'No hay nombre' }}</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"nombre\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <form #formulario=\"ngForm\" (ngSubmit)=\"onSubmitTemplate()\">\r\n\r\n    <ion-list>\r\n\r\n      <ion-list-header>\r\n        <ion-label>Formulario template: Valido {{ formulario.valid }}</ion-label>\r\n      </ion-list-header>\r\n\r\n      <ion-item>\r\n          <ion-label position=\"floating\">Email</ion-label>\r\n          <ion-input type=\"email\" \r\n                      [(ngModel)]=\"usuario.email\" \r\n                      name=\"email\"\r\n                      pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\r\n                      required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n          <ion-label position=\"floating\">Password</ion-label>\r\n          <ion-input type=\"password\" \r\n                      [(ngModel)]=\"usuario.password\" \r\n                      name=\"password\"\r\n                      required></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\">\r\n      Enviar\r\n    </ion-button>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/input/input.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lucHV0L2lucHV0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/input/input.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/input/input.page.ts ***!
  \*******************************************/
/*! exports provided: InputPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPage", function() { return InputPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputPage = /** @class */ (function () {
    function InputPage() {
        this.usuario = {
            email: '',
            password: ''
        };
    }
    InputPage.prototype.ngOnInit = function () {
    };
    InputPage.prototype.onSubmitTemplate = function () {
        console.log('Form Submit');
        console.log(this.usuario);
    };
    InputPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.page.html */ "./src/app/pages/input/input.page.html"),
            styles: [__webpack_require__(/*! ./input.page.scss */ "./src/app/pages/input/input.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputPage);
    return InputPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-input-input-module.js.map