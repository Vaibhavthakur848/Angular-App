// counter.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './common-state';

// Select the 'counter' feature state
export const selectCounterState = createFeatureSelector<AppState, { counter: number }>('counter');

// Select the 'count' property from the counter state
export const selectCount = createSelector(
  selectCounterState,
  (state) => state.counter
);

// Derive a new value (e.g., check if count is even)
export const selectIsCountEven = createSelector(
  selectCount,
  (count) => count % 2 === 0
);