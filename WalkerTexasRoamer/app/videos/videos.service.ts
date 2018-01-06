import { Injectable } from '@angular/core';

@Injectable()
export class VideosService {
    public readonly CLASS_NAME: string = "VideosService";

    constructor() {
        console.log(`${this.CLASS_NAME}.ctor`);
    }

}