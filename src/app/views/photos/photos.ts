import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  imports: [CommonModule],
  templateUrl: './photos.html',
  styleUrl: './photos.scss'
})
export class Photos {
  selectedPhotoIndex = signal<number | null>(null);
  
  photos = [
    '/assets/images/band/14BFDE2D-F125-4C4E-AB61-BAF7A205AB29.jpeg.optimized.jpg',
    '/assets/images/band/1A687067-1C96-4F22-BC0A-099A81A01977.jpeg.optimized.jpg',
    '/assets/images/band/A7400065-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7400116-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409393-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409406-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409435-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409483-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409540-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409631-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409696-Enhanced-NR_Original.JPG.optimized.jpg',
    '/assets/images/band/A7409910-Enhanced-NR_Original.JPG.optimized.jpg',
    '/assets/images/band/A7409926-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409932-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409938-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409990-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/DSC07576.jpeg.optimized.jpg',
    '/assets/images/band/DSC07635.jpeg.optimized.jpg',
    '/assets/images/band/DSC07670.jpeg.optimized.jpg',
    '/assets/images/band/DSC07726.jpeg.optimized.jpg',
    '/assets/images/band/DSC07729.jpeg.optimized.jpg',
    '/assets/images/band/DSC07797.jpeg.optimized.jpg',
    '/assets/images/band/DSC_0145_VSCO.jpg.optimized.jpg',
    '/assets/images/band/DSC_0249.jpeg.optimized.jpg',
    '/assets/images/band/DSC_0910_Original.JPG.optimized.jpg',
    '/assets/images/band/IMG_1382_Original.JPG.optimized.jpg',
    '/assets/images/band/IMG_5472_VSCO.jpg.optimized.jpg',
    '/assets/images/band/IMG_8707.jpeg.optimized.jpg'
  ];
  
  openLightbox(index: number) {
    this.selectedPhotoIndex.set(index);
  }
  
  closeLightbox() {
    this.selectedPhotoIndex.set(null);
  }
  
  nextPhoto() {
    const current = this.selectedPhotoIndex();
    if (current !== null && current < this.photos.length - 1) {
      this.selectedPhotoIndex.set(current + 1);
    }
  }
  
  previousPhoto() {
    const current = this.selectedPhotoIndex();
    if (current !== null && current > 0) {
      this.selectedPhotoIndex.set(current - 1);
    }
  }
}
