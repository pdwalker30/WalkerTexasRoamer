import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './app/pictures/pictures.component.html',
    styleUrls: ['./app/pictures/pictures.component.css']
})
export class PicturesComponent implements OnInit, AfterViewInit {
    public readonly CLASS_NAME: string = "PicturesComponent";
    public title = 'app';

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
    }
}