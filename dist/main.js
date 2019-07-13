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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_core_core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/core/core.component */ "./src/app/layouts/core/core.component.ts");
/* harmony import */ var _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/home/home.component */ "./src/app/layouts/home/home.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/activities/activities.component */ "./src/app/components/activities/activities.component.ts");
/* harmony import */ var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/articles/articles.component */ "./src/app/components/articles/articles.component.ts");
/* harmony import */ var _components_carriere_carriere_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/carriere/carriere.component */ "./src/app/components/carriere/carriere.component.ts");
/* harmony import */ var _components_offres_offres_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/offres/offres.component */ "./src/app/components/offres/offres.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'loader', component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"] },
    {
        path: '', component: _layouts_core_core_component__WEBPACK_IMPORTED_MODULE_2__["CoreComponent"],
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home', component: _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                children: [
                    { path: '', redirectTo: 'about', pathMatch: 'full' },
                    {
                        path: 'objectif',
                        component: _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_9__["ArticlesComponent"]
                    },
                    {
                        path: 'historiques',
                        component: _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_8__["ActivitiesComponent"]
                    },
                    {
                        path: 'expertise',
                        component: _components_news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"]
                    }, {
                        path: 'contact',
                        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
                    }, {
                        path: 'carriere',
                        component: _components_carriere_carriere_component__WEBPACK_IMPORTED_MODULE_10__["CarriereComponent"]
                    },
                    {
                        path: 'about',
                        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
                    },
                    {
                        path: 'offres',
                        component: _components_offres_offres_component__WEBPACK_IMPORTED_MODULE_11__["OffresComponent"]
                    }
                ]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <router-outlet>\r\n    </router-outlet>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: setupTranslateFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function() { return setupTranslateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _httpInterceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./httpInterceptor */ "./src/app/httpInterceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/translate.pipe */ "./src/app/pipes/translate.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_core_core_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/core/core.component */ "./src/app/layouts/core/core.component.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/home/home.component */ "./src/app/layouts/home/home.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _pipes_label_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/label.pipe */ "./src/app/pipes/label.pipe.ts");
/* harmony import */ var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/articles/articles.component */ "./src/app/components/articles/articles.component.ts");
/* harmony import */ var _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/activities/activities.component */ "./src/app/components/activities/activities.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_article_block_article_block_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/article-block/article-block.component */ "./src/app/components/article-block/article-block.component.ts");
/* harmony import */ var _components_carriere_carriere_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/carriere/carriere.component */ "./src/app/components/carriere/carriere.component.ts");
/* harmony import */ var _components_offres_offres_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/offres/offres.component */ "./src/app/components/offres/offres.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























