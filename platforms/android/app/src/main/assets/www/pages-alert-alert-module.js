(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-alert-alert-module"],{

/***/ "./src/app/pages/alert/alert.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/alert/alert.module.ts ***!
  \*********************************************/
/*! exports provided: AlertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageModule", function() { return AlertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert.page */ "./src/app/pages/alert/alert.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _alert_page__WEBPACK_IMPORTED_MODULE_6__["AlertPage"]
    }
];
var AlertPageModule = /** @class */ (function () {
    function AlertPageModule() {
    }
    AlertPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_alert_page__WEBPACK_IMPORTED_MODULE_6__["AlertPage"]]
        })
    ], AlertPageModule);
    return AlertPageModule;
}());



/***/ }),

/***/ "./src/app/pages/alert/alert.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/alert/alert.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"{{ titulo || 'Alert Page'}}\"></app-header>\r\n<!--\r\n  <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Regresar\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>alert</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n-->\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"presentAlert()\">\r\n    Mostrar Alerta Sencilla\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"presentAlertPromptSencillo()\">\r\n      Mostrar Alerta Toma de datos\r\n    </ion-button>\r\n\r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"presentAlertMultipleButtons()\">\r\n    Mostrar Alerta Multiples botones\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"presentAlertConfirm()\">\r\n    Mostrar Alerta con Confirmacion\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"presentAlertPrompt()\">\r\n    Mostrar Alerta Prompt\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"presentAlertRadio()\">\r\n    Mostrar Alerta Radio\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"presentAlertCheckbox()\">\r\n    Mostrar Alerta Checkbox\r\n  </ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/alert/alert.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/alert/alert.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsZXJ0L2FsZXJ0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/alert/alert.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/alert/alert.page.ts ***!
  \*******************************************/
/*! exports provided: AlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPage", function() { return AlertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertPage = /** @class */ (function () {
    function AlertPage(alertController) {
        this.alertController = alertController;
    }
    AlertPage.prototype.ngOnInit = function () {
    };
    AlertPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
                            message: 'This is an alert message.',
                            buttons: [
                                {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirma Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage.prototype.presentAlertMultipleButtons = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
                            message: 'This is an alert message.',
                            buttons: ['Cancel', 'Open Modal', 'Delete']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Message <strong>text</strong>!!!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Prompt!',
                            inputs: [
                                {
                                    name: 'name1',
                                    type: 'text',
                                    placeholder: 'Placeholder 1'
                                },
                                {
                                    name: 'name2',
                                    type: 'text',
                                    id: 'name2-id',
                                    value: 'hello',
                                    placeholder: 'Placeholder 2'
                                },
                                {
                                    name: 'name3',
                                    value: 'http://ionicframework.com',
                                    type: 'url',
                                    placeholder: 'Favorite site ever'
                                },
                                // input date with min & max
                                {
                                    name: 'name4',
                                    type: 'date',
                                    min: '2017-03-01',
                                    max: '2018-01-12'
                                },
                                // input date without min nor max
                                {
                                    name: 'name5',
                                    type: 'date'
                                },
                                {
                                    name: 'name6',
                                    type: 'number',
                                    min: -5,
                                    max: 10
                                },
                                {
                                    name: 'name7',
                                    type: 'number'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirm Ok');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage.prototype.presentAlertPromptSencillo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Ingrese su Nombre',
                            inputs: [
                                {
                                    name: 'Nombre',
                                    type: 'text',
                                    placeholder: 'Nombre'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Presiono Cancelar');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Presiono Ok', data);
                                        _this.titulo = data.Nombre;
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage.prototype.presentAlertRadio = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Radio',
                            inputs: [
                                {
                                    name: 'radio1',
                                    type: 'radio',
                                    label: 'Radio 1',
                                    value: 'value1',
                                    checked: true
                                },
                                {
                                    name: 'radio2',
                                    type: 'radio',
                                    label: 'Radio 2',
                                    value: 'value2'
                                },
                                {
                                    name: 'radio3',
                                    type: 'radio',
                                    label: 'Radio 3',
                                    value: 'value3'
                                },
                                {
                                    name: 'radio4',
                                    type: 'radio',
                                    label: 'Radio 4',
                                    value: 'value4'
                                },
                                {
                                    name: 'radio5',
                                    type: 'radio',
                                    label: 'Radio 5',
                                    value: 'value5'
                                },
                                {
                                    name: 'radio6',
                                    type: 'radio',
                                    label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
                                    value: 'value6'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirm Ok');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage.prototype.presentAlertCheckbox = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Checkbox',
                            inputs: [
                                {
                                    name: 'checkbox1',
                                    type: 'checkbox',
                                    label: 'Checkbox 1',
                                    value: 'value1',
                                    checked: true
                                },
                                {
                                    name: 'checkbox2',
                                    type: 'checkbox',
                                    label: 'Checkbox 2',
                                    value: 'value2'
                                },
                                {
                                    name: 'checkbox3',
                                    type: 'checkbox',
                                    label: 'Checkbox 3',
                                    value: 'value3'
                                },
                                {
                                    name: 'checkbox4',
                                    type: 'checkbox',
                                    label: 'Checkbox 4',
                                    value: 'value4'
                                },
                                {
                                    name: 'checkbox5',
                                    type: 'checkbox',
                                    label: 'Checkbox 5',
                                    value: 'value5'
                                },
                                {
                                    name: 'checkbox6',
                                    type: 'checkbox',
                                    label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
                                    value: 'value6'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirm Ok');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.page.html */ "./src/app/pages/alert/alert.page.html"),
            styles: [__webpack_require__(/*! ./alert.page.scss */ "./src/app/pages/alert/alert.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertPage);
    return AlertPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-alert-alert-module.js.map