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

  setTheme(value: string | 'system') {
    if (value === 'system') {
      // Detecta el tema del sistema
      const isSystemDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.isDarkTheme = isSystemDark; // Actualiza la variable de control
      document.documentElement.setAttribute(
        'data-theme',
        isSystemDark ? 'dark' : 'light'
      );
    } else {
      this.isDarkTheme = value === 'dark';
      document.documentElement.setAttribute('data-theme', value);
    }
  }

  // Escucha cambios en las preferencias del sistema
  listenToSystemThemeChanges() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (event) => {
      if (event.matches) {
        // Si el sistema cambia a modo oscuro
        this.setTheme('dark');
      } else {
        // Si el sistema cambia a modo claro
        this.setTheme('light');
      }
    });
  }

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (window.scrollY > 140) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
