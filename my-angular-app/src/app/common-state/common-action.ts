import { createAction, props } from "@ngrx/store";

 export const loadDataSuccess = createAction(
      '[Data] Load Data Success',
      props<{ data: any[] }>()
    );