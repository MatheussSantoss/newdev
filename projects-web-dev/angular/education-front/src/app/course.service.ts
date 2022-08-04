import { Injectable } from '@angular/core';

export type lessonType = {
  id: number;
  title: string;
  videoId: string;
  description: string;
};

export type CourseResponseType = {
  title: string;
  description: string,
  lessons: lessonType[];
}

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor() { }

  async getCourseById(id: number): Promise<CourseResponseType>{
    const response = await 
    fetch(`http://localhost:5445/courses/${id}`);

    const data = await response.json() as CourseResponseType;

    return data;
  }

  async getCourses(){
    const response = await fetch(`http://localhost:5445/courses`);
    const data = await response.json() as CourseResponseType;
    return data;
  }
}