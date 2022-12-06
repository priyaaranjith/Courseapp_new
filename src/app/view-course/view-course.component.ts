import { Component } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {

  data = {
    "Title" : "java",
    "Description": "java core",
    "Venue" : "online",
    "Duration":"1 month",
    "Date":"2022-01-02"

  }

}
