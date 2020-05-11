(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trainers-trainers-trainers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trainers/trainers/trainers.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trainers/trainers/trainers.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <!--\n    <a href=\"/add-trainer\" class=\"btn btn-danger btn-round\">Add Trainer</a>  \n    -->\n    <div class=\"col-md-12\">\n      <div class=\"group\">\n        <div class=\"group-title\">\n          <span>Featured Tutor Agencies</span>\n        </div>\n        <div class=\"row\">\n          <div class=\"card card-item\" *ngFor=\"let agency of featuredAgencies\">\n            <div class=\"card-item-image\">\n              <a href=\"javascript:void(0)\">\n                <img class=\"img\" src=\"./assets/img/orion-tuition-centre-siteicon.png\" />\n              </a>\n            </div>\n            <div class=\"card-item-title\">\n              <span>{{agency.name}}</span>\n            </div>\n            <div class=\"card-item-text\">\n              <span>{{agency.targetEduLevels}}</span>\n            </div>\n            <div class=\"card-item-text\">\n              <span>{{agency.subjects}}</span>\n            </div>\n            <div class=\"card-item-text\">\n              <span>{{agency.phone}}</span>\n            </div>\n            <div class=\"card-item-text\">\n              <span>{{agency.email}}</span>\n            </div>\n            <div class=\"card-item-text\">\n              <span>{{agency.locations}}</span>\n            </div>\n            <div class=\"card-item-description\">\n              <span>{{agency.promoText}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <div class=\"group-title\">\n        <span>Tutor Agency List</span>\n      </div>\n      <div class=\"row\">\n        <div class=\"card card-item\" *ngFor=\"let agency of tutorAgencies\">\n          <div class=\"card-item-image\">\n            <a href=\"javascript:void(0)\">\n              <img class=\"img\" src=\"./assets/img/orion-tuition-centre-siteicon.png\" />\n            </a>\n          </div>\n          <div class=\"card-item-title\">\n            <span>{{agency.name}}</span>\n          </div>\n          <div class=\"card-item-text\">\n            <span>{{agency.targetEduLevels}}</span>\n          </div>\n          <div class=\"card-item-text\">\n            <span>{{agency.subjects}}</span>\n          </div>\n          <div class=\"card-item-text\">\n            <span>{{agency.phone}}</span>\n          </div>\n          <div class=\"card-item-text\">\n            <span>{{agency.email}}</span>\n          </div>\n          <div class=\"card-item-text\">\n            <span>{{agency.locations}}</span>\n          </div>\n          <div class=\"card-item-description\">\n            <span>{{agency.promoText}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/trainers/trainers/trainers-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/trainers/trainers/trainers-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TrainersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainersRoutingModule", function() { return TrainersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _trainers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainers.component */ "./src/app/trainers/trainers/trainers.component.ts");
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
    { path: '', component: _trainers_component__WEBPACK_IMPORTED_MODULE_2__["TrainersComponent"] }
];
var TrainersRoutingModule = /** @class */ (function () {
    function TrainersRoutingModule() {
    }
    TrainersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TrainersRoutingModule);
    return TrainersRoutingModule;
}());



/***/ }),

/***/ "./src/app/trainers/trainers/trainers.component.css":
/*!**********************************************************!*\
  !*** ./src/app/trainers/trainers/trainers.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluZXJzL3RyYWluZXJzL3RyYWluZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/trainers/trainers/trainers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/trainers/trainers/trainers.component.ts ***!
  \*********************************************************/
/*! exports provided: TrainersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainersComponent", function() { return TrainersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services */ "./src/app/_services/index.ts");
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





var TrainersComponent = /** @class */ (function () {
    function TrainersComponent(authenticationService, tutorAgencyService, router) {
        this.authenticationService = authenticationService;
        this.tutorAgencyService = tutorAgencyService;
        this.router = router;
        this.tutorAgencies = [];
        this.featuredAgencies = [];
        this.numberOfFeaturedToDisplay = 6;
        // redirect to login if not logged in
        if (!this.authenticationService.currentAccessTokenValue) {
            this.router.navigate(['/login']);
        }
    }
    TrainersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all agencies
        this.tutorAgencyService.getAllAgencies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (tutorAgencies) {
            // get featured list
            _this.featuredAgencies = tutorAgencies.filter(function (ta) {
                return ta.featured
                    && tutorAgencies.indexOf(ta) < _this.numberOfFeaturedToDisplay;
            });
            _this.tutorAgencies = tutorAgencies;
            console.log(JSON.stringify(_this.tutorAgencies));
        });
    };
    TrainersComponent.ctorParameters = function () { return [
        { type: app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_3__["TutorAgencyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    TrainersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainers',
            template: __importDefault(__webpack_require__(/*! raw-loader!./trainers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trainers/trainers/trainers.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./trainers.component.css */ "./src/app/trainers/trainers/trainers.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            app_services__WEBPACK_IMPORTED_MODULE_3__["TutorAgencyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TrainersComponent);
    return TrainersComponent;
}());



/***/ }),

/***/ "./src/app/trainers/trainers/trainers.module.ts":
/*!******************************************************!*\
  !*** ./src/app/trainers/trainers/trainers.module.ts ***!
  \******************************************************/
/*! exports provided: TrainersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainersModule", function() { return TrainersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _trainers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainers-routing.module */ "./src/app/trainers/trainers/trainers-routing.module.ts");
/* harmony import */ var _trainers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trainers.component */ "./src/app/trainers/trainers/trainers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var TrainersModule = /** @class */ (function () {
    function TrainersModule() {
    }
    TrainersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _trainers_routing_module__WEBPACK_IMPORTED_MODULE_2__["TrainersRoutingModule"],
            ],
            declarations: [_trainers_component__WEBPACK_IMPORTED_MODULE_3__["TrainersComponent"]]
        })
    ], TrainersModule);
    return TrainersModule;
}());



/***/ })

}]);
//# sourceMappingURL=trainers-trainers-trainers-module.js.map