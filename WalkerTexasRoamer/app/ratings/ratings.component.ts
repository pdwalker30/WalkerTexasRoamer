import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './app/ratings/ratings.component.html',
    styleUrls: ['./app/ratings/ratings.component.css']
})
export class RatingsComponent implements OnInit, AfterViewInit {
    public readonly CLASS_NAME: string = "RatingsComponent";
    public title = 'app';

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
    }
}