import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Bio } from './views/bio/bio';
import { Music } from './views/music/music';
import { Photos } from './views/photos/photos';
import { Videos } from './views/videos/videos';
import { Press } from './views/press/press';
import { Contact } from './views/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'bio', component: Bio },
  { path: 'music', component: Music },
  { path: 'photos', component: Photos },
  { path: 'videos', component: Videos },
  { path: 'press', component: Press },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
