import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.html',
  styleUrl: './videos.scss'
})
export class Videos implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngAfterViewInit() {
    // Load Instagram embed script
    if (isPlatformBrowser(this.platformId)) {
      if (!(window as any).instgrm) {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      } else {
        (window as any).instgrm.Embeds.process();
      }
    }
  }
}
