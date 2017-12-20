import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../services/log-in.service';
import {HttpClientModule } from "@angular/common/http";
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LogInService,private httpClient: HttpClient) { 
    
  }
  checkUsernameAndPAssword(userName: string,password: string): boolean{
    return this.loginService.checkUserNameAndPassword(userName,password);
  }
  ngOnInit() {
  }

}

