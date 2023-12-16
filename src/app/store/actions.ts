import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const applicationsActions = createActionGroup({
  source: 'Main Store',
  events: {
    '[window:resize] ': props<{event:Window}>(),

    // Git Hub Actions
    '[Git] Request Git':emptyProps(),
    '[Git] Success Git': props<{gitResponse: any}>(),
    '[Git] Failed Git':props<{error:any}>()


  },
})
