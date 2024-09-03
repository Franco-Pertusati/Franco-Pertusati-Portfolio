import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { AnchorComponent } from '../anchor/anchor.component';
import { MatIcon } from '@angular/material/icon';
import { SquareAnchorComponent } from "../square-anchor/square-anchor.component";

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [BtnComponent, AnchorComponent, MatIcon, SquareAnchorComponent],
  templateUrl: './presentation.component.html',
})
export class PresentationComponent {}
