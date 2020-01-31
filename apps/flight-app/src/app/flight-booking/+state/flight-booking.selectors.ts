import { flightBookingFeatureKey, FlightBookingAppState, FlightBookingState } from './flight-booking.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import * as fromFlightBooking from './flight-booking.reducer';

// export const selectFlightBookingState = createFeatureSelector<fromFlightBooking.FlightBookingState>(
//   fromFlightBooking.flightBookingFeatureKey
// );


export const flightsSelector = 
 (appState: FlightBookingAppState) => appState[flightBookingFeatureKey].flights

export const flightsSelector2 = createSelector(
  (appState: FlightBookingAppState)  => appState[flightBookingFeatureKey],
  (flightBookingState) => flightBookingState.flights
);

export const flightsSelector3 = createSelector(
  (appState: FlightBookingAppState)  => appState[flightBookingFeatureKey].flights,
  (appState: FlightBookingAppState)  => appState[flightBookingFeatureKey].blackList,
  (flights, blackList) => flights.filter(f => !blackList.includes(f.id))
);

export const flightBookingSelector = createFeatureSelector<FlightBookingState>(flightBookingFeatureKey);

export const flightsSelector4 = createSelector(
  flightBookingSelector,
  (flightBookingState) => flightBookingState.flights
);
