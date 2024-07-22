import { Component } from '@angular/core';
import { AnchorComponent } from "../../shared/anchor/anchor.component";
import { ProjectsComponent } from "../../shared/projects/projects.component";
import { AboutMeComponent } from "../../shared/about-me/about-me.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [AnchorComponent, ProjectsComponent, AboutMeComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.sass'
})
export class PortfolioComponent {

}
