import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: "book",
    component:BookComponent
  },
  {
    path: "about",
    component:AboutComponent
  },
  {
    path: "contact",
    component:ContactComponent
  },

  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
