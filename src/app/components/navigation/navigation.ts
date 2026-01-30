import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {
  protected readonly mobileMenuOpen = signal(false);

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
