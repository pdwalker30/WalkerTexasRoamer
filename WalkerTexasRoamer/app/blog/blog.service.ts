import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
    public readonly CLASS_NAME: string = "BlogService";

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

}