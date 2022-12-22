import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  login(uname:string,pswd:string){
    if(uname=='shafeel' && pswd=='1234' ){
      return 200;
    }else{
      return 403;
    }
  }
  logout(){
    this.router.navigateByUrl('login')
  }
}
