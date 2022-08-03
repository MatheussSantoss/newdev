import { Injectable } from '@angular/core';

export type InstructorType = {
  avatarUrl: string;
  fullName: string;
}

export type LessonResponseType = {
  id: number;
  title: string;
  description: string;
  videoId: string;
  instructor: InstructorType;
}

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  async getLessonById(id: number): Promise<LessonResponseType> {
    const response = await fetch(`http://localhost:5445/lessons/${id}`);

    const data = await response.json() as LessonResponseType;
  
    return data;
  }
}
