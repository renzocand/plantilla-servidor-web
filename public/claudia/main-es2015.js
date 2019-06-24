(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-page\">\n  <a href=\"#\" class=\"js-colorlib-nav-toggle colorlib-nav-toggle\"><i></i></a>\n  <app-aside></app-aside>\n\n  <div id=\"colorlib-main\">\n    <!-- AQUÍ EMPIEZA EL CONTENIDO -->\n    <router-outlet></router-outlet>\n    <!-- AQUÍ TERMINA EL CONTENIDO -->\n  </div>\n</div>\n<app-loader></app-loader>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/loader/loader.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/loader/loader.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"ftco-loader\" class=\"show fullscreen\">\n    <svg class=\"circular\" width=\"48px\" height=\"48px\">\n      <circle\n        class=\"path-bg\"\n        cx=\"24\"\n        cy=\"24\"\n        r=\"22\"\n        fill=\"none\"\n        stroke-width=\"4\"\n        stroke=\"#eeeeee\"\n      />\n      <circle\n        class=\"path\"\n        cx=\"24\"\n        cy=\"24\"\n        r=\"22\"\n        fill=\"none\"\n        stroke-width=\"4\"\n        stroke-miterlimit=\"10\"\n        stroke=\"#F96D00\"\n      />\n    </svg>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contacto/contacto.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contacto/contacto.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ftco-section contact-section animated fadeIn fast\">\n  <div class=\"container\">\n    <div class=\"row d-flex mb-5 contact-info\">\n      <div class=\"col-md-12 mb-4\">\n        <h2 class=\"h4 font-weight-bold\">Información de contácto</h2>\n      </div>\n      <div class=\"w-100\"></div>\n      <div class=\"col-md-5\">\n        <p>\n          Dirección:<b class=\"mx-2\">Av. Gregorio Escobedo 558, Jesús María</b>\n        </p>\n      </div>\n      <div class=\"col-md-3\">\n        <p>Teléfono:<b class=\"mx-2\">+51 989 285 818</b></p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Email:<b class=\"mx-2\">c.cespedesgonzalez@alum.up.edu.pe</b></p>\n      </div>\n    </div>\n    <div class=\"row block-9\">\n      \n      <div class=\"col-md-6 order-md-last pr-md-5 \">\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n          <div class=\"form-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Su Nombre\"\n              formControlName=\"nombre\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.nombre.errors }\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Su Correo\"\n              formControlName=\"correo\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.correo.errors }\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Asunto\"\n              formControlName=\"asunto\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <textarea\n              cols=\"30\"\n              rows=\"7\"\n              class=\"form-control\"\n              placeholder=\"Mensaje\"\n              formControlName=\"mensaje\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.mensaje.errors }\"\n            ></textarea>\n          </div>\n          <div class=\"form-group\">\n            <input\n              type=\"submit\"\n              value=\"Send Message\"\n              class=\"btn btn-primary py-3 px-5\"\n            />\n          </div>\n        </form>\n      </div>\n\n      <div class=\"col-md-6 animated fadeIn \">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"15\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/educacion/educacion.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/educacion/educacion.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-idiomas animated fadeIn fast fullHeight\">\n  <div class=\"container-fluid\">\n    <div class=\"row h-100 text-center\">\n     \n      <div class=\"col-md-4 px-5\">\n        <h1 class=\"mb-5\">Idiomas</h1>\n\n        <ul>\n          <li>Español: Lengua materna</li>\n          <li>Ingles: Avanzado</li>\n          <li>Francés: Avanzado</li>\n          <li>Portugués: Básico</li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-4 px-5\">\n          <h1 class=\"mb-5 mt-cel\">Estudios</h1>\n          <h3 class=\"mt-5\">Coventry University, UK</h3>\n          <p>\n            2017 Country Intelligence developing scenario analysis (curso)\n          </p>\n          <h3 class=\"mt-5\">Universidad del Pacífico</h3>\n          <p>\n            2012 -2019 Carrera de Negocios Internacionales\n          </p>\n  \n          <h3 class=\"mt-5\">Colegio Santa Rosa, Cusco</h3>\n          <p>\n            2000-2011: Primaria y secundaria\n          </p>\n        </div>\n\n      <div class=\"col-md-4 px-5\">\n          <h1 class=\"mb-5 mt-cel\">Herramientas</h1>\n  \n          <ul>\n            <li>Google Analytics: avanzado</li>\n            <li>Microsoft Office: avanzado</li>\n            <li>Visual Basic for Aplications: avanzado</li>\n            <li>SPSS: avanzado</li>\n            <li>E views: básico</li>\n          </ul>\n        </div>\n\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/experiencia/experiencia.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/experiencia/experiencia.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-experiencia animated fadeIn fast fullHeight\">\n  <div class=\"container-fluid\">\n    <div class=\"row h-100\">\n      <div class=\"col-md-3 my-4\"><h1>Experiencia en</h1></div>\n      <div class=\"col-md-9\">\n        <div class=\"row\">\n          <div class=\"col-md-6 my-4 px-5\">\n            <h2>Linio Perú</h2>\n            <p>\n                2018-2019 Analista comercial de Home & Living\n            </p>\n            <ul>\n              <li>Generación de plan de negocio para la categoría Home</li>\n              <li>Cumplimiento de targets de ventas y operaciones</li>\n              <li>Hunting y negociación con sellers y marcas</li>\n              <li>Generación de campañas para la categoría Home</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 my-4 px-5\">\n            <h2>Linio Perú</h2>\n            <p>\n                2017 Practicante comercial de Home & Living\n            </p>\n            <ul>\n              <li>Desarrollo de bases de datos</li>\n              <li>Seguimiento de KPIs comerciales y operativos</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 my-4 px-5\">\n            <h2>CAF - Banco de Desarrollo de América Latina</h2>\n            <p>\n                2016 Pasante en Fondos de Cooperación para el desarrollo\n            </p>\n            <ul>\n              <li>Desarrollo de Bases de Datos y mapas de cooperación</li>\n              <li>Implementación de KPI de desembolsos</li>\n              <li>Implementación de Objetivos de Desarrollo Sostenible (ODS)</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6  my-4 px-5\">\n            <h2>Favel La Famosa EIRL</h2>\n            <p>\n                2014 -2015 Asistente de Importación\n            </p>\n            <ul>\n              <li>Apoyo en procesos de importación y compras</li>\n              <li>Gestión de proveedores</li>\n              <li>Apoyo en ferias y congresos internacionales</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-wrap fullHeight animated fadeIn\" style=\"background-image: url(assets/images/bg_1.jpg);\" data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\"></div>\n  <div class=\"fullHeight d-flex justify-content-center align-items-center\">\n    <div class=\"col-md-8 text text-center\">\n      <div class=\"img mb-4\" style=\"background-image: url(assets/images/author.jpg);\"></div>\n      <div class=\"desc\">\n        <h2 class=\"subheading\">Hola soy</h2>\n        <h1 class=\"mb-4\">Claudia Céspedes</h1>\n        <p class=\"mb-4\">Estudiante de noveno ciclo de Negocios\n            Internacionales en la Universidad del\n            Pacífico. Experiencia previa en ecommerce, marketplace, ventas,\n            hunting, negociación con sellers.</p>\n        <!-- <p ><a (click)=\"disteClick()\" class=\"btn-custom puntero\">Más sobre mí <span class=\"ion-ios-arrow-forward\"></span></a></p> -->\n\n      \n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/referencias/referencias.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/referencias/referencias.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-referencias fullHeight animated fadeIn fast\">\n  <div class=\"wraper\">\n  <div class=\"container my-5\">\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <h1>Yuno Jimenez</h1>\n        <ul>\n          <li>\n            <span class=\" icon icon-user mx-1\"></span>\n            <span class=\"text\">Gerente en Linio Perú</span>\n          </li>\n          <li>\n            <span class=\"icon mx-1 icon-phone\"></span>\n            <span class=\"text\">+51 978 888 283</span>\n          </li>\n          <li>\n            <span class=\"icon mx-1 icon-envelope\"></span>\n            <span class=\"text\">yuno.jimenez@linio.com</span>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-4\">\n        <h1>Corina Arroyo</h1>\n        <ul>\n            <li>\n              <span class=\" icon icon-user mx-1\"></span>\n              <span class=\"text\">Directora en CAF Banco</span>\n            </li>\n            <li>\n              <span class=\"icon mx-1 icon-user-md\"></span>\n              <span class=\"text\">Desarrollo de América Latina</span>\n            </li>\n            <li>\n              <span class=\"icon mx-1 icon-envelope\"></span>\n              <span class=\"text\">CARROYO@caf.com</span>\n            </li>\n          </ul>\n      </div>\n      <div class=\"col-md-4\">\n        <h1>Oscar Malca</h1>\n        <ul>\n            <li>\n              <span class=\" icon icon-user mx-1\"></span>\n              <span class=\"text\">Vicedecano de Negocios\n                  Internacionales en Universidad del\n                  Pacífico</span>\n            </li>\n            <li>\n              <span class=\"icon mx-1 icon-envelope\"></span>\n              <span class=\"text\">malca_oe@up.edu.pe</span>\n            </li>\n          </ul>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/aside/aside.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/aside/aside.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"colorlib-aside\" role=\"complementary\" class=\"js-fullheight text-center\">\n    <h1 id=\"colorlib-logo\"><a routerLink=\"/home\">claudia<span>.</span></a></h1>\n    <nav id=\"colorlib-main-menu\" role=\"navigation\">\n      <ul>\n        <li routerLinkActive=\"colorlib-active\"><a routerLink=\"/home\" >Sobre mí</a></li>\n        <li routerLinkActive=\"colorlib-active\"><a routerLink=\"/experiencia\">Experiencia</a></li>\n        <li routerLinkActive=\"colorlib-active\"><a routerLink=\"/educacion\">Educación</a></li>\n        <li routerLinkActive=\"colorlib-active\"><a routerLink=\"/referencia\">Referencias</a></li>\n        <li routerLinkActive=\"colorlib-active\"><a routerLink=\"/contacto\">Contacto</a></li>\n      </ul>\n    </nav>\n\n    <div class=\"colorlib-footer\">\n      <ul>\n        <li><a href=\"#\"><i class=\"icon-facebook\"></i></a></li>\n        <li><a href=\"#\"><i class=\"icon-twitter\"></i></a></li>\n        <li><a href=\"#\"><i class=\"icon-instagram\"></i></a></li>\n        <li><a href=\"#\"><i class=\"icon-linkedin\"></i></a></li>\n      </ul>\n    </div>\n  </aside> <!-- END COLORLIB-ASIDE -->\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"ftco-footer ftco-bg-dark ftco-section\">\n    <div class=\"container px-md-5\">\n      <div class=\"row mb-5\">\n        <div class=\"col-md\">\n          <div class=\"ftco-footer-widget mb-4 ml-md-4\">\n            <h2 class=\"ftco-heading-2\">Category</h2>\n            <ul class=\"list-unstyled categories\">\n              <li><a href=\"#\">Photography <span>(6)</span></a></li>\n              <li><a href=\"#\">Fashion <span>(8)</span></a></li>\n              <li><a href=\"#\">Technology <span>(2)</span></a></li>\n              <li><a href=\"#\">Travel <span>(2)</span></a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md\">\n           <div class=\"ftco-footer-widget mb-4\">\n            <h2 class=\"ftco-heading-2\">Archives</h2>\n            <ul class=\"list-unstyled categories\">\n              <li><a href=\"#\">October 2018 <span>(6)</span></a></li>\n              <li><a href=\"#\">September 2018 <span>(6)</span></a></li>\n              <li><a href=\"#\">August 2018 <span>(8)</span></a></li>\n              <li><a href=\"#\">July 2018 <span>(2)</span></a></li>\n              <li><a href=\"#\">June 2018 <span>(7)</span></a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md\">\n          <div class=\"ftco-footer-widget mb-4\">\n            <h2 class=\"ftco-heading-2\">Have a Questions?</h2>\n            <div class=\"block-23 mb-3\">\n              <ul>\n                <li><span class=\"icon icon-map-marker\"></span><span class=\"text\">203 Fake St. Mountain View, San Francisco, California, USA</span></li>\n                <li><a href=\"#\"><span class=\"icon icon-phone\"></span><span class=\"text\">+2 392 3929 210</span></a></li>\n                <li><a href=\"#\"><span class=\"icon icon-envelope\"></span><span class=\"text\">info@yourdomain.com</span></a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"icon-heart\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\n<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>\n        </div>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.title = 'claudia';
    }
    ngAfterViewInit() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "../../../assets/js/main.js";
        this.elementRef.nativeElement.appendChild(s);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_aside_aside_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/aside/aside.component */ "./src/app/shared/aside/aside.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _pages_educacion_educacion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/educacion/educacion.component */ "./src/app/pages/educacion/educacion.component.ts");
