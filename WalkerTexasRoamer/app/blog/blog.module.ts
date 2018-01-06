import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { BlogComponent } from './blog.component';

//service
import { BlogService } from './blog.service';


//routes
const moduleRoutes: Routes = [
    { path: '', component: BlogComponent }
];

@NgModule({

    //Components
    declarations: [
        BlogComponent
    ],

    //Services
    providers: [
        BlogService
    ],

    //External Modules
    imports: [
        RouterModule.forChild(moduleRoutes)
    ]
})
export class BlogModule {
}