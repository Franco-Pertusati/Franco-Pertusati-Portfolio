import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BackgroundComponent } from './shared/background/background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PortfolioComponent,
    NavbarComponent,
    BackgroundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio-Angular';
}
