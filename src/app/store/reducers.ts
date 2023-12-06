import { createFeature, createReducer, on } from '@ngrx/store'
import { ApplicationState } from './state'
import { applicationsActions } from './actions'

const applicationReducerFeature = createFeature({
  name: 'applicationFeatureKey',
  reducer: createReducer(
    ApplicationState,
    on(applicationsActions['[window:resize]'], (state, { event }) => {
      return {
        ...state,
        event,
      }
    }),
  ),
})

export const {
  name: applicationFeatureKey,
  reducer: applicationReducer,
  selectEvent,
} = applicationReducerFeature
