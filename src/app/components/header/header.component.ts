import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hasScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = window.scrollY > 50;
  }
}
