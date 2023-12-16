import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { GitHubUser } from '../typings/api-typings'

export const applicationsActions = createActionGroup({
  source: 'Main Store',
  events: {
    '[window:resize] ': props<{event:Window}>(),

    // Git Hub Actions
    '[Git] Request Git':emptyProps(),
    '[Git] Success Git': props<{gitResponse: GitHubUser}>(),
    '[Git] Failed Git':props<{error:any}>()


  },
})
