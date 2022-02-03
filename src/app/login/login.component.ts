import { Component, OnInit } from '@angular/core';

import {RestApiService} from "../rest-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 email:string='';
 password:string='';
  returnUrl:String="http://localhost:4200/home";

  constructor(private service:RestApiService,private route:Router) { }



  ngOnInit(): void {
  }

  onSubmit() {
    this.doLogin();


  }

  doLogin(){
    let resp = this.service.login(this.email,this.password);

    resp.subscribe(data=>{
     console.log(data);
      this.route.navigate([this.returnUrl])
    },error => {
      alert("Username or Password incorrect!")
      }


      )


  }
}
