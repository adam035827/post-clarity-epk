import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-press',
  imports: [],
  templateUrl: './press.html',
  styleUrl: './press.scss'
})
export class Press {
  // Select photos for press kit (first 4)
  pressPhotos = [
    '/assets/images/band/A7400116-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409483-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/A7409926-Enhanced-NR.jpeg.optimized.jpg',
    '/assets/images/band/IMG_5472_VSCO.jpg.optimized.jpg'
  ];

  async downloadPressKit() {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      let yPosition = margin;

      // Title
      pdf.setFontSize(28);
      pdf.setTextColor(95, 212, 209); // teal
      pdf.text('POST CLARITY', margin, yPosition);
      yPosition += 12;

      // Subtitle
      pdf.setFontSize(12);
      pdf.setTextColor(200, 200, 200);
      pdf.text('Press Kit', margin, yPosition);
      yPosition += 8;

      // Date
      pdf.setFontSize(9);
      pdf.text(`Generated: ${new Date().toLocaleDateString()}`, margin, yPosition);
      yPosition += 12;

      // Divider
      pdf.setDrawColor(95, 212, 209);
      pdf.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 10;

      // Band Info Section
      pdf.setFontSize(14);
      pdf.setTextColor(95, 212, 209);
      pdf.text('Band Information', margin, yPosition);
      yPosition += 8;

      pdf.setFontSize(10);
      pdf.setTextColor(0, 0, 0);
      const bandInfo = [
        'Band Name: Post Clarity',
        'Genre: Pop, Punk, Pop Punk, Emo - 2000s to Current',
        'Location: Kansas City, Missouri',
        'Available For: Corporate Events, Weddings, Festivals, Private Parties',
        'Performance Length: 2-4 hour sets (customizable)',
        'Equipment: Full PA system and professional lighting available'
      ];

      bandInfo.forEach(info => {
        pdf.text(info, margin + 5, yPosition);
        yPosition += 6;
      });

      yPosition += 5;

      // Booking Info Section
      pdf.setFontSize(14);
      pdf.setTextColor(95, 212, 209);
      pdf.text('Booking Information', margin, yPosition);
      yPosition += 8;

      pdf.setFontSize(10);
      pdf.setTextColor(0, 0, 0);
      const bookingInfo = [
        'Corporate events and holiday parties',
        'Weddings and receptions',
        'Festivals and community events',
        'Private parties and celebrations',
        'Bar and restaurant entertainment',
        'Fundraisers and charity events'
      ];

      bookingInfo.forEach(item => {
        pdf.text('• ' + item, margin + 5, yPosition);
        yPosition += 6;
      });

      yPosition += 5;

      // Technical Info
      pdf.setFontSize(14);
      pdf.setTextColor(95, 212, 209);
      pdf.text('Technical Requirements', margin, yPosition);
      yPosition += 8;

      pdf.setFontSize(10);
      pdf.setTextColor(0, 0, 0);
      const techText = pdf.splitTextToSize(
        'We provide our own professional-grade sound system and lighting equipment. For larger venues, we can coordinate with in-house technical staff. Stage requirements and technical rider available upon request.',
        contentWidth - 10
      );
      pdf.text(techText, margin + 5, yPosition);
      yPosition += techText.length * 6 + 10;

      // Add new page for photos
      pdf.addPage();
      yPosition = margin;

      pdf.setFontSize(16);
      pdf.setTextColor(95, 212, 209);
      pdf.text('Performance Photos', margin, yPosition);
      yPosition += 12;

      // Add photos in 2x2 grid
      const photoWidth = (contentWidth - 5) / 2;
      const photoHeight = photoWidth * 1.33; // 3:4 aspect ratio

      for (let i = 0; i < this.pressPhotos.length; i++) {
        if (yPosition + photoHeight + 10 > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }

        const row = Math.floor(i / 2);
        const col = i % 2;
        const xPos = margin + (col * (photoWidth + 5));

        try {
          const img = await this.loadImage(this.pressPhotos[i]);
          pdf.addImage(img, 'JPEG', xPos, yPosition, photoWidth, photoHeight);
        } catch (error) {
          console.error('Error loading photo:', error);
        }

        if (col === 1) {
          yPosition += photoHeight + 5;
        }
      }

      // Contact page
      pdf.addPage();
      yPosition = margin;

      pdf.setFontSize(16);
      pdf.setTextColor(95, 212, 209);
      pdf.text('Contact Information', margin, yPosition);
      yPosition += 12;

      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Email: band@postclaritykc.com', margin, yPosition);
      yPosition += 8;
      pdf.text('Response Time: 24-48 hours', margin, yPosition);
      yPosition += 10;

      pdf.setFontSize(10);
      pdf.text('Connect With Us:', margin, yPosition);
      yPosition += 6;

      const socials = [
        'Instagram: @postclarity_kc',
        'Facebook: Post Clarity',
        'TikTok: @post_clarity_kc',
        'YouTube: Post Clarity'
      ];

      socials.forEach(social => {
        pdf.text(social, margin + 5, yPosition);
        yPosition += 6;
      });

      pdf.save('Post-Clarity-Press-Kit.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }

  private loadImage(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/jpeg'));
        } else {
          reject('Failed to get canvas context');
        }
      };
      img.onerror = () => reject('Failed to load image');
      img.src = url;
    });
  }
}
