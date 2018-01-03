import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './app/blog/blog.component.html',
    styleUrls: ['./app/blog/blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit {
    public readonly CLASS_NAME: string = "BlogComponent";

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
    }
}