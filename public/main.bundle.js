webpackJsonp([1,4],{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidateService = (function () {
    function ValidateService(http) {
        this.http = http;
        this.server = "http://localhost:3000/";
    }
    //user info validation for registration
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.re_password == undefined || user.status == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateContact = function (contact) {
        var re = /^\d{10}$/;
        return re.test(contact);
    };
    ValidateService.prototype.comparePassword = function (pass1, pass2) {
        if (pass1 == pass2) {
            return true;
        }
        else {
            return false;
        }
    };
    //job info validation for posting job
    ValidateService.prototype.validateJob = function (job) {
        if (job.title == undefined || job.description == undefined || job.deadline == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ValidateService);

var _a;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/validate.service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(233);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobsService = (function () {
    function JobsService(http) {
        this.http = http;
        this.server = "";
    }
    JobsService.prototype.getAll = function () {
        return this.http.get(this.server + '/api/jobs').map(function (res) { return res.json(); });
    };
    JobsService.prototype.getJobById = function (id) {
        return this.http.get(this.server + '/api/job/' + id).map(function (res) { return res.json(); });
    };
    JobsService.prototype.addJob = function (newJob) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.server + '/api/job', JSON.stringify(newJob), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    JobsService.prototype.deleteJob = function (id) {
        return this.http.delete(this.server + '/api/job/' + id)
            .map(function (res) { return res.json(); });
    };
    JobsService.prototype.getJobByEmployerId = function (id) {
        return this.http.get(this.server + '/api/jobs/' + id)
            .map(function (res) { return res.json(); });
    };
    return JobsService;
}());
JobsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], JobsService);

var _a;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/jobs.service.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(339),
        styles: [__webpack_require__(326)]
    })
], AppComponent);

//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/app.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_datepicker__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_quill_editor__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_reset_reset_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_reset_password_reset_password_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dashboard_student_student_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_employer_employer_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dashboard_add_job_add_job_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dashboard_read_more_read_more_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_authentication_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_validate_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_jobs_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 //module for paginating for long job lists
 //module for ordering the list items
 //module to display timo ago format in date
 // module to fix date input field not working in firefox
 //module for text editor input field
//components









//components inside DashboardComponent




//services




//configuring routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard/add', component: __WEBPACK_IMPORTED_MODULE_22__components_dashboard_add_job_add_job_component__["a" /* AddJobComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard/:id', component: __WEBPACK_IMPORTED_MODULE_23__components_dashboard_read_more_read_more_component__["a" /* ReadMoreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reset', component: __WEBPACK_IMPORTED_MODULE_17__components_reset_reset_component__["a" /* ResetComponent */] },
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_19__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_dashboard_student_student_component__["a" /* StudentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_dashboard_employer_employer_component__["a" /* EmployerComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_dashboard_add_job_add_job_component__["a" /* AddJobComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_dashboard_read_more_read_more_component__["a" /* ReadMoreComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_reset_reset_component__["a" /* ResetComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_9_ng2_datepicker__["a" /* DatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_25__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_26__services_jobs_service__["a" /* JobsService */],
            __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/app.module.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_jobs_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddJobComponent = (function () {
    function AddJobComponent(router, authService, validateService, flashMessage, jobsService) {
        this.router = router;
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.jobsService = jobsService;
        this.quillEditorOptions = {
            placeholder: "insert content here....",
            size: "large"
        };
    }
    AddJobComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getUser();
    };
    AddJobComponent.prototype.onAddSubmit = function () {
        var _this = this;
        var job = {
            title: this.title,
            description: this.description,
            application_link: this.application_link,
            deadline: this.deadline.formatted,
            employer_id: this.user.id,
            employer_name: this.user.name,
            employer_email: this.user.email
        };
        if (this.contact) {
            job['employer_contact'] = this.user.contact;
        }
        //validation
        if (!this.validateService.validateJob(job)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //add job after validation successful
        this.jobsService.addJob(job).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Job added successfully.', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Error occured. Please try again.', { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.router.navigate(['/dashboard']);
        });
    };
    return AddJobComponent;
}());
AddJobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-job',
        template: __webpack_require__(340),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_jobs_service__["a" /* JobsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_jobs_service__["a" /* JobsService */]) === "function" && _e || Object])
], AddJobComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/add-job.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getUser();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(341),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployerComponent = (function () {
    function EmployerComponent(router, jobsService) {
        this.router = router;
        this.jobsService = jobsService;
        this.showDescription = false;
    }
    EmployerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobsService.getJobByEmployerId(this.employer_id)
            .subscribe(function (jobs) {
            _this.jobs = jobs;
        });
    };
    EmployerComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.jobsService.deleteJob(id).subscribe(function (data) {
            if (data.success) {
                _this.jobs = _this.jobs.filter(function (job) { return job._id != id; });
                console.log(_this.jobs);
            }
        });
    };
    EmployerComponent.prototype.clickIndex = function (i) {
        this.selectedIndex = i;
        this.showDescription = !this.showDescription;
    };
    return EmployerComponent;
}());
EmployerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-employer',
        template: __webpack_require__(342),
        styles: [__webpack_require__(329)],
        inputs: ['employer_id']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__["a" /* JobsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__["a" /* JobsService */]) === "function" && _b || Object])
], EmployerComponent);

