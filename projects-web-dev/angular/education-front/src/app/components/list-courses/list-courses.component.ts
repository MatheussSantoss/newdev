import { Component, OnInit, Input } from '@angular/core';
import { lessonType } from 'src/app/course.service';
import { LessonResponseType, LessonService } from 'src/app/lesson.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  @Input () titleParam: any;
  @Input () descriptionParam: any;
  @Input () courseParam: any;

  constructor() {
   }

  ngOnInit(): void {
    console.log('course list  ->', this.titleParam)
  }

}
