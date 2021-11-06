import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list01/list.component';
import { List02Component } from './list/list02/list02.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'regist', component: RegistComponent},
  {path: 'list', component: ListComponent},
  {path: 'list/detail', component: List02Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
