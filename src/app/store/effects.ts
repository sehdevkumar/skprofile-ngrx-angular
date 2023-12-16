import { Injectable, effect } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { applicationsActions } from './actions'
import { Observable, catchError, mergeMap, of, switchMap } from 'rxjs'

@Injectable()
export class ApplicationEffects {
  constructor(private actions$: Actions) {}

  gitHubRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(applicationsActions['[Git]RequestGit']),
      switchMap(() => of()),
      catchError(()=> of())
    ) as Observable<any>
  })
}
