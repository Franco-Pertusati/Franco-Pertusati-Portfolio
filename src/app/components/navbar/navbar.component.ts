import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    ClipboardModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  language: string = 'spanish';
  languages: string[] = ['spanish', 'english'];
  isScrolled = false;
  mail = 'pertusatifranco100@gmail.com';
  isDarkTheme = false;

  setTheme(value:string) {
    document.documentElement.setAttribute('data-theme', value);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (window.scrollY > 140) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
