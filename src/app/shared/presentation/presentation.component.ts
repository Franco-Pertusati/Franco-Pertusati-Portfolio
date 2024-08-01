import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

}
