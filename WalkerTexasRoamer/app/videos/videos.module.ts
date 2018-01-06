import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { VideosComponent } from './videos.component';

//service
import { VideosService } from './videos.service';


//routes
const moduleRoutes: Routes = [
    { path: '', component: VideosComponent}
];

@NgModule({

    //Components
    declarations: [
        VideosComponent
    ],

    //Services
    providers: [
        VideosService
    ],

    //External Modules
    imports: [
        RouterModule.forChild(moduleRoutes)
    ]
})
export class VideosModule {
}