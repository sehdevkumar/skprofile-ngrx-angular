import { Component, Input } from '@angular/core';
import { GitHubUser } from '../../typings/api-typings';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss'
})
export class GithubComponent {
    @Input() finalResponse!:GitHubUser
}