/* harmony import */ var _pages_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/experiencia/experiencia.component */ "./src/app/pages/experiencia/experiencia.component.ts");
/* harmony import */ var _pages_referencias_referencias_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/referencias/referencias.component */ "./src/app/pages/referencias/referencias.component.ts");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "./src/app/pages/contacto/contacto.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _shared_aside_aside_component__WEBPACK_IMPORTED_MODULE_4__["AsideComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
            _pages_educacion_educacion_component__WEBPACK_IMPORTED_MODULE_8__["EducacionComponent"],
            _pages_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_9__["ExperienciaComponent"],
            _pages_referencias_referencias_component__WEBPACK_IMPORTED_MODULE_10__["ReferenciasComponent"],
            _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_11__["ContactoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCbuiztgVyMsk6BwXgzH7KfmY3veU1QB5g'
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_educacion_educacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/educacion/educacion.component */ "./src/app/pages/educacion/educacion.component.ts");
/* harmony import */ var _pages_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/experiencia/experiencia.component */ "./src/app/pages/experiencia/experiencia.component.ts");
/* harmony import */ var _pages_referencias_referencias_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/referencias/referencias.component */ "./src/app/pages/referencias/referencias.component.ts");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "./src/app/pages/contacto/contacto.component.ts");








const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'educacion', component: _pages_educacion_educacion_component__WEBPACK_IMPORTED_MODULE_4__["EducacionComponent"] },
    { path: 'experiencia', component: _pages_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_5__["ExperienciaComponent"] },
    { path: 'referencia', component: _pages_referencias_referencias_component__WEBPACK_IMPORTED_MODULE_6__["ReferenciasComponent"] },
    { path: 'contacto', component: _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__["ContactoComponent"] },
    { path: '**', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/loader/loader.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoaderComponent);



