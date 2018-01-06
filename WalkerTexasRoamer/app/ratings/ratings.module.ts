import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { RatingsComponent } from './ratings.component';

//service
import { RatingsService } from './ratings.service';


//routes
const moduleRoutes: Routes = [
    { path: '', component: RatingsComponent }
];

@NgModule({

    //Components
    declarations: [
        RatingsComponent
    ],

    //Services
    providers: [
        RatingsService
    ],

    //External Modules
    imports: [
        RouterModule.forChild(moduleRoutes)
    ]
})
export class RatingsModule {
}