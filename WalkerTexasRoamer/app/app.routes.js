"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//Constants
var wtr_constants_1 = require("./utilities/wtr-constants");
//Components
var home_component_1 = require("./home/home.component");
//WalkerTexasRoamer/test/coolThing1
var routes = [
    { path: '', pathMatch: 'full', redirectTo: wtr_constants_1.RouteConstants.HOME_ROUTE },
    { path: wtr_constants_1.RouteConstants.HOME_ROUTE, component: home_component_1.HomeComponent },
    { path: wtr_constants_1.RouteConstants.PICTURES_ROUTE, loadChildren: "app/pictures/pictures.module#PicturesModule" },
    { path: wtr_constants_1.RouteConstants.BLOG_ROUTE, loadChildren: "app/blog/blog.module#BlogModule" },
    { path: wtr_constants_1.RouteConstants.VIDEOS_ROUTE, loadChildren: "app/videos/videos.module#VideosModule" },
    { path: wtr_constants_1.RouteConstants.MAP_ROUTE, loadChildren: "app/map/map.module#MapModule" },
    { path: wtr_constants_1.RouteConstants.RATINGS_ROUTE, loadChildren: "app/ratings/ratings.module#RatingsModule" },
    { path: '**', redirectTo: 'home' }
];
exports.routingComponents = [
    home_component_1.HomeComponent
];
var PrimaryAppRoutingModule = (function () {
    function PrimaryAppRoutingModule() {
    }
    return PrimaryAppRoutingModule;
}());
PrimaryAppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
    })
], PrimaryAppRoutingModule);
exports.PrimaryAppRoutingModule = PrimaryAppRoutingModule;
//# sourceMappingURL=app.routes.js.map