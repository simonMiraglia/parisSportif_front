import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './common/header/header';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer';
import { AppRoutingModule } from './app-routing.module';
import { Page1Component } from './home/page1.component';
import { Page2Component } from './sports/page2.component';
import { Page3Component } from './paris/page3.component';
import {MatCardModule} from '@angular/material/card';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Page4Component } from './profil/page4.component';
import { Page5Component } from './salons/page5.component';
import { MatTreeModule } from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PariValideComponent } from './pari-valide/pari-valide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    PariValideComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatTreeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

