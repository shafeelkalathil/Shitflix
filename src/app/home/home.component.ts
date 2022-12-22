import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
trendingMovies:any
theatreMovies:any
popularMovies:any
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getTrendingMovies(),
    this.getTheatreMovies(),
    this.getPopularMovies()
  }
  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movie)=>{
        this.trendingMovies=movie
        console.log(this.trendingMovies)
    })
  }
  getTheatreMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json')
    .subscribe((movie)=>{
        this.theatreMovies=movie
        console.log(this.theatreMovies)
    })
  }
  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json')
    .subscribe((movie)=>{
        this.popularMovies=movie
        console.log(this.popularMovies)
    })
  }
  goToMovie(type:string,id:string){
     this.router.navigate(['movie',type,id])
  }
}
