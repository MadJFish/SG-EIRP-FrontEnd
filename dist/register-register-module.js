(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card card-stats\">\n            <div class=\"card-header card-header-danger\">\n                <h3 class=\"card-title\">SG-EIRP Tutor Registration</h3>\n            </div>\n            <div class=\"card-footer\">\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                    <span>Personal Particulars</span>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email <span style=\"color:red\">*</span></label>\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"username\">Username <span style=\"color:red\">*</span></label>\n                        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password <span style=\"color:red\">*</span></label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group\">\n                            <label for=\"firstName\">First Name</label>\n                            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.firstName.errors.required\">First name is not valid</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"lastName\">Last Name</label>\n                            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.lastName.errors.required\">Last name is not valid</div>\n                            </div>\n                        </div>\n                    </div>\n                    <span>Tutor Agency</span>\n                    <div class=\"form-group\">\n                        <label for=\"agencyName\">Agency Name <span style=\"color:red\">*</span></label>\n                        <input type=\"text\" formControlName=\"agencyName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.agencyName.errors }\" />\n                        <div *ngIf=\"submitted && f.agencyName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.agencyName.errors.required\">Agency name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"phone\">Phone</label>\n                        <input type=\"text\" formControlName=\"phone\" class=\"form-control\" />\n                    </div>\n\n                    <!--\n                    <div class=\"form-group\">\n                        <label for=\"age\">Age</label>\n                        <input type=\"text\" formControlName=\"age\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.age.errors }\" />\n                        <div *ngIf=\"submitted && f.age.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.age.errors.required\">Age is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"eduLevel\">Education Level</label>\n                        <input type=\"text\" formControlName=\"eduLevel\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.eduLevel.errors }\" />\n                        <div *ngIf=\"submitted && f.eduLevel.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.eduLevel.errors.required\">Education level is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"gender\">Gender</label>\n                        <input type=\"text\" formControlName=\"gender\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.gender.errors }\" />\n                        <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.gender.errors.required\">Gender is required</div>\n                        </div>\n                    </div>\n                    -->\n                    <br />\n                    <div class=\"form-group\">\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                            Register\n                        </button>\n                        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/_models/_agencyAndProgram/educationAgencyBranch.ts":
/*!********************************************************************!*\
  !*** ./src/app/_models/_agencyAndProgram/educationAgencyBranch.ts ***!
  \********************************************************************/
/*! exports provided: EducationAgencyBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationAgencyBranch", function() { return EducationAgencyBranch; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var EducationAgencyBranch = /** @class */ (function () {
    function EducationAgencyBranch() {
    }
    return EducationAgencyBranch;
}());



/***/ }),

/***/ "./src/app/_models/_agencyAndProgram/educationAgencyDetails.ts":
/*!*********************************************************************!*\
  !*** ./src/app/_models/_agencyAndProgram/educationAgencyDetails.ts ***!
  \*********************************************************************/
/*! exports provided: EducationAgencyDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationAgencyDetails", function() { return EducationAgencyDetails; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var EducationAgencyDetails = /** @class */ (function () {
    function EducationAgencyDetails() {
    }
    return EducationAgencyDetails;
}());



/***/ }),

/***/ "./src/app/_models/_agencyAndProgram/educationAgencyLeadership.ts":
/*!************************************************************************!*\
  !*** ./src/app/_models/_agencyAndProgram/educationAgencyLeadership.ts ***!
  \************************************************************************/
/*! exports provided: EducationAgencyLeadership */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationAgencyLeadership", function() { return EducationAgencyLeadership; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var EducationAgencyLeadership = /** @class */ (function () {
    function EducationAgencyLeadership() {
    }
    return EducationAgencyLeadership;
}());



/***/ }),

/***/ "./src/app/_models/_agencyAndProgram/program.ts":
/*!******************************************************!*\
  !*** ./src/app/_models/_agencyAndProgram/program.ts ***!
  \******************************************************/
/*! exports provided: Program */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return Program; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Program = /** @class */ (function () {
    function Program() {
    }
    return Program;
}());



/***/ }),

/***/ "./src/app/_models/_agencyAndProgram/tutorAgency.ts":
/*!**********************************************************!*\
  !*** ./src/app/_models/_agencyAndProgram/tutorAgency.ts ***!
  \**********************************************************/
/*! exports provided: TutorAgencyDto, TutorEnrollRequestDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorAgencyDto", function() { return TutorAgencyDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorEnrollRequestDto", function() { return TutorEnrollRequestDto; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TutorAgencyDto = /** @class */ (function () {
    function TutorAgencyDto() {
    }
    TutorAgencyDto.prototype.setValue = function (data) {
        this.name = data.agencyName;
        this.promoText = "";
        this.featured = false;
        this.targetEduLevels = [];
        this.tutorAgencyDocuments = [];
        this.phone = data.phone;
        this.email = "";
        this.aboutUs = "";
        this.subjects = [];
        this.locations = [];
    };
    return TutorAgencyDto;
}());

