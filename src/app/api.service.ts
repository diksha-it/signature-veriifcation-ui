import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  baseUrl:string="http://localhost:2222/"

  getEvenSourceDetails():Observable<any>{
    return this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular');   
  }

  getUserDetails():Observable<any>{
    return this.http.get<any>(this.baseUrl+'fetch-user');   
  }
}