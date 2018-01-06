import { Injectable } from '@angular/core';

@Injectable()
export class RatingsService {
    public readonly CLASS_NAME: string = "RatingsService";

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

}