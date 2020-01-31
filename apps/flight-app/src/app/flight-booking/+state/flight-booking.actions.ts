import { createAction, props } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export const loadFlights = createAction(
  '[FlightBooking] loadFlights',
  props<{ from: string, to: string, urgent: boolean }>()
);


export const flightsLoaded = createAction(
  '[FlightBooking] FlightsLoaded',
  props<{ flights: Flight[] }>()
);

export const flightUpdated = createAction(
  '[FlightBooking] FlightUpdated',
  props<{ flight: Flight }>()
);



