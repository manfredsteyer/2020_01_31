import { Action, createReducer, on } from '@ngrx/store';
import * as FlightBookingActions from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-api';
import { mutableOn } from 'ngrx-etc';

export const flightBookingFeatureKey = 'flightBooking';

export interface FlightBookingAppState {
  [flightBookingFeatureKey]: FlightBookingState;
}

export interface FlightBookingState {
  flights: Flight[];
  basket: object;
  stats: object;
  blackList: number[];
}

export const initialState: FlightBookingState = {
  flights: [],
  basket: {},
  stats: {},
  blackList: []
};

const _flightBookingReducer = createReducer(
  initialState,

  mutableOn(FlightBookingActions.flightsLoaded, (state, action) => {
    const flights = action.flights;
    state.flights = flights;
  }),

  mutableOn(FlightBookingActions.flightUpdated, (state, action) => {
    const flightToUpdate = action.flight;

    const currentFlights = state.flights;
    const newFlights = currentFlights.map(f => f.id === flightToUpdate.id ? flightToUpdate : f );

    state.flights = newFlights;
  }),


);

export function flightBookingReducer(state: FlightBookingState | undefined, action: Action) {
  return _flightBookingReducer(state, action);
}
