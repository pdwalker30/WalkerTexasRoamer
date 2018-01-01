import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

//service
import { EventDispatcherService } from './utilities/event-dispatcher.service';

//routes
import {routingComponents, PrimaryAppRoutingModule } from './app.routes';



@NgModule({
    bootstrap: [AppComponent],

    //Components
    declarations: [
        AppComponent,
        routingComponents,
        NavbarComponent
    ],

    //Services
    providers: [
        EventDispatcherService
    ],

    //External Modules
    imports: [
        BrowserModule,
        PrimaryAppRoutingModule,
    ]
})
export class AppModule {
}