import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './app/home/home.component.html',
    styleUrls: ['./app/home/home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
    public title = 'app';

    constructor() {
        console.log('AppComopnent ctor');
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
    }
}