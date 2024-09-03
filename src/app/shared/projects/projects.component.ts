import { Component } from '@angular/core';
import { PCardComponent } from "./components/p-card/p-card.component";
import { ExtraProjectsComponent } from "./components/extra-projects/extra-projects.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PCardComponent, ExtraProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  
}
