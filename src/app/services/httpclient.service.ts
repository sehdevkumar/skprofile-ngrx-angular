import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { EventType } from '@angular/router'
import { Observable, filter, map } from 'rxjs'

interface BodyPayload {
  [key: string]: number | string | Array<string> | Array<number> | any
}

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  private baseUrl = 'http://192.168.1.54:4300'
  constructor(private http: HttpClient) {}

  request(
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | any,
    fullUrl?: string,
    url?: string | any,
    param?: HttpParams | null | undefined | any,
    body?: BodyPayload,
    headers?: HttpHeaders,
  ): Observable<HttpResponse<any | unknown>> {
    const processedUrl = fullUrl ? fullUrl ?? '' : `${this.baseUrl}/${url}`

    //  tslint:disable-next-line:prefer-const
    let httpReq = this.http.request(
      new HttpRequest(method, processedUrl, body, {
        reportProgress: true,
        params: param,
        headers,
        responseType: 'json',
        withCredentials: false,
      }),
    )

    return httpReq.pipe(
      filter((event) => event.type === HttpEventType.Response),
      // map((event: HttpResponse<any>) => event),
    ) as Observable<HttpResponse<any>>
  }
}
