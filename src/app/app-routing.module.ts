import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './home/page1.component';
import { Page2Component } from './sports/page2.component';
import { Page3Component } from './paris/page3.component';
import { Page4Component } from './profil/page4.component';
import { Page5Component } from './salons/page5.component';
import { PariValideComponent } from './pari-valide/pari-valide.component';

const routes: Routes = [
  {path: 'home', component: Page1Component}, 
  {path: 'sports', component: Page2Component},
  {path: 'profil', component: Page4Component},
  {path: 'paris', component: Page3Component},
  {path: 'salons', component:Page5Component},
  {path: 'pariValide', component: PariValideComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
