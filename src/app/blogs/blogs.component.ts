import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogResponse } from '../typings/api-typings';
import { applicationsActions } from '../store/actions';
import { selectBlogResponse, selectProjectResponse } from '../store/reducers';
import { BlogCardComponent } from '../components/blog-card/blog-card.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  store = inject(Store)
  blogData = signal<BlogResponse[]>([])

  ngOnInit(): void {
    this.store.dispatch(applicationsActions['[Blog]Request']())

     this.store.select(selectBlogResponse)?.subscribe((res) => this.blogData.set(res ?? []))
  }
}
