import { Component, Input } from '@angular/core';
import { AnchorComponent } from '../../../anchor/anchor.component';
import { NgStyle } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-p-card',
  standalone: true,
  imports: [AnchorComponent, NgStyle, MatIcon],
  templateUrl: './p-card.component.html',
  styleUrl: './p-card.component.css',
})
export class PCardComponent {
  @Input() title: string = 'Project title';
  @Input() bgImage: string = '';
  @Input() repo: string = '';
  @Input() preview: string = '';
  @Input() galery: string = '';
  @Input() tecs: Array<string> = [];
  @Input() gifs: Array<string> = [];
}