var _a, _b;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/employer.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadMoreComponent = (function () {
    function ReadMoreComponent(jobsService, route) {
        this.jobsService = jobsService;
        this.route = route;
    }
    ReadMoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobsService.getJobById(this.route.snapshot.params['id'])
            .subscribe(function (job) {
            _this.job = job;
        });
    };
    return ReadMoreComponent;
}());
ReadMoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-read-more',
        template: __webpack_require__(343),
        styles: [__webpack_require__(330)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__["a" /* JobsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__["a" /* JobsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ReadMoreComponent);

var _a, _b;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/read-more.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jobs_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentComponent = (function () {
    function StudentComponent(jobsService) {
        this.jobsService = jobsService;
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobsService.getAll()
            .subscribe(function (jobs) {
            _this.jobs = jobs;
        });
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-student',
        template: __webpack_require__(344),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jobs_service__["a" /* JobsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_jobs_service__["a" /* JobsService */]) === "function" && _a || Object])
], StudentComponent);

var _a;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/student.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(345),
        styles: [__webpack_require__(332)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/home.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(346),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/login.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(347),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(authService, validateService, flashMessage, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.displayForm = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile()
            .subscribe(function (profile) {
            _this.user = profile.user;
        });
    };
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        var userDetail = {
            id: this.user.id,
            old_password: this.old_password,
            password: this.password
        };
        //compare password
        if (!this.validateService.comparePassword(this.password, this.re_password)) {
            this.flashMessage.show('Passwords do not match', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.changePassword(userDetail).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.displayForm = false;
                _this.old_password = "";
                _this.password = "";
                _this.re_password = "";
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.displayForm = true;
            }
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(348),
        styles: [__webpack_require__(335)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/profile.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            contact: this.contact,
            username: this.username,
            password: this.password,
            re_password: this.re_password,
            status: this.status
        };
        //validation
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //validation email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please enter a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //10 digit phone number validation
        if (!this.validateService.validateContact(user.contact)) {
            this.flashMessage.show('Please enter 10 digit contact number', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //compare password
        if (!this.validateService.comparePassword(user.password, user.re_password)) {
            this.flashMessage.show('Passwords do not match', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(349),
        styles: [__webpack_require__(336)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/register.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(authService, validateService, flashMessage, route, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.router = router;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.reset(this.route.snapshot.params['token'])
            .subscribe(function (token) {
            _this.token = token;
            if (!token.success) {
                _this.flashMessage.show(token.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['reset']);
            }
        });
    };
    ResetPasswordComponent.prototype.onResetSubmit = function () {
        var _this = this;
        //comparing passwords
        if (!this.validateService.comparePassword(this.password, this.re_password)) {
            this.flashMessage.show('Passwords do not match', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        var user = {
            id: this.token.user_id,
            password: this.password,
        };
        // changing password
        this.authService.resetPassword(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__(350),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ResetPasswordComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/reset-password.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetComponent = (function () {
    function ResetComponent(validateService, authService, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent.prototype.onResetSubmit = function () {
        var _this = this;
        //validation email
        if (!this.validateService.validateEmail(this.email)) {
            this.flashMessage.show('Please enter a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.resetEmail(this.email).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 10000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return ResetComponent;
}());
ResetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reset',
        template: __webpack_require__(351),
        styles: [__webpack_require__(338)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ResetComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/reset.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/environment.js.map

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 92,
	"./af.js": 92,
	"./ar": 99,
	"./ar-dz": 93,
	"./ar-dz.js": 93,
	"./ar-kw": 94,
	"./ar-kw.js": 94,
	"./ar-ly": 95,
	"./ar-ly.js": 95,
	"./ar-ma": 96,
	"./ar-ma.js": 96,
	"./ar-sa": 97,
	"./ar-sa.js": 97,
	"./ar-tn": 98,
	"./ar-tn.js": 98,
	"./ar.js": 99,
	"./az": 100,
	"./az.js": 100,
	"./be": 101,
	"./be.js": 101,
	"./bg": 102,
	"./bg.js": 102,
	"./bn": 103,
	"./bn.js": 103,
	"./bo": 104,
	"./bo.js": 104,
	"./br": 105,
	"./br.js": 105,
	"./bs": 106,
	"./bs.js": 106,
	"./ca": 107,
	"./ca.js": 107,
	"./cs": 108,
	"./cs.js": 108,
	"./cv": 109,
	"./cv.js": 109,
	"./cy": 110,
	"./cy.js": 110,
	"./da": 111,
	"./da.js": 111,
	"./de": 114,
	"./de-at": 112,
	"./de-at.js": 112,
	"./de-ch": 113,
	"./de-ch.js": 113,
	"./de.js": 114,
	"./dv": 115,
	"./dv.js": 115,
	"./el": 116,
	"./el.js": 116,
	"./en-au": 117,
	"./en-au.js": 117,
	"./en-ca": 118,
	"./en-ca.js": 118,
	"./en-gb": 119,
	"./en-gb.js": 119,
	"./en-ie": 120,
	"./en-ie.js": 120,
	"./en-nz": 121,
	"./en-nz.js": 121,
	"./eo": 122,
	"./eo.js": 122,
	"./es": 124,
	"./es-do": 123,
	"./es-do.js": 123,
	"./es.js": 124,
	"./et": 125,
	"./et.js": 125,
	"./eu": 126,
	"./eu.js": 126,
	"./fa": 127,
	"./fa.js": 127,
	"./fi": 128,
	"./fi.js": 128,
	"./fo": 129,
	"./fo.js": 129,
	"./fr": 132,
	"./fr-ca": 130,
	"./fr-ca.js": 130,
	"./fr-ch": 131,
	"./fr-ch.js": 131,
	"./fr.js": 132,
	"./fy": 133,
	"./fy.js": 133,
	"./gd": 134,
	"./gd.js": 134,
	"./gl": 135,
	"./gl.js": 135,
	"./gom-latn": 136,
	"./gom-latn.js": 136,
	"./he": 137,
	"./he.js": 137,
	"./hi": 138,
	"./hi.js": 138,
	"./hr": 139,
	"./hr.js": 139,
	"./hu": 140,
	"./hu.js": 140,
	"./hy-am": 141,
	"./hy-am.js": 141,
	"./id": 142,
	"./id.js": 142,
	"./is": 143,
	"./is.js": 143,
	"./it": 144,
	"./it.js": 144,
	"./ja": 145,
	"./ja.js": 145,
	"./jv": 146,
	"./jv.js": 146,
	"./ka": 147,
	"./ka.js": 147,
	"./kk": 148,
	"./kk.js": 148,
	"./km": 149,
	"./km.js": 149,
	"./kn": 150,
	"./kn.js": 150,
	"./ko": 151,
	"./ko.js": 151,
	"./ky": 152,
	"./ky.js": 152,
	"./lb": 153,
	"./lb.js": 153,
	"./lo": 154,
	"./lo.js": 154,
	"./lt": 155,
	"./lt.js": 155,
	"./lv": 156,
	"./lv.js": 156,
	"./me": 157,
	"./me.js": 157,
	"./mi": 158,
	"./mi.js": 158,
	"./mk": 159,
	"./mk.js": 159,
	"./ml": 160,
	"./ml.js": 160,
	"./mr": 161,
	"./mr.js": 161,
	"./ms": 163,
	"./ms-my": 162,
	"./ms-my.js": 162,
	"./ms.js": 163,
	"./my": 164,
	"./my.js": 164,
	"./nb": 165,
	"./nb.js": 165,
	"./ne": 166,
	"./ne.js": 166,
	"./nl": 168,
	"./nl-be": 167,
	"./nl-be.js": 167,
	"./nl.js": 168,
	"./nn": 169,
	"./nn.js": 169,
	"./pa-in": 170,
	"./pa-in.js": 170,
	"./pl": 171,
	"./pl.js": 171,
	"./pt": 173,
	"./pt-br": 172,
	"./pt-br.js": 172,
	"./pt.js": 173,
	"./ro": 174,
	"./ro.js": 174,
	"./ru": 175,
	"./ru.js": 175,
	"./sd": 176,
	"./sd.js": 176,
	"./se": 177,
	"./se.js": 177,
	"./si": 178,
	"./si.js": 178,
	"./sk": 179,
	"./sk.js": 179,
	"./sl": 180,
	"./sl.js": 180,
	"./sq": 181,
	"./sq.js": 181,
	"./sr": 183,
	"./sr-cyrl": 182,
	"./sr-cyrl.js": 182,
	"./sr.js": 183,
	"./ss": 184,
	"./ss.js": 184,
	"./sv": 185,
	"./sv.js": 185,
	"./sw": 186,
	"./sw.js": 186,
	"./ta": 187,
	"./ta.js": 187,
	"./te": 188,
	"./te.js": 188,
	"./tet": 189,
	"./tet.js": 189,
	"./th": 190,
	"./th.js": 190,
	"./tl-ph": 191,
	"./tl-ph.js": 191,
	"./tlh": 192,
	"./tlh.js": 192,
	"./tr": 193,
	"./tr.js": 193,
	"./tzl": 194,
	"./tzl.js": 194,
	"./tzm": 196,
	"./tzm-latn": 195,
	"./tzm-latn.js": 195,
	"./tzm.js": 196,
	"./uk": 197,
	"./uk.js": 197,
	"./ur": 198,
	"./ur.js": 198,
	"./uz": 200,
	"./uz-latn": 199,
	"./uz-latn.js": 199,
	"./uz.js": 200,
	"./vi": 201,
	"./vi.js": 201,
	"./x-pseudo": 202,
	"./x-pseudo.js": 202,
	"./yo": 203,
	"./yo.js": 203,
	"./zh-cn": 204,
	"./zh-cn.js": 204,
	"./zh-hk": 205,
	"./zh-hk.js": 205,
	"./zh-tw": 206,
	"./zh-tw.js": 206
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 313;


/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = ".middle {\n    width: 60%;\n    margin: 0 auto;\n}"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = ".posted p {\n    font-size: .8em;\n    font-style: italic;\n}\n\n.centered {\n    width: 90%;\n    margin: 10px auto;\n    padding: 10px;\n}\n\n.button {\n    background-color: #4CAF50;\n    border: none;\n    color: white;\n    padding: 10px 20px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 1.5em;\n    margin: 4px 2px;\n    margin-top: 40px;\n    cursor: pointer;\n}"

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "div li {\n    text-align: center;\n    padding: 20px;\n    margin: 10px;\n    font-size: 1.5em;\n}\n\nform {\n    padding-top: 40px;\n    padding-right: 50px;\n}"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<div class=\"middle\"> \n  <app-navbar></app-navbar>\n  <div class=\"container-fluid\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Add Job <span><a [routerLink]=\"['/dashboard']\"><i class=\"fa fa-arrow-circle-left pull-right\"></i></a></span></h1>\n<form (submit)=\"onAddSubmit()\" >\n  <div class=\"form-group\">\n    <label>Title: *</label>\n    <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Description: *</label><br>\n    <quill-editor name=\"description\" [(ngModel)]=\"description\" [options]=\"quillEditorOptions\" ></quill-editor>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"checkbox\" name=\"contact\" [(ngModel)]=\"contact\" >\n    <label>Display Contact No</label>\n    \n  </div>\n  <div class=\"form-group\">\n    <label>Application link: ( If available, instead of Email )</label>\n    <input type=\"url\" name=\"applicaiton_link\" [(ngModel)]=\"application_link\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Deadline: *</label><br>\n    <ng2-datepicker [options]=\"options\" name=\"deadline\" [(ngModel)]=\"deadline\" ></ng2-datepicker>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n</form>\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"user\">\n  <div *ngIf=\"user.status == 'student'\">\n    <app-student></app-student>\n  </div>\n  <div *ngIf=\"user.status == 'employer'\">\n    <app-employer [employer_id]=\"user.id\"></app-employer>\n  </div>\n</div>\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">My Jobs <span class=\"pull-right\"><a [routerLink]=\"['/dashboard/add']\"><i class=\"fa fa-plus-square-o fa-lg\"></i></a></span></h1>\n<div *ngFor=\"let job of jobs; let i = index\" class=\"centered\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <h3><a (click)=\"clickIndex(i)\">{{job.title}}</a></h3>\n    </div>\n    <div class=\"col-md-2\">\n      <p>{{job.posted_date | date : \"short\"}}</p>\n    </div>\n    <div class=\"col-md-1 col-md-offset-1\">\n      <a (click)=\"onDeleteClick(job._id)\"><i class=\"fa fa-trash fa-lg\"></i></a>\n    </div>\n  </div>\n  <div *ngIf=\"selectedIndex == i && showDescription\">\n    <span [innerHTML]=\"job.description\" ></span>\n  </div>\n</div>"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"job\">\n  <h1 class=\"page-header\">{{ job.title }} <span><a [routerLink]=\"['/dashboard']\"><i class=\"fa fa-arrow-circle-left pull-right\"></i></a></span></h1>\n    <span [innerHTML]=\"job.description\" ></span>\n  <div class=\"pull-right\">\n    <p>Posted by: <strong>{{ job.employer_name }}</strong></p>\n    <div *ngIf=\"job.employer_contact\">\n      <p>Apply to: <strong>{{ job.employer_contact }}</strong></p>\n    </div>\n    <div *ngIf=\"job.application_link\">\n      <p>Application Link: <a href=\"{{job.application_link}}\" target=\"_blank\"><strong>{{ job.application_link }}</strong></a></p>\n    </div>\n      <div *ngIf=\"!job.application_link\">\n      <p>Apply to: <strong>{{ job.employer_email }}</strong></p>\n    </div>\n    <p>Deadline: <strong>{{ job.deadline | date }}</strong></p>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Job Board</h1>\n<div *ngFor=\"let job of jobs | orderBy:'posted_date':'reverse'| paginate: { itemsPerPage: 5, currentPage: p }\" class=\"centered\"> \n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <h3>{{job.employer_name}}</h3>\n    </div>\n    <div class=\"col-md-7\">\n      <h3>{{job.title}}</h3>    \n      <span [innerHTML]=\"job.description | slice:0:200\" ></span>\n      <div>Deadline: <span>{{job.deadline | date}}</span></div>\n    </div>\n    <div class=\"col-md-3\">\n      <button type=\"button\" class=\"button pull-right\" [routerLink]=\"['/dashboard/'+job._id]\">Read more</button>\n    </div>\n  </div>\n  <div class=\"posted pull-right\">\n    <p>Posted: {{job.posted_date | amTimeAgo }}</p>\n  </div>\n</div>\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Metropolia Marketplace</h1>\n  <p class=\"lead\">A place where you can search for jobs, projects, internships and trainee positions.</p>\n  <div>\n    <a [routerLink]=\"['/register']\" class=\"btn btn-primary btn-lg\">Register</a>\n    <a [routerLink]=\"['/login']\" class=\"btn btn-default btn-lg\">Login</a>\n  </div>\n</div>"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\" >\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n<a [routerLink]=\"['/reset']\" class=\"pull-right\" >Forgot Password</a>\n\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Marketplace</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            \n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <!--displayed when logged in-->\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\n            \n            <!--displayed when not logged in-->\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n    </nav>\n\n"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Account Information</h1>\n<div *ngIf=\"user\">\n  <ul class=\"list-group\">\n    <div>\n      <li class=\"list-group-item col-md-3\">Username</li>\n      <li class=\"list-group-item col-md-8 col-md-offset-1\">{{user.username}}</li>\n    </div>\n    <div>\n      <li class=\"list-group-item col-md-3\">Name</li>\n      <li  class=\"list-group-item col-md-8 col-md-offset-1\">{{user.name}}</li>\n    </div>\n    <div>\n      <li class=\"list-group-item col-md-3\">Email</li>\n      <li  class=\"list-group-item col-md-8 col-md-offset-1\">{{user.email}}</li>\n    </div>\n    <div>\n      <li class=\"list-group-item col-md-3\">Contact</li>\n      <li  class=\"list-group-item col-md-8 col-md-offset-1\">{{user.contact}}</li>\n    </div>\n    <div>\n      <li class=\"list-group-item col-md-3\">Password</li>\n      <li  class=\"list-group-item col-md-8 col-md-offset-1\">***********</li>\n    </div>\n  </ul>\n  <button class=\"btn btn-primary btn-lg\" (click)=\"displayForm = !displayForm\">Change Password</button>\n  <div *ngIf=\"displayForm\">\n    <form (submit)=\"changePassword()\">\n      <div class=\"form-group\">\n        <label>Old Password: </label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"old_password\" name=\"old_password\">\n      </div>\n      <div class=\"form-group\">\n        <label>New Password: </label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      <div class=\"form-group\">\n        <label>Comfirm Password: </label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"re_password\" name=\"re_password\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Change Password\">\n    </form>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Contact No. (040-format)</label>\n    <input type=\"text\" [(ngModel)]=\"contact\" name=\"contact\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Confirm Password</label>\n    <input type=\"password\" [(ngModel)]=\"re_password\" name=\"re_password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>I am a </label>\n    <select [(ngModel)]=\"status\" name=\"status\" class=\"form-control\">\n      <option value=\"employer\">Employer</option>\n      <option value=\"student\">student</option>\n    </select>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n</form>\n"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Reset Password</h2>\n<form (submit)=\"onResetSubmit()\" >\n  <div class=\"form-group\">\n    <label>Enter new password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Confirm password</label>\n    <input type=\"password\" [(ngModel)]=\"re_password\" name=\"re_password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-danger\" value=\"Reset\" />\n</form>\n\n\n"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Password reset email</h2>\n<div class=\"form-group\">\n  <label>Enter Email</label>\n  <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Enter your Email\" >\n</div>\n<button class=\"btn btn-primary\" (click)=\"onResetSubmit()\" >Send</button>\n\n"

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(222);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.server = "";
    }
    //registering new user
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post(this.server + '/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //user authentication
    AuthenticationService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post(this.server + '/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get user profile
    AuthenticationService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('content-type', 'application/json');
        return this.http.get(this.server + '/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //send password reset email
    AuthenticationService.prototype.resetEmail = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.get(this.server + '/users/resetemail/' + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //check validity of reset token
    AuthenticationService.prototype.reset = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.get(this.server + '/users/reset/' + token, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //change user password
    AuthenticationService.prototype.changePassword = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.put(this.server + '/users/register/' + user.id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //reset user password
    AuthenticationService.prototype.resetPassword = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post(this.server + '/users/reset', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthenticationService.prototype.getUser = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user;
    };
    AuthenticationService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthenticationService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthenticationService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=/home/vlad/Desktop/marketplace_app/angular-src/src/authentication.service.js.map

/***/ })

},[388]);
//# sourceMappingURL=main.bundle.map