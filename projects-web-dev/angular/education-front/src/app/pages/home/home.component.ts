import { Component, OnInit, Input } from '@angular/core';
import { CourseResponseType, CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courseService: CourseService;
  course: CourseResponseType;

  constructor() { }

  ngOnInit(): void {
  }

}
