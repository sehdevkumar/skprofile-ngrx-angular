import { Component, Input } from '@angular/core';
import { BlogResponse } from '../../typings/api-typings';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
   @Input() blogData!:BlogResponse

}
