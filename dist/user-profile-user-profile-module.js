(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-md-4\">\n        <div class=\"card card-profile\">\n          <div class=\"card-avatar\">\n            <a (click) = \"fileInput.click()\">\n              <img class=\"img\" [src]=\"imagePath\" />\n              <input style=\"display: none\" type=\"file\" id=\"customFile\" (change)=\"selectFile($event)\" #fileInput>\n            </a>\n          </div>\n\n          <!--\n            <button class=\"btn btn-primary\" [disabled]=\"!selectedFiles || admincheck || status\" (click)=\"upload()\">Save File</button>\n            <button class=\"btn btn-primary\" style=\"margin-left: 10px\" (click)=\"downloadFile()\">View File</button>\n          -->     \n\n          <div class=\"card-body\">\n            <h6 class=\"card-category text-gray\">{{user.role.roleDesc}}</h6>\n              <h4 class=\"card-title\">{{user.username}}</h4>\n              <p class=\"card-description\">\n                {{user.email}}\n              </p>\n              <!--\n                <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round\">Follow</a>\n              -->\n              <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round\">Edit Profile</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-8\" style=\"float:right\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header card-header-success\">\n                <h4 class=\"card-title\">My Profile</h4>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Username: {{user.username}}\n                    </span>\n                  </div>\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Email: {{user.email}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      First Name: {{user.firstName}}\n                    </span>\n                  </div>\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Last Name: {{user.lastName}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Registration Date: {{user.registrationDatetime}}\n                    </span>\n                  </div>\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Last Login Date: {{user.lastLoginDatetime}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Birth Date: {{user.birthDate}}\n                    </span>\n                  </div>\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Gender: {{user.gender}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Address: {{user.address}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header card-header-info\">\n                <h4 class=\"card-title\">Agency: {{tutorAgency.name}}</h4>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      {{tutorAgency.promoText}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      About Us: {{tutorAgency.aboutUs}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Email: {{tutorAgency.email}}\n                    </span>\n                  </div>\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      TEL: {{tutorAgency.phone}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Education Levels: {{tutorAgency.targetEduLevels}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Subjects: {{tutorAgency.subjects}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <span class=\"text-success\">\n                      Locations: {{tutorAgency.locations}}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/user-profile/user-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-profile/user-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function() { return UserProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
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
    { path: '', component: _user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"] }
];
var UserProfileRoutingModule = /** @class */ (function () {
    function UserProfileRoutingModule() {
    }
    UserProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserProfileRoutingModule);
    return UserProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_models */ "./src/app/_models/index.ts");
/* harmony import */ var app_common_global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/common/global-constants */ "./src/app/common/global-constants.ts");
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







var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, router, fileUploadService, tutorAgencyService) {
        this.userService = userService;
        this.router = router;
        this.fileUploadService = fileUploadService;
        this.tutorAgencyService = tutorAgencyService;
        this.user = new app_models__WEBPACK_IMPORTED_MODULE_3__["UserResponseDto"]();
        this.tutorAgency = new app_models__WEBPACK_IMPORTED_MODULE_3__["TutorAgencyDto"]();
        this.imagePath = "./assets/img/faces/marc.jpg";
        this.progress = { percentage: 0 };
        this.selectedFile = null;
        this.changeImage = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get current user profile
        this.userService.getUser()
            .subscribe(function (user) {
            _this.user = user;
            console.log(JSON.stringify(user));
            _this.retrieveAgency(_this.user);
        });
    };
    // retrieve user agency details
    UserProfileComponent.prototype.retrieveAgency = function (user) {
        var _this = this;
        if (user == null) {
            console.log("user is null");
            return;
        }
        var status = user.status;
        if (status !== app_common_global_constants__WEBPACK_IMPORTED_MODULE_4__["GloblConstants"].approvedStatus) {
            console.log("status is not APPROVED");
            return;
        }
        var agencyId = user.tutorAgentId;
        if (agencyId == null) {
            console.log("agency id is null.");
            return;
        }
        // retrieve tutor agency
        this.tutorAgencyService.getAgencyByAgencyId(agencyId)
            .subscribe(function (tutorAgencyDto) {
            _this.tutorAgency = tutorAgencyDto;
            console.log("test 1: " + JSON.stringify(_this.tutorAgency));
        });
    };
    // native file upload
    UserProfileComponent.prototype.downloadFile = function () {
        var link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', '_File_Saved_Path');
        link.setAttribute('download', 'file_name.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };
    UserProfileComponent.prototype.change = function ($event) {
        this.changeImage = true;
    };
    UserProfileComponent.prototype.changedImage = function (event) {
        this.selectedFile = event.target.files[0];
    };
    UserProfileComponent.prototype.upload = function () {
        var _this = this;
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        // set DocumentDto
        var documentDto = new app_models__WEBPACK_IMPORTED_MODULE_3__["DocumentDto"]();
        documentDto.documentType = app_common_global_constants__WEBPACK_IMPORTED_MODULE_4__["GloblConstants"].profileImage;
        documentDto.uploadType = app_common_global_constants__WEBPACK_IMPORTED_MODULE_4__["GloblConstants"].userUploadType;
        documentDto.referenceId = this.user.id;
        this.fileUploadService.pushFileToStorage(this.currentFileUpload, documentDto)
            .subscribe(function (response) {
            console.log(response);
            if (response.status) {
                _this.imagePath = app_common_global_constants__WEBPACK_IMPORTED_MODULE_4__["GloblConstants"].s3URL + app_common_global_constants__WEBPACK_IMPORTED_MODULE_4__["GloblConstants"].directory_separator + response.body.documentUrl;
            }
            ;
            _this.selectedFiles = undefined;
        });
    };
    UserProfileComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
        this.upload();
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_1__["fileUploadService"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_1__["TutorAgencyService"] }
    ]; };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_services__WEBPACK_IMPORTED_MODULE_1__["fileUploadService"],
            app_services__WEBPACK_IMPORTED_MODULE_1__["TutorAgencyService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm5/ng2-file-upload.js");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile-routing.module */ "./src/app/user-profile/user-profile-routing.module.ts");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var UserProfileModule = /** @class */ (function () {
    function UserProfileModule() {
    }
    UserProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserProfileRoutingModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploadModule"]
            ],
            declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"]]
        })
    ], UserProfileModule);
    return UserProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module.js.map