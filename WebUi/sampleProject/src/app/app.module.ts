import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RegistComponent } from './regist/regist.component';
import { ListComponent } from './list/list01/list.component';
import { AgGridModule } from 'ag-grid-angular';
import { ListRoutingModule } from './list/list-routing.module';
import { List02Component } from './list/list02/list02.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RegistComponent,
    ListComponent,
    List02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    ListRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
