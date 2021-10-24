import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registData } from './regist.data';
import { registInputData } from './regist.inputdata';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  public userId: string;
  public userName: string;
  public password: string;
  public url: string;
  public registFlg: boolean;

  constructor(private router: Router, private http: HttpClient) {
    this.userId = '';
    this.userName = '';
    this.password = '';
    this.registFlg = false;
   }

  ngOnInit(): void {
  }

  public regist(): void {
    this.url = 'http://localhost:8080/regist';

    let rData = new registInputData;
    let data = new registData;
    data.id = this.userId;
    data.name = this.userName;
    data.email = '';
    rData.data = data;
    console.log(rData);
    this.http.post<registData>(this.url, data).subscribe({
      next: data => {
        const responseData = data;
        this.registFlg = true;
      }
    })
  }

}
