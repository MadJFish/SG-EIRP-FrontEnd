(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["programs-programs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/programs/programs.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/programs/programs.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n              <h3 class=\"card-title\">Education Programs</h3>\n              <p class=\"card-category\">Please search and select your preferred programs\n                  <!--\n                  <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                  <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n                  -->\n              </p>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Program Style</h4>\n                      <div class=\"alert alert-info\">\n                          <span>This is a plain notification</span>\n                      </div>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>This is a notification with close button.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Program states</h4>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                      </div>\n                      <div class=\"alert alert-success\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                      </div>\n                      <div class=\"alert alert-warning\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                      </div>\n                      <div class=\"alert alert-danger\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                      </div>\n                      <div class=\"alert alert-primary\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"places-buttons\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                          <h4 class=\"card-title\">\n                              Notifications Places\n                              <p class=\"category\">Click to view notifications</p>\n                          </h4>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/programs/programs-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/programs/programs-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProgramsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsRoutingModule", function() { return ProgramsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _programs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programs.component */ "./src/app/programs/programs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [
    { path: '', component: _programs_component__WEBPACK_IMPORTED_MODULE_2__["ProgramsComponent"] }
];
var ProgramsRoutingModule = /** @class */ (function () {
    function ProgramsRoutingModule() {
    }
    ProgramsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProgramsRoutingModule);
    return ProgramsRoutingModule;
}());



/***/ }),

/***/ "./src/app/programs/programs.component.css":
/*!*************************************************!*\
  !*** ./src/app/programs/programs.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW1zL3Byb2dyYW1zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/programs/programs.component.ts":
/*!************************************************!*\
  !*** ./src/app/programs/programs.component.ts ***!
  \************************************************/
/*! exports provided: ProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsComponent", function() { return ProgramsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProgramsComponent = /** @class */ (function () {
    function ProgramsComponent() {
    }
    ProgramsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    ProgramsComponent.prototype.ngOnInit = function () {
    };
    ProgramsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-programs',
            template: __importDefault(__webpack_require__(/*! raw-loader!./programs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/programs/programs.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./programs.component.css */ "./src/app/programs/programs.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProgramsComponent);
    return ProgramsComponent;
}());



/***/ }),

/***/ "./src/app/programs/programs.module.ts":
/*!*********************************************!*\
  !*** ./src/app/programs/programs.module.ts ***!
  \*********************************************/
/*! exports provided: ProgramsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsModule", function() { return ProgramsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _programs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programs-routing.module */ "./src/app/programs/programs-routing.module.ts");
/* harmony import */ var _programs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./programs.component */ "./src/app/programs/programs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var ProgramsModule = /** @class */ (function () {
    function ProgramsModule() {
    }
    ProgramsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _programs_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProgramsRoutingModule"]
            ],
            declarations: [_programs_component__WEBPACK_IMPORTED_MODULE_4__["ProgramsComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ]
        })
    ], ProgramsModule);
    return ProgramsModule;
}());



/***/ })

}]);
//# sourceMappingURL=programs-programs-module.js.map