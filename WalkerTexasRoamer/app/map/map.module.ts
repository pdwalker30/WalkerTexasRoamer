import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { MapComponent } from './map.component';

//service
import { MapService } from './map.service';


//routes
const moduleRoutes: Routes = [
    { path: '', component: MapComponent }
];

@NgModule({

    //Components
    declarations: [
        MapComponent
    ],

    //Services
    providers: [
        MapService
    ],

    //External Modules
    imports: [
        RouterModule.forChild(moduleRoutes)
    ]
})
export class MapModule {
}