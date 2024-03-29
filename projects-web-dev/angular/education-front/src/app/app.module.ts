import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './pages/course/course.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { RoomComponent } from './components/room/room.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VimeModule } from '@vime/angular';
import { WelcomeRoomComponent } from './components/welcome-room/welcome-room.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    LogoComponent,
    LessonComponent,
    RoomComponent,
    SidebarComponent,
    WelcomeRoomComponent,
    VideoPlayerComponent,
    HomeComponent,
    ListCoursesComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
