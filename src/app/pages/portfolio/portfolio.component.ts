import { Component } from '@angular/core';
import { AnchorComponent } from "../../shared/anchor/anchor.component";
import { ProjectsComponent } from "../../shared/projects/projects.component";
import { AboutMeComponent } from "../../shared/about-me/about-me.component";
import { PresentationComponent } from "../../shared/presentation/presentation.component";
import { ProyectCardComponent } from "../../shared/projects/components/proyect-card/proyect-card.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [AnchorComponent, ProjectsComponent, AboutMeComponent, PresentationComponent, ProyectCardComponent, NavbarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
