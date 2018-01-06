import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { PicturesComponent } from './pictures.component';

//service
import { PicturesService } from './pictures.service';


//routes
const moduleRoutes: Routes = [
    { path: '', component: PicturesComponent }
];

@NgModule({

    //Components
    declarations: [
        PicturesComponent
    ],

    //Services
    providers: [
        PicturesService
    ],

    //External Modules
    imports: [
        RouterModule.forChild(moduleRoutes)
    ]
})
export class PicturesModule {
}