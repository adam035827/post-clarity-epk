import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Show {
  date: Date;
  month: string;
  day: string;
  venue: string;
  dayTime: string;
  location: string;
}

@Component({
  selector: 'app-shows',
  imports: [CommonModule],
  templateUrl: './shows.html',
  styleUrl: './shows.scss'
})
export class Shows {
  private allShows = signal<Show[]>([
    { date: new Date('2026-02-20T21:00:00'), month: 'FEB', day: '20', venue: 'Tin Roof - Kansas City', dayTime: 'Friday, 9:00 PM - 1:00 AM', location: '424 Westport Road, Kansas City, MO 64111' },
    { date: new Date('2026-02-21T21:00:00'), month: 'FEB', day: '21', venue: 'Tin Roof - Kansas City', dayTime: 'Saturday, 9:00 PM - 1:00 AM', location: '424 Westport Road, Kansas City, MO 64111' },
    { date: new Date('2026-03-28T21:00:00'), month: 'MAR', day: '28', venue: 'Nighthawk', dayTime: 'Saturday, 9:00 PM - 1:00 AM', location: '1228 Baltimore Ave, Kansas City, MO 64105' },
    { date: new Date('2026-05-23T21:00:00'), month: 'MAY', day: '23', venue: 'Nighthawk', dayTime: 'Saturday, 9:00 PM - 1:00 AM', location: '1228 Baltimore Ave, Kansas City, MO 64105' },
    { date: new Date('2026-06-27T21:00:00'), month: 'JUN', day: '27', venue: 'Nighthawk', dayTime: 'Saturday, 9:00 PM - 1:00 AM', location: '1228 Baltimore Ave, Kansas City, MO 64105' },
    { date: new Date('2026-07-25T21:00:00'), month: 'JUL', day: '25', venue: 'Nighthawk', dayTime: 'Saturday, 9:00 PM - 1:00 AM', location: '1228 Baltimore Ave, Kansas City, MO 64105' },
    { date: new Date('2026-08-07T22:30:00'), month: 'AUG', day: '7', venue: 'Tin Roof - Kansas City', dayTime: 'Friday, 10:30 PM - 2:30 AM', location: '424 Westport Road, Kansas City, MO 64111' },
    { date: new Date('2026-08-08T22:30:00'), month: 'AUG', day: '8', venue: 'Tin Roof - Kansas City', dayTime: 'Saturday, 10:30 PM - 2:30 AM', location: '424 Westport Road, Kansas City, MO 64111' },
    { date: new Date('2026-08-21T21:00:00'), month: 'AUG', day: '21', venue: 'Power & Light', dayTime: 'Friday, 9:00 PM - 12:00 AM', location: 'Power & Light District, Kansas City, MO' },
    { date: new Date('2026-08-29T21:00:00'), month: 'AUG', day: '29', venue: 'Nighthawk', dayTime: 'Saturday, 9:00 PM - 1:00 AM', location: '1228 Baltimore Ave, Kansas City, MO 64105' },
    { date: new Date('2026-09-26T21:00:00'), month: 'SEP', day: '26', venue: 'Nighthawk', dayTime: 'Saturday, 9:00 PM - 1:00 AM', location: '1228 Baltimore Ave, Kansas City, MO 64105' }
  ]);

  upcomingShows = computed(() => {
    const now = new Date();
    const cutoffTime = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago
    
    return this.allShows().filter(show => show.date > cutoffTime);
  });
}
