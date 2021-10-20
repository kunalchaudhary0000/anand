import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';
import validatetoken from 'src/app/utils/ValidateToken';

import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login :any = {};
  error : any = {};
  constructor(private authService: AuthService , private router : Router) { }

  ngOnInit(): void{
  }
  loginSubmit(){
    console.log(this.login.email , this.login.password);
    this.authService.login(this.login.email , this.login.password).subscribe(

      (data) => {console.log(data.token)
        localStorage.setItem('token' , data.token)

        console.log(JSON.stringify(jwt_decode(data.token)));
      localStorage.setItem('userdetails', JSON.stringify(jwt_decode(data.token)));
      
      if(validatetoken()){
      this.router.navigate(['/dashboard/user-dashboard']); }
    
    },
    
      (err) => {
        this.error = err.error;
        console.log(this.error);
      });     
}
}
