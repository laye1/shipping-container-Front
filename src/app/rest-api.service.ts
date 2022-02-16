import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Shipping} from "./shipping";
import {Observable} from "rxjs";
import {User} from "./user";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {ListShipping} from "./list-shipping";



@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public email: String='';
  public password: String='';

  private  registerShipURL = "http://localhost:5000/api/ship/register";

  private  registerURL = "http://localhost:5000/api/register";
  private  shipsUrl = "http://localhost:5000/api/ship";


  private  costURL = "http://localhost:8081";
  private  shipAdminUrl = "http://localhost:5000/api/admin/ship";



  constructor( private http:HttpClient,private router:Router) {}

  createdShip(shipping: Shipping):Observable<Object> {
   return  this.http.post(`${this.registerShipURL}`, shipping);
  }

  userRegister(user: User):Observable<Object> {
    return  this.http.post(`${this.registerURL}`, user);
  }

  public login(email: string, password: string){

    return this.http.get(`http://localhost:5000`,
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

  public  getShipping():Observable<ListShipping[]>{

    return this.http.get<ListShipping[]>(`${this.shipsUrl}`);

  }

  getShipById(id:number):Observable<Shipping>{

    return this.http.get<Shipping>(`${this.shipAdminUrl}/${id}`);

  }

  updateShip(id:number,shipping: Shipping):Observable<Object> {
    return  this.http.put(`${this.shipAdminUrl}/${id}`, shipping);
  }

  deleteShip(id:number):Observable<Object>{

    return this.http.delete(`${this.shipAdminUrl}/${id}`);

  }


}
