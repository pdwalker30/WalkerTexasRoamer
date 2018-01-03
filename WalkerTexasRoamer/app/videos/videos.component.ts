import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './app/videos/videos.component.html',
    styleUrls: ['./app/videos/videos.component.css']
})
export class VideosComponent implements OnInit, AfterViewInit {
    public readonly CLASS_NAME: string = "VideosComponent";
    public title = 'app';

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
    }
}