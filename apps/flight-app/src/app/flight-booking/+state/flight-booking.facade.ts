
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight, FlightService } from '@flight-workspace/flight-api';
import { FlightBookingAppState, flightBookingFeatureKey } from './flight-booking.reducer';
import { Store } from '@ngrx/store';
import { flightsLoaded, loadFlights } from './flight-booking.actions';
import { flightsSelector } from './flight-booking.selectors';

@Injectable({providedIn: 'root'})
export class FlightBookingFacade {
    
    flights$ = this.store.select(flightsSelector);

    constructor(
        private store: Store<FlightBookingAppState>,
        ) { }

    find(from: string, to: string, urgent: boolean): void {
        this.store.dispatch(loadFlights({from, to, urgent}));
    }

}