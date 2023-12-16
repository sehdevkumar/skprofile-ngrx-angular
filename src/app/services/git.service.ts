import { Injectable, inject } from '@angular/core'
import { HttpclientService } from './httpclient.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class GitService {
  httpService = inject(HttpclientService)

  constructor() {}

  fetchUserGitDetails(): Observable<any> {
    return this.httpService.request(
      'get',
      'https://api.github.com/users/sehdevkumar',
    )
  }
}
