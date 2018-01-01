import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventDispatcherService } from './utilities/event-dispatcher.service';


@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    public readonly CLASS_NAME: string = 'AppComponenet';
    public title = 'app';
    private eventService: EventDispatcherService;

    constructor(evenDispatcherSVC:EventDispatcherService

    ) {
        console.log(`${this.CLASS_NAME}.ctor`);
        this.eventService = evenDispatcherSVC;
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        this.eventService.dispatchEvent("appReady");
    }
}