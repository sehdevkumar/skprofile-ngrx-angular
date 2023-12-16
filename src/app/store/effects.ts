import { Injectable, effect, inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { applicationsActions } from './actions'
import { Observable, catchError, map, mergeMap, of, switchMap } from 'rxjs'
import { GitService } from '../services/git.service'

@Injectable()
export class ApplicationEffects {
  constructor(private actions$: Actions) {}

  gitService = inject(GitService);

  gitHubRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(applicationsActions['[Git]RequestGit']),
      switchMap(() => {
        return this.gitService?.fetchUserGitDetails().pipe(
          map(
            (response) =>
              applicationsActions['[Git]SuccessGit']({
                gitResponse:response?.body,
              }),
            catchError(async (e) =>
              applicationsActions['[Git]FailedGit']({
                error: e,
              }),
            ),
          ),
        )
      }),
    )
  })



}
