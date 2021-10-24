import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginId: String;
  public name: String;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.loginId = '';
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.loginId = params.get('loginId');
      this.name = params.get('name');
    })
  }

  public back(): void {
    this.router.navigate(['login']);
  }

}
