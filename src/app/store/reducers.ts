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

    on(applicationsActions['[Git]RequestGit'], (state) => {
      return {
        ...state,
      }
    }),

    on(applicationsActions['[Git]SuccessGit'], (state, { gitResponse }) => {
      return {
        ...state,
        gitResponse,
      }
    }),

    on(applicationsActions['[Git]FailedGit'], (state, { error }) => {
      return {
        ...state,
        error,
      }
    }),

    on(applicationsActions['[Project]Request'], (state) => {
      return {
        ...state,
      }
    }),

    on(
      applicationsActions['[Project]Success'],
      (state, { projectResponse }) => {
        return {
          ...state,
          projectResponse,
        }
      },
    ),

    on(applicationsActions['[Project]Failed'], (state, { error }) => {
      return {
        ...state,
        error,
      }
    }),
     on(applicationsActions['[Blog]Request'], (state) => {
      return {
        ...state,
      }
    }),

    on(
      applicationsActions['[Blog]Success'],
      (state, { blogResponse }) => {
        return {
          ...state,
          blogResponse,
        }
      },
    ),

    on(applicationsActions['[Blog]Failed'], (state, { error }) => {
      return {
        ...state,
        error,
      }
    }),
  ),
})

export const {
  name: applicationFeatureKey,
  reducer: applicationReducer,
  selectEvent,
  selectError,
  selectGitResponse,
  selectProjectResponse,
  selectBlogResponse,
} = applicationReducerFeature
