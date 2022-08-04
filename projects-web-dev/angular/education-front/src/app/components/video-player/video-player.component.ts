import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input () videoId?: string;

  urlVideo?: string;
  constructor() { }

  ngOnInit(): void {
    this.urlVideo = `https://www.youtube.com/embed/${this.videoId}`;
  }

}
