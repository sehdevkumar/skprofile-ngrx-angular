import {
  AfterViewInit,
  Component,
  OnInit,
  computed,
  inject,
  isDevMode,
  signal,
} from '@angular/core'
import { Store } from '@ngrx/store'
import gsap from 'gsap'
import { applicationsActions } from '../store/actions'
import { GitHubUser } from '../typings/api-typings'
import { selectGitResponse } from '../store/reducers'
import { ResumeComponent } from '../components/resume/resume.component'
import { GithubComponent } from '../components/github/github.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResumeComponent,GithubComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  store = inject(Store)

  gitReponseData = signal<GitHubUser>({} as GitHubUser)

  finalResponse = computed(() => this.gitReponseData())

  ngOnInit(): void {
    this.store.select(selectGitResponse).subscribe((data) => {
      this.gitReponseData.set((data as unknown) as GitHubUser)
    })
    this.store?.dispatch(applicationsActions['[Git]RequestGit']())
  }

  ngAfterViewInit(): void {
    this.onLoadAnimateText()
  }

  onLoadAnimateText() {
    const loadDiv = () => {
      gsap.to('.vertical-div', {
        opacity: 0.8,
        ease: 'power2.in',
        animationDuration: 2000,
        animationDelay: 500,
      })
    }

    gsap.from('.cards', {
      opacity: 0.3,
      scale: 0.8,
      translateY: -100,
      ease: 'power2.in',
      onComplete: () => {
        loadDiv()
      },
    })
  }
}
