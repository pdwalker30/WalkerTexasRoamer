"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
//component
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
//service
var event_dispatcher_service_1 = require("./utilities/event-dispatcher.service");
//routes
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        //Components
        declarations: [
            app_component_1.AppComponent,
            app_routes_1.routingComponents,
            navbar_component_1.NavbarComponent
        ],
        //Services
        providers: [
            event_dispatcher_service_1.EventDispatcherService
        ],
        //External Modules
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.PrimaryAppRoutingModule,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map