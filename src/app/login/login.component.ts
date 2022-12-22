import { Router, RouterModule } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  uname=""
  pswd=""
  errorMsg=""

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
 

  login(){
   if(this.uname.trim().length==0){
    this.errorMsg="Username is Required"
   }else if(this.pswd.trim().length==0){
    this.errorMsg="Password is Required"
   }else{
    this.errorMsg=""
    let res=this.auth.login(this.uname,this.pswd)
    if(res==200){
      this.router.navigateByUrl('home')
    }else{
     this.errorMsg="Inavlid user"
    }
   }
  }
}
