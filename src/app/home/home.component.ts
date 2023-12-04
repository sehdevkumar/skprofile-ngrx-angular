import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {




  ngAfterViewInit(): void {
     this.onLoadAnimateText()
  }


  onLoadAnimateText() {
    gsap.from('.landing-text',{
      opacity:0.3,
      scale:0.8,
      translateY:-100,
      ease:'power2.in',
      animationDuration:2000,
      animationDelay:500,
      onComplete:()=> {
      }
    })
  }


}
