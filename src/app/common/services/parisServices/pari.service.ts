import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Injectable()
export class PariService {

  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_PARI = "/paris"

  constructor( private httpClient: HttpClient) { 


  }


getParis(): Observable<any> {
  return this.httpClient.get(this.API_URL + this.ENDPOINT_PARI)
}

}
