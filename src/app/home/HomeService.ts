import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ResponseParser} from '../plugins/helpers/response-parser.service';

@Injectable()
export class HomeService
{
  baseUrl: string = environment.mainApiUrl;

  constructor(
    private _http: HttpClient,
    protected _responseParser: ResponseParser
  )
  {
  }

  getSpeakers()
  {
    return this._http.get(`${this.baseUrl}speakers`).pipe(
      map((response: any) => {
        return response.collection;
      }),
      catchError((e: any) => throwError(this._responseParser.parseError(e)))
    );
  }

  getDescription(url:string){
    return this._http.get(url,{responseType: 'text'})
  }
  getSessions(url:string){
    return this._http.get(url).pipe(
      map((response: any) => {
        return response.collection;
      }),
      catchError((e: any) => throwError(this._responseParser.parseError(e)))
    );
  }
}