var TutorEnrollRequestDto = /** @class */ (function () {
    function TutorEnrollRequestDto() {
    }
    TutorEnrollRequestDto.prototype.setValue = function (data) {
        this.username = data.username;
        this.password = data.password;
        this.email = data.email;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.tutorAgent = new TutorAgencyDto();
        this.tutorAgent.setValue(data);
    };
    return TutorEnrollRequestDto;
}());



/***/ }),

/***/ "./src/app/_models/_common/addressDto.ts":
/*!***********************************************!*\
  !*** ./src/app/_models/_common/addressDto.ts ***!
  \***********************************************/
/*! exports provided: AddressDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDto", function() { return AddressDto; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AddressDto = /** @class */ (function () {
    function AddressDto() {
        this.blockNo = "";
        this.latitude = 0;
        this.longitude = 0;
        this.postalCode = "";
        this.street = "";
        this.unitNo = "";
    }
    return AddressDto;
}());



/***/ }),

/***/ "./src/app/_models/_common/bulletin.ts":
/*!*********************************************!*\
  !*** ./src/app/_models/_common/bulletin.ts ***!
  \*********************************************/
/*! exports provided: Bulletin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bulletin", function() { return Bulletin; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Bulletin = /** @class */ (function () {
    function Bulletin() {
    }
    return Bulletin;
}());



/***/ }),

/***/ "./src/app/_models/_common/code.ts":
/*!*****************************************!*\
  !*** ./src/app/_models/_common/code.ts ***!
  \*****************************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Code = /** @class */ (function () {
    function Code() {
        this.isChecked = false;
    }
    return Code;
}());



/***/ }),

/***/ "./src/app/_models/_common/documentDto.ts":
/*!************************************************!*\
  !*** ./src/app/_models/_common/documentDto.ts ***!
  \************************************************/
/*! exports provided: DocumentDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDto", function() { return DocumentDto; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var DocumentDto = /** @class */ (function () {
    function DocumentDto() {
    }
    return DocumentDto;
}());



/***/ }),

/***/ "./src/app/_models/_common/fileUploadForm.ts":
/*!***************************************************!*\
  !*** ./src/app/_models/_common/fileUploadForm.ts ***!
  \***************************************************/
/*! exports provided: FileUploadForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadForm", function() { return FileUploadForm; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var FileUploadForm = /** @class */ (function () {
    function FileUploadForm() {
    }
    return FileUploadForm;
}());



/***/ }),

/***/ "./src/app/_models/_common/privilegeDto.ts":
/*!*************************************************!*\
  !*** ./src/app/_models/_common/privilegeDto.ts ***!
  \*************************************************/
/*! exports provided: PrivilegeDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegeDto", function() { return PrivilegeDto; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PrivilegeDto = /** @class */ (function () {
    function PrivilegeDto() {
    }
    return PrivilegeDto;
}());



/***/ }),

/***/ "./src/app/_models/_common/roleDto.ts":
/*!********************************************!*\
  !*** ./src/app/_models/_common/roleDto.ts ***!
  \********************************************/
/*! exports provided: RoleDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDto", function() { return RoleDto; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var RoleDto = /** @class */ (function () {
    function RoleDto() {
    }
    return RoleDto;
}());



/***/ }),

/***/ "./src/app/_models/_common/teacher.ts":
/*!********************************************!*\
  !*** ./src/app/_models/_common/teacher.ts ***!
  \********************************************/
/*! exports provided: Teacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return Teacher; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());



/***/ }),

/***/ "./src/app/_models/_loginAndEnrollment/UserResponseDto.ts":
/*!****************************************************************!*\
  !*** ./src/app/_models/_loginAndEnrollment/UserResponseDto.ts ***!
  \****************************************************************/
/*! exports provided: UserResponseDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResponseDto", function() { return UserResponseDto; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var UserResponseDto = /** @class */ (function () {
    function UserResponseDto() {
    }
    return UserResponseDto;
}());



/***/ }),

/***/ "./src/app/_models/_loginAndEnrollment/accessToken.ts":
/*!************************************************************!*\
  !*** ./src/app/_models/_loginAndEnrollment/accessToken.ts ***!
  \************************************************************/
