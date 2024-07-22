import { Component } from '@angular/core';
import { AnchorComponent } from "../anchor/anchor.component";
import { SkillTagComponent } from "../skill-tag/skill-tag.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AnchorComponent, SkillTagComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
