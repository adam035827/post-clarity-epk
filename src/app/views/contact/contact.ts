import { ChangeDetectionStrategy, Component } from '@angular/core';
import { siFacebook, siInstagram, siTiktok, siYoutube } from 'simple-icons';

interface SocialLink {
  label: string;
  href: string;
  iconPath: string;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  readonly socialLinks: SocialLink[] = [
    {
      label: 'Instagram',
      href: 'https://instagram.com/postclarity_kc',
      iconPath: siInstagram.path
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/Post-Clarity-103570785341715',
      iconPath: siFacebook.path
    },
    {
      label: 'TikTok',
      href: 'https://tiktok.com/@post_clarity_kc',
      iconPath: siTiktok.path
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com/channel/UC1_DICofQgApv-Vg_BpDaMQ',
      iconPath: siYoutube.path
    }
  ];
}