function setupTranslateFactory(service) {
    return localStorage.getItem('flag')
        ? function () { return service.use(localStorage.getItem('flag')); }
        : function () { return service.use('fr'); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _layouts_core_core_component__WEBPACK_IMPORTED_MODULE_11__["CoreComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["ToolbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"],
                _pipes_label_pipe__WEBPACK_IMPORTED_MODULE_15__["LabelPipe"],
                _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_16__["ArticlesComponent"],
                _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_17__["ActivitiesComponent"],
                _components_news_news_component__WEBPACK_IMPORTED_MODULE_18__["NewsComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                _components_article_block_article_block_component__WEBPACK_IMPORTED_MODULE_22__["ArticleBlockComponent"],
                _components_carriere_carriere_component__WEBPACK_IMPORTED_MODULE_23__["CarriereComponent"],
                _components_offres_offres_component__WEBPACK_IMPORTED_MODULE_24__["OffresComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ],
            providers: [
                _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
                _services_translate_service__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: setupTranslateFactory,
                    deps: [_services_translate_service__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _httpInterceptor__WEBPACK_IMPORTED_MODULE_3__["AlHttpInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-caption{\r\n    color: black\r\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel slide\" id=\"carousel-906283\">\r\n    <ol class=\"carousel-indicators\">\r\n        <li data-slide-to=\"0\" data-target=\"#carousel-906283\" class=\"active\">\r\n        </li>\r\n        <li data-slide-to=\"1\" data-target=\"#carousel-906283\">\r\n        </li>\r\n        <li data-slide-to=\"2\" data-target=\"#carousel-906283\">\r\n        </li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n            <img style=\"opacity: 0.6\" class=\"d-block w-100\" alt=\"Carousel Bootstrap First\" height=\"400px\"\r\n                src=\"../../../assets/img/businessman-1492563_1920.jpg\" />\r\n            <div class=\"carousel-caption\">\r\n                <h3>\r\n                    Gira consulting\r\n                </h3>\r\n                <h4>\r\n                    accompagne ses clients sur leur projet de transformation\r\n                    digitale.\r\n                </h4>\r\n                <h4>\r\n                    Nous intervenant aussi bien sur le fonctionnel que sur la technique.\r\n                </h4>\r\n                <p>\r\n\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img style=\"opacity: 0.6\" class=\"d-block w-100\" alt=\"Carousel Bootstrap Second\" height=\"400px\"\r\n                src=\"../../../assets/img/entrepreneur-593371_1920.jpg\" />\r\n            <div class=\"carousel-caption\">\r\n                <h4>\r\n                    Ou Nous accompagnons les clients sur l'intégralité du cycle d'un projet: du\r\n                    conseil et des études en amont,\r\n                    de l'ingénierie et du développement, des tests, du déploiement et de la\r\n                    maintenance tout en les faisant\r\n                    bénéficier de nos capacités d'innovation.\r\n                </h4>\r\n                <p>\r\n\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img style=\"opacity: 0.6\" class=\"d-block w-100\" alt=\"Carousel Bootstrap Third\" height=\"400px\"\r\n                src=\"../../../assets/img/workplace-1245776_1920.jpg\" />\r\n            <div class=\" carousel-caption\">\r\n                <h3>\r\n                    Nous aidons nos clients\r\n                </h3>\r\n                <h4> à penser et à utiliser efficacement le numérique,\r\n                    en plaçant les utilisateurs finaux comme point de départ de toute transformation\r\n                    numérique.</h4>\r\n                <p>\r\n\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div> <a class=\"carousel-control-prev\" href=\"#carousel-906283\" data-slide=\"prev\"><span\r\n            class=\"carousel-control-prev-icon\"></span> <span class=\"sr-only\">Previous</span></a> <a\r\n        class=\"carousel-control-next\" href=\"#carousel-906283\" data-slide=\"next\"><span\r\n            class=\"carousel-control-next-icon\"></span> <span class=\"sr-only\">Next</span></a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/activities/activities.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/activities/activities.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activities/activities.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/activities/activities.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <img src=\"../../../assets/img/beverage-3157395_1920.jpg\" width=\"100%!important\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <p>\r\n                        &nbsp;L'idée de la création de Gira Consulting repose sur l'expérience de ses fondateurs, du\r\n                        regard qu'ils portent sur l'évolution des technologies et du métier du service informatique\r\n                        depuis plus de 20 ans et, bien sûr, des perspectives et évolutions qui se dessinent dans les\r\n                        prochaines années.\r\n\r\n                        Créer en 2018, Gira consulting est fondée par deux associés.\r\n                    </p>\r\n\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body\">\r\n                            <div class=\"media mt-3\">\r\n                                <a class=\"pr-3\" href=\"#\"><img alt=\"Bootstrap Media Another Preview\"\r\n                                        src=\"../../../assets/icons/avatar.PNG\" width=\"40px\" /></a>\r\n                                <div class=\"media-body\">\r\n                                    <h5 class=\"mt-0\">\r\n                                        Bernard Giraud\r\n                                    </h5> Président Directeur Général avec plus de 20 ans d’expériences dans le domaine\r\n                                    de\r\n                                    l'informatique.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"media mt-3\">\r\n                                <a class=\"pr-3\" href=\"#\"><img alt=\"Bootstrap Media Another Preview\"\r\n                                        src=\"../../../assets/icons/avatar.PNG\" width=\"40px\" /></a>\r\n                                <div class=\"media-body\">\r\n                                    <h5 class=\"mt-0\">\r\n                                        Jenny Rasoza\r\n                                    </h5> Directeur Général avec plus de 8 ans d’expérience en Entreprise du service\r\n                                    Numérique.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/activities/activities.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/activities/activities.component.ts ***!
  \***************************************************************/
/*! exports provided: ActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function() { return ActivitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent() {
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
    };
    ActivitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__(/*! ./activities.component.html */ "./src/app/components/activities/activities.component.html"),
            styles: [__webpack_require__(/*! ./activities.component.css */ "./src/app/components/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/components/article-block/article-block.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/article-block/article-block.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article-container {\r\n    align-content: flex-start;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    max-width: 1360px;\r\n    overflow-y: auto;\r\n    height: calc(100vh - 240px);\r\n}\r\n\r\n.article-item {\r\n    height: 11.25rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.article-item p {\r\n    color: #4a4a4a;\r\n    font-family: Roboto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    line-height: normal;\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n    text-transform: uppercase;\r\n    margin-top: 0;\r\n}\r\n\r\n.article-item img{\r\n   \r\n    height: 115.5%;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: auto;\r\n}\r\n\r\nimg {\r\n    height: 11.25rem;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    width: 18.75rem;\r\n    border-color: #4a4a4a;\r\n}\r\n\r\n@media screen and (max-width:1422px ){\r\n    .article-container{\r\n        height: calc(100vh - 340px);\r\n    }\r\n}\r\n\r\n@media screen and (max-width:872px ){\r\n    .article-container{\r\n        height: calc(100vh - 521px);\r\n        padding: 0 40px 40px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/article-block/article-block.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/article-block/article-block.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"articlecontainer\" >\n        <div class=\"article-item\">\n            <img style=\"cursor : pointer; border: 1px solid \"  src=\"../../../assets/img/aucune-image.png\" />\n            <p>{{ item.name }}</p>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/article-block/article-block.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/article-block/article-block.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArticleBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleBlockComponent", function() { return ArticleBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleBlockComponent = /** @class */ (function () {
    function ArticleBlockComponent(sharedService) {
        this.sharedService = sharedService;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item'),
        __metadata("design:type", Object)
    ], ArticleBlockComponent.prototype, "item", void 0);
    ArticleBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-block',
            template: __webpack_require__(/*! ./article-block.component.html */ "./src/app/components/article-block/article-block.component.html"),
            styles: [__webpack_require__(/*! ./article-block.component.css */ "./src/app/components/article-block/article-block.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], ArticleBlockComponent);
    return ArticleBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/articles/articles.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/articles/articles.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/articles/articles.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/articles/articles.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!--<div *ngFor=\"let article of articles \">\r\n        <app-article-block [item]=article ></app-article-block>\r\n    </div>-->\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    Notre ambition est d'améliorer en permanence la qualité de nos prestations, de respecter nos\r\n                    engagements en terme de budget et de délais,\r\n                    de réduire les risques technologiques.\r\n                    Etre en veille permanente pour être à la pointe des technologies, anticiper les évolutions majeures\r\n                    et saisir celles qui vont compter,\r\n                    encourager l'idée de progrès et favoriser le développement de nouvelles compétences.<br /><br />\r\n                    <dt>\r\n                        Issue de nos expériences réciproques, notre stratégie de développement est basée sur deux\r\n                        axes :\r\n                    </dt>\r\n                    <dd>\r\n                        le client et nos consultants.\r\n                        En effet nous avons compris que pour bien avancer il est toujours préférable d'avoir deux\r\n                        points\r\n                        d'appuis solide. Une\r\n                        entreprise\r\n                        de conseils va toujours plus loin en marchant sur 2 jambes.\r\n                        Ainsi nous avons mis en place une démarche qualité basée sur ces deux principes : la\r\n                        satisfaction de nos clients et\r\n                        celle de nos collaborateurs\r\n                    </dd>\r\n                    <dt>\r\n                        Les technologies liées au digital et à la Data:\r\n                    </dt>\r\n                    <dd>\r\n                        Angular, Réact Js\r\n                        HDFS, ELK, Scala, Hive, MongoDB, Hbase, Kerberos, ...\r\n                    </dd>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <img src=\"../../../assets/img/person-731479_1920.jpg\" width=\"100%\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <!-- <img src=\"../../../assets/icons/cible.png\" style=\"margin-top: -87px;\r\n                    width: 100%;\" alt=\"\"> -->\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/articles/articles.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/articles/articles.component.ts ***!
  \***********************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(httpService) {
        this.httpService = httpService;
        this.articles = [{ "id": "1", "name": "a1", "description": "desc1", "src": "src1", "visible": "0", "prix": "1" },
            { "id": "2", "name": "aa2", "description": "desc2", "src": "desc2", "visible": "0", "prix": "2" },
            { "id": "4", "name": "ssss", "description": "KJLM", "src": "FKDLSM?", "visible": "0", "prix": "2" }
        ];
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        // this.httpService.getArticles().subscribe(articles=>{
        //     this.articles = articles;
        // })
    };
    ArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/components/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.css */ "./src/app/components/articles/articles.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/components/carriere/carriere.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carriere/carriere.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/carriere/carriere.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carriere/carriere.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-md-8\">\r\n                    Apportez vos qualités humaines et techniques et rejoignez une société de conseil IT en mouvement et\r\n                    en pleine transformation ! <br />\r\n                    Intégrez une structure qui vous donnera la possibilité de vous construire professionnellement et\r\n                    d'intervenir sur des missions stratégiques\r\n                    à fortes valeurs ajoutées !\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <img src=\"../../../assets/img/team-3373638_1920.jpg\" width=\"100%\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/carriere/carriere.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carriere/carriere.component.ts ***!
  \***********************************************************/
/*! exports provided: CarriereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarriereComponent", function() { return CarriereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarriereComponent = /** @class */ (function () {
    function CarriereComponent() {
    }
    CarriereComponent.prototype.ngOnInit = function () {
    };
    CarriereComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carriere',
            template: __webpack_require__(/*! ./carriere.component.html */ "./src/app/components/carriere/carriere.component.html"),
            styles: [__webpack_require__(/*! ./carriere.component.css */ "./src/app/components/carriere/carriere.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarriereComponent);
    return CarriereComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    background-color: #f7f8f9;\r\n    border: 1px solid #e7e8e9;\r\n    font-family: Roboto-Regular;\r\n    color: #000;\r\n    width: 660px;\r\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <dl>\r\n\r\n                            <dt>\r\n                                Nous contacter :\r\n                            </dt>\r\n                            <dd>\r\n                                rh@giraconsulting.fr\r\n                            </dd>\r\n                        </dl>\r\n                        <address>\r\n                            <strong>Adresse</strong><br />16-18 rue de Londres<br /> 75009 Paris<br /> <abbr\r\n                                title=\"Phone\"></abbr> Tel : 06 14 65 65 05\r\n                        </address>\r\n                        <button type=\"button\" id=\"modal-755880\" data-toggle=\"modal\" href=\"#modal-container-755880\"\r\n                            class=\"btn \" style=\"\r\n                            background-color: #3a8ed3;height: 35px;\" (click)=\"openPopup()\">\r\n                            Envoyer votre CV\r\n                        </button>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-9\">\r\n\r\n                        <div class=\"container-fluid\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"modal \" id=\"modal-container-755880\" role=\"dialog\"\r\n                                        aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                                        <div role=\"document\">\r\n                                            <div class=\"modal-content\">\r\n                                                <div class=\"modal-header\">\r\n                                                    <h5 class=\"modal-title\" id=\"myModalLabel\">\r\n                                                        Nous contacter\r\n                                                    </h5>\r\n                                                    <button style=\"height: 30px;\r\n                                                    width: 27px;\r\n                                                    background-color: antiquewhite;cursor: pointer;\" type=\"button\">\r\n                                                        <span data-dismiss=\"modal\" aria-hidden=\"true\">×</span>\r\n                                                    </button>\r\n                                                </div>\r\n                                                <div class=\"modal-body\">\r\n                                                    <form role=\"form\">\r\n                                                        <div>\r\n                                                            Objet :\r\n                                                            <input type=\"text\" [(ngModel)]=\"objetMail\"\r\n                                                                name=\"objetMail\" />\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            Description :\r\n                                                            <textarea name=\"\" [(ngModel)]=\"description\"\r\n                                                                name=\"description\" id=\"\" cols=\"90\" rows=\"5\"></textarea>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <input type=\"file\" class=\"form-control-file\"\r\n                                                                id=\"exampleInputFile\" />\r\n                                                        </div>\r\n                                                        <br>\r\n                                                        <button type=\"submit\" (click)=\"sendMail()\" class=\"btn \" style=\"\r\n                                                        background-color: #3a8ed3;height: 35px;\">\r\n                                                            Envoyer\r\n                                                        </button>\r\n                                                    </form>\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <img src=\"../../../assets/icons/maps.PNG\" width=\"800\" height=\"400\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(sanitizer, httpService) {
        this.sanitizer = sanitizer;
        this.httpService = httpService;
        this.objetMail = "";
        this.description = "";
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.openPopup = function () {
        setTimeout(function () {
            document.getElementsByClassName('modal-backdrop')[0].remove();
        }, 2000);
    };
    ContactComponent.prototype.sendMail = function () {
        console.log(this.objetMail, this.description);
        // Email.send({
        //     Host: "smtp.elasticemail.com",
        //     Username: "ando.eboons@gmail.com",
        //     Password: "27f06b01-2539-49aa-a193-1733861d1342",
        //     To: 'ando.eboons@gmail.com',
        //     From: "ando.eboons@gmail.com",
        //     Subject: "This is the subject",
        //     Body: "And this is the body"
        // }).then(
        //     message => {
        //         console.log(message);
        //     }
        // );
        // return this.httpService.sendMail({ object: this.objetMail, description: this.description }).subscribe();
    };
    ContactComponent.prototype.reInitForm = function () {
        this.objetMail = "";
        this.description = "";
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    text-align: center;\r\n    z-index: 2;\r\n    justify-content: space-between;\r\n    padding: 2px 40px;\r\n    background-color: #e9ecef;\r\n    width: 100%;\r\n    color : #3a8ed3;\r\n}\r\n\r\n.modal{\r\n    z-index: 2;\r\n}\r\n\r\nbutton {\r\n    box-shadow: 0 6px 10px 0 rgba(128, 70, 151, 0.3);\r\n    color: transparent;\r\n    height: 80px;\r\n    width: 80px;\r\n    border-radius: 50%;\r\n    border: none;\r\n    margin: 0 20px;\r\n}\r\n\r\n.bt-home {\r\n    background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 76 76%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23f9f9f9%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EAsset 1%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Layer_1-2%22 data-name%3D%22Layer 1%22%3E%3Cpath id%3D%22b%22 class%3D%22cls-1%22 d%3D%22M38%2C76A38%2C38%2C0%2C1%2C1%2C76%2C38%2C38%2C38%2C0%2C0%2C1%2C38%2C76ZM34%2C54V42h8V54H52V38h6L38%2C20%2C18%2C38h6V54Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\r\n    background-color: #d70b52;\r\n    background-repeat: no-repeat;\r\n    background-size: 40px auto;\r\n    background-position: center;\r\n    color: transparent;\r\n    box-shadow: 0 6px 10px 0 rgba(215, 11, 82, 0.3);\r\n    margin-left: 0px;\r\n    cursor: pointer;\r\n}\r\n\r\n.bt-back {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2222px%22 height%3D%2240px%22 viewBox%3D%220 0 22 40%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 46.2 (44496) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Eico-back%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%222-Cr%C3%A9ation-d%E2%80%99un-compte%22 transform%3D%22translate(-190.000000%2C -1000.000000)%22 fill-rule%3D%22nonzero%22 fill%3D%22%23FFFFFF%22%3E%0D            %3Cg id%3D%22footer%22 transform%3D%22translate(0.000000%2C 980.000000)%22%3E%0D                %3Cg id%3D%22prev%22 transform%3D%22translate(161.000000%2C 0.000000)%22%3E%0D                    %3Cg id%3D%22ico-back%22 transform%3D%22translate(29.000000%2C 20.000000)%22%3E%0D                        %3Cpath d%3D%22M0.583989539%2C21.4276104 L18.5523933%2C39.4095224 C19.3408349%2C40.1968259 20.6182363%2C40.1968259 21.4086688%2C39.4095224 C22.1971104%2C38.6222189 22.1971104%2C37.3434321 21.4086688%2C36.5561286 L4.86549927%2C20.0009966 L21.4066778%2C3.44586458 C22.1951194%2C2.65856109 22.1951194%2C1.37977427 21.4066778%2C0.590477614 C20.6182363%2C-0.196825871 19.3388438%2C-0.196825871 18.5504023%2C0.590477614 L0.581998525%2C18.5722235 C-0.194331025%2C19.3513882 -0.194331025%2C20.6502728 0.583989539%2C21.4276104 Z%22 id%3D%22Chevron_Right%22%3E%3C%2Fpath%3E%0D                    %3C%2Fg%3E%0D                %3C%2Fg%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n    background-color: #d70b52;\r\n    background-repeat: no-repeat;\r\n    background-size: 20px auto;\r\n    background-position: center;\r\n    color: transparent;\r\n    box-shadow: 0 6px 10px 0 rgba(215, 11, 82, 0.3);\r\n    cursor: pointer;\r\n}\r\n\r\n.bt-reload {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2237px%22 height%3D%2242px%22 viewBox%3D%220 0 37 42%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 46.2 (44496) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Eico_refresh%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22F.O%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%221-Home-skin-2%22 transform%3D%22translate(-1342.000000%2C -999.000000)%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%221.2%22 fill%3D%22%23FFFFFF%22 fill-rule%3D%22nonzero%22%3E            %3Cg id%3D%22footer%22 transform%3D%22translate(0.000000%2C 980.000000)%22%3E                %3Cg id%3D%22visiio-copy%22 transform%3D%22translate(1320.000000%2C 0.000000)%22%3E                    %3Cg id%3D%22ico_refresh%22 transform%3D%22translate(23.000000%2C 20.000000)%22%3E                        %3Cpath d%3D%22M34.9379405%2C17.6715625 C34.9379405%2C7.92742188 27.1153634%2C0 17.5000771%2C0 C7.88479075%2C0 0.0620594714%2C7.92742188 0.0620594714%2C17.6715625 C0.0620594714%2C18.2503906 0.525154185%2C18.7196875 1.0963326%2C18.7196875 C1.66751101%2C18.7196875 2.13060573%2C18.2503125 2.13060573%2C17.6715625 C2.13060573%2C9.08328125 9.02529736%2C2.09632812 17.5%2C2.09632812 C25.9747026%2C2.09632812 32.8693943%2C9.08335938 32.8693943%2C17.6715625 C32.8693943%2C26.2596875 25.9747026%2C33.2467187 17.5%2C33.2467187 L15.7055947%2C33.2467187 L18.2713877%2C30.3361719 C18.6519934%2C29.9045313 18.6150661%2C29.241875 18.18913%2C28.8561719 C17.7631938%2C28.4704687 17.1092181%2C28.5079687 16.7286894%2C28.9396094 L13.0609361%2C33.1001562 C12.4605396%2C33.78125 12.4605396%2C34.8084375 13.0609361%2C35.4895312 L16.7286894%2C39.6500781 C16.9330617%2C39.8819531 17.2160683%2C39.9999219 17.5003855%2C39.9999219 C17.7456167%2C39.9999219 17.9918502%2C39.9119531 18.18913%2C39.7335156 C18.6151432%2C39.3478125 18.6519934%2C38.6851562 18.2713877%2C38.2535156 L15.7055947%2C35.3429687 L17.5%2C35.3429687 C27.1153634%2C35.3429687 34.9379405%2C27.4155469 34.9379405%2C17.6715625 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\r\n    background-color: #804697;\r\n    background-repeat: no-repeat;\r\n    background-size: 29px auto;\r\n    background-position: center;\r\n    color: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.bt-cam {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2224px%22 height%3D%2240px%22 viewBox%3D%220 0 24 40%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 46.2 (44496) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Eico-cam%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%222-Cr%C3%A9ation-d%E2%80%99un-compte%22 transform%3D%22translate(-1468.000000%2C -1000.000000)%22 fill-rule%3D%22nonzero%22 fill%3D%22%23FFFFFF%22%3E%0D            %3Cg id%3D%22footer%22 transform%3D%22translate(0.000000%2C 980.000000)%22%3E%0D                %3Cg id%3D%22visiio%22 transform%3D%22translate(1440.000000%2C 0.000000)%22%3E%0D                    %3Cg id%3D%22ico-cam%22 transform%3D%22translate(28.000000%2C 20.000000)%22%3E%0D                        %3Cpath d%3D%22M24%2C16.796875 L24%2C12.109375 C24%2C5.43226563 18.6168%2C0 12%2C0 C5.3832%2C0 0%2C5.43226563 0%2C12.109375 L0%2C16.796875 C0%2C22.2517969 3.59310968%2C26.8750781 8.51612903%2C28.3851563 L8.51612903%2C32.293125 C5.43979355%2C32.8484375 3.09677419%2C35.5664844 3.09677419%2C38.828125 L3.09677419%2C40 L20.9032258%2C40 L20.9032258%2C38.828125 C20.9032258%2C35.5664844 18.5602065%2C32.8485156 15.483871%2C32.293125 L15.483871%2C28.3851562 C20.4068903%2C26.8750781 24%2C22.2517969 24%2C16.796875 Z M18.4196903%2C37.65625 L5.58030968%2C37.65625 C6.08701935%2C35.8546094 7.73187097%2C34.53125 9.67741935%2C34.53125 L14.3225806%2C34.53125 C16.268129%2C34.53125 17.9129806%2C35.8546094 18.4196903%2C37.65625 Z M10.8387097%2C32.1875 L10.8387097%2C28.849375 C11.2210065%2C28.8865625 11.6082581%2C28.90625 12%2C28.90625 C12.3917419%2C28.90625 12.779071%2C28.8865625 13.1612903%2C28.849375 L13.1612903%2C32.1875 L10.8387097%2C32.1875 Z M12%2C26.5625 C6.66387097%2C26.5625 2.32258065%2C22.1816406 2.32258065%2C16.796875 L2.32258065%2C12.109375 C2.32258065%2C6.72460938 6.66387097%2C2.34375 12%2C2.34375 C17.336129%2C2.34375 21.6774194%2C6.72460938 21.6774194%2C12.109375 L21.6774194%2C16.796875 C21.6774194%2C22.1816406 17.336129%2C26.5625 12%2C26.5625 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E%0D                        %3Cpath d%3D%22M12%2C5 C7.5888%2C5 4%2C8.5888 4%2C13 C4%2C17.4112 7.5888%2C21 12%2C21 C16.4112%2C21 20%2C17.4112 20%2C13 C20%2C8.5888 16.4112%2C5 12%2C5 Z M12%2C18.7142857 C8.84914286%2C18.7142857 6.28571429%2C16.1508571 6.28571429%2C13 C6.28571429%2C9.84914286 8.84914286%2C7.28571429 12%2C7.28571429 C15.1508571%2C7.28571429 17.7142857%2C9.84914286 17.7142857%2C13 C17.7142857%2C16.1508571 15.1508571%2C18.7142857 12%2C18.7142857 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E%0D                        %3Cpath d%3D%22M7%2C8 L7%2C10.5862069 C8.06475862%2C10.5862069 8.93103448%2C11.6690517 8.93103448%2C13 L11%2C13 C11%2C10.2430172 9.20558621%2C8 7%2C8 Z%22 id%3D%22Shape%22 transform%3D%22translate(9.000000%2C 10.500000) rotate(-90.000000) translate(-9.000000%2C -10.500000) %22%3E%3C%2Fpath%3E%0D                        %3Ccircle id%3D%22Oval%22 cx%3D%2212%22 cy%3D%2213%22 r%3D%221%22%3E%3C%2Fcircle%3E%0D                        %3Ccircle id%3D%22Oval%22 cx%3D%2212%22 cy%3D%2224%22 r%3D%221%22%3E%3C%2Fcircle%3E%0D                    %3C%2Fg%3E%0D                %3C%2Fg%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n    background-color: #804697;\r\n    background-repeat: no-repeat;\r\n    background-size: 24px auto;\r\n    background-position: center;\r\n    color: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.bt-info {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2223px%22 height%3D%2244px%22 viewBox%3D%220 0 23 44%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 46.2 (44496) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Eico-info%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%222-Cr%C3%A9ation-d%E2%80%99un-compte%22 transform%3D%22translate(-1588.000000%2C -998.000000)%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%222.2%22 fill-rule%3D%22nonzero%22%3E%0D            %3Cg id%3D%22footer%22 transform%3D%22translate(0.000000%2C 980.000000)%22%3E%0D                %3Cg id%3D%22guide%22 transform%3D%22translate(1560.000000%2C 0.000000)%22%3E%0D                    %3Cg id%3D%22ico-info%22 transform%3D%22translate(32.000000%2C 20.000000)%22%3E%0D                        %3Cpath d%3D%22M17.1907603%2C33.1605318 L16.000018%2C38.019641 L15.4703636%2C38.2283293 C13.9495805%2C38.8275305 12.713565%2C39.2921174 11.7820812%2C39.6149936 C10.7526193%2C39.9725545 9.57827936%2C40.147619 8.25949704%2C40.147619 C6.16923493%2C40.147619 4.47700609%2C39.6172688 3.23202019%2C38.5271839 C1.97025518%2C37.4179994 1.32368901%2C35.9769371 1.32368901%2C34.279903 C1.32368901%2C33.6885169 1.36508874%2C33.0879801 1.44842211%2C32.4825026 C1.53121305%2C31.8853047 1.66132304%2C31.2191315 1.85052297%2C30.4334085 L3.74869489%2C23.7273862 C3.91665629%2C23.088635 4.0541578%2C22.5022679 4.16329265%2C21.9560509 C4.26467542%2C21.4587613 4.31438186%2C21.0033162 4.31438186%2C20.5996626 C4.31438186%2C20.0127829 4.21864641%2C19.6898294 4.12408784%2C19.5997683 C4.0210789%2C19.5019438 3.59095995%2C19.3943183 2.84544086%2C19.3943183 C2.46587057%2C19.3943183 2.06475229%2C19.4558018 1.64333801%2C19.5801717 C1.17217732%2C19.7192025 0.749890788%2C19.8584553 0.380988338%2C19.994656 L-1.56209939%2C20.7120543 L-0.425369103%2C16.0815951 L0.0948479605%2C15.8701555 C1.3744982%2C15.350048 2.59328618%2C14.9068183 3.75603213%2C14.5394741 C5.00052486%2C14.1452389 6.18883806%2C13.9461593 7.32480375%2C13.9461593 C9.40691384%2C13.9461593 11.0792681%2C14.469277 12.2933617%2C15.550388 C13.5243349%2C16.6473363 14.1498816%2C18.094148 14.1498816%2C19.8148507 C14.1498816%2C20.1599144 14.1134092%2C20.7153443 14.0425958%2C21.4596902 C13.9677126%2C22.2673732 13.8269424%2C23.0156974 13.6243712%2C23.6859796 L11.7273174%2C30.3904836 C11.5819487%2C30.8939743 11.451214%2C31.4722372 11.3360988%2C32.1280016 C11.2239412%2C32.7430644 11.1686334%2C33.2145966 11.1686334%2C33.4960664 C11.1686334%2C34.0872677 11.2669472%2C34.3871578 11.3551648%2C34.4586691 C11.5193342%2C34.5907597 11.9846122%2C34.699135 12.7395113%2C34.699135 C13.0920716%2C34.699135 13.520062%2C34.6329602 14.0147982%2C34.4968626 C14.5473137%2C34.3499613 14.9175003%2C34.2262831 15.1079212%2C34.1370099 L17.1907603%2C33.1605318 Z M17.1555556%2C5.18854464 C17.1555556%2C6.66654293 16.5838417%2C7.95451934 15.4790569%2C8.97705728 C14.3903538%2C9.99092525 13.0575532%2C10.5061771 11.5367857%2C10.5061771 C10.0148553%2C10.5061771 8.68117265%2C9.99290109 7.58301974%2C8.98179026 C6.46723287%2C7.95582188 5.88903065%2C6.66687747 5.88903065%2C5.18854464 C5.88903065%2C3.71450268 6.46544784%2C2.42575882 7.57873222%2C1.3895092 C8.6755067%2C0.370226117 10.0124326%2C-0.147619048 11.5367857%2C-0.147619048 C13.0582713%2C-0.147619048 14.3925264%2C0.372027554 15.4813575%2C1.39242732 C16.5858371%2C2.42690485 17.1555556%2C3.71463479 17.1555556%2C5.18854464 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E%0D                    %3C%2Fg%3E%0D                %3C%2Fg%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n    background-color: #804697;\r\n    background-repeat: no-repeat;\r\n    background-size: 21px auto;\r\n    background-position: center;\r\n    color: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.bt-speak {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2240px%22 height%3D%2240px%22 viewBox%3D%220 0 40 40%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 46.2 (44496) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Eico-speak%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%222-Cr%C3%A9ation-d%E2%80%99un-compte%22 transform%3D%22translate(-1700.000000%2C -1000.000000)%22 fill-rule%3D%22nonzero%22 fill%3D%22%23FFFFFF%22%3E%0D            %3Cg id%3D%22footer%22 transform%3D%22translate(0.000000%2C 980.000000)%22%3E%0D                %3Cg id%3D%22lang-copy%22 transform%3D%22translate(1680.000000%2C 0.000000)%22%3E%0D                    %3Cg id%3D%22ico-speak%22 transform%3D%22translate(20.000000%2C 20.000000)%22%3E%0D                        %3Cpath d%3D%22M25.78125%2C12.890625 C25.78125%2C5.78273438 19.9985156%2C0 12.890625%2C0 C5.78273438%2C0 0%2C5.78273438 0%2C12.890625 C0%2C16.1485937 0.6059375%2C19.3877344 1.191875%2C22.5201562 C1.75820313%2C25.5475781 2.34375%2C28.678125 2.34375%2C31.71875 C2.34375%2C36.285 6.02367188%2C40 10.546875%2C40 C15.0700781%2C40 18.75%2C36.285 18.75%2C31.71875 C18.75%2C31.1367969 18.6892969%2C30.5061719 18.5832813%2C29.9885937 C18.0114844%2C27.1942969 20.0695312%2C23.9417969 22.0057031%2C22.005625 C24.4403906%2C19.5709375 25.78125%2C16.3338281 25.78125%2C12.890625 Z M16.2871875%2C30.4585156 C16.3617188%2C30.8228906 16.40625%2C31.2939844 16.40625%2C31.71875 C16.40625%2C34.9926563 13.7777344%2C37.65625 10.546875%2C37.65625 C7.31601563%2C37.65625 4.6875%2C34.9926563 4.6875%2C31.71875 C4.6875%2C28.4607813 4.0815625%2C25.2216406 3.495625%2C22.0892188 C2.92929687%2C19.0617969 2.34375%2C15.93125 2.34375%2C12.890625 C2.34375%2C7.07507813 7.07507813%2C2.34375 12.890625%2C2.34375 C18.7061719%2C2.34375 23.4375%2C7.07507813 23.4375%2C12.890625 C23.4375%2C15.7078125 22.3404688%2C18.3563281 20.3484375%2C20.3483594 C17.8883594%2C22.8085156 15.5295312%2C26.7563281 16.2871875%2C30.4585156 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E%0D                        %3Cpath d%3D%22M14.4232031%2C4.82789063 C9.273125%2C3.8846875 4.6875%2C7.82453125 4.6875%2C12.890625 C4.6875%2C15.7115625 5.226875%2C18.578125 5.79921875%2C21.6197656 C5.98304687%2C22.5963281 6.173125%2C23.6060938 6.34367188%2C24.6121875 C6.6890625%2C26.6476562 8.41359375%2C28.125 10.444375%2C28.125 C12.4185937%2C28.125 14.1324219%2C26.72 14.5195312%2C24.7842187 C14.5224219%2C24.4239844 15.9335156%2C20.6414844 13.0014844%2C17.065 C11.5235156%2C15.2621875 9.37796875%2C14.1857813 7.0646875%2C14.0725 C7.04289063%2C13.6748438 7.03125%2C13.2810156 7.03125%2C12.890625 C7.03125%2C9.35804688 10.2157031%2C6.44015625 14.0010156%2C7.13328125 C18.5996094%2C7.97546875 20.3558594%2C13.7102344 17.0340625%2C17.0348438 L18.6921094%2C18.6914062 C23.3051562%2C14.0742969 20.936875%2C6.02078125 14.4232031%2C4.82789063 Z M11.1889844%2C18.5508594 C13.3392187%2C21.1736719 12.2289844%2C23.9232813 12.22125%2C24.3245313 C12.0524219%2C25.1685938 11.3051562%2C25.78125 10.444375%2C25.78125 C9.56070312%2C25.78125 8.80796875%2C25.1246875 8.65453125%2C24.2202344 C8.48039062%2C23.1933594 8.28828125%2C22.1730469 8.10132812%2C21.1795313 C7.79460937%2C19.5495313 7.49742187%2C17.9700781 7.294375%2C16.4405469 C8.8134375%2C16.6048438 10.2073437%2C17.3535156 11.1889844%2C18.5508594 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E%0D                        %3Crect id%3D%22Rectangle-path%22 x%3D%2228.203125%22 y%3D%2218.75%22 width%3D%2211.796875%22 height%3D%222.34375%22%3E%3C%2Frect%3E%0D                        %3Crect id%3D%22Rectangle-path%22 transform%3D%22translate(34.060574%2C 31.639634) rotate(-63.434949) translate(-34.060574%2C -31.639634) %22 x%3D%2232.8887741%22 y%3D%2226.3993243%22 width%3D%222.34360063%22 height%3D%2210.4806189%22%3E%3C%2Frect%3E%0D                        %3Crect id%3D%22Rectangle-path%22 transform%3D%22translate(34.062718%2C 8.203157) rotate(-26.565051) translate(-34.062718%2C -8.203157) %22 x%3D%2228.8224087%22 y%3D%227.03135662%22 width%3D%2210.4806189%22 height%3D%222.34360063%22%3E%3C%2Frect%3E%0D                    %3C%2Fg%3E%0D                %3C%2Fg%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n    background-color: #804697;\r\n    background-repeat: no-repeat;\r\n    background-size: 38px auto;\r\n    background-position: center;\r\n    color: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.bt-lang {\r\n\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2242px%22 height%3D%2242px%22 viewBox%3D%220 0 42 42%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 46.2 (44496) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Eico-lang%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%222-Cr%C3%A9ation-d%E2%80%99un-compte%22 transform%3D%22translate(-1819.000000%2C -999.000000)%22 stroke%3D%22%23FFFFFF%22 fill-rule%3D%22nonzero%22 fill%3D%22%23FFFFFF%22%3E%0D            %3Cg id%3D%22footer%22 transform%3D%22translate(0.000000%2C 980.000000)%22%3E%0D                %3Cg id%3D%22lang%22 transform%3D%22translate(1800.000000%2C 0.000000)%22%3E%0D                    %3Cg id%3D%22ico-lang%22 transform%3D%22translate(20.000000%2C 20.000000)%22%3E%0D                        %3Cpath d%3D%22M34.9572414%2C33.2565517 C38.0910345%2C29.7248276 40%2C25.082069 40%2C20 C40%2C14.7124138 37.9337931%2C9.90137931 34.5710345%2C6.32137931 C34.5710345%2C6.32137931 34.5710345%2C6.32068966 34.5710345%2C6.32068966 C34.5682759%2C6.31655172 34.5641379%2C6.31517241 34.562069%2C6.31172414 C31.0593103%2C2.58827586 26.1517241%2C0.204827586 20.6931034%2C0.0179310345 L20.6924138%2C0.0172413793 L20.3027586%2C0.00689655172 C20.202069%2C0.00344827586 20.1013793%2C0 20%2C0 C19.8986207%2C0 19.797931%2C0.00344827586 19.6972414%2C0.00689655172 L19.3089655%2C0.0172413793 L19.3082759%2C0.0179310345 C13.8496552%2C0.204827586 8.94206897%2C2.58827586 5.43931034%2C6.31172414 C5.43655172%2C6.31517241 5.43241379%2C6.31655172 5.43034483%2C6.32068966 C5.43034483%2C6.32068966 5.43034483%2C6.32137931 5.42965517%2C6.32206897 C2.0662069%2C9.90137931 0%2C14.7124138 0%2C20 C0%2C25.082069 1.90896552%2C29.7248276 5.04275862%2C33.2565517 C5.04689655%2C33.2627586 5.04689655%2C33.2696552 5.05172414%2C33.2758621 C5.06413793%2C33.2931034 5.08206897%2C33.3013793 5.09517241%2C33.3172414 C8.61655172%2C37.2537931 13.6689655%2C39.7896552 19.3075862%2C39.9827586 L19.3082759%2C39.9834483 L19.6965517%2C39.9937931 C19.797931%2C39.9965517 19.8986207%2C40 20%2C40 C20.1013793%2C40 20.202069%2C39.9965517 20.3027586%2C39.9931034 L20.6910345%2C39.9827586 L20.6917241%2C39.982069 C26.3365517%2C39.7882759 31.3944828%2C37.2475862 34.9158621%2C33.3027586 C34.9248276%2C33.2910345 34.9393103%2C33.2875862 34.9475862%2C33.2751724 C34.9531034%2C33.2696552 34.9531034%2C33.2627586 34.9572414%2C33.2565517 Z M1.39655172%2C20.6896552 L9.67448276%2C20.6896552 C9.75241379%2C23.6131034 10.3234483%2C26.4537931 11.34%2C29.1151724 C9.37862069%2C29.8248276 7.50344828%2C30.7765517 5.7462069%2C31.9641379 C3.16206897%2C28.8903448 1.5537931%2C24.9724138 1.39655172%2C20.6896552 Z M6.12275862%2C7.60206897 C7.83862069%2C8.71793103 9.66551724%2C9.61172414 11.5710345%2C10.2793103 C10.4041379%2C13.1117241 9.75862069%2C16.1655172 9.67448276%2C19.3103448 L1.39655172%2C19.3103448 C1.56137931%2C14.8227586 3.31862069%2C10.7365517 6.12275862%2C7.60206897 Z M38.6034483%2C19.3103448 L30.3255172%2C19.3103448 C30.2413793%2C16.1655172 29.5958621%2C13.1117241 28.4289655%2C10.2793103 C30.3344828%2C9.61172414 32.1613793%2C8.71793103 33.8772414%2C7.60206897 C36.6813793%2C10.7365517 38.4386207%2C14.8227586 38.6034483%2C19.3103448 Z M19.3103448%2C10.3193103 C17.3165517%2C10.2627586 15.3593103%2C9.96551724 13.4682759%2C9.43448276 C14.8662069%2C6.56689655 16.84%2C3.97862069 19.3103448%2C1.82344828 L19.3103448%2C10.3193103 Z M19.3103448%2C11.6986207 L19.3103448%2C19.3103448 L11.0537931%2C19.3103448 C11.1386207%2C16.3117241 11.7675862%2C13.4034483 12.8924138%2C10.7068966 C14.9655172%2C11.3075862 17.117931%2C11.64 19.3103448%2C11.6986207 Z M20.6896552%2C11.6986207 C22.882069%2C11.64 25.0344828%2C11.3082759 27.1082759%2C10.7068966 C28.2331034%2C13.4034483 28.862069%2C16.3117241 28.9468966%2C19.3103448 L20.6896552%2C19.3103448 L20.6896552%2C11.6986207 Z M20.6896552%2C10.3193103 L20.6896552%2C1.82344828 C23.16%2C3.97862069 25.1337931%2C6.56689655 26.5317241%2C9.43448276 C24.6406897%2C9.96551724 22.6834483%2C10.2627586 20.6896552%2C10.3193103 Z M27.8682759%2C9.01517241 C26.5434483%2C6.23931034 24.7048276%2C3.71034483 22.4282759%2C1.54275862 C26.4668966%2C2.07103448 30.1006897%2C3.89724138 32.8993103%2C6.58965517 C31.3103448%2C7.59793103 29.6248276%2C8.40896552 27.8682759%2C9.01517241 Z M12.1317241%2C9.01517241 C10.3751724%2C8.40896552 8.68965517%2C7.59793103 7.10137931%2C6.58965517 C9.89931034%2C3.89724138 13.5337931%2C2.07103448 17.5724138%2C1.54275862 C15.2951724%2C3.71034483 13.4565517%2C6.23931034 12.1317241%2C9.01517241 Z M11.0537931%2C20.6896552 L19.3103448%2C20.6896552 L19.3103448%2C27.6124138 C17.0296552%2C27.6731034 14.7951724%2C28.0289655 12.6475862%2C28.6751724 C11.6772414%2C26.1544828 11.1317241%2C23.4613793 11.0537931%2C20.6896552 Z M19.3103448%2C28.9917241 L19.3103448%2C38.1765517 C16.6662069%2C35.8696552 14.5931034%2C33.0668966 13.1834483%2C29.957931 C15.1606897%2C29.3751724 17.2144828%2C29.0510345 19.3103448%2C28.9917241 Z M20.6896552%2C38.1765517 L20.6896552%2C28.9917241 C22.7855172%2C29.0503448 24.8393103%2C29.3751724 26.8165517%2C29.9572414 C25.4068966%2C33.0668966 23.3337931%2C35.8696552 20.6896552%2C38.1765517 Z M20.6896552%2C27.6124138 L20.6896552%2C20.6896552 L28.9462069%2C20.6896552 C28.8682759%2C23.4613793 28.3227586%2C26.1544828 27.3517241%2C28.6758621 C25.2048276%2C28.0289655 22.9703448%2C27.6731034 20.6896552%2C27.6124138 Z M30.3255172%2C20.6896552 L38.6034483%2C20.6896552 C38.4462069%2C24.9724138 36.8386207%2C28.8903448 34.2537931%2C31.9641379 C32.4965517%2C30.7765517 30.6213793%2C29.8248276 28.66%2C29.1151724 C29.6772414%2C26.4537931 30.2475862%2C23.6131034 30.3255172%2C20.6896552 Z M6.68344828%2C32.9972414 C8.31517241%2C31.9131034 10.0524138%2C31.0413793 11.8675862%2C30.3896552 C13.2089655%2C33.3965517 15.1344828%2C36.1365517 17.5717241%2C38.4572414 C13.3296552%2C37.902069 9.53310345%2C35.9158621 6.68344828%2C32.9972414 Z M22.4282759%2C38.4572414 C24.8655172%2C36.1372414 26.7910345%2C33.3972414 28.1324138%2C30.3896552 C29.9475862%2C31.0413793 31.6841379%2C31.9131034 33.3165517%2C32.9972414 C30.4668966%2C35.9158621 26.6703448%2C37.902069 22.4282759%2C38.4572414 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E%0D                    %3C%2Fg%3E%0D                %3C%2Fg%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n    background-color: #804697;\r\n    background-repeat: no-repeat;\r\n    background-size: 40px auto;\r\n    background-position: center;\r\n    color: transparent;\r\n    margin-right: 0px;\r\n    cursor: pointer;\r\n}\r\n\r\n.flags-container {\r\n    display: flex;\r\n}\r\n\r\n.flag-selected {\r\n    border: double;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    Gira Consulting - 2019\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate.service */ "./src/app/services/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(ngZone, translateService) {
        this.ngZone = ngZone;
        this.translateService = translateService;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/loader/loader.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    z-index: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 80%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 100px;\r\n    width: 100%;\r\n    background: rgba(255,255,255,.8);\r\n}\r\n\r\n.loader {\r\n    border: 10px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 10px solid grey;\r\n    width: 60px;\r\n    height: 60px;\r\n    -webkit-animation: spin 0.5s linear infinite;\r\n            animation: spin 0.5s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"loader\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(sharedService) {
        this.sharedService = sharedService;
        this.root = document.documentElement;
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/components/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/news/news.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/news/news.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/news/news.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <dl>\r\n                                    <dt>\r\n                                        METIER - (MOA) :\r\n                                    </dt>\r\n                                    <dd>\r\n                                        <img src=\"../../../assets/icons/moa.jpg\" width=\"210px\" alt=\"\">\r\n                                    </dd>\r\n                                    <dt>\r\n                                        INGENIERIE APPLICATIVE :\r\n                                    </dt>\r\n                                    <dd>\r\n                                        <img src=\"../../../assets/icons/net-java-logo.png\" width=\"210px;\" alt=\"\">\r\n                                        <img src=\"../../../assets/icons/angularreact.png\" width=\"210px;\" alt=\"\">\r\n                                    </dd>\r\n\r\n                                    <dt>\r\n                                        BIG DATA\r\n                                    </dt>\r\n\r\n                                    <dd>\r\n                                        <img src=\"../../../assets/icons/db.png\" width=\"210px\" alt=\"\">\r\n                                    </dd>\r\n\r\n                                </dl>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/components/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/offres/offres.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/offres/offres.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blockquote-footer{\r\n    color: black\r\n}\r\ninput {\r\n    background-color: #f7f8f9;\r\n    border: 1px solid #e7e8e9;\r\n    font-family: Roboto-Regular;\r\n    color: #000;\r\n    width: 660px;\r\n}"

/***/ }),

/***/ "./src/app/components/offres/offres.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/offres/offres.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <blockquote class=\"blockquote\">\r\n                <p class=\"mb-0\">\r\n                    Nos offres :\r\n                </p>\r\n                <footer class=\"blockquote-footer\">\r\n                    <a href=\"#modal-container-7558801\" id=\"modal-7558801\" data-toggle=\"modal\"\r\n                        (click)=\"openOffre(0)\">INGENIEUR D’ETUDES ET DEVELOPPEMENT .NET\r\n                        FULL STACK</a>\r\n                </footer>\r\n                <footer class=\"blockquote-footer\">\r\n                    <a href=\"#modal-container-7558801\" data-toggle=\"modal\" id=\"modal-7558801\" (click)=\"openOffre(1)\">\r\n                        INGENIEUR D’ETUDES ET\r\n                        DEVELOPPEMENT JAVA/J2EE FULL STACK</a>\r\n                </footer>\r\n\r\n                <footer class=\"blockquote-footer\">\r\n                    <a href=\"#modal-container-7558801\" data-toggle=\"modal\" id=\"modal-7558801\" (click)=\"openOffre(2)\">MOA\r\n                        FINANCE/COMPTABILITE</a>\r\n                </footer>\r\n            </blockquote>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"modal \" id=\"modal-container-7558801\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div role=\"document\">\r\n                <div class=\"modal-content\" style=\"background-color: #add8e6;\">\r\n                    <div class=\"modal-header\">\r\n                        <h3>\r\n                            {{offreselected.titre}}\r\n                        </h3>\r\n                        <button type=\"button\" id=\"modal-7558802\" data-toggle=\"modal\" href=\"#modal-container-7558802\"\r\n                            class=\"btn \" style=\"\r\n                        background-color: #3a8ed3;height: 35px;margin-right: 77px;\"\r\n                            (click)=\"openSendMail(offreselected.titre)\">\r\n                            Postuler\r\n                        </button>\r\n                        <button style=\"height: 30px;\r\n                        width: 27px;\r\n                        background-color: #add8e6;cursor: pointer;\" type=\"button\">\r\n                            <span data-dismiss=\"modal\" aria-hidden=\"true\">×</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"container-fluid\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <p>\r\n                                        {{offreselected.description}}\r\n                                    </p>\r\n                                    <blockquote class=\"blockquote\" *ngIf=\"offreselected.prerequis\">\r\n                                        <p class=\"mb-0\">\r\n                                            Prerequis :\r\n                                        </p>\r\n                                        <div *ngFor=\"let pre of offreselected.prerequis\">\r\n                                            <footer class=\"blockquote-footer\">\r\n                                                {{pre}}\r\n                                            </footer>\r\n                                        </div>\r\n                                    </blockquote>\r\n                                    <blockquote class=\"blockquote\" *ngIf=\"offreselected.role\">\r\n                                        <p class=\"mb-0\">\r\n                                            Rolês :\r\n                                        </p>\r\n                                        <div *ngFor=\"let role of offreselected.role\">\r\n                                            <footer class=\"blockquote-footer\">\r\n                                                {{role}}\r\n                                            </footer>\r\n                                        </div>\r\n                                    </blockquote>\r\n                                    <blockquote class=\"blockquote\" *ngIf=\"offreselected.techno\">\r\n                                        <p class=\"mb-0\">\r\n                                            Thechnologies :\r\n                                        </p>\r\n                                        <div *ngFor=\"let tech of offreselected.techno\">\r\n                                            <footer class=\"blockquote-footer\">\r\n                                                {{tech}}\r\n                                            </footer>\r\n                                        </div>\r\n                                    </blockquote>\r\n                                    <blockquote class=\"blockquote\" *ngIf=\"offreselected.demarrage\">\r\n                                        <p class=\"mb-0\">\r\n                                            Démarage :\r\n                                        </p>\r\n                                        <footer class=\"blockquote-footer\">\r\n                                            {{offreselected.demarrage}}\r\n                                        </footer>\r\n                                    </blockquote>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal \" id=\"modal-container-7558802\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"myModalLabel\">\r\n                    Nous contacter\r\n                </h5>\r\n                <button style=\"height: 30px;\r\n            width: 27px;\r\n            background-color: antiquewhite;cursor: pointer;\" type=\"button\">\r\n                    <span data-dismiss=\"modal\" aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form role=\"form\">\r\n                    <div>\r\n                        Objet :\r\n                        <input type=\"text\" [(ngModel)]=\"objetMail\" name=\"objetMail\" />\r\n                    </div>\r\n                    <div>\r\n                        Description :\r\n                        <textarea name=\"\" [(ngModel)]=\"description\" name=\"description\" id=\"\" cols=\"90\"\r\n                            rows=\"5\"></textarea>\r\n                    </div>\r\n                    <div>\r\n                        <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" />\r\n                    </div>\r\n                    <br>\r\n                    <button type=\"submit\" (click)=\"sendMail()\" class=\"btn \" style=\"\r\n                background-color: #3a8ed3;height: 35px;\">\r\n                        Envoyer\r\n                    </button>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/offres/offres.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/offres/offres.component.ts ***!
  \*******************************************************/
/*! exports provided: OffresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffresComponent", function() { return OffresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OffresComponent = /** @class */ (function () {
    function OffresComponent() {
        this.offreselected = {};
        this.data = [
            {
                id: "0",
                titre: "INGENIEUR D’ETUDES ET DEVELOPPEMENT .NET FULL STACK",
                description: "Dans le cadre de nouveaux projets innovants, nous recherchons un Ingénieur d’études et Développement .NET Full stack confirmé (plus de 3 ans d’expérience).",
                prerequis: ["Bonne maitrise des technologies Microsoft .NET, C# avec une approche Full Stack (Back, Front,SGBD) ",
                    "Autonomie / Force de proposition / Rigueur", "Expérience en méthode AGILE Anglais technique"],
                role: ["Développement de la plateforme dans une architecture orienté micro-services",
                    "Améliorer en continue la qualité du code (performances, réactivité et sécurité de la plateforme)",
                    "Mise en place de la maintenance applicative et du monitoring de la plateforme à l’ouverture du service",
                    "Veille technologique"],
                techno: [".NET C#",
                    "architecture cloud, API REST, et micro services",
                    "MS SQL SERVER 2008 et +",
                    "T-SQL",
                    "MVC / JQuery",
                    "Java script, Powershell",
                    "Angular 4 et +",
                    "WCF",
                    "Methodes TDD, BDD",
                    "NHibernate",
                    "Git, Jenkins, Docker et Devops"],
                demarrage: "ASAP"
            },
            {
                id: "1",
                titre: "INGENIEUR D’ETUDES ET DEVELOPPEMENT JAVA/J2EE FULL STACK",
                description: "Dans le cadre de nouveaux projets innovants, nous recherchons un Ingénieur d’études et Développement Full stack confirmé (plus de 3 ans d’expérience).",
                prerequis: [" Bonne maitrise des technologies JAVA/J2EE, avec une approche Full Stack (Back, Front, SGBD)",
                    "Autonomie / Force de proposition / Rigueur", "Expérience en méthode AGILE Anglais technique", "Pratique de la méthode TDD, BDD", "Anglais technique"],
                role: ["Développement de la plateforme dans une architecture orienté micro-services",
                    "Améliorer en continue la qualité du code (performances, réactivité et sécurité de la plateforme)",
                    "Mise en place de la maintenance applicative et du monitoring de la plateforme à l’ouverture du service",
                    "Veille technologique"],
                techno: ["JAVA/J2EE",
                    "Spring Boot, Spring Data",
                    "Webservices (REST ou SOAP)",
                    "Oracle",
                    "Angular 2 à 6",
                    "JSQL, PL/SQL",
                    "Git, Jenkins, Docker et Devops"],
                demarrage: "ASAP"
            },
            {
                id: "2",
                titre: "MOA FINANCE/COMPTABILITE",
                description: "Afin de soutenir une croissance constante, notre cabinet renforce son centre de compétences dédié à la finance et risques bancaires notamment pour accompagner nos clients dans leurs projets de développement et de transformation de leur SI et process.Dans votre rôle de consultant senior, vous accompagnerez nos clients sur la MOA, l’administration et les projets de déploiement des systèmes d’information finance/comptabilité:"
                    + "• Conception et mise en œuvre les interfaces comptables entre les systèmes d’Opérations « Métiers » et les systèmes « Finance »,Administration et l’évolution des plans de comptes dans le cadre des évolutions réglementaires et organisationnelles,"
                    + "• Assiste les équipes de « Contrôle comptable » et de « Back Office » dans leurs travaux de fiabilisation et de maintien de la qualité comptable.",
                role: [
                    "Comprendre et formaliser les processus de traitements des opérations gérées par les Systèmes d’Opérations Métiers",
                    "Définir l’ensemble des informations nécessaires à l’alimentation des systèmes de synthèse Finance et à la production des états financiers pour bâtir les interfaces comptables dans le respect des règles et normes comptables du Groupe,",
                    "Etudier les impacts des évolutions règlementaires sur les interfaces comptables de l'activité de la banque de détail",
                    "Définir les schémas comptables opérationnels à paramétrer dans l’interpréteur comptable Finance, qui alimentera l’ensemble des plates-formes Finance",
                    "Définir les flux de données nécessaires à l’alimentation des systèmes de synthèse Finance conformément aux principes d’architecture du SI Finance du groupe",
                    "Répondre aux besoins d’alimentation des outils de contrôles et de certification des comptes déployés dans les Back Office",
                    "Rédiger des spécifications fonctionnelles à destination des équipes MOA des systèmes d’Opérations Métiers",
                    "Définir la stratégie de recette et le cahier de recette",
                    "Réaliser les phases de recette comptable et assurer la liaison et le support aux utilisateurs",
                    "Participer au suivi post démarrage en relation avec les équipes Back Office Métiers et les équipes Reporting",
                    "Réaliser un bilan de mise en production et assurer le suivi du plan d’action de correction définitive des éventuelles anomalies",
                    "Assurer la maintenance d&#39;un parc d&#39;interfaces comptables",
                    "Coordonner les tâches et actions des différents acteurs (MOA et utilisateurs Métiers, équipes IT, équipes Reporting) en veillant à la qualité des livrables et au respect des budgets et plannings",
                    "Représenter le département dans les instances de suivi de projets."
                ],
                prerequis: ["Vous êtes diplômé(e) d'une grande école d’ingénieur, universitaire ou école de commerce une spécialisation en banque et finance", "Vous maîtrisez la comptabilité bancaire",
                    "Vous maîtrisez la gestion de projet en MOA",
                    "Vous êtes en capacité d’assurer un pilotage fonctionnel transverse",
                    "Vous êtes en capacité de gérer et coordonner plusieurs projets en parallèle",
                    "Vous avez une connaissance du cycle de vie des opérations bancaires de la banque de détail",
                    "Vous êtes reconnus pour vos qualités de communication, de rédaction, de synthèse, de gestion du stress et de travail en équipe.",
                    "Vous maitrisez l’anglais à l’oral et à l’écrit."],
                techno: [],
                demarrage: ""
            }
        ];
        this.objetMail = "";
        this.description = "";
    }
    OffresComponent.prototype.ngOnInit = function () {
    };
    OffresComponent.prototype.openOffre = function (idx) {
        setTimeout(function () {
            document.getElementsByClassName('modal-backdrop')[0].remove();
        }, 2000);
        this.offreselected = this.data[idx];
    };
    OffresComponent.prototype.openSendMail = function (obj) {
        setTimeout(function () {
            document.getElementsByClassName('modal-backdrop')[0].remove();
        }, 2000);
        this.objetMail = "OFFRE : " + obj;
        this.description = "";
    };
    OffresComponent.prototype.sendMail = function () {
        console.log(this.objetMail, this.description);
    };
    OffresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offres',
            template: __webpack_require__(/*! ./offres.component.html */ "./src/app/components/offres/offres.component.html"),
            styles: [__webpack_require__(/*! ./offres.component.css */ "./src/app/components/offres/offres.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OffresComponent);
    return OffresComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\r\n    align-items: center;\r\n    background-image: linear-gradient( 50deg, #ffffff 0% ,#ffffff 100%);\r\n    display: flex;\r\n    height: 100px;\r\n    justify-content: space-between;\r\n    padding: 0 12px;\r\n}\r\n\r\na {\r\n    color: #fff;\r\n    display: inline-block;\r\n    font-family: 'Roboto';\r\n    font-weight:400;\r\n    font-size: 14px;\r\n    height: 30px;\r\n    line-height: 2em;\r\n    margin-top: 5px;\r\n    overflow: hidden;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 190px;\r\n}\r\n\r\n.header-logo {\r\n    height: 100px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n     max-width: 295px;\r\n     text-align: center;\r\n    position: relative;\r\n    width: auto;\r\n    left: 12px;\r\n    position: absolute;\r\n    left: 44%;\r\n}\r\n\r\n.toolbar .header-logo {\r\n    position: absolute;\r\n}\r\n\r\n.btn-menu {\r\n    align-content: center;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    width:100%;\r\n}\r\n\r\n.btn-menu a{\r\n    letter-spacing: .2em;\r\n}\r\n\r\n@media screen and (max-width:1024px){\r\n    .btn-menu{\r\n        flex-direction:column;\r\n    }\r\n    .btn-menu .bt-home{\r\n        order:0;\r\n        margin: 0 10px;\r\n        max-width: 40px;\r\n        height: 40px;\r\n        background-size: 60px 60px;\r\n    }\r\n    .btn-menu a{\r\n        order:1;\r\n        height: 20px;\r\n    }\r\n    .header-logo{\r\n        position:relative;\r\n        max-width: 200px;\r\n    }\r\n    .bt-admin{\r\n        position: relative;\r\n    }\r\n}\r\n\r\nbutton {\r\n    border-radius: 50%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\r\n    color: transparent;\r\n    cursor: pointer;\r\n    height: 76px;\r\n    margin: 0px;\r\n    width: 76px;\r\n}\r\n\r\n.bt-home {\r\n    background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 76 76%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23f9f9f9%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EAsset 1%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Layer_1-2%22 data-name%3D%22Layer 1%22%3E%3Cpath id%3D%22b%22 class%3D%22cls-1%22 d%3D%22M38%2C76A38%2C38%2C0%2C1%2C1%2C76%2C38%2C38%2C38%2C0%2C0%2C1%2C38%2C76ZM34%2C54V42h8V54H52V38h6L38%2C20%2C18%2C38h6V54Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\r\n    background-color:grey;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 78px 78px;\r\n    margin: 0 40px;\r\n}\r\n\r\n.bt-admin {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2213px%22 height%3D%2245px%22 viewBox%3D%220 0 13 45%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 46.2 (44496) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3EGroup%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Artboard%22 transform%3D%22translate(-68.000000%2C -28.000000)%22 fill%3D%22%23F9F9F9%22%3E%0D            %3Cg id%3D%22ico-hom%22 transform%3D%22translate(34.500000%2C 10.500000)%22%3E%0D                %3Cg id%3D%22Group%22 transform%3D%22translate(34.000000%2C 18.000000)%22%3E%0D                    %3Cellipse id%3D%22Path%22 cx%3D%226%22 cy%3D%2222%22 rx%3D%225.6%22 ry%3D%225.4%22%3E%3C%2Fellipse%3E%0D                    %3Cellipse id%3D%22Path%22 cx%3D%226%22 cy%3D%2238.2%22 rx%3D%225.6%22 ry%3D%225.4%22%3E%3C%2Fellipse%3E%0D                    %3Cellipse id%3D%22Path%22 cx%3D%226%22 cy%3D%225.8%22 rx%3D%225.6%22 ry%3D%225.4%22%3E%3C%2Fellipse%3E%0D                %3C%2Fg%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 10px;\r\n    box-shadow: none;\r\n    /* width: 1%; */\r\n    flex: 1;\r\n    width: 80px;\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n/* Modal */\r\n\r\n.modal {\r\n    z-index: 3;\r\n}\r\n\r\n.start::before {\r\n    content: '*';\r\n    color: grey;\r\n    padding-left: 5px;\r\n}\r\n\r\n.modal-containt {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.modal-containt span {\r\n    color: #fff;\r\n    display: block;\r\n    font-family: roboto-regular;\r\n    font-size: 24px;\r\n    margin: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.modal-containt img {\r\n    display: block;\r\n    margin: 0 auto;\r\n    margin-top: 50px;\r\n    width: 60%;\r\n}\r\n\r\n.bt-valider {\r\n    background-color: grey;\r\n    border: none;\r\n    color: white;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 300px;\r\n    cursor: pointer;\r\n}\r\n\r\nlabel {\r\n    color: #fff;\r\n}\r\n\r\n.btn-container {\r\n    display: flex !important;\r\n}\r\n\r\n.btn-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.img-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.flags-container {\r\n    display: flex;\r\n}\r\n\r\n.flag-selected {\r\n    border: double;\r\n}"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/components/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/httpInterceptor.ts":
/*!************************************!*\
  !*** ./src/app/httpInterceptor.ts ***!
  \************************************/
/*! exports provided: AlHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlHttpInterceptor", function() { return AlHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlHttpInterceptor = /** @class */ (function () {
    function AlHttpInterceptor(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
    }
    AlHttpInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (request && request.url.indexOf('/analytics') === -1) {
            if (request.url.indexOf('skins') === -1 || request.url.indexOf('widgets') === -1) {
                this.sharedService.setLoader(true);
            }
        }
        var req = request.clone({
            headers: request.headers.set('Authorization', "bearer " + JSON.parse(localStorage.getItem('token')) + " ")
        });
        req = request.clone({
            headers: request.headers.set('Access-Control-Allow-Headers', '*')
        });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (evt) {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.sharedService.setLoader(false);
            }
        }, function (err) {
            _this.sharedService.setLoader(false);
        }));
    };
    AlHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], AlHttpInterceptor);
    return AlHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/layouts/core/core.component.css":
/*!*************************************************!*\
  !*** ./src/app/layouts/core/core.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    height: 100%;\r\n}\r\n.container .content-video{\r\n    height: 100vh;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n}\r\n.container-items{\r\n    background-color: #F9F9F9;\r\n    margin: 0px;\r\n    height:100vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layouts/core/core.component.html":
/*!**************************************************!*\
  !*** ./src/app/layouts/core/core.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ecran  -->\r\n<div>\r\n    <div>\r\n        <div>\r\n            <!-- <app-toolbar></app-toolbar> -->\r\n        </div>\r\n        <div>\r\n            <router-outlet>\r\n                <app-loader *ngIf=\"isLoading\"></app-loader>\r\n            </router-outlet>\r\n        </div>\r\n        <div>\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/core/core.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/core/core.component.ts ***!
  \************************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoreComponent = /** @class */ (function () {
    function CoreComponent(translateService, sharedService, httpService) {
        this.translateService = translateService;
        this.sharedService = sharedService;
        this.httpService = httpService;
        this.isLoading = false;
    }
    CoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.isLoading.subscribe(function (res) {
            _this.isLoading = res;
        });
    };
    CoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-core',
            template: __webpack_require__(/*! ./core.component.html */ "./src/app/layouts/core/core.component.html"),
            styles: [__webpack_require__(/*! ./core.component.css */ "./src/app/layouts/core/core.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "./src/app/layouts/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/layouts/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@media (min-width: 1025px) and (max-width: 1336px) {\r\n    .site-container {\r\n        height: 360px;\r\n    }\r\n}*/\r\n\r\n[_nghost-c5] {\r\n    display: inline-block !important;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.home-container-gauche {\r\n    display: flex;\r\n    /* flex-flow: row nowrap; */\r\n    width: 100%;\r\n}\r\n\r\n.mat-tab-link-active, .mat-tab-label-active {\r\n    background-color: #5eadb0;\r\n    color: #d5feff;\r\n    border: 1px solid #6b7f7f;\r\n    font-weight: bold;\r\n}\r\n\r\n.mat-tab-link, .mat-tab-label {\r\n    line-height: 30px !important;\r\n    height: 30px !important;\r\n    min-width: 100px !important;\r\n    border: 1px solid #7e7e7e;\r\n}\r\n\r\n.tabContentContainer {\r\n    border: 1px solid #aaaaaa;\r\n    background: #ffffff 50% 50% repeat-x;\r\n}\r\n\r\n.list-gauche {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    justify-content: flex-start;\r\n    padding: 0 2.5rem;\r\n}\r\n\r\n.liste{\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n/* .liste-haut {\r\n    background-color: #ffffff;\r\n    -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\r\n    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: row wrap;\r\n    -ms-flex-flow:row wrap;\r\n    flex-flow: row wrap;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    padding: 0 1.5rem;\r\n} */\r\n\r\n.nav-cat-widget{\r\n    background-color: #ffffff;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    /* padding: 0 1.5rem; */\r\n}\r\n\r\n.site-item {\r\n    background-color: #ffffff;\r\n    border-radius: 4px;\r\n    box-shadow: 0 6px 14px 0 rgba(129, 129, 129, 0.15);\r\n    height: 11.25rem;\r\n    margin: 1.05%;\r\n    margin-bottom: 4.5%;\r\n    width: 18.75rem;\r\n}\r\n\r\n.site-item p {\r\n    color: #4a4a4a;\r\n    font-family: Roboto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    line-height: normal;\r\n    text-align: center;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\nimg {\r\n    /* height: 11.25rem; */\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    width: 18.75rem;\r\n}\r\n\r\na {\r\n    position: none;\r\n    bottom: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.site-container {\r\n    align-content: flex-start;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: flex-start;\r\n    height: 100vh;\r\n    margin: 0 18.75rem;\r\n    margin-top: 5rem;\r\n    overflow: auto;\r\n}\r\n\r\n.bt-nav {\r\n    background: transparent;\r\n    border-bottom: 4px solid rgba(0, 0, 0, 0);\r\n    box-shadow: none;\r\n    font-family: Roboto;\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    color: #4a4a4a;\r\n    cursor: pointer;\r\n    display: block;\r\n    height: 4.25rem;\r\n    line-height: normal;\r\n    letter-spacing: 0.26875rem;\r\n    margin: 0 10px ;\r\n    /* margin-left:15px;\r\n    margin-right:15px; */\r\n    text-align: center;\r\n    width: 10.9375rem;\r\n}\r\n\r\n.home-container .liste-haut .bt-nav{\r\n    height: 6.25rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 4.3px;\r\n}\r\n\r\n.home-container .liste-haut input.bt-nav{\r\n    height:52px;\r\n    border: 1px solid #E7E8E9;\r\n}\r\n\r\n.search-btn{\r\n    /* margin: 2.2em 0 1.4em 0; */\r\n    margin:3.5em 0 0;\r\n    display: flex;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items:center;\r\n    padding: 0 2.5rem;\r\n}\r\n\r\n.search-btn .bt-nav{\r\n    background-color: #ffffff;\r\n    border-radius: 28px;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\r\n    letter-spacing: 0;\r\n    border: none;\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n}\r\n\r\n.liste-gauche .search-btn .bt-nav{\r\n    height:52px;\r\n    border: 1px solid #E7E8E9;\r\n}\r\n\r\n.search-btn span.ico-search{\r\n    width: 30px;\r\n    height: 40px;\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 viewBox%3D%220 0 32 32%22 version%3D%221.1%22 width%3D%2232px%22 height%3D%2232px%22%3E%3Cg id%3D%22surface1%22%3E%3Cpath style%3D%22 %22 d%3D%22M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z %22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat center center;\r\n    background-size:80%;\r\n    box-shadow: none !important;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin-left: -40px;\r\n    opacity: .5;\r\n}\r\n\r\n.search-btn span.ico-reset{\r\n    width: 30px;\r\n    height: 40px;\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 47.971 47.971%22 style%3D%22enable-background%3Anew 0 0 47.971 47.971%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cpath d%3D%22M28.228%2C23.986L47.092%2C5.122c1.172-1.171%2C1.172-3.071%2C0-4.242c-1.172-1.172-3.07-1.172-4.242%2C0L23.986%2C19.744L5.121%2C0.88%0D%09%09c-1.172-1.172-3.07-1.172-4.242%2C0c-1.172%2C1.171-1.172%2C3.071%2C0%2C4.242l18.865%2C18.864L0.879%2C42.85c-1.172%2C1.171-1.172%2C3.071%2C0%2C4.242%0D%09%09C1.465%2C47.677%2C2.233%2C47.97%2C3%2C47.97s1.535-0.293%2C2.121-0.879l18.865-18.864L42.85%2C47.091c0.586%2C0.586%2C1.354%2C0.879%2C2.121%2C0.879%0D%09%09s1.535-0.293%2C2.121-0.879c1.172-1.171%2C1.172-3.071%2C0-4.242L28.228%2C23.986z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\") no-repeat center center;\r\n    background-size:60%;\r\n    box-shadow: none !important;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin-left: -40px;\r\n    opacity: 0.5;\r\n    color:rgba(0, 0, 0, 0);\r\n}\r\n\r\n.active {\r\n    color: #3a8ed3;\r\n    border-bottom: 4px solid #3a8ed3;\r\n    font-weight:800;\r\n}\r\n\r\n.modal {\r\n    z-index: 9999;\r\n}\r\n\r\n.modal img {\r\n    width: 10%;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n\r\n.modal-containt {\r\n    text-align: center;\r\n}\r\n\r\n.modal-containt p, .modal div {\r\n    font-family: roboto-regular;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n.modal-containt button {\r\n    width: 180px;\r\n    height: 50px;\r\n    margin: 40px 0 20px 30px;\r\n}\r\n\r\n.page-title {\r\n    display: inline-flex;\r\n}\r\n\r\nbutton {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.bt-del {\r\n    background-color: var(--principal);\r\n    cursor: pointer;\r\n}\r\n\r\n/* ----------------- css for webview ----------------- */\r\n\r\n.webViewClass {\r\n    height: calc(100vh - 200px);\r\n    top: 0;\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.home-container-gauche .webViewClass {\r\n    width: calc(100% - 355px);\r\n    height: calc(100vh - 100px);\r\n}\r\n\r\n#webViewId {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n}\r\n\r\n/* --------------------------------------------------- */\r\n\r\n/* ----------------- css for carousel ----------------- */\r\n\r\nngu-tile tile {\r\n    box-shadow: none;\r\n}\r\n\r\n.bannerStyle div {\r\n    background-color: #ccc;\r\n    background-size: cover !important;\r\n    height: 100%;\r\n}\r\n\r\n.bannerStyle img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.bannerStyle h1 {\r\n    text-align: center;\r\n    background: rgba(0, 0, 0, 0.32);\r\n    color: white;\r\n    margin: 0;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.tile {\r\n    min-height: 200px;\r\n    background-color: #ccc;\r\n    background-size: cover !important;\r\n}\r\n\r\n.tile h1 {\r\n    text-align: center;\r\n    line-height: 200px;\r\n    background: rgba(0, 0, 0, 0.32);\r\n    color: white;\r\n    margin: 0;\r\n}\r\n\r\nh4 {\r\n    margin: 0;\r\n    padding: 10px 15px;\r\n    text-align: center;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n    padding: 0 15px 10px;\r\n    text-align: center;\r\n}\r\n\r\n.wBg {\r\n    background: white;\r\n}\r\n\r\n.container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\nnav {\r\n    border-bottom: 1px solid #ccc;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    background: white;\r\n    z-index: 12;\r\n}\r\n\r\nnav h1 {\r\n    margin: 0;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.carBtn {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\r\n    border-radius: 999px;\r\n}\r\n\r\n.leftRs {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2280px%22 height%3D%2280px%22 viewBox%3D%220 0 80 80%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 46.2 (44496) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Ebt_previous%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E        %3Ccircle id%3D%22path-1%22 cx%3D%2224%22 cy%3D%2224%22 r%3D%2224%22%3E%3C%2Fcircle%3E        %3Cfilter x%3D%22-22.9%25%22 y%3D%22-14.6%25%22 width%3D%22145.8%25%22 height%3D%22145.8%25%22 filterUnits%3D%22objectBoundingBox%22 id%3D%22filter-2%22%3E            %3CfeOffset dx%3D%220%22 dy%3D%224%22 in%3D%22SourceAlpha%22 result%3D%22shadowOffsetOuter1%22%3E%3C%2FfeOffset%3E            %3CfeGaussianBlur stdDeviation%3D%223%22 in%3D%22shadowOffsetOuter1%22 result%3D%22shadowBlurOuter1%22%3E%3C%2FfeGaussianBlur%3E            %3CfeColorMatrix values%3D%220 0 0 0 0.501960784   0 0 0 0 0.274509804   0 0 0 0 0.592156863  0 0 0 0.3 0%22 type%3D%22matrix%22 in%3D%22shadowBlurOuter1%22%3E%3C%2FfeColorMatrix%3E        %3C%2Ffilter%3E    %3C%2Fdefs%3E    %3Cg id%3D%22F.O%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%221-Home%22 transform%3D%22translate(-40.000000%2C -450.000000)%22%3E            %3Cg id%3D%22footer%22 transform%3D%22translate(0.000000%2C 450.000000)%22%3E                %3Cg id%3D%22bt_previous%22 transform%3D%22translate(40.000000%2C 0.000000)%22%3E                    %3Ccircle id%3D%22Oval%22 fill%3D%22%23EAEAEA%22 cx%3D%2240%22 cy%3D%2240%22 r%3D%2240%22%3E%3C%2Fcircle%3E                    %3Cg id%3D%22ico-prev%22 transform%3D%22translate(16.000000%2C 16.000000)%22%3E                        %3Cg id%3D%22Oval-Copy%22%3E                            %3Cuse fill%3D%22black%22 fill-opacity%3D%221%22 filter%3D%22url(%23filter-2)%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E                            %3Cuse fill%3D%22%23FFFFFF%22 fill-rule%3D%22evenodd%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E                        %3C%2Fg%3E                        %3Cg id%3D%22next%22 transform%3D%22translate(24.000000%2C 24.500000) rotate(-180.000000) translate(-24.000000%2C -24.500000) translate(8.000000%2C 13.000000)%22 fill-rule%3D%22nonzero%22 fill%3D%22%23D70B52%22%3E                            %3Cpath d%3D%22M21.205%2C1.007 C20.776%2C0.563 20.062%2C0.563 19.618%2C1.007 C19.189%2C1.436 19.189%2C2.15 19.618%2C2.578 L27.665%2C10.625 L1.111%2C10.625 C0.492%2C10.626 0%2C11.118 0%2C11.737 C0%2C12.356 0.492%2C12.864 1.111%2C12.864 L27.665%2C12.864 L19.618%2C20.896 C19.189%2C21.34 19.189%2C22.055 19.618%2C22.483 C20.062%2C22.927 20.777%2C22.927 21.205%2C22.483 L31.157%2C12.531 C31.601%2C12.102 31.601%2C11.388 31.157%2C10.96 L21.205%2C1.007 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                        %3C%2Fg%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\r\n    background-repeat: no-repeat;\r\n    background-size: 60px auto;\r\n    background-position: center;\r\n    color: transparent;\r\n    position: absolute;\r\n    margin: auto;\r\n    margin-left: 40px;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 80px;\r\n    height: 80px;\r\n    box-shadow: none;\r\n    border-radius: 50%;\r\n    left: 0;\r\n    background-color: #eaeaea;\r\n}\r\n\r\n.rightRs {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2280px%22 height%3D%2280px%22 viewBox%3D%220 0 80 80%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 46.2 (44496) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Ebt_next%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E        %3Ccircle id%3D%22path-1%22 cx%3D%2224%22 cy%3D%2224%22 r%3D%2224%22%3E%3C%2Fcircle%3E        %3Cfilter x%3D%22-22.9%25%22 y%3D%22-14.6%25%22 width%3D%22145.8%25%22 height%3D%22145.8%25%22 filterUnits%3D%22objectBoundingBox%22 id%3D%22filter-2%22%3E            %3CfeOffset dx%3D%220%22 dy%3D%224%22 in%3D%22SourceAlpha%22 result%3D%22shadowOffsetOuter1%22%3E%3C%2FfeOffset%3E            %3CfeGaussianBlur stdDeviation%3D%223%22 in%3D%22shadowOffsetOuter1%22 result%3D%22shadowBlurOuter1%22%3E%3C%2FfeGaussianBlur%3E            %3CfeColorMatrix values%3D%220 0 0 0 0.501960784   0 0 0 0 0.274509804   0 0 0 0 0.592156863  0 0 0 0.3 0%22 type%3D%22matrix%22 in%3D%22shadowBlurOuter1%22%3E%3C%2FfeColorMatrix%3E        %3C%2Ffilter%3E    %3C%2Fdefs%3E    %3Cg id%3D%22F.O%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%221-Home%22 transform%3D%22translate(-1800.000000%2C -450.000000)%22%3E            %3Cg id%3D%22footer%22 transform%3D%22translate(0.000000%2C 450.000000)%22%3E                %3Cg id%3D%22bt_next%22 transform%3D%22translate(1800.000000%2C 0.000000)%22%3E                    %3Ccircle id%3D%22Oval%22 fill%3D%22%23EAEAEA%22 cx%3D%2240%22 cy%3D%2240%22 r%3D%2240%22%3E%3C%2Fcircle%3E                    %3Cg id%3D%22ioc_next%22 transform%3D%22translate(16.000000%2C 16.000000)%22%3E                        %3Cg id%3D%22Oval-Copy%22%3E                            %3Cuse fill%3D%22black%22 fill-opacity%3D%221%22 filter%3D%22url(%23filter-2)%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E                            %3Cuse fill%3D%22%23FFFFFF%22 fill-rule%3D%22evenodd%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E                        %3C%2Fg%3E                        %3Cg id%3D%22next%22 transform%3D%22translate(8.000000%2C 13.000000)%22 fill-rule%3D%22nonzero%22 fill%3D%22%23D70B52%22%3E                            %3Cpath d%3D%22M21.205%2C1.007 C20.776%2C0.563 20.062%2C0.563 19.618%2C1.007 C19.189%2C1.436 19.189%2C2.15 19.618%2C2.578 L27.665%2C10.625 L1.111%2C10.625 C0.492%2C10.626 0%2C11.118 0%2C11.737 C0%2C12.356 0.492%2C12.864 1.111%2C12.864 L27.665%2C12.864 L19.618%2C20.896 C19.189%2C21.34 19.189%2C22.055 19.618%2C22.483 C20.062%2C22.927 20.777%2C22.927 21.205%2C22.483 L31.157%2C12.531 C31.601%2C12.102 31.601%2C11.388 31.157%2C10.96 L21.205%2C1.007 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                        %3C%2Fg%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\r\n    background-repeat: no-repeat;\r\n    background-size: 60px auto;\r\n    background-position: center;\r\n    position: absolute;\r\n    margin: auto;\r\n    margin-right: 40px;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 80px;\r\n    height: 80px;\r\n    box-shadow: none;\r\n    border-radius: 999px;\r\n    right: 0;\r\n    background-color: #eaeaea;\r\n}\r\n\r\n.myPoint {\r\n    list-style-type: none;\r\n    text-align: center;\r\n    padding: 12px;\r\n    margin: 0;\r\n    white-space: nowrap;\r\n    overflow: auto;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 40%;\r\n    z-index: 99;\r\n}\r\n\r\n.myPoint li {\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    border: 2px solid rgba(0, 0, 0, 0.55);\r\n    padding: 4px;\r\n    margin: 0 3px;\r\n    transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);\r\n    transition: 0.4s;\r\n}\r\n\r\n.myPoint li.active {\r\n    background: #6b6b6b;\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n}\r\n\r\n.carouselHoved {\r\n    opacity: 0.4;\r\n}\r\n\r\n.myBannerPoint {\r\n    position: absolute;\r\n    display: flex;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: 0;\r\n    padding: 0;\r\n    color: beige;\r\n    justify-content: center;\r\n    list-style-type: none;\r\n    background: rgba(0, 0, 0, 0.34);\r\n    margin: 0;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.myBannerPoint li {\r\n    background: #6b6b6b;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.myBannerPoint li.active {\r\n    -webkit-transform: translateY(-10px);\r\n    transform: translateY(-10px);\r\n    transition: 0.3s ease all;\r\n}\r\n\r\n.point {\r\n    width: 10px;\r\n    height: 10px;\r\n    margin-right: 15px !important;\r\n}\r\n\r\n.swiper-slide {\r\n    min-height: 50vh;\r\n    width: 100%\r\n}\r\n\r\n.modal-rgpd {\r\n    display: block;\r\n    position: fixed;\r\n    width: 100%;\r\n    padding-top: 100px;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n/* Container */\r\n\r\n.home-container-gauche .swiper-container.swiper-container-horizontal{\r\n    width:calc(100% - 355px) !important;\r\n}\r\n\r\n@media screen and (max-width: 767px){\r\n    .home-container .liste-haut .bt-nav{\r\n        height: 4.25rem;\r\n    }\r\n    .bt-nav {\r\n        margin-left:0;\r\n    }\r\n\r\n}\r\n\r\n.home-container-gauche .liste-gauche .nav-cat-widget{\r\n    box-shadow:none;\r\n    display: block;\r\n    padding: 0 2.5rem;\r\n}\r\n\r\n.home-container-gauche .liste-gauche{\r\n    box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.1);\r\n    background-color: #ffffff;\r\n    height: 100vh;\r\n    width: 355px;\r\n    z-index: 2;\r\n}\r\n\r\n.swiper-wrapper {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.swiper-container-horizontal .swipper-wrapper{\r\n    position: relative;\r\n    width: 100%;\r\n    max-height: 90vh;\r\n    z-index: 1;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.swiper-slide .site-container-gauche {\r\n    height: 100vh;\r\n    overflow: auto;\r\n    margin-top: 0;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    align-content: flex-start;\r\n    padding:80px 60px 10px 60px;\r\n}\r\n\r\n.swiper-slide.swiper-slide-active{\r\n    width: 100% !important;\r\n}"

/***/ }),

/***/ "./src/app/layouts/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/layouts/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!-- https://www.flaticon.com/packs/social-media-logos-2 -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <!-- <img class=\"img-fluid img-thumbnail\" src=\"../../../assets/icons/logo.jpg\" alt=\"\"\r\n                        style=\"width : 16%;margin-right: 4px\"> -->\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                        </div>\r\n                        <div class=\"col-md-6\" style=\"padding-left: 40px;    padding-top: 0px;\">\r\n\r\n                            <a style=\"cursor: pointer;\"\r\n                                href=\"https://www.facebook.com/pages/category/Software-Company/GIRA-Consulting-265180507766795/\"\r\n                                target=\"_blank\">\r\n                                <img src=\"../../../assets/icons/facebook.png\" alt=\"\"\r\n                                    style=\"width : 20px;margin-right: 4px\">\r\n                            </a>\r\n                            <a style=\"cursor: pointer;\" href=\"https://fr.linkedin.com/in/gira-consulting-95379b175\"\r\n                                target=\"_blank\">\r\n                                <img src=\"../../../assets/icons/linkedin.png\" alt=\"\"\r\n                                    style=\"width : 20px;margin-right: 4px\">\r\n                            </a>\r\n                            <!-- <a style=\"cursor: pointer;\"\r\n                                href=\"https://www.youtube.com/results?search_query=digitale+informatique\"\r\n                                target=\"_blank\">\r\n                                <img src=\"../../../assets/icons/youtube.png\" alt=\"\"\r\n                                    style=\"width : 20px;margin-right: 4px\">\r\n                            </a> -->\r\n                            <!-- <a style=\"cursor: pointer;\" href=\"https://twitter.com/hashtag/consulting\" target=\"_blank\">\r\n                                <img src=\"../../../assets/icons//twitter.png\" alt=\"\"\r\n                                    style=\"width : 20px;margin-right: 4px\">\r\n                            </a> -->\r\n                            <a style=\"cursor: pointer;\"\r\n                                href=\"http://entreprises.lefigaro.fr/gira-consulting-75/entreprise-844717769\"\r\n                                target=\"_blank\">\r\n                                <img src=\"../../../assets/icons/home.png\" alt=\"\" style=\"width : 50px;margin-right: 4px\">\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"home-container\">\r\n    <div class=\"liste\">\r\n        <div class=\"nav-cat-widget\">\r\n            <!-- <img class=\"img-fluid img-thumbnail\" src=\"../../../assets/icons/logo.jpg\" alt=\"\" style=\"width : 22px\"> -->\r\n            <div *ngFor=\"let menu of menus\">\r\n                <button class=\"bt-nav\" style=\"cursor : pointer\" [ngClass]=\"{ active: menu.id === currentMenu.id }\"\r\n                    (click)=\"setActiveMenu(menu)\">\r\n                    {{ menu.name }}\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div style=\"height: 500px;\r\n    overflow-y: auto;\">\r\n        <div class=\"container-items\">\r\n            <div class=\"container-fluid\" style=\"margin-top: 60px\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-1\">\r\n                            </div>\r\n                            <div class=\"col-md-10\">\r\n                                <router-outlet>\r\n                                </router-outlet>\r\n                            </div>\r\n                            <div class=\"col-md-1\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.menus = [
            { id: 0, name: "QUI SOMMES NOUS ?", path: "home/about" },
            { id: 1, name: "HISTORIQUES", path: "home/historiques" },
            { id: 2, name: "OBJECTIF", path: "home/objectif" },
            { id: 3, name: "EXPERTISE", path: "home/expertise" },
            { id: 4, name: "CARRIERE", path: "home/carriere" },
            { id: 5, name: "NOUS REJOINDRE", path: "home/contact" },
            { id: 6, name: "NOS OFFRES", path: "home/offres" }
        ];
        this.currentMenu = { id: 0, name: "QUI SOMMES NOUS ?", path: "home/about" };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menus.forEach(function (element) {
            if ("/" + element.path === _this.router.url) {
                _this.setActiveMenu(element);
            }
        });
    };
    HomeComponent.prototype.setActiveMenu = function (menu) {
        this.currentMenu = menu;
        this.router.navigate([menu.path]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/layouts/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/layouts/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pipes/label.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/label.pipe.ts ***!
  \*************************************/
/*! exports provided: LabelPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelPipe", function() { return LabelPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LabelPipe = /** @class */ (function () {
    function LabelPipe(sharedService) {
        this.sharedService = sharedService;
    }
    LabelPipe.prototype.transform = function (sites, search, item) {
        search = search.toLocaleUpperCase();
        var lst = sites.filter(function (site) {
            return site.name.toLocaleUpperCase().replace(' ', '').indexOf(search) > -1;
        });
        return lst;
    };
    LabelPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'labelPipe',
            pure: true
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], LabelPipe);
    return LabelPipe;
}());



/***/ }),

/***/ "./src/app/pipes/translate.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/translate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (key) {
        return this.translate.data[key] || key;
    };
    TranslatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'translate',
            pure: false
        }),
        __metadata("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getArticles = function () {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/articles/read.php")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    HttpService.prototype.sendMail = function (email) {
        console.log(email);
        return this.http.post("/sendmail.php", email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.Unauthorized = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.filter = { searchSite: '' };
        this.flags = [
            { name: 'Français', path: 'france-flag-waving-icon-256.png', id: 'fr' },
            { name: 'Anglais', path: 'united-kingdom-flag-waving-icon-256.png', id: 'en' },
            { name: 'Allemand', path: 'germany-flag-waving-icon-256.png', id: 'de' }
        ];
        this.checkingNoInternetConnection = 'Connexion internet non disponible';
        this.messageNoInternetConnection = 'Aucune connexion internet';
    }
    SharedService.prototype.getToken = function () {
        return !!localStorage.getItem('token');
    };
    SharedService.prototype.setLoader = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.isLoading.next(value);
        });
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/translate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/translate.service.ts ***!
  \***********************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.data = {};
    }
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // const langPath = environment.pathAssets + `/assets/i18n/${lang || 'fr'}.json`;
            var langPath = "assets/i18n/" + (lang || 'fr') + ".json";
            _this.http.get(langPath).subscribe(function (translation) {
                _this.data = Object.assign({}, translation || {});
                resolve(_this.data);
            }, function (error) {
                _this.data = {};
                resolve(_this.data);
            });
        });
    };
    TranslateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
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
// const hostname = '192.168.1.76';
// const hostname = '197.158.87.207';
var environment = {
    production: false,
    isMock: false,
    // apiUrl: 'http://' + hostname + ':8080/api/v1',
    // mediasBaseUrl: 'http://' + hostname + ':8080/medias',
    apiUrl: 'http://localhost/articles/backend/api',
    mediasBaseUrl: 'http://localhost:3000',
    imagesFolder: 'visuals',
    videosFolder: 'videos',
    pathAssets: 'borne-tactile',
    googleAnalyticsKey: ''
};


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PROJETS\GIRA\SRC\src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map