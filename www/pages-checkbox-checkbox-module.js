(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkbox-checkbox-module"],{

/***/ "./src/app/pages/checkbox/checkbox.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/checkbox/checkbox.module.ts ***!
  \***************************************************/
/*! exports provided: CheckboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxPageModule", function() { return CheckboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox.page */ "./src/app/pages/checkbox/checkbox.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _checkbox_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxPage"]
    }
];
var CheckboxPageModule = /** @class */ (function () {
    function CheckboxPageModule() {
    }
    CheckboxPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_checkbox_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxPage"]]
        })
    ], CheckboxPageModule);
    return CheckboxPageModule;
}());



/***/ }),

/***/ "./src/app/pages/checkbox/checkbox.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/checkbox/checkbox.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"Checkbox\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <!-- Default Checkbox -->\r\n      <ion-label>Default</ion-label>\r\n      <ion-checkbox></ion-checkbox>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <!-- Disabled Checkbox -->\r\n      <ion-label>Disabled</ion-label>\r\n      <ion-checkbox disabled=\"true\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <!-- Checked Checkbox -->\r\n      <ion-label>Checked</ion-label>\r\n      <ion-checkbox checked=\"true\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <!-- Checkbox Colors -->\r\n      <ion-label>Primary</ion-label>\r\n      <ion-checkbox color=\"primary\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <!-- Checkbox Colors -->\r\n      <ion-label>Secondary</ion-label>\r\n      <ion-checkbox color=\"secondary\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <!-- Checkbox Colors -->\r\n      <ion-label>Danger</ion-label>\r\n      <ion-checkbox color=\"danger\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <!-- Checkbox Colors -->\r\n      <ion-label>Light</ion-label>\r\n      <ion-checkbox color=\"light\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <!-- Checkbox Colors -->\r\n      <ion-label>Dark</ion-label>\r\n      <ion-checkbox color=\"dark\"></ion-checkbox>\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n  \r\n\r\n  <!-- Checkboxes in a List -->\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let entry of form\" (click)=\"onClick(entry)\">\r\n      <ion-label>{{entry.val}}</ion-label>\r\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/checkbox/checkbox.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/checkbox/checkbox.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrYm94L2NoZWNrYm94LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/checkbox/checkbox.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/checkbox/checkbox.page.ts ***!
  \*************************************************/
/*! exports provided: CheckboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxPage", function() { return CheckboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxPage = /** @class */ (function () {
    function CheckboxPage() {
        this.form = [
            { val: 'Pepperoni', isChecked: true },
            { val: 'Sausage', isChecked: false },
            { val: 'Mushroom', isChecked: false }
        ];
    }
    CheckboxPage.prototype.ngOnInit = function () {
    };
    CheckboxPage.prototype.onClick = function (entry) {
        console.log(entry);
    };
    CheckboxPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.page.html */ "./src/app/pages/checkbox/checkbox.page.html"),
            styles: [__webpack_require__(/*! ./checkbox.page.scss */ "./src/app/pages/checkbox/checkbox.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxPage);
    return CheckboxPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-checkbox-checkbox-module.js.map