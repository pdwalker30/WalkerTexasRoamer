﻿import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'navbar-component',
    templateUrl: './app/navbar/navbar.component.html',
    styleUrls: ['./app/navbar/navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
    public title = 'app';

    constructor() {
        console.log('AppComopnent ctor');
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
    }
}