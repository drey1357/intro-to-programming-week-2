import { createActionGroup, props } from '@ngrx/store';

export const ApplicationEvents = createActionGroup({
  source: 'Application',
  events: {
    error: props<ApplicationErrorData>(),
  },
});


type ApplicationErrorData = {
  source: string;
  message: string;
  payload: unknown;
};