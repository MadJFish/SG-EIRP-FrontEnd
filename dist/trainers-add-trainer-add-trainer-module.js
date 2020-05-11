(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trainers-add-trainer-add-trainer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trainers/add-trainer/add-trainer.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trainers/add-trainer/add-trainer.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card card-profile\">\n      <div class=\"card-header card-header-danger\">\n        <h3 class=\"card-title\">Create Education Agency</h3>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 card-space\">\n          <div class=\"card-profile-image\">\n            <a (click) = \"fileInput.click()\">\n              <img class=\"img\" [src]=\"imagePath\" ng2FileSelect [uploader]=\"uploader\"/>\n            </a>\n          </div>\n          <input style=\"display: none\" name=\"uploader\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" (change)=\"onFileChanged(uploader)\" #fileInput/>\n          <!--\n          <button type=\"button\" class=\"btn btn-success btn-s image-selector\"\n            (click)=\"uploader.uploadAll()\"\n            [disabled]=\"!uploader.getNotUploadedItems().length\">\n            Upload an Image\n          </button>\n          -->\n        </div>\n        <div class=\"card-content col-md-6\">\n          <form [formGroup]=\"addAgentForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n              <div class=\"input-group\">\n                <input-header>Name:</input-header>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-group\">\n                <input-header>Contact:</input-header>\n                <input type=\"text\" formControlName=\"tel-country\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.tel-country.errors }\" />\n                <span>-</span>\n                <input type=\"text\" formControlName=\"tel-contact\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.tel-contact.errors }\" />\n                <div *ngIf=\"submitted && f.tel-country.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.tel-country.errors.required\">Contact Country is required</div>\n                </div>\n                <div *ngIf=\"submitted && f.tel-contact.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.tel-contact.errors.required\">Contact is required</div>\n              </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-group\">\n                <input-header>Email:</input-header>\n                <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-group\">\n                <input-header for=\"promoText\">Promo Text:</input-header>\n                <textarea formControlName=\"promoText\" class=\"form-control\"></textarea>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-group\">\n                <input-header for=\"aboutUs\">Abount Us:</input-header>\n                <textarea type=\"text\" formControlName=\"aboutUs\" class=\"form-control\"></textarea>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-group\">\n                <input-header for=\"targetEducationLevels\">Target Education Levels:</input-header>\n                <div class=\"checkbox-area\">\n                  <div *ngFor=\"let educationLevel of educationLevels\" class=\"checkbox-option row\">\n                    <input type=\"checkbox\" ng-checked=\"{{educationLevel.isChecked}}\" (change)=\"changeHandler([educationLevel], 'EducationLevel')\" formControlName=\"targetEducationLevels\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.targetEducationLevels.errors }\" />\n                    <span>{{educationLevel.description}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-group\">\n                <input-header for=\"subjects\">Subjects:</input-header>\n                <div class=\"checkbox-area\">\n                  <div *ngFor=\"let subject of subjects\" class=\"checkbox-option row\">\n                    <input type=\"checkbox\" ng-checked=\"{{subject.isChecked}}\" (change)=\"changeHandler([subject], 'Subject')\" formControlName=\"subjects\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.subjects.errors }\" />\n                    <span>{{subject.description}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/trainers/add-trainer/add-trainer-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/trainers/add-trainer/add-trainer-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: AddTrainerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrainerRoutingModule", function() { return AddTrainerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _add_trainer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-trainer.component */ "./src/app/trainers/add-trainer/add-trainer.component.ts");
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
    { path: '', component: _add_trainer_component__WEBPACK_IMPORTED_MODULE_2__["AddTrainerComponent"] }
];
var AddTrainerRoutingModule = /** @class */ (function () {
    function AddTrainerRoutingModule() {
    }
    AddTrainerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AddTrainerRoutingModule);
    return AddTrainerRoutingModule;
}());



/***/ }),

/***/ "./src/app/trainers/add-trainer/add-trainer.component.css":
/*!****************************************************************!*\
  !*** ./src/app/trainers/add-trainer/add-trainer.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluZXJzL2FkZC10cmFpbmVyL2FkZC10cmFpbmVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/trainers/add-trainer/add-trainer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/trainers/add-trainer/add-trainer.component.ts ***!
  \***************************************************************/
/*! exports provided: AddTrainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrainerComponent", function() { return AddTrainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm5/ng2-file-upload.js");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _common_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/global-constants */ "./src/app/common/global-constants.ts");
/* harmony import */ var app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_models */ "./src/app/_models/index.ts");
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







