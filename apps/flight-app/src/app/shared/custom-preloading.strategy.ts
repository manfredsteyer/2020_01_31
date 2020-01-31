

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CustomPreloadingStrategy implements PreloadingStrategy {
    constructor() { }

    
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        
        
        return fn();

    }


}