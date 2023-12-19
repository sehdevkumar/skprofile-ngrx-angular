import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { GitHubUser, ProjectResponse } from '../typings/api-typings'

export const applicationsActions = createActionGroup({
  source: 'Main Store',
  events: {
    '[window:resize] ': props<{ event: Window }>(),

    // Git Hub Actions
    '[Git] Request Git': emptyProps(),
    '[Git] Success Git': props<{ gitResponse: GitHubUser }>(),
    '[Git] Failed Git': props<{ error: any }>(),

    // Project  Actions
    '[Project] Request': emptyProps(),
    '[Project] Success': props<{ projectResponse: ProjectResponse[] }>(),
    '[Project] Failed': props<{ error: any }>(),
  },
})
