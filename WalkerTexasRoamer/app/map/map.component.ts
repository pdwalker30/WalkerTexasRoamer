import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './app/map/map.component.html',
    styleUrls: ['./app/map/map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
    public readonly CLASS_NAME: string = "MapComponent";
    

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
    }
}