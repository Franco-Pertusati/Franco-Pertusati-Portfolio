import { Component, Input } from '@angular/core';
import { BtnComponent } from "../../../btn/btn.component";

@Component({
  selector: 'app-extra-projects',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './extra-projects.component.html',
  styleUrl: './extra-projects.component.css',
})
export class ExtraProjectsComponent {
  @Input() photos: Array<string> = [];
}
