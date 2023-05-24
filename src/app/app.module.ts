import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './common/header/header';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer';
import { AppRoutingModule } from './app-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import {MatCardModule} from '@angular/material/card';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
