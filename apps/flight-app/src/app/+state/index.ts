import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';



export interface State {

}

export const reducers: ActionReducerMap<State> = {
  // "currUser": rFunc
};


// function loggingMetaReducer(r) {
//   return (state, action) => {
//     if (state && action) {
//      console.debug('state+action', state, action);
//     }
//     return r();
//   }
// }

export const metaReducers: MetaReducer<State>[] = [
  //loggingMetaReducer
];
  