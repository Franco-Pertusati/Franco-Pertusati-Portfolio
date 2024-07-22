import { Component } from '@angular/core';
import { ProyectCardComponent } from "./components/proyect-card/proyect-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProyectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {

}
