import { Injectable } from '@angular/core';

@Injectable()
export class PicturesService {
    public readonly CLASS_NAME: string = "PicturesService";

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

}