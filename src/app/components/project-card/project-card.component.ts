import { Component, Input } from '@angular/core';
import { ProjectResponse } from '../../typings/api-typings';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
   @Input() projectData!:ProjectResponse
}
