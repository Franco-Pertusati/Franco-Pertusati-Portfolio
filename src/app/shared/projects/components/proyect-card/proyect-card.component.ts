import { Component, Input } from '@angular/core';
import { BtnComponent } from '../../../btn/btn.component';
import { AnchorComponent } from '../../../anchor/anchor.component';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-proyect-card',
  standalone: true,
  imports: [BtnComponent, AnchorComponent, DialogComponent],
  templateUrl: './proyect-card.component.html',
  styleUrl: './proyect-card.component.css',
})
export class ProyectCardComponent {
  @Input() landingPage: string = '';
  @Input() photo: string = '';
  @Input() repo: string = '';

  constructor(public dialog: Dialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        photo: this.photo,
      },
    });
  }
}
