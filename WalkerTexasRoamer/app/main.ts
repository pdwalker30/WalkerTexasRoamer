﻿import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '../app/app.module';


//enableProdMode();


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));


//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from '../app/app.module';

//platformBrowserDynamic().bootstrapModule(AppModule);