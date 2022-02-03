import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Shipping} from "./shipping";
import {Observable} from "rxjs";
import {User} from "./user";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public email: String='';
  public password: String='';

private  shipURL = "http://localhost:5000/api/register/ship";
  private  shipURL1 = "http://localhost:8765/shipping-container/api/register/ship";
private  registerURL = "http://localhost:5000/api/register";
  private  registerURL1 = "http://localhost:8765/shipping-container/api/register";
private  loginURL ="http://localhost:5000/"
  private  loginURL1 ="http://localhost:8765/shipping-container/"
private  costURL = "http://localhost:8001/"


  constructor( private http:HttpClient,private router:Router) {}

  createdShip(shipping: Shipping):Observable<Object> {
   return  this.http.post(`${this.shipURL}`, shipping);
  }

  userRegister(user: User):Observable<Object> {
    return  this.http.post(`${this.registerURL}`, user);
  }

  public login(email: string, password: string){

    return this.http.get(`http://localhost:5000/`,
      { headers: { authorization: this.createBasicAuthToken(email, password) },responseType: 'text' as 'json'}).pipe(map((res) => {
      this.email = email;
      this.password = password;
      this.registerSuccessfulLogin(email, password);
    }));


  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(email: string , password: string) {


    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.email = '';
    this.password ='';
    this.router.navigate(["login"]);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }

  public getCost():Observable<String[]>{

    return this.http.get<String[]>(`${this.costURL}`);
  }


}