/*! exports provided: AccessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return AccessToken; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AccessToken = /** @class */ (function () {
    function AccessToken(access_token, token_type, refresh_token, expires_in, scope, jti) {
        this.access_token = access_token;
        this.token_type = token_type;
        this.refresh_token = refresh_token;
        this.expires_in = expires_in;
        this.scope = scope;
        this.jti = jti;
    }
    return AccessToken;
}());



/***/ }),

/***/ "./src/app/_models/_loginAndEnrollment/signUpRequest.ts":
/*!**************************************************************!*\
  !*** ./src/app/_models/_loginAndEnrollment/signUpRequest.ts ***!
  \**************************************************************/
/*! exports provided: SignUpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpRequest", function() { return SignUpRequest; });
/* harmony import */ var _common_addressDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_common/addressDto */ "./src/app/_models/_common/addressDto.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SignUpRequest = /** @class */ (function () {
    function SignUpRequest() {
        this.userId = "";
        this.username = "";
        this.password = "";
        this.email = "";
        this.educationLevel = "";
        this.parent = false;
        this.gender = "MALE";
        this.phoneNumber = "";
        this.age = 0;
        this.studentName = "";
        this.relationShip = "";
        this.otherRelationShip = "";
        this.address = new _common_addressDto__WEBPACK_IMPORTED_MODULE_0__["AddressDto"]();
        this.token = "";
    }
    return SignUpRequest;
}());



/***/ }),

/***/ "./src/app/_models/_loginAndEnrollment/user.ts":
/*!*****************************************************!*\
  !*** ./src/app/_models/_loginAndEnrollment/user.ts ***!
  \*****************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var User = /** @class */ (function () {
    function User(username, password, age, educationLevel, email, gender, relationShip, otherRelationShip, parent, phoneNumber, studentName, token) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.educationLevel = educationLevel;
        this.email = email;
        this.gender = gender;
        this.relationShip = relationShip;
        this.otherRelationShip = otherRelationShip;
        this.parent = parent;
        this.phoneNumber = phoneNumber;
        this.studentName = studentName;
        this.token = token;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: EducationAgencyBranch, EducationAgencyDetails, EducationAgencyLeadership, Program, TutorAgencyDto, TutorEnrollRequestDto, AddressDto, Bulletin, Code, DocumentDto, FileUploadForm, PrivilegeDto, RoleDto, Teacher, AccessToken, SignUpRequest, User, UserResponseDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _agencyAndProgram_educationAgencyBranch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_agencyAndProgram/educationAgencyBranch */ "./src/app/_models/_agencyAndProgram/educationAgencyBranch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EducationAgencyBranch", function() { return _agencyAndProgram_educationAgencyBranch__WEBPACK_IMPORTED_MODULE_0__["EducationAgencyBranch"]; });

/* harmony import */ var _agencyAndProgram_educationAgencyDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_agencyAndProgram/educationAgencyDetails */ "./src/app/_models/_agencyAndProgram/educationAgencyDetails.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EducationAgencyDetails", function() { return _agencyAndProgram_educationAgencyDetails__WEBPACK_IMPORTED_MODULE_1__["EducationAgencyDetails"]; });

/* harmony import */ var _agencyAndProgram_educationAgencyLeadership__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_agencyAndProgram/educationAgencyLeadership */ "./src/app/_models/_agencyAndProgram/educationAgencyLeadership.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EducationAgencyLeadership", function() { return _agencyAndProgram_educationAgencyLeadership__WEBPACK_IMPORTED_MODULE_2__["EducationAgencyLeadership"]; });

/* harmony import */ var _agencyAndProgram_program__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_agencyAndProgram/program */ "./src/app/_models/_agencyAndProgram/program.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return _agencyAndProgram_program__WEBPACK_IMPORTED_MODULE_3__["Program"]; });

/* harmony import */ var _agencyAndProgram_tutorAgency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_agencyAndProgram/tutorAgency */ "./src/app/_models/_agencyAndProgram/tutorAgency.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorAgencyDto", function() { return _agencyAndProgram_tutorAgency__WEBPACK_IMPORTED_MODULE_4__["TutorAgencyDto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorEnrollRequestDto", function() { return _agencyAndProgram_tutorAgency__WEBPACK_IMPORTED_MODULE_4__["TutorEnrollRequestDto"]; });

/* harmony import */ var _common_addressDto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_common/addressDto */ "./src/app/_models/_common/addressDto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressDto", function() { return _common_addressDto__WEBPACK_IMPORTED_MODULE_5__["AddressDto"]; });

/* harmony import */ var _common_bulletin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_common/bulletin */ "./src/app/_models/_common/bulletin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bulletin", function() { return _common_bulletin__WEBPACK_IMPORTED_MODULE_6__["Bulletin"]; });

/* harmony import */ var _common_code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_common/code */ "./src/app/_models/_common/code.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _common_code__WEBPACK_IMPORTED_MODULE_7__["Code"]; });

