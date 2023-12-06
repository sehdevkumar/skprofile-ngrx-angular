import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const applicationsActions = createActionGroup({
  source: 'Main Store',
  events: {
    '[window:resize] ': props<{event:Window}>()
  },
})
