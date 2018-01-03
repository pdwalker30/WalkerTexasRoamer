import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './app/home/home.component.html',
    styleUrls: ['./app/home/home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
    public readonly CLASS_NAME: string = "HomeComponent";    

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
    }
}