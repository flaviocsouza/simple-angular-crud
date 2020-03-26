import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from './user.model'


@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  protected UrlService: string = `http://localhost:3000`

  listUsers() :Observable<User[]>{
    return this.http.get<User[]>(`${this.UrlService}/users`);
  }
  
}
