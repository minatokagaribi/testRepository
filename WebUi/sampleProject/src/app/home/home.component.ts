import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    this.loginId = '';
   }

  public loginId: String;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.loginId = params.get('loginId');
    })
  }

  public back(): void {
    this.router.navigate(['login']);
  }

  public regist(): void {
    this.router.navigate(['regist']);
  }

  public list(): void {
    this.router.navigate(['list']);
  }

}
