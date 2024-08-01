import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { AnchorComponent } from '../anchor/anchor.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [BtnComponent, AnchorComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
})
export class PresentationComponent {}
