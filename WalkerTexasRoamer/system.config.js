var System;
(function (global) {
    System.config({
        paths: {
            // paths serve as alias            
            '@angular/core': './Scripts/core.umd.js',
            '@angular/common': './Scripts/common.umd.js',
            '@angular/compiler': './Scripts/compiler.umd.js',
            '@angular/platform-browser': './Scripts/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': './Scripts/platform-browser-dynamic.umd.js',
            '@angular/http': './Scripts/http.umd.js',
            '@angular/router': './Scripts/router.umd.js',
            '@angular/forms': './Scripts/forms.umd.js',
            '@angular/upgrade': './Scripts/upgrade.umd.js'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: false
            }
        },
        bundles: {
            "https://unpkg.com/rxjs-system-bundle@5.1.1/Rx.system.js": [
                "rxjs",
                "rxjs/*",
                "rxjs/operator/*",
                "rxjs/observable/*",
                "rxjs/scheduler/*",
                "rxjs/symbol/*",
                "rxjs/add/operator/*",
                "rxjs/add/observable/*",
                "rxjs/util/*"
            ]
        }
    });
})(this);
//# sourceMappingURL=system.config.js.map