import { Component, OnInit } from '@angular/core';


import {RestApiService} from "../rest-api.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  restApi:RestApiService = new RestApiService(this.http,this.router);
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {


  }

  logOut(){

    this.restApi.logout();
  }


}