/***/ }),

/***/ "./src/app/pages/contacto/contacto.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.ts ***!
  \******************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ContactoComponent = class ContactoComponent {
    constructor() {
        this.lat = -12.084932;
        this.lng = -77.053331;
        this.submitted = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'asunto': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'mensaje': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    get f() {
        return this.form.controls;
    }
    onSubmit() {
        if (this.form.invalid) {
            this.submitted = true;
            return false;
        }
        console.log(this.form.value);
    }
};
ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacto',
        template: __webpack_require__(/*! raw-loader!./contacto.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contacto/contacto.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactoComponent);



/***/ }),

/***/ "./src/app/pages/educacion/educacion.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/educacion/educacion.component.ts ***!
  \********************************************************/
/*! exports provided: EducacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducacionComponent", function() { return EducacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducacionComponent = class EducacionComponent {
    constructor() { }
    ngOnInit() {
    }
};
EducacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-educacion',
        template: __webpack_require__(/*! raw-loader!./educacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/educacion/educacion.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EducacionComponent);



/***/ }),

/***/ "./src/app/pages/experiencia/experiencia.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/experiencia/experiencia.component.ts ***!
  \************************************************************/
/*! exports provided: ExperienciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienciaComponent", function() { return ExperienciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienciaComponent = class ExperienciaComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExperienciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experiencia',
        template: __webpack_require__(/*! raw-loader!./experiencia.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/experiencia/experiencia.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExperienciaComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.hobbie = false;
    }
    ngOnInit() {
    }
    disteClick() {
        this.hobbie = true;
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/referencias/referencias.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/referencias/referencias.component.ts ***!
  \************************************************************/
/*! exports provided: ReferenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenciasComponent", function() { return ReferenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReferenciasComponent = class ReferenciasComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReferenciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-referencias',
        template: __webpack_require__(/*! raw-loader!./referencias.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/referencias/referencias.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReferenciasComponent);



/***/ }),

/***/ "./src/app/shared/aside/aside.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/aside/aside.component.ts ***!
  \*************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AsideComponent = class AsideComponent {
    constructor() { }
    ngOnInit() {
    }
};
AsideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aside',
        template: __webpack_require__(/*! raw-loader!./aside.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/aside/aside.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AsideComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/renzo/webs/02-claudia/claudia/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map