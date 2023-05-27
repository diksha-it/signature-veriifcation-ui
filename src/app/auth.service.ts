import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: string="";
  public password: string="";
  baseUrl:string="http://localhost:2222/api/v1/"
  constructor(private http: HttpClient) {

  }

  authenticationService(username: string, password: string) {
    return this.http.get(this.baseUrl+'basicauth',
      { headers: { authorization: this.createBasicAuthToken(username+':'+password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: string) {
    return 'Basic ' + window.btoa(username)
  }

  registerSuccessfulLogin(username:string, password:string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username + ":" + password);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = "";
    this.password = "";
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() :string{
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }

  getEvenSourceDetails():Observable<any>{
    return this.http.get<any>(this.baseUrl+'verify-count' ,
    { headers: { authorization: this.createBasicAuthToken(this.getLoggedInUserName()) } });  
  }

}