var UploadURL = 'http://localhost:8080/api/document/upload';
var AddTrainerComponent = /** @class */ (function () {
    function AddTrainerComponent(codeService, fileUploadService) {
        this.codeService = codeService;
        this.fileUploadService = fileUploadService;
        this.title = 'Upload an Image';
        this.imagePath = './assets/img/default/school.png';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: UploadURL, itemAlias: 'Image' });
    }
    AddTrainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeService.getByType(_common_global_constants__WEBPACK_IMPORTED_MODULE_3__["GloblConstants"].educationLevelCodeType).subscribe(function (EducationLevelData) {
            _this.educationLevels = EducationLevelData.filter(function (educationLevel) {
                educationLevel.isChecked = false;
                return educationLevel;
            });
        });
        this.codeService.getByType(_common_global_constants__WEBPACK_IMPORTED_MODULE_3__["GloblConstants"].subjectCodeType).subscribe(function (SubjectsData) {
            _this.subjects = SubjectsData.filter(function (subject) {
                subject.isChecked = false;
                return subject;
            });
        });
        this.uploader.onAfterAddingFile = function (file) {
            console.log(file.file);
            file.withCredentials = false;
            _this.fileUploadForm = new app_models__WEBPACK_IMPORTED_MODULE_4__["FileUploadForm"]();
            _this.fileUploadForm.file = file;
            _this.image = new app_models__WEBPACK_IMPORTED_MODULE_4__["DocumentDto"]();
            _this.image.documentName = file.file.name;
            _this.image.documentType = "Profile";
            _this.image.mime = file.file.type;
            _this.fileUploadForm.document = _this.image;
            console.log(_this.image);
            /*
            this.fileUploadService.uploadAgencyImage(this.fileUploadForm).subscribe(
              (DocumentData: DocumentDto) => {
                this.imagePath = DocumentData.documentUrl;
              }
            );
            */
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('FileUpload:uploaded:', item, status, response);
            // alert('File uploaded successfully');
        };
    };
    AddTrainerComponent.prototype.changeHandler = function (objects, type) {
        if (objects !== null && objects.length > 0) {
            if (type === _common_global_constants__WEBPACK_IMPORTED_MODULE_3__["GloblConstants"].educationLevelCodeType) {
                this.theCode = this.educationLevels.find(function (edu) { return edu.id === objects[0].id; });
            }
            else if (type === _common_global_constants__WEBPACK_IMPORTED_MODULE_3__["GloblConstants"].subjectCodeType) {
                this.theCode = this.subjects.find(function (sub) { return sub.id === objects[0].id; });
            }
            this.theCode.isChecked = !this.theCode.isChecked;
        }
    };
    AddTrainerComponent.prototype.onFileChanged = function (event) {
        // event.uploadAll();
        // console.log(event.uploadAll());
    };
    AddTrainerComponent.ctorParameters = function () { return [
        { type: app_services__WEBPACK_IMPORTED_MODULE_2__["CodeService"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_2__["fileUploadService"] }
    ]; };
    AddTrainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-trainer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-trainer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trainers/add-trainer/add-trainer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-trainer.component.css */ "./src/app/trainers/add-trainer/add-trainer.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_services__WEBPACK_IMPORTED_MODULE_2__["CodeService"],
            app_services__WEBPACK_IMPORTED_MODULE_2__["fileUploadService"]])
    ], AddTrainerComponent);
    return AddTrainerComponent;
}());



/***/ }),

/***/ "./src/app/trainers/add-trainer/add-trainer.module.ts":
/*!************************************************************!*\
  !*** ./src/app/trainers/add-trainer/add-trainer.module.ts ***!
  \************************************************************/
/*! exports provided: AddTrainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrainerModule", function() { return AddTrainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm5/ng2-file-upload.js");
/* harmony import */ var _add_trainer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-trainer-routing.module */ "./src/app/trainers/add-trainer/add-trainer-routing.module.ts");
/* harmony import */ var _add_trainer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-trainer.component */ "./src/app/trainers/add-trainer/add-trainer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AddTrainerModule = /** @class */ (function () {
    function AddTrainerModule() {
    }
    AddTrainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _add_trainer_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddTrainerRoutingModule"],
            ],
            declarations: [
                _add_trainer_component__WEBPACK_IMPORTED_MODULE_4__["AddTrainerComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileSelectDirective"],
            ],
        })
    ], AddTrainerModule);
    return AddTrainerModule;
}());



/***/ })

}]);
//# sourceMappingURL=trainers-add-trainer-add-trainer-module.js.map