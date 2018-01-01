import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { EventDispatcherService } from './utilities/event-dispatcher.service';



@NgModule({
    bootstrap: [AppComponent],

    //Components
    declarations: [
        AppComponent
    ],

    //Services
    providers: [
        EventDispatcherService
    ],

    //External Modules
    imports: [
        BrowserModule
    ]
})
export class AppModule {   
}
