import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface VideoItem {
  url: string;
  index: number;
}

@Component({
  selector: 'app-videos',
  imports: [CommonModule],
  templateUrl: './videos.html',
  styleUrl: './videos.scss'
})
export class Videos implements OnInit {
  selectedVideoIndex = signal<number | null>(null);
  videos: VideoItem[] = [];
  
  private videoUrls = [
    'https://postclarityvideos.blob.core.windows.net/videos/video-1.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-2.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-3.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-4.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-5.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-6.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-7.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-8.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-9.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-10.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-11.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-12.mp4',
    'https://postclarityvideos.blob.core.windows.net/videos/video-13.mp4'
  ];
  
  ngOnInit() {
    this.videos = this.videoUrls.map((url, index) => ({
      url,
      index
    }));
  }
  
  openVideo(index: number) {
    this.selectedVideoIndex.set(index);
  }
  
  closeVideo() {
    this.selectedVideoIndex.set(null);
  }
  
  nextVideo() {
    const current = this.selectedVideoIndex();
    if (current !== null && current < this.videos.length - 1) {
      this.selectedVideoIndex.set(current + 1);
    }
  }
  
  previousVideo() {
    const current = this.selectedVideoIndex();
    if (current !== null && current > 0) {
      this.selectedVideoIndex.set(current - 1);
    }
  }
}
