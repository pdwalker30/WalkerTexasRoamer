import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
    selector: 'navbar-component',
    templateUrl: './app/navbar/navbar.component.html',
    styleUrls: ['./app/navbar/navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
    public readonly CLASS_NAME: string = "NavbarComponent";    

    private router: Router;
    private showMobileNav: boolean = false;

    constructor(router: Router) {
        console.log(`${this.CLASS_NAME}.ctor`);

        this.router = router;
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
    }

    public navigateTo(route: string) {

        if (this.showMobileNav) {
            this.showMobileNav = false;
        }

        this.router.navigate([route]);
    }
}