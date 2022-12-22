import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
  goToHome(){
    // alert("clicked")
    this.router.navigateByUrl('home')
  }
  logout(){
    this.auth.logout()
  }
}
