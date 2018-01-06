import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Constants
import { RouteConstants } from './utilities/wtr-constants';

//Components
import {HomeComponent } from './home/home.component';

//WalkerTexasRoamer/test/coolThing1

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: RouteConstants.HOME_ROUTE },
    { path: RouteConstants.HOME_ROUTE, component: HomeComponent },
    { path: RouteConstants.PICTURES_ROUTE, loadChildren: "app/pictures/pictures.module#PicturesModule" },
    { path: RouteConstants.BLOG_ROUTE, loadChildren: "app/blog/blog.module#BlogModule" },
    { path: RouteConstants.VIDEOS_ROUTE, loadChildren: "app/videos/videos.module#VideosModule" },
    { path: RouteConstants.MAP_ROUTE, loadChildren: "app/map/map.module#MapModule" },
    { path: RouteConstants.RATINGS_ROUTE, loadChildren: "app/ratings/ratings.module#RatingsModule" },
    { path: '**', redirectTo: 'home' }
];

export const routingComponents = [
   HomeComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class PrimaryAppRoutingModule { }