    import { createReducer, on } from '@ngrx/store';
    import { loadDataSuccess } from './common-action';
    import { initialState } from './common-state';

    export const counterReducer = createReducer(
      initialState,
      on(loadDataSuccess, (state) => ({ ...state, counter: state.counter + 1 })),
    );