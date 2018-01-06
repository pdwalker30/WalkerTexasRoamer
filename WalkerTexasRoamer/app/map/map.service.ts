import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
    public readonly CLASS_NAME: string = "MapService";

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

}