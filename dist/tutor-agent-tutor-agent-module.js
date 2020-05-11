(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutor-agent-tutor-agent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tutor-agent/tutor-agent.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tutor-agent/tutor-agent.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"main-content\">\n    <div class=\"container-fluid\">\n   \n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\" style = \"width:55%\">\n\n              <div class=\"card-header card-header-danger\">\n                <h4 class=\"card-title \"> Tutor Agent Approval </h4>\n                <p class=\"card-category\">Choose the below tutor agent and select the approval button </p>\n              </div>\n\n              <div class=\"card-body\">\n                <div class=\"table-responsive\">\n\n                  <table class=\"table\" >\n                    <thead class=\" text-primary\">\n                    <th>Agent Name</th>\n                    <th>Email</th>\n                    <th>Address</th>\n                    <th>Status</th>\n                    <th></th>\n                    <th></th>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let agent of agents\">\n                      <ng-container *ngIf=\"agent.status != 'ARCHIVED'\">\n                        <td>{{agent.username}}</td>\n                        <td>{{agent.email}}</td>\n                        <td>{{agent.address}}</td>\n                        <td>{{agent.status}}</td>\n                        <td *ngIf=\"agent.status != 'APPROVED'\"><button type=\"Approve\" class=\"btn btn-primary\" (click)=\"approve(agent.username)\" \n                          >Approve</button></td>\n                        <td *ngIf=\"agent.status == 'APPROVED'\"></td>\n                        <td *ngIf=\"agent.status != 'ARCHIVED'\"><button type=\"Archive\" class=\"btn btn-danger pull-right\" (click)=\"archive(agent.username)\" \n                            >Archive</button></td>\n                        <td *ngIf=\"agent.status == 'ARCHIVED'\"></td>\n                      </ng-container>\n                    </tr>\n                  </tbody>\n                  </table>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            \n        </div>\n        </div>\n      \n  </div>\n</div>");

/***/ }),

/***/ "./src/app/tutor-agent/tutor-agent-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/tutor-agent/tutor-agent-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TutorAgentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorAgentRoutingModule", function() { return TutorAgentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _tutor_agent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutor-agent.component */ "./src/app/tutor-agent/tutor-agent.component.ts");
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
    { path: '', component: _tutor_agent_component__WEBPACK_IMPORTED_MODULE_2__["TutorAgentComponent"] }
];
var TutorAgentRoutingModule = /** @class */ (function () {
    function TutorAgentRoutingModule() {
    }
    TutorAgentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TutorAgentRoutingModule);
    return TutorAgentRoutingModule;
}());



/***/ }),

/***/ "./src/app/tutor-agent/tutor-agent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/tutor-agent/tutor-agent.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yLWFnZW50L3R1dG9yLWFnZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/tutor-agent/tutor-agent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tutor-agent/tutor-agent.component.ts ***!
  \******************************************************/
/*! exports provided: TutorAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorAgentComponent", function() { return TutorAgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_common_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/global-constants */ "./src/app/common/global-constants.ts");
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



var TutorAgentComponent = /** @class */ (function () {
    function TutorAgentComponent(http) {
        this.http = http;
        this.agents = [];
        this.token = JSON.parse(localStorage.getItem(app_common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GloblConstants"].currentAccessToken))['access_token'];
        this.agent_list_url = app_common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GloblConstants"].baseUrl + app_common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GloblConstants"].userUrl + app_common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GloblConstants"].TutorAgentListUrl;
        this.agent_approval_url = app_common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GloblConstants"].baseUrl + app_common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GloblConstants"].userUrl + app_common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GloblConstants"].TutorAgentApprovalUrl;
    }
    TutorAgentComponent_1 = TutorAgentComponent;
    TutorAgentComponent.prototype.approve = function (value) {
        var bodyString = JSON.stringify({ username: value, status: TutorAgentComponent_1.APPROVED_STATUS });
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        this.http.post(this.agent_approval_url, bodyString, { headers: reqHeader })
            .subscribe(function (res) { return console.log(res); });
        //must load twice, then table can reload
        this.ngOnInit();
        this.ngOnInit();
    };
    TutorAgentComponent.prototype.archive = function (value) {
        var bodyString = JSON.stringify({ username: value, status: TutorAgentComponent_1.ARCHIVED_STATUS });
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        this.http.post(this.agent_approval_url, bodyString, { headers: reqHeader })
            .subscribe(function (res) { return console.log(res); });
        //must load twice, then table can reload
        this.ngOnInit();
        this.ngOnInit();
    };
    TutorAgentComponent.prototype.ngOnInit = function () {
        //console.log(this.token);
        var _this = this;
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        this.http.get(this.agent_list_url, { headers: reqHeader }).subscribe(function (data) {
            _this.agents = data['body'];
            console.log(data['body']);
        });
    };
    var TutorAgentComponent_1;
    TutorAgentComponent.APPROVED_STATUS = "APPROVED";
    TutorAgentComponent.ARCHIVED_STATUS = "ARCHIVED";
    TutorAgentComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TutorAgentComponent = TutorAgentComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutor-agent',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tutor-agent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tutor-agent/tutor-agent.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tutor-agent.component.css */ "./src/app/tutor-agent/tutor-agent.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TutorAgentComponent);
    return TutorAgentComponent;
}());



/***/ }),

/***/ "./src/app/tutor-agent/tutor-agent.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tutor-agent/tutor-agent.module.ts ***!
  \***************************************************/
/*! exports provided: TutorAgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorAgentModule", function() { return TutorAgentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _tutor_agent_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutor-agent-routing.module */ "./src/app/tutor-agent/tutor-agent-routing.module.ts");
/* harmony import */ var _tutor_agent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutor-agent.component */ "./src/app/tutor-agent/tutor-agent.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var TutorAgentModule = /** @class */ (function () {
    function TutorAgentModule() {
    }
    TutorAgentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _tutor_agent_routing_module__WEBPACK_IMPORTED_MODULE_4__["TutorAgentRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            declarations: [_tutor_agent_component__WEBPACK_IMPORTED_MODULE_5__["TutorAgentComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ]
        })
    ], TutorAgentModule);
    return TutorAgentModule;
}());



/***/ })

}]);
//# sourceMappingURL=tutor-agent-tutor-agent-module.js.map