import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName: string = 'Matheuzin';
  subtitle: string = 'subtitulo';
  bio: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quidem modi minima, aut voluptate possimus saepe consequatur, ea suscipit ullam vitae magni officia delectus cupiditate nihil quod dolores. Vel, voluptas.';
  link1: string = 'https://google.com';
  link2: string = 'https://youtube.com';
}
