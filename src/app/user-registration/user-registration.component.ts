import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {RestApiService} from "../rest-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  //form:User;


  user:User = new User();
  constructor(private restApiService:RestApiService,  private route:Router) {}

  ngOnInit(): void {
  }

  saveUser(){
    this.restApiService.userRegister(this.user).subscribe(data =>{
        console.log(data);
        alert("Registration successful, please the link in your  mail to confirm your registration");


      },
      err => {

        alert("error");

      });


  }

  onSubmit() {
  this.saveUser();

  }



}
