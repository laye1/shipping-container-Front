import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Shipping} from "./shipping";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

private  baseURL = "http://localhost:8080/api/register";

  constructor( private http:HttpClient) {}

  createdShip(shipping: Shipping):Observable<Object> {
   return  this.http.post(`${this.baseURL}`, shipping);
  }
}
