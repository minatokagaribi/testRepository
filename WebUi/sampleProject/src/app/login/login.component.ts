import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginData } from './login.data';
import { loginInputData } from './login.inputData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginId: String;
  public password: String;
  public name: string;
  public resultUser: User;
  private url = 'http://localhost:8080/login';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginId = '';
    this.password = '';
  }

  

  public login(): void {
    this.getUserName();

    console.log(this.loginId, this.password);
    
  }

  private getUserName() {
    let inputData = new loginInputData;
    let data = new loginData;
    data.loginId = this.loginId;
    data.password = this.password;

    inputData.loginData = data;

    this.http.post<User>(this.url, data).subscribe({
      next: data => {
        const param = {
          loginId: this.loginId,
          name: data.loginNm
        }
        this.router.navigate(['home', param]);
      },
      error: error => {

      }
    })
  }

}

export class User {
  public loginId: string;
  public loginNm: string;
  public email: string;
}
