import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const myRoute : Routes = [
  {
    path : "",
    component : AddcourseComponent
  },
  {
    path : "addcourse",
    component : ViewCourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    NavbarComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