/* harmony import */ var _common_documentDto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_common/documentDto */ "./src/app/_models/_common/documentDto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentDto", function() { return _common_documentDto__WEBPACK_IMPORTED_MODULE_8__["DocumentDto"]; });

/* harmony import */ var _common_fileUploadForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_common/fileUploadForm */ "./src/app/_models/_common/fileUploadForm.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUploadForm", function() { return _common_fileUploadForm__WEBPACK_IMPORTED_MODULE_9__["FileUploadForm"]; });

/* harmony import */ var _common_privilegeDto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_common/privilegeDto */ "./src/app/_models/_common/privilegeDto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrivilegeDto", function() { return _common_privilegeDto__WEBPACK_IMPORTED_MODULE_10__["PrivilegeDto"]; });

/* harmony import */ var _common_roleDto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_common/roleDto */ "./src/app/_models/_common/roleDto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoleDto", function() { return _common_roleDto__WEBPACK_IMPORTED_MODULE_11__["RoleDto"]; });

/* harmony import */ var _common_teacher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_common/teacher */ "./src/app/_models/_common/teacher.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return _common_teacher__WEBPACK_IMPORTED_MODULE_12__["Teacher"]; });

/* harmony import */ var _loginAndEnrollment_accessToken__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_loginAndEnrollment/accessToken */ "./src/app/_models/_loginAndEnrollment/accessToken.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _loginAndEnrollment_accessToken__WEBPACK_IMPORTED_MODULE_13__["AccessToken"]; });

/* harmony import */ var _loginAndEnrollment_signUpRequest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_loginAndEnrollment/signUpRequest */ "./src/app/_models/_loginAndEnrollment/signUpRequest.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignUpRequest", function() { return _loginAndEnrollment_signUpRequest__WEBPACK_IMPORTED_MODULE_14__["SignUpRequest"]; });

/* harmony import */ var _loginAndEnrollment_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_loginAndEnrollment/user */ "./src/app/_models/_loginAndEnrollment/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _loginAndEnrollment_user__WEBPACK_IMPORTED_MODULE_15__["User"]; });

/* harmony import */ var _loginAndEnrollment_UserResponseDto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_loginAndEnrollment/UserResponseDto */ "./src/app/_models/_loginAndEnrollment/UserResponseDto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserResponseDto", function() { return _loginAndEnrollment_UserResponseDto__WEBPACK_IMPORTED_MODULE_16__["UserResponseDto"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



















/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
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
    { path: '', component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var app_common_global_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/common/global-constants */ "./src/app/common/global-constants.ts");
/* harmony import */ var app_models_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/_models/index */ "./src/app/_models/index.ts");
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







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentAccessTokenValue) {
            // this.router.navigate(['/dashboard']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            firstName: [''],
            lastName: [''],
            agencyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['']
        });
        var storedValue = localStorage.getItem(app_common_global_constants__WEBPACK_IMPORTED_MODULE_5__["GloblConstants"].registrationForm);
        var obj = JSON.parse(storedValue);
        console.log(storedValue);
        // load saved temperary registration form values if it exists
        if (storedValue) {
            this.registerForm.controls["email"].setValue(obj.email);
            this.registerForm.controls["username"].setValue(obj.username);
            this.registerForm.controls["password"].setValue(obj.password);
            this.registerForm.controls["firstName"].setValue(obj.firstName);
            this.registerForm.controls["lastName"].setValue(obj.lastName);
            this.registerForm.controls["agencyName"].setValue(obj.agencyName);
            this.registerForm.controls["phone"].setValue(obj.phone);
        }
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        // Save the inputs of registration form as temperary stored data
        localStorage.setItem(app_common_global_constants__WEBPACK_IMPORTED_MODULE_5__["GloblConstants"].registrationForm, JSON.stringify(this.registerForm.value));
        // parse the register form to tutor enroll request
        var request = new app_models_index__WEBPACK_IMPORTED_MODULE_6__["TutorEnrollRequestDto"]();
        request.setValue(this.registerForm.value);
        console.log("request: " + JSON.stringify(request));
        this.userService.register(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            // clean local temp storage for sign up data
            localStorage.removeItem(app_common_global_constants__WEBPACK_IMPORTED_MODULE_5__["GloblConstants"].registrationForm);
            _this.router.navigate(['/login']);
        });
        /*
        ,
            (error: HttpResponse<any>) => {
                this.alertService.error(error.body);
                console.log("error: " + error);
                this.loading = false;
            }
        */
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegistrationRoutingModule"]
            ],
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ]
        })
    ], RegistrationModule);
    return RegistrationModule;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map