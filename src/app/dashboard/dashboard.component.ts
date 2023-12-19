import { Component, OnInit, computed, inject, signal } from '@angular/core'
import { ProjectCardComponent } from '../components/project-card/project-card.component'
import { Store } from '@ngrx/store'
import { applicationsActions } from '../store/actions'
import { selectProjectResponse } from '../store/reducers'
import { ProjectResponse } from '../typings/api-typings'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  store = inject(Store)
  projectData = signal<ProjectResponse[]>([])

  ngOnInit(): void {
    this.store.dispatch(applicationsActions['[Project]Request']())

     this.store.select(selectProjectResponse)?.subscribe((res) => this.projectData.set(res ?? []))
  }
}
