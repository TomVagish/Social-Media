(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".BottomNav p a{\r\n    color: black;\r\n      font-family: tahoma;\r\n      cursor: pointer;\r\n  }\r\n  .BottomNav p {\r\n  text-align: center;\r\n\r\n\r\n  }\r\n  h1 {\r\n\r\n    font-size: 100px;\r\n    margin-top:200px;\r\n    font-family: tahoma;\r\n    color: silver;\r\n}\r\n  span{\r\n    color: aquamarine;\r\n}\r\n  .col-md-12{\r\n    text-align: center;\r\n}\r\n  button{\r\n    font-size: 30px;\r\n    color: aquamarine;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7TUFDVixtQkFBbUI7TUFDbkIsZUFBZTtFQUNuQjtFQUNBO0VBQ0Esa0JBQWtCOzs7RUFHbEI7RUFFQTs7SUFFRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0VBQ0E7SUFDSSxpQkFBaUI7QUFDckI7RUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtFQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQm90dG9tTmF2IHAgYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuQm90dG9tTmF2IHAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgaDEge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxuICAgIGNvbG9yOiBzaWx2ZXI7XHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcbi5jb2wtbWQtMTJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Navigation -->\n\n\n<!-- App Routing -->\n<div>\n  <router-outlet></router-outlet>\n</div>\n\n<hr>\n\n<!-- footer -->\n<!-- <div class=\"container\">\n      <div class=\"BottomNav\">\n          <hr>\n          <hr>\n<p> <a href=\"https://www.facebook.com/tom.vagish1?ref=bookmarks\" target=\"blank\" >Powered By Tom</a></p>\n</div>\n\n</div> -->\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server.service */ "./src/app/server.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SocialMediaProject';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServesService"]], styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server.service */ "./src/app/server.service.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/side-nav/side-nav.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _post_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/addpost/addpost.component */ "./src/app/post/addpost/addpost.component.ts");
/* harmony import */ var _side_messenger_side_messenger_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./side-messenger/side-messenger.component */ "./src/app/side-messenger/side-messenger.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "./src/app/profile-page/profile-page.component.ts");











// Components










var appRoutes = [
    {
        path: '',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"]
    }, {
        path: 'homePage',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_17__["HomepageComponent"]
    }, {
        path: 'profilePage',
        component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_20__["ProfilePageComponent"]
    }, {
        path: 'LoginPage',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]
    }, {
        path: 'RegisterPage',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
                _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_13__["SideNavComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_14__["PostComponent"],
                _post_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__["AddpostComponent"],
                _side_messenger_side_messenger_component__WEBPACK_IMPORTED_MODULE_16__["SideMessengerComponent"],
                _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_20__["ProfilePageComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_17__["HomepageComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"]
            ],
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_server_service__WEBPACK_IMPORTED_MODULE_4__["ServesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    margin-top: 100px;\r\n}\r\n\r\n\r\n\r\n#headerinnav{\r\ncolor: whitesmoke;\r\n}\r\n\r\n\r\n\r\nspan{\r\ncolor: aquamarine;\r\n}\r\n\r\n\r\n\r\n#Frontappname{\r\n    text-align: center;\r\n    color: silver;\r\n    font-size: 100px;\r\n    margin-top: 150px;\r\n    transition: 1s all;\r\n}\r\n\r\n\r\n\r\n#Frontappname:hover {\r\n    color: grey;\r\n\r\n}\r\n\r\n\r\n\r\nimg {\r\n    width: 80%;\r\n    height: 30%;\r\n}\r\n\r\n\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n#login_reg{\r\n  color: whitesmoke;\r\n}\r\n\r\n\r\n\r\na{\r\n  text-decoration:none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7Ozs7QUFJQTtBQUNBLGlCQUFpQjtBQUNqQjs7OztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOzs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7O0FBRUE7SUFDSSxXQUFXOztBQUVmOzs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOzs7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7O0FBSUE7RUFDRSxpQkFBaUI7QUFDbkI7Ozs7QUFHQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJhcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuXHJcblxyXG4jaGVhZGVyaW5uYXZ7XHJcbmNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5zcGFue1xyXG5jb2xvcjogYXF1YW1hcmluZTtcclxufVxyXG5cclxuI0Zyb250YXBwbmFtZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBzaWx2ZXI7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XHJcbn1cclxuXHJcbiNGcm9udGFwcG5hbWU6aG92ZXIge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcblxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbiNsb2dpbl9yZWd7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark fixed-top\">\r\n\r\n  <h1 id=\"headerinnav\">\r\n      <span>Be</span>\r\n      Connected\r\n      <span>|</span>\r\n  </h1>\r\n\r\n  <ul class=\"nav justify-content-end\">\r\n\r\n              <li>\r\n                <div>\r\n                    <a routerLink=\"/LoginPage\" id=\"login_reg\"><span>L</span>ogin</a>\r\n                </div>\r\n\r\n                <div>\r\n                    <a routerLink=\"/\" id=\"login_reg\"><span>R</span>egister</a>\r\n                </div>\r\n              </li>\r\n\r\n      </ul>\r\n\r\n  </nav>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n\r\n            <h1 id=\"Frontappname\">\r\n                <span>Be</span>\r\n                Connected\r\n                <span>|</span>\r\n\r\n            </h1>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n\r\n            <img src=\"https://www.freeiconspng.com/uploads/user-login-icon-29.png\"></div>\r\n            <div class=\"col-xs-10\">\r\n\r\n                <form (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\" ngNativeValidate>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Email</label>\r\n                        <input\r\n                            class=\"form-control\"\r\n                            type=\"email\"\r\n                            id=\"email\"\r\n                            name=\"email\"\r\n                            ngModel\r\n                            required></div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"password\">password</label>\r\n                            <input\r\n                                minlength=\"6\"\r\n                                class=\"form-control\"\r\n                                type=\"password\"\r\n                                id=\"password\"\r\n                                name=\"password\"\r\n                                ngModel\r\n                                required></div>\r\n\r\n                            <button class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/server.service */ "./src/app/server.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, Serverservice) {
        this.router = router;
        this.Serverservice = Serverservice;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        var user = {
            userEmail: email,
            userPassword: password
        };
        this.Serverservice.login(user);
        // firebase
        //     .auth()
        //     .signInWithEmailAndPassword(email, password)
        //     .then(response => {
        //         localStorage.setItem('CurrentUserUid', response.user.uid);
        //         this
        //             .router
        //             .navigate(['/homePage']);
        //     })
        //     .catch(function (error) {
        //       console.log(error);
        //     });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"), styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_server_service__WEBPACK_IMPORTED_MODULE_3__["ServesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    margin-top: 100px;\r\n}\r\n\r\n\r\n\r\n#headerinnav{\r\ncolor: whitesmoke;\r\n}\r\n\r\n\r\n\r\nspan{\r\ncolor: aquamarine;\r\n}\r\n\r\n\r\n\r\n#Frontappname{\r\n    text-align: center;\r\n    color: silver;\r\n    font-size: 100px;\r\n    margin-top: 150px;\r\n    transition: 1s all;\r\n}\r\n\r\n\r\n\r\n#Frontappname:hover {\r\n    color: grey;\r\n\r\n}\r\n\r\n\r\n\r\nimg {\r\n    width: 80%;\r\n    height: 30%;\r\n}\r\n\r\n\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n#login_reg{\r\n  color: whitesmoke;\r\n}\r\n\r\n\r\n\r\na{\r\n  text-decoration:none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7Ozs7QUFJQTtBQUNBLGlCQUFpQjtBQUNqQjs7OztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOzs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7O0FBRUE7SUFDSSxXQUFXOztBQUVmOzs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOzs7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7O0FBSUE7RUFDRSxpQkFBaUI7QUFDbkI7Ozs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJhcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuXHJcblxyXG4jaGVhZGVyaW5uYXZ7XHJcbmNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5zcGFue1xyXG5jb2xvcjogYXF1YW1hcmluZTtcclxufVxyXG5cclxuI0Zyb250YXBwbmFtZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBzaWx2ZXI7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XHJcbn1cclxuXHJcbiNGcm9udGFwcG5hbWU6aG92ZXIge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcblxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbiNsb2dpbl9yZWd7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark fixed-top\">\n\n  <h1 id=\"headerinnav\">\n      <span>Be</span>\n      Connected\n      <span>|</span>\n  </h1>\n\n  <ul class=\"nav justify-content-end\">\n\n\n      <li>\n          <div>\n              <a routerLink=\"/LoginPage\" id=\"login_reg\"><span>L</span>ogin</a>\n          </div>\n\n          <div>\n              <a routerLink=\"/\" id=\"login_reg\"><span>R</span>egister</a>\n          </div>\n        </li>\n\n      </ul>\n\n  </nav>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <h1 id=\"Frontappname\">\n                <span>Be</span>\n                Connected\n                <span>|</span>\n            </h1>\n\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-md-2\">\n            <img\n                src=\"https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png\">\n            </div>\n            <div class=\"col-xs-10\">\n                <form (ngSubmit)=\"onRegisterd(f)\" #f=\"ngForm\" ngNativeValidate>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input\n                            class=\"form-control\"\n                            type=\"email\"\n                            id=\"email\"\n                            name=\"email\"\n                            ngModel\n                            required></div>\n                        <div class=\"form-group\">\n                            <label for=\"Firstname\">First name</label>\n                            <input\n                                class=\"form-control\"\n                                type=\"text\"\n                                id=\"Firstname\"\n                                name=\"Firstname\"\n                                ngModel\n                                ></div>\n                            <div class=\"form-group\">\n                                <label for=\"Lastname\">Last name</label>\n                                <input\n                                    class=\"form-control\"\n                                    type=\"text\"\n                                    id=\"Lastname\"\n                                    name=\"Lastname\"\n                                    ngModel\n                                    ></div>\n                                <div class=\"form-group\">\n                                    <label for=\"password\">password</label>\n                                    <input\n                                        minlength=\"6\"\n                                        class=\"form-control\"\n                                        type=\"password\"\n                                        id=\"password\"\n                                        name=\"password\"\n                                        ngModel\n                                        required></div>\n\n                                    <div class=\"form-group\">\n\n                                        <label class=\"btn btn-info\" for=\"userimg\">Upload profile image</label>\n                                        <input\n                                            type=\"file\"\n                                            id=\"userimg\"\n                                            name=\"userimg\"\n                                            ngModel\n                                            >\n                                        </div>\n\n                                        <button class=\"btn btn-primary\" type=\"submit\">Register</button>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, ServerService) {
        this.router = router;
        this.ServerService = ServerService;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterd = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        var user = {
            userEmail: email,
            userPassword: password
        };
        this.ServerService.register(user).subscribe();
        //     const firstname = form.value.Firstname;
        //     const lastname = form.value.Lastname;
        //     // built-in img for now!
        //     const userimg = form.value.userimg;
        //     // send email & password to firebase auth!
        //     firebase
        //         .auth()
        //         .createUserWithEmailAndPassword(email, password)
        //         .then(response => {
        //             // Create a new user
        //             this.newUser = new User(firstname, lastname, 'http://www.mizrach.org.il/wp-content/uploads/2009/03/boy-512.png', email, 10, response.user.uid);
        //             localStorage.setItem('CurrentUserUid', response.user.uid);
        //             // Post the user into 'Users' in Firebase/database
        //             this
        //                 .ServerService
        //                 .setNewUser(this.newUser, response.user.uid)
        //                 .subscribe((response) => console.log(name), (error) => console.log(error));
        //         })
        //         .then(response => {
        //             this
        //                 .router
        //                 .navigate(['/homePage']);
        //         })
        //         .catch(error => console.log(error));
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"), styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_server_service__WEBPACK_IMPORTED_MODULE_2__["ServesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n\r\n    margin-top: 75px;\r\n     background-color: rgba(221, 215, 215, 0.418);\r\n }\r\n .menuImg{\r\n     width: 8%;\r\n     margin-right: 20px;\r\n     transition: 0.3s all;\r\n }\r\n .menuImg:hover{\r\n     -webkit-transform: rotate(90deg);\r\n             transform: rotate(90deg);\r\n     width: 8%;\r\n     margin-right: 20px;\r\n }\r\n .AddpostImg{\r\n     float: right;\r\n     width: 10%;\r\n     transition: 0.5s all;\r\n }\r\n #signOutbutton{\r\n  color: aquamarine;\r\n}\r\n h1 {\r\n\r\n  font-family: tahoma;\r\n  color: whitesmoke;\r\n}\r\n span{\r\n  color: aquamarine;\r\n}\r\n nav{\r\n  opacity: 0.9;\r\n  }\r\n .container-fluid{\r\n     display: none;\r\n     margin-top: 70px;\r\n\r\n   }\r\n .MessengerImg{\r\n       float: right;\r\n       width: 10%;\r\n   }\r\n hr{\r\n     border: 1px solid aquamarine;\r\n   }\r\n @media only screen and (max-width: 992px) {\r\n\r\n\r\n     .container-fluid{\r\n\r\n       display: block;\r\n       background-color: rgba(221, 215, 215, 0.418);\r\n\r\n     }\r\n\r\n     .container{\r\n         display: none;\r\n     }\r\n\r\n\r\n\r\n\r\n   }\r\n @media only screen and (max-width: 767px) {\r\n\r\n     .container-fluid{\r\n\r\n      display: block;\r\n       background-color: rgba(221, 215, 215, 0.418);\r\n\r\n     }\r\n\r\n\r\n\r\n   }\r\n @media only screen and (max-width: 360px) {\r\n\r\n     .container-fluid{\r\n         margin-top: 120px;\r\n      display: block;\r\n       background-color: rgba(221, 215, 215, 0.418);\r\n\r\n     }\r\n\r\n\r\n\r\n   }\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtLQUNmLDRDQUE0QztDQUNoRDtDQUNBO0tBQ0ksU0FBUztLQUNULGtCQUFrQjtLQUNsQixvQkFBb0I7Q0FDeEI7Q0FDQTtLQUNJLGdDQUF3QjthQUF4Qix3QkFBd0I7S0FDeEIsU0FBUztLQUNULGtCQUFrQjtDQUN0QjtDQUVBO0tBQ0ksWUFBWTtLQUNaLFVBQVU7S0FDVixvQkFBb0I7Q0FDeEI7Q0FFRDtFQUNFLGlCQUFpQjtBQUNuQjtDQUVBOztFQUVFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7Q0FDQTtFQUNFLGlCQUFpQjtBQUNuQjtDQUNBO0VBQ0UsWUFBWTtFQUNaO0NBRUQ7S0FDSSxhQUFhO0tBQ2IsZ0JBQWdCOztHQUVsQjtDQUVBO09BQ0ksWUFBWTtPQUNaLFVBQVU7R0FDZDtDQUVBO0tBQ0UsNEJBQTRCO0dBQzlCO0NBSUY7OztLQUdJOztPQUVFLGNBQWM7T0FDZCw0Q0FBNEM7O0tBRTlDOztLQUVBO1NBQ0ksYUFBYTtLQUNqQjs7Ozs7R0FLRjtDQUVGOztLQUVJOztNQUVDLGNBQWM7T0FDYiw0Q0FBNEM7O0tBRTlDOzs7O0dBSUY7Q0FFRjs7S0FFSTtTQUNJLGlCQUFpQjtNQUNwQixjQUFjO09BQ2IsNENBQTRDOztLQUU5Qzs7OztHQUlGIiwiZmlsZSI6ImFwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuXHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMTUsIDIxNSwgMC40MTgpO1xyXG4gfVxyXG4gLm1lbnVJbWd7XHJcbiAgICAgd2lkdGg6IDglO1xyXG4gICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxuIH1cclxuIC5tZW51SW1nOmhvdmVye1xyXG4gICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICB3aWR0aDogOCU7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gfVxyXG5cclxuIC5BZGRwb3N0SW1ne1xyXG4gICAgIGZsb2F0OiByaWdodDtcclxuICAgICB3aWR0aDogMTAlO1xyXG4gICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gfVxyXG5cclxuI3NpZ25PdXRidXR0b257XHJcbiAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuXHJcbiAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5zcGFue1xyXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcbm5hdntcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG5cclxuIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG5cclxuICAgfVxyXG5cclxuICAgLk1lc3NlbmdlckltZ3tcclxuICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgIH1cclxuXHJcbiAgIGhye1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGFxdWFtYXJpbmU7XHJcbiAgIH1cclxuXHJcblxyXG5cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuXHJcblxyXG4gICAgIC5jb250YWluZXItZmx1aWR7XHJcblxyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjE1LCAyMTUsIDAuNDE4KTtcclxuXHJcbiAgICAgfVxyXG5cclxuICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgIH1cclxuXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gICAgIC5jb250YWluZXItZmx1aWR7XHJcblxyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMTUsIDIxNSwgMC40MTgpO1xyXG5cclxuICAgICB9XHJcblxyXG5cclxuXHJcbiAgIH1cclxuXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcblxyXG4gICAgIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMTUsIDIxNSwgMC40MTgpO1xyXG5cclxuICAgICB9XHJcblxyXG5cclxuXHJcbiAgIH1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark fixed-top\">\n\n  <h1>\n      <span>Be</span>\n      Connected\n      <span>|</span>\n  </h1>\n\n  <ul class=\"nav justify-content-end\">\n\n              <li>\n                  <a id=\"signOutbutton\" (click)=\"signout()\">Sign out</a>\n              </li>\n\n      </ul>\n\n  </nav>\n\n\n<!-- tablet/smartphone size -->\n<div class=\"container-fluid\">\n\n\n    <div class=\"row\">\n            <div class=\"col-md-12\">\n                            <div>\n                                    <hr>\n     <img (click)=\"toggle_Addpost_Navbar_Messenger(1)\" class=\"menuImg\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png\" >\n      <!-- <button (click)=\"toggle_Addpost_Navbar_Messenger(2)\"  class=\"btn btn-primary\">Add post</button> -->\n      <img  class=\"AddpostImg\" (click)=\"toggle_Addpost_Navbar_Messenger(2)\"  src=\"https://cdn3.iconfinder.com/data/icons/document-color/32/12-512.png\" >\n          <img (click)=\"toggle_Addpost_Navbar_Messenger(3)\" class=\"MessengerImg\" src=\"https://cdn4.iconfinder.com/data/icons/apps-set-1/24/Comments-01-512.png\">\n        </div>\n            </div>\n    </div>\n\n    <div class=\"row\">\n            <div class=\"col-md-12\">\n\n\n            <br>\n            <hr>\n\n\n             <div class=\"col-md-12\">\n                    <div *ngIf=\"ShowMenu\"   >\n                           <app-side-nav></app-side-nav>\n\n                     </div>\n                    </div>\n\n             <div class=\"col-md-12\">\n                    <div class=\"MessengerToggel\" *ngIf=\"showMessenger\"   >\n                            <app-side-messenger></app-side-messenger>\n                     </div>\n                    </div>\n\n               <div class=\"col-md-12\">\n             <div *ngIf=\"ShowAddPost\"   >\n\n             <app-addpost></app-addpost>\n              </div>\n             </div>\n\n\n\n\n\n            <app-post (PostArrayChange)=\"PostArrayChangefunc($event)\"></app-post>\n            <br>\n            <br>\n            </div>\n    </div>\n\n</div>\n\n\n\n\n<!-- Full-size page -->\n<div  class=\"container\" >\n\n<div class=\"row\">\n    <div class=\"col-md-3\">\n         <div class=\"sideNavFixed\">\n                    <br>\n            <app-side-nav></app-side-nav>\n         </div>\n    </div>\n\n    <div class=\"col-md-7\">\n\n       <div class=\"centerPost\">\n                    <br>\n            <hr>\n            <button (click)=\"Show=!Show\"  class=\"btn btn-primary\">Add post</button>\n               <div class=\"col-md-8\">\n             <div *ngIf=\"Show\"   >\n             <app-addpost></app-addpost>\n              </div>\n\n             </div>\n\n            <app-post (PostArrayChange)=\"PostArrayChangefunc($event)\"></app-post>\n            <br>\n            <br>\n       </div>\n\n    </div>\n\n\n            <div class=\"col-md-2\">\n                           <div class=\"SideMessengerfixed\">\n                                    <app-side-messenger></app-side-messenger>\n                           </div>\n                    </div>\n\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.ShowMenu = false;
        this.ShowAddPost = false;
        this.showMessenger = false;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    // Toggle function with 3 options!
    HomepageComponent.prototype.toggle_Addpost_Navbar_Messenger = function (flag) {
        if (flag == 1 && this.ShowMenu == this.ShowMenu) {
            this.ShowMenu = !this.ShowMenu;
            this.ShowAddPost = false;
            this.showMessenger = false;
        }
        else if (flag == 2 && this.ShowAddPost == this.ShowAddPost) {
            this.ShowMenu = false;
            this.ShowAddPost = !this.ShowAddPost;
            this.showMessenger = false;
        }
        else if (flag == 3 && this.showMessenger == this.showMessenger) {
            this.ShowMenu = false;
            this.ShowAddPost = false;
            this.showMessenger = !this.showMessenger;
        }
    };
    HomepageComponent.prototype.signout = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n\r\n  font-family: tahoma;\r\n  color: whitesmoke;\r\n}\r\nh1:hover{\r\n  cursor: pointer;\r\n}\r\nnav input{\r\nborder-radius: 10px;\r\ntext-align: center;\r\n\r\n}\r\n.card {\r\n\r\n  background-color: grey;\r\n  margin-top: 80px;\r\n  width: 30%;\r\n  margin-left: 80%;\r\n\r\n}\r\nul li{\r\n  display: block;\r\n}\r\nbutton {\r\n  background-color: aquamarine;\r\n  color: black;\r\n}\r\nh3 {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n}\r\nspan {\r\n  color: mediumspringgreen;\r\n}\r\nnav ul li {\r\n  font-family: tahoma;\r\n  color: whitesmoke;\r\n\r\n}\r\na {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  transition: 0.3s all;\r\n  color: whitesmoke\r\n}\r\na:hover {\r\n  -webkit-transform: scale(1.2,1.1);\r\n          transform: scale(1.2,1.1);\r\n}\r\n.container {\r\n  z-index: 1;\r\n  position: absolute;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n\r\n  .card {\r\n      width: 100%;\r\n      margin-left: 1%;\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 992px) {\r\n\r\n  .card {\r\n      width: 80%;\r\n      margin-left: 1%;\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 360px) {\r\n\r\n  .card {\r\n      margin-top: 150px;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUdBO0FBQ0EsbUJBQW1CO0FBQ25CLGtCQUFrQjs7QUFFbEI7QUFDQTs7RUFFRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7O0FBRW5CO0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQjtBQUNGO0FBQ0E7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUU7TUFDSSxXQUFXO01BQ1gsZUFBZTtFQUNuQjs7QUFFRjtBQUNBOztFQUVFO01BQ0ksVUFBVTtNQUNWLGVBQWU7RUFDbkI7O0FBRUY7QUFDQTs7RUFFRTtNQUNJLGlCQUFpQjtFQUNyQjs7QUFFRiIsImZpbGUiOiJhcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG5cclxuICBmb250LWZhbWlseTogdGFob21hO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbmgxOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbm5hdiBpbnB1dHtcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uY2FyZCB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XHJcblxyXG59XHJcbnVsIGxpe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5zcGFuIHtcclxuICBjb2xvcjogbWVkaXVtc3ByaW5nZ3JlZW47XHJcbn1cclxuXHJcbm5hdiB1bCBsaSB7XHJcbiAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuXHJcbn1cclxuXHJcbmEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgY29sb3I6IHdoaXRlc21va2VcclxufVxyXG5hOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwxLjEpO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gIC5jYXJkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcblxyXG4gIC5jYXJkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n    <!--\n<div *ngIf=\"OpenLogin\"  class=\"container\">\n    <div class=\"card\" >\n      <h3 ><span>L</span>ogin</h3>\n      <form>\n         <input [(ngModel)]=\"login_email\" name=\"loginemail\"  class=\"form-control\" type=\"email\" placeholder=\"Email\" required>\n        <input [(ngModel)]=\"login_password\" name=\"loginpassword\"  class=\"form-control\" type=\"password\" placeholder=\"Password\" required>\n      </form>\n         <hr>\n          <button  (click)=\"loginUser()\" type=\"submit\" href=\"#\" class=\"btn btn-success\">Log-in</button>\n        </div>\n      </div>\n\n\n<div *ngIf=\"OpenRegister\"  class=\"container\">\n    <div class=\"card\" >\n      <h3><span>R</span>egister</h3>\n      <form onsubmit=\"registerUser()\" id=\"register-form\">\n\n        <input [(ngModel)]=\"register_email\" name=\"email\" class=\"form-control\" type=\"email\" placeholder=\"Email\" required>\n        <input [(ngModel)]=\"register_password\" name=\"password\" class=\"form-control\" type=\"password\" minlength=\"6\" placeholder=\"Password\" required>\n        <button (click)=\"registerUser()\"  type=\"submit\" form=\"register-form\"  class=\"btn btn-success\">Register</button>\n\n      </form>\n\n         <hr>\n        </div>\n      </div>\n\n -->\n\n    <!-- The Modal -->\n    <!-- <div class=\"modal fade\" id=\"demo-modal\">\n          <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                      <h2 class=\"modal-title\">Edit User</h2>\n                      <button data-dismiss=\"modal\" class=\"btn btn-danger\" type=\"button\">\n                          <span>&times;</span>\n                      </button>\n                  </div>\n\n                  <div class=\"modal-body\">\n                      <input\n                          type=\"text\"\n                          id=\"name_input\"\n                          class=\"form-control\"\n                          placeholder=\"Enter name\"\n                          required>\n                      <br>\n                      <input\n                          type=\"email\"\n                          id=\"email_input\"\n                          class=\"form-control\"\n                          placeholder=\"Enter email\"\n                          required>\n                      <hr>\n                      <button id=\"btnsaveChanges\" type=\"submit\" class=\"btn btn-success\">Confirm</button>\n                  </div>\n              </div>\n          </div>\n      </div> -->\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);







var NavComponent = /** @class */ (function () {
    function NavComponent(afAuth, ServerService, eRef, firebase, router) {
        this.afAuth = afAuth;
        this.ServerService = ServerService;
        this.eRef = eRef;
        this.firebase = firebase;
        this.router = router;
        this.loginRegTemplate = true;
        this.signOutTemplate = true;
    }
    NavComponent.prototype.signout = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut().then(function (response) {
            _this.router.navigate(['/LoginPage']);
            // this.loginRegTemplate = true;
        }).catch(function (error) {
            // An error happened.
        });
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-nav', template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"), styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
            _server_service__WEBPACK_IMPORTED_MODULE_5__["ServesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/post.model.ts":
/*!*******************************!*\
  !*** ./src/app/post.model.ts ***!
  \*******************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    // constructor(Uid : string,postUserName:string, postUserNameImg:string, postImg:string, postContent:string, postLike:number)
    // {
    //     this.Uid = Uid;
    //     this.postUserName = postUserName;
    //     this.postUserNameImg = postUserNameImg;
    //     this.postImg = postImg;
    //  //   this.postHeader = postHeader;
    //     this.postContent = postContent;
    //     this.postLike = postLike;
    //    // this.postComment = this.postComment;
    // }
    function Post(postContent, postHeader, postDate) {
        this.postHeader = postHeader;
        this.postContent = postContent;
        this.postDate = postDate;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/post/addpost/addpost.component.css":
/*!****************************************************!*\
  !*** ./src/app/post/addpost/addpost.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea{\r\n    width: 100%;\r\n    height: auto;\r\n    \r\n}\r\n\r\nlabel{\r\n    margin-right: 5px; \r\n}\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb3N0L2FkZHBvc3QvYWRkcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJhcHAvcG9zdC9hZGRwb3N0L2FkZHBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/post/addpost/addpost.component.html":
/*!*****************************************************!*\
  !*** ./src/app/post/addpost/addpost.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h3>share things with your friend..</h3>\n          <div>\n              <textarea [(ngModel)]=\"NewPostContent\" name=\"newpost\"  placeholder=\"Write here your post content!\"  ></textarea>\n            \n              \n      \n          </div> \n          \n        </div>\n        <div class=\"col-md-12\">\n          <label class=\"btn btn-dark\">\n            Image\n            <input type=\"file\">\n          </label>\n      \n          <label class=\"btn btn-warning\">Video</label>\n          <label (click)=\"DeletePostContent()\" class=\"btn btn-info\">Delete post!</label>\n        </div>\n      \n      <div class=\"col-md-12\">\n        <br>\n          <button   (click)=\"UploadNewPost()\" class=\"btn btn-success\">Upload Post!</button>\n      </div>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/post/addpost/addpost.component.ts":
/*!***************************************************!*\
  !*** ./src/app/post/addpost/addpost.component.ts ***!
  \***************************************************/
/*! exports provided: AddpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostComponent", function() { return AddpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_post_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/post.model */ "./src/app/post.model.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/server.service */ "./src/app/server.service.ts");





var AddpostComponent = /** @class */ (function () {
    function AddpostComponent(db, ServerService) {
        this.db = db;
        this.ServerService = ServerService;
    }
    // take control on content that user input for new Post!
    AddpostComponent.prototype.UploadNewPost = function () {
        // take the current time that the post upload!
        var cDate = new Date();
        var CurrentDate = cDate.getDate() + '/' + (cDate.getMonth() + 1) + '/' + cDate.getFullYear();
        var currentToken = this.ServerService.getToken();
        // Create an Object of 'Post' and sending him to 'setNewPost'  function into 'ServerService' !
        this.AddNewPost = new src_app_post_model__WEBPACK_IMPORTED_MODULE_2__["Post"](this.NewPostContent, 'Header!', CurrentDate);
        this.ServerService.setNewPost(currentToken, this.AddNewPost)
            .subscribe(function (error) { return console.log(error); });
        // clean the Textarea after post created!
        this.DeletePostContent();
    };
    // delete the Textarea in add post and clean it!
    AddpostComponent.prototype.DeletePostContent = function () {
        this.NewPostContent = null;
    };
    AddpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-addpost',
            template: __webpack_require__(/*! ./addpost.component.html */ "./src/app/post/addpost/addpost.component.html"),
            providers: [], styles: [__webpack_require__(/*! ./addpost.component.css */ "./src/app/post/addpost/addpost.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], src_app_server_service__WEBPACK_IMPORTED_MODULE_4__["ServesService"]])
    ], AddpostComponent);
    return AddpostComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".likebutton {\r\n    width: 10%;\r\n    padding-right: 10px;\r\n    transition: 0.3s all;\r\n}\r\n.UploadPostDate {\r\n    float: right;\r\n}\r\n.likebutton:hover {\r\n    -webkit-transform: scale(1.1,1.1);\r\n            transform: scale(1.1,1.1);\r\n    cursor: pointer;\r\n}\r\n.UserprofileImg {\r\n    width: 10%;\r\n    height: auto;\r\n    border-radius: 20%;\r\n}\r\n.commentUserImg {\r\n    width: 10%;\r\n    height: auto;\r\n}\r\n.card {\r\n    margin-top: 20px;\r\n}\r\n.card-header {\r\n\r\n    font-family: tahoma;\r\n    font-size: 20px;\r\n}\r\n.CommentButton {\r\n    width: 20%;\r\n    transition: 0.3s all;\r\n\r\n}\r\n.card-title {\r\n    float: left;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n\r\n    .likebutton {\r\n\r\n        width: 20%;\r\n\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7O0FBRXhCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSTs7UUFFSSxVQUFVOztJQUVkOztBQUVKIiwiZmlsZSI6ImFwcC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWtlYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuLlVwbG9hZFBvc3REYXRlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ubGlrZWJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uVXNlcnByb2ZpbGVJbWcge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxufVxyXG5cclxuLmNvbW1lbnRVc2VySW1nIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuXHJcbiAgICBmb250LWZhbWlseTogdGFob21hO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uQ29tbWVudEJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcblxyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gICAgLmxpa2VidXR0b24ge1xyXG5cclxuICAgICAgICB3aWR0aDogMjAlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div  class=\"col-md-12\">\r\n      <div (click)='handleClick($event, i)' *ngFor=\"let item of PostArray; let i = index\" class=\"card\" >\r\n\r\n\r\n    <div  class=\"card-body\">\r\n      <div >\r\n          <div class=\"UploadPostDate\" >\r\n              <p> {{date | date: 'dd'}}/{{date | date:'MM'}}/{{date | date: 'yyyy'}}</p>\r\n\r\n          </div>\r\n        <div >\r\n            <img class=\"UserprofileImg\" src=\"{{item.postUserNameImg}}\" >\r\n            <h5 >{{item.postUserName}} </h5>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <hr>\r\n\r\n       <div>\r\n        <img  class=\"card-img-top\" src=\"{{item.postImg}}\" >\r\n\r\n       </div>\r\n\r\n\r\n        <!-- <p class=\"card-title\">{{item.postHeader}}</p> -->\r\n        <p class=\"card-body\">{{item.postContent}}</p>\r\n        <h5 *ngIf=\"item.postLike!=0\">{{item.postLike}}</h5>\r\n        <img  class=\"likebutton\" src=\"https://techliberation.com/wp-content/uploads/2011/05/facebook_like_button_big.jpg\">\r\n        <hr>\r\n\r\n        <input (keydown)=\"OnClickSendComment($event)\"   #NewComment type=\"text\" placeholder=\"Enter your comment..\" class=\"form-control\">\r\n        <br>\r\n      <hr>\r\n\r\n     <!-- <div *ngFor=\"let x of CommentArray; let i= index\">\r\n        <div>\r\n            <div>\r\n\r\n                  <img class=\"commentUserImg\" src=\"{{item.postUserNameImg}}\" >\r\n\r\n\r\n\r\n              <div class=\"col-md-10\">\r\n                  <p>{{x}}</p>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n     </div>\r\n     <ng-template >\r\n        <button class=\"btn btn-primary\">Press to see more comments..</button>\r\n      </ng-template>\r\n      </div> -->\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




var PostComponent = /** @class */ (function () {
    function PostComponent(Serverservice, db) {
        this.Serverservice = Serverservice;
        this.db = db;
        this.date = new Date();
        this.CommentArray = [];
        // The current date! not the current time the user upload the post!
        this.date = new Date();
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the 'Posts from Database
        this
            .db
            .list('/Posts')
            .valueChanges()
            .subscribe(function (response) {
            _this.PostArray = response;
        });
    };
    // When the user write a comment he can press "Enter" to send it.
    PostComponent.prototype.OnClickSendComment = function (event) {
        if (event.key === 'Enter') {
            this
                .CommentArray
                .push(this.NewCommentView.nativeElement.value);
            this.NewCommentView.nativeElement.value = null;
        }
    };
    PostComponent.prototype.handleClick = function (e, i) {
        alert(e);
        alert(i);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('NewComment'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PostComponent.prototype, "NewCommentView", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            providers: [], styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServesService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/profile-page/profile-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/profile-page/profile-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n\r\n    margin-top: 75px;\r\n    background-color: rgba(221, 215, 215, 0.418);\r\n}\r\n\r\n#profile-img {\r\n    width: 20%;\r\n    height: 20%;\r\n    border-radius: 50%;\r\n    padding: 1%;\r\n}\r\n\r\nh1 {\r\n    margin: 10% 0 0 1%;\r\n}\r\n\r\ntextarea {\r\n    width: 100%;\r\n    height: auto;\r\n\r\n}\r\n\r\nlabel {\r\n    margin-right: 5px;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n.likebutton {\r\n    width: 10%;\r\n    padding-right: 10px;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.UploadPostDate {\r\n    float: right;\r\n}\r\n\r\n.likebutton:hover {\r\n    -webkit-transform: scale(1.1,1.1);\r\n            transform: scale(1.1,1.1);\r\n    cursor: pointer;\r\n}\r\n\r\n.UserprofileImg {\r\n    width: 10%;\r\n    height: auto;\r\n    border-radius: 20%;\r\n}\r\n\r\n.commentUserImg {\r\n    width: 10%;\r\n    height: auto;\r\n}\r\n\r\n.card {\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-header {\r\n\r\n    font-family: tahoma;\r\n    font-size: 20px;\r\n}\r\n\r\n.CommentButton {\r\n    width: 20%;\r\n    transition: 0.3s all;\r\n\r\n}\r\n\r\n.card-title {\r\n    float: left;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n\r\n    .likebutton {\r\n\r\n        width: 20%;\r\n\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlLXBhZ2UvcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0JBQWdCO0lBQ2hCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBOztJQUVJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7O0lBRUk7O1FBRUksVUFBVTs7SUFFZDs7QUFFSiIsImZpbGUiOiJhcHAvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMTUsIDIxNSwgMC40MTgpO1xyXG59XHJcblxyXG4jcHJvZmlsZS1pbWcge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuaDEge1xyXG4gICAgbWFyZ2luOiAxMCUgMCAwIDElO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubGlrZWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcbi5VcGxvYWRQb3N0RGF0ZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmxpa2VidXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsMS4xKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLlVzZXJwcm9maWxlSW1nIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbn1cclxuXHJcbi5jb21tZW50VXNlckltZyB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jYXJkLWhlYWRlciB7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLkNvbW1lbnRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG5cclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5saWtlYnV0dG9uIHtcclxuXHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile-page/profile-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile-page/profile-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <!-- main details of user -->\n        <img\n            id=\"profile-img\"\n            src={{img}}>\n            <h1>{{name}}</h1>\n        </div>\n        <hr>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-8\">\n                    <!-- add new post from profile -->\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <h3>share things with your friend..</h3>\n                                <div>\n                                    <textarea\n                                        [(ngModel)]=\"NewPostContent\"\n                                        name=\"newpost\"\n                                        placeholder=\"Write here your post content!\"></textarea>\n\n                                </div>\n\n                            </div>\n                            <div class=\"col-md-12\">\n                                <label class=\"btn btn-dark\">\n                                    Image\n                                    <input type=\"file\"></label>\n\n                                    <label class=\"btn btn-warning\">Video</label>\n                                    <label (click)=\"DeletePostContent()\" class=\"btn btn-info\">Delete post!</label>\n                                </div>\n\n                                <div class=\"col-md-12\">\n                                    <br>\n                                        <button (click)=\"UploadNewPost()\" class=\"btn btn-success\">Upload Post!</button>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!-- all the post of the current user -->\n                            <div *ngFor=\"let item of filteredUserPostArray\" class=\"card\">\n                                <div class=\"card-body\">\n                                    <div >\n                                        <div class=\"UploadPostDate\">\n                                            <p>\n                                                {{date | date: 'dd'}}/{{date | date:'MM'}}/{{date | date: 'yyyy'}}</p>\n\n                                        </div>\n                                        <div >\n                                            <img class=\"UserprofileImg\" src=\"{{item.postUserNameImg}}\">\n                                                <h5 >{{item.postUserName}}\n                                                </h5>\n\n                                            </div>\n\n                                        </div>\n\n                                        <hr>\n\n                                            <div>\n                                                <img class=\"card-img-top\" src=\"{{item.postImg}}\"></div>\n\n                                                <!-- <p class=\"card-title\">{{item.postHeader}}</p> -->\n                                                <p class=\"card-body\">{{item.postContent}}</p>\n                                                <h5 *ngIf=\"LikeCount!=0\">{{item.postLike}}</h5>\n                                                <img\n                                                    class=\"likebutton\"\n                                                    src=\"data:image/png;base64,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\">\n                                                    <hr>\n\n                                                        <input\n                                                            (keydown)=\"OnClickSendComment($event)\"\n                                                            #NewComment\n                                                            type=\"text\"\n                                                            placeholder=\"Enter your comment..\"\n                                                            class=\"form-control\">\n                                                            <br>\n                                                                <hr></div>\n                                                            </div>\n\n                                                        </div>\n\n                                                        <div class=\"col-md-4\">\n                                                            <ul class=\"nav nav-tabs\">\n                                                                <li class=\"nav-item\">\n                                                                    <a class=\"nav-link active\">About</a>\n                                                                </li>\n                                                                <li class=\"nav-item\">\n                                                                    <a class=\"nav-link\">friends</a>\n                                                                </li>\n                                                                <li class=\"nav-item\">\n                                                                    <a class=\"nav-link\">photos</a>\n                                                                </li>\n                                                                <li class=\"nav-item\">\n                                                                    <a class=\"nav-link disabled\">Settings</a>\n                                                                </li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"row\"></div>\n\n                                                    <div class=\"row\">\n                                                        <hr>\n                                                            <button class=\"btn btn-danger\">Delete account</button>\n                                                        </div>"

/***/ }),

/***/ "./src/app/profile-page/profile-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-page/profile-page.component.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(db) {
        this.db = db;
        this.date = new Date();
        this.filters = {};
        this.date = new Date();
    }
    ProfilePageComponent.prototype.applyFilters = function () {
        this.filteredUserPostArray = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.userPostArray, lodash__WEBPACK_IMPORTED_MODULE_3__["conforms"](this.filters));
        console.log(this.filteredUserPostArray);
    };
    ProfilePageComponent.prototype.filterExact = function (property, rule) {
        this.filters[property] = function (val) { return val == rule; };
        this.applyFilters();
    };
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var CurrentUid = localStorage.getItem('CurrentUserUid');
        this.db.list("/Users/" + CurrentUid).valueChanges().subscribe(function (item) {
            //the Current user name
            _this.name = item[0] + " " + item[2];
            _this.img = item[1] + "";
        });
        //////////////////////////
        this.db.list('/Posts')
            .valueChanges()
            .subscribe(function (posts) {
            _this.userPostArray = posts;
            _this.filterExact('Uid', CurrentUid);
        });
    };
    ProfilePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-profile-page', template: __webpack_require__(/*! ./profile-page.component.html */ "./src/app/profile-page/profile-page.component.html"), styles: [__webpack_require__(/*! ./profile-page.component.css */ "./src/app/profile-page/profile-page.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/server.service.ts":
/*!***********************************!*\
  !*** ./src/app/server.service.ts ***!
  \***********************************/
/*! exports provided: ServesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServesService", function() { return ServesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ServesService = /** @class */ (function () {
    function ServesService(http, db, router) {
        this.http = http;
        this.db = db;
        this.router = router;
    }
    // register request to server with user details!
    ServesService.prototype.register = function (user) {
        return this.http.post('http://localhost:3000/users/register', user);
    };
    // login request to server with user details!
    ServesService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('http://localhost:3000/users/login', user)
            .subscribe(function (response) {
            // get the token from response after successful login!
            _this.token = JSON.parse(response.text());
            _this.router.navigate(['/homePage']);
        });
    };
    // function that return the token.
    ServesService.prototype.getToken = function () {
        return this.token.token;
    };
    // post new post into Database!
    ServesService.prototype.setNewPost = function (token, newpost) {
        var headers = { 'authorization': token };
        var requestOptions = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"](headers)
        };
        return this
            .http
            .post("http://localhost:3000/posts", newpost, requestOptions);
    };
    ServesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ServesService);
    return ServesService;
}());



/***/ }),

/***/ "./src/app/side-messenger/side-messenger.component.css":
/*!*************************************************************!*\
  !*** ./src/app/side-messenger/side-messenger.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container{\r\n    position: fixed;\r\n    width: 10%;\r\n    overflow-y: scroll;\r\n}\r\n\r\nimg{\r\n    width: 50%;\r\n    border-radius: 50px;\r\ntransition: 0.3s all;\r\n}\r\n\r\nimg:hover{\r\n    cursor: pointer;\r\n-webkit-transform: scale(1.1,1.2);\r\n        transform: scale(1.1,1.2);\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    img{\r\n        width: 10%;\r\n\r\n    }\r\n\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWRlLW1lc3Nlbmdlci9zaWRlLW1lc3Nlbmdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QixvQkFBb0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25CLGlDQUF5QjtRQUF6Qix5QkFBeUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7O0lBRWQ7OztFQUdGIiwiZmlsZSI6ImFwcC9zaWRlLW1lc3Nlbmdlci9zaWRlLW1lc3Nlbmdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxudHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuaW1nOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG50cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjIpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/side-messenger/side-messenger.component.html":
/*!**************************************************************!*\
  !*** ./src/app/side-messenger/side-messenger.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"col-md-12\">\n\n        <div *ngFor=\"let item of OnlineArray\">\n\n            <img src={{item.ImgProfile}}>\n                <p>{{item.FirstName}} {{item.LastName}}</p>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/side-messenger/side-messenger.component.ts":
/*!************************************************************!*\
  !*** ./src/app/side-messenger/side-messenger.component.ts ***!
  \************************************************************/
/*! exports provided: SideMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMessengerComponent", function() { return SideMessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);



var SideMessengerComponent = /** @class */ (function () {
    function SideMessengerComponent(db) {
        this.db = db;
    }
    SideMessengerComponent.prototype.ngOnInit = function () {
        // show the all users UserName in Array, and show them in side messenger. the
        // final result is to show only the Online Users. this.OnlineArray =
        // this.postservice.getPost();
        var _this = this;
        this
            .db
            .list('/Users/')
            .valueChanges()
            .subscribe(function (response) {
            _this.OnlineArray = response;
        }
        // console.log(res)//should give you the array of percentage.
        );
    };
    SideMessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-side-messenger',
            template: __webpack_require__(/*! ./side-messenger.component.html */ "./src/app/side-messenger/side-messenger.component.html"),
            providers: [], styles: [__webpack_require__(/*! ./side-messenger.component.css */ "./src/app/side-messenger/side-messenger.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], SideMessengerComponent);
    return SideMessengerComponent;
}());



/***/ }),

/***/ "./src/app/side-nav/side-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv {\r\n\r\n    border-right: 5px solid aquamarine;\r\n  \r\n}\r\n\r\n.row{\r\n    position: fixed;\r\n    width: 18%;\r\n   \r\n}\r\n\r\n#userName{\r\n    font-size: 25px;\r\n    transition: 0.3s all;\r\n}\r\n\r\n#userName:hover{\r\n    color: aquamarine;\r\n}\r\n\r\ndiv ul li {\r\n\r\n    cursor: pointer;\r\n    text-align: center;\r\n    list-style: none;\r\n    font-family: tahoma;\r\n    font-size: 20px;\r\n    transition: 0.2s all;\r\n}\r\n\r\ndiv ul li:hover {\r\n    border-left: 10px solid aquamarine;\r\n    -webkit-transform:scale(1.1,1.1);\r\n            transform:scale(1.1,1.1);\r\n}\r\n\r\nul li a {\r\n    color: black;\r\n    text-decoration: none;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.col-md-2 {\r\n    background-color: aquamarine;\r\n}\r\n\r\ndiv ul h3 {\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .navbar {\r\n        display: none;\r\n\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUlBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdDQUF3QjtZQUF4Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFHQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJO1FBQ0ksYUFBYTs7SUFFakI7QUFDSiIsImZpbGUiOiJhcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kaXYge1xyXG5cclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIGFxdWFtYXJpbmU7XHJcbiAgXHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gICBcclxufVxyXG5cclxuI3VzZXJOYW1le1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuI3VzZXJOYW1lOmhvdmVye1xyXG4gICAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuXHJcblxyXG5cclxuZGl2IHVsIGxpIHtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IHRhaG9tYTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG59XHJcbmRpdiB1bCBsaTpob3ZlciB7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBhcXVhbWFyaW5lO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSwxLjEpO1xyXG59XHJcblxyXG51bCBsaSBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG5cclxuLmNvbC1tZC0yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuZGl2IHVsIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n  <!-- Menu in the left side of the website that shows the most common command for users -->\n      <ul class=\"col-md-10\" >\n          <li><a id=\"userName\" routerLink=\"/profilePage\">{{CurrentUserName}}</a></li>\n          <li>Settings</li>\n          <li (click)=\"ShowHide=!ShowHide\" >\n            <a class=\"dropdown-toggle\" >Sort</a>\n            <ul *ngIf=\"ShowHide\" >\n                <li>By Date</li>\n                <li>By Likes</li>\n              </ul>\n          </li>\n         \n        </ul>\n      \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.ts ***!
  \************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);



var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(db) {
        this.db = db;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        var CurrentUid = localStorage.getItem('CurrentUserUid');
        this.db.list("/Users/" + CurrentUid).valueChanges().subscribe(function (item) {
            //the Current user name
            _this.CurrentUserName = item[0] + " " + item[2];
        });
    };
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.css */ "./src/app/side-nav/side-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAx2eEqpYg8Fd7Unb4QanRHlim4izvzUgg",
        authDomain: "social-media-39aaa.firebaseapp.com",
        databaseURL: "https://social-media-39aaa.firebaseio.com",
        projectId: "social-media-39aaa",
        storageBucket: "social-media-39aaa.appspot.com",
        messagingSenderId: "18487104004"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tom Vagish\SocialMediaProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map