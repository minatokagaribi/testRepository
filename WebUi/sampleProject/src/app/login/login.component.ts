import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.http.get<User>(this.url).subscribe({
      next: data => {
        this.resultUser = data[0];
        const param = {
          loginId: this.loginId,
          name: this.resultUser.name
        }
        this.router.navigate(['home', param]);
      },
      error: error => {

      }
    })
  }

}

export class User {
  public id: string;
  public name: string;
  public email: string;
}
