import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface MediaVideoItem {
  url: string;
  poster: string;
  index: number;
}

interface AudioClip {
  title: string;
  url: string;
  note?: string;
}

interface FeaturedMediaEmbed {
  title: string;
  url: SafeResourceUrl;
}

@Component({
  selector: 'app-media',
  imports: [CommonModule],
  templateUrl: './media.html',
  styleUrl: './media.scss'
})
export class Media implements OnInit {
  selectedMediaIndex = signal<number | null>(null);
  mediaVideos: MediaVideoItem[] = [];
  featuredMediaEmbeds: FeaturedMediaEmbed[] = [];
  audioClips: AudioClip[] = [
    {
      title: 'The Killers - Mr. Brightside',
      url: 'https://postclarityvideos.blob.core.windows.net/audio/Mr.Brightside'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.featuredMediaEmbeds = [
      {
        title: 'Post Clarity - Featured Video 1',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.youtube-nocookie.com/embed/AHosHYoy13E?rel=0&modestbranding=1'
        )
      },
      {
        title: 'Post Clarity - Featured Video 2',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.youtube-nocookie.com/embed/26nBHupxms0?rel=0&modestbranding=1'
        )
      }
    ];
  }
  
  private mediaVideoUrls = [
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
  
  ngOnInit(): void {
    this.mediaVideos = this.mediaVideoUrls.map((url, index) => ({
      url,
      poster: `/assets/images/video-thumbnails/video-${index + 1}.jpg`,
      index
    }));
  }
  
  openMediaVideo(index: number): void {
    this.selectedMediaIndex.set(index);
  }
  
  closeMediaVideo(): void {
    this.selectedMediaIndex.set(null);
  }
  
  nextMediaVideo(): void {
    const current = this.selectedMediaIndex();
    if (current !== null && current < this.mediaVideos.length - 1) {
      this.selectedMediaIndex.set(current + 1);
    }
  }
  
  previousMediaVideo(): void {
    const current = this.selectedMediaIndex();
    if (current !== null && current > 0) {
      this.selectedMediaIndex.set(current - 1);
    }
  }
}
