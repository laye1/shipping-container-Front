import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {RestApiService} from "./rest-api.service";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService:RestApiService,private router:Router
  ) { }


  // @ts-ignore
  canActivate(
    route : ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean  {

    if(this.authService.isUserLoggedIn()){
      return true;
    }
    else{

      this.router.navigate([this.log()]);
      return false;


    }



  }

  log(){
    alert("please log in");

  }
}
