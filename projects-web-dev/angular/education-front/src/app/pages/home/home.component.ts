import { Component, OnInit} from '@angular/core';
import { CourseResponseType, CourseService} from 'src/app/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courseService: CourseService;
  courses?: any;
  course: any;

  constructor(courseService: CourseService) {
    this.courseService = courseService;
    this.courses = {} as CourseResponseType;
   }

   async ngOnInit(): Promise<void> {
    this.courses = await this.courseService.getCourses();
    console.log('course home -> ', this.courses);
  }
}
