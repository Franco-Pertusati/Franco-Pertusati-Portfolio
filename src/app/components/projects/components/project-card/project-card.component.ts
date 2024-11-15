import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() title = 'Title'
  @Input() repoLink = ''
  @Input() prevLink = ''
  @Input() galelink = ''
  @Input() img = ''
  @Input() imgResponisve = ''
  @Input() technologies: string[] = []
}
