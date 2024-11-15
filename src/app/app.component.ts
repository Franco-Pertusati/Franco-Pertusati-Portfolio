import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { BackgroundComponent } from "./components/background/background.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, NavbarComponent, PresentationComponent, ProjectsComponent, BackgroundComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio-Angular';

  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
}
