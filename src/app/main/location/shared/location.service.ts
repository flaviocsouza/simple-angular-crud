import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Location } from './location.model'

@Injectable()
export class LocationService {

  constructor(private http:HttpClient) { }

  protected UrlService: string = `http://localhost:3000`

  ListLocations():Observable<Location[]>{
    return this.http.get<Location[]>(`${this.UrlService}/locations`)
  }

}
