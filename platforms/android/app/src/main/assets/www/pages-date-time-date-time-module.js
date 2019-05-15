(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-date-time-date-time-module"],{

/***/ "./src/app/pages/date-time/date-time.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/date-time/date-time.module.ts ***!
  \*****************************************************/
/*! exports provided: DateTimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePageModule", function() { return DateTimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _date_time_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-time.page */ "./src/app/pages/date-time/date-time.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _date_time_page__WEBPACK_IMPORTED_MODULE_6__["DateTimePage"]
    }
];
var DateTimePageModule = /** @class */ (function () {
    function DateTimePageModule() {
    }
    DateTimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_date_time_page__WEBPACK_IMPORTED_MODULE_6__["DateTimePage"]]
        })
    ], DateTimePageModule);
    return DateTimePageModule;
}());



/***/ }),

/***/ "./src/app/pages/date-time/date-time.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/date-time/date-time.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"DateTime\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Datos de Nacimiento</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Fecha de Nacimiento</ion-label>\r\n      <ion-datetime placeholder=\"Nacimiento\"\r\n                    display-format=\"YYYY MMMM DD\"\r\n                    cancelText=\"Cancelar\"\r\n                    [ngModel]=\"fechaNaci.toISOString()\"\r\n                    (ionChange)=\"cambioFecha( $event )\">\r\n      </ion-datetime>\r\n    </ion-item>\r\n\r\n    <ion-list-header>\r\n      <ion-label>Restricciones</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Min y Max</ion-label>\r\n      <ion-datetime placeholder=\"yyyy-mm-dd\"\r\n                    displayFormat=\"YYYY MMMM DD\"\r\n                    min=\"2019-01-01\"\r\n                    max=\"2019-12-31\">\r\n      </ion-datetime>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Hora</ion-label>\r\n      <ion-datetime display-format=\"hh:mm a\"></ion-datetime>\r\n    </ion-item>\r\n  </ion-list>\r\n  \r\n  <ion-list>\r\n      <ion-item>\r\n          <ion-label>MMMM</ion-label>\r\n          <ion-datetime displayFormat=\"MMMM\" value=\"2012-12-15T13:47:20.789\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>MM DD YY</ion-label>\r\n          <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>Disabled</ion-label>\r\n          <ion-datetime id=\"dynamicDisabled\" displayFormat=\"MM DD YY\" disabled value=\"1994-12-15\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>YYYY</ion-label>\r\n          <ion-datetime [pickerOptions]=\"customPickerOptions\" placeholder=\"Custom Options\" displayFormat=\"YYYY\" min=\"1981\" max=\"2002\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label position=\"stacked\">MMMM YY</ion-label>\r\n          <ion-datetime displayFormat=\"MMMM YY\" min=\"1989-06-04\" max=\"2004-08-23\" value=\"1994-12-15T13:47:20.789\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\r\n          <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1994-03-14\" max=\"2012-12-09\" value=\"2002-09-23T15:03:46.789\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\r\n          <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1994-03-14\" max=\"2012-12-09\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>\r\n          <ion-datetime value=\"1995-04-15\" min=\"1990-02\" max=\"2000\"\r\n            [dayShortNames]=\"customDayShortNames\"\r\n            displayFormat=\"DDD. MMM DD, YY\"\r\n            monthShortNames=\"jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>D MMM YYYY H:mm</ion-label>\r\n          <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"1997\" max=\"2010\" value=\"2005-06-17T11:06Z\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>DDDD MMM D, YYYY</ion-label>\r\n          <ion-datetime displayFormat=\"DDDD MMM D, YYYY\" min=\"2005\" max=\"2016\" value=\"2008-09-02\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>HH:mm</ion-label>\r\n          <ion-datetime displayFormat=\"HH:mm\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>h:mm a</ion-label>\r\n          <ion-datetime displayFormat=\"h:mm a\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>hh:mm A (15 min steps)</ion-label>\r\n          <ion-datetime displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>Leap years, summer months</ion-label>\r\n          <ion-datetime displayFormat=\"MM/YYYY\" pickerFormat=\"MMMM YYYY\" monthValues=\"6,7,8\" [yearValues]=\"customYearValues\"></ion-datetime>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label>Specific days/months/years</ion-label>\r\n          <ion-datetime monthValues=\"6,7,8\" yearValues=\"2014,2015\" dayValues=\"01,02,03,04,05,06,08,09,10, 11, 12, 13, 14\" displayFormat=\"DD/MMM/YYYY\"></ion-datetime>\r\n        </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/date-time/date-time.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/date-time/date-time.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGUtdGltZS9kYXRlLXRpbWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/date-time/date-time.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/date-time/date-time.page.ts ***!
  \***************************************************/
/*! exports provided: DateTimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePage", function() { return DateTimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateTimePage = /** @class */ (function () {
    function DateTimePage() {
        this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
        this.customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
        this.fechaNaci = new Date();
        this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: function (evento) {
                        console.log('Clicked Save!');
                        console.log(evento);
                    }
                }, {
                    text: 'Log',
                    handler: function () {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                }]
        };
    }
    DateTimePage.prototype.ngOnInit = function () {
    };
    DateTimePage.prototype.cambioFecha = function (event) {
        console.log(event);
        console.log('Date', new Date(event.detail.value));
    };
    DateTimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-date-time',
            template: __webpack_require__(/*! ./date-time.page.html */ "./src/app/pages/date-time/date-time.page.html"),
            styles: [__webpack_require__(/*! ./date-time.page.scss */ "./src/app/pages/date-time/date-time.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DateTimePage);
    return DateTimePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-date-time-date-time-module.js.map