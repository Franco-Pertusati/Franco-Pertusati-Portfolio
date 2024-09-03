import { Component } from '@angular/core';
import { PresentationComponent } from '../../shared/presentation/presentation.component';
import { AboutMeComponent } from "../../shared/about-me/about-me.component";
import { ProjectsComponent } from "../../shared/projects/projects.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PresentationComponent, AboutMeComponent, ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
}
