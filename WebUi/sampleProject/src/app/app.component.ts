import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sampleProject';

  private url = 'http://localhost:8080/';
  //private url = 'assets/test.json';
  public result: String;
  public resultUser: User;
  public errorMessage: string;

  constructor(private http: HttpClient, private router: Router) {
    this.resultUser = new User();
    this.resultUser.name = '_';
  }

  ngOnInit():void {
    //this.router.navigate(['login']);
  }

  public findAll() {
    console.log("test", this.url)
    this.http.get<User>(this.url).subscribe({
    //this.http.get<String>(this.url).subscribe({
      next: data=> {
        //this.result = data;
        this.resultUser = data[0];
        console.log('Get data:', this.resultUser);
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error)
      }
    })
  }

  // public findAll(): Observable<User[]> {
  //   console.log("test", this.url)
  //   return this.http.get<User[]>(this.url);
  // }
}

export class User {
    public id: string;
    public name: string;
    public email: string;
}
