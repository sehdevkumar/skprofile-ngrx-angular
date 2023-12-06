import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { Store } from '@ngrx/store'
import { selectEvent } from '../store/reducers'
import { debounceTime, last, take, takeLast } from 'rxjs'
import { SubSink } from 'subsink'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy{
  @Output() menuClicked: EventEmitter<boolean> = new EventEmitter(undefined)

  store = inject(Store)
  hideMenuBar = true
  subSink: SubSink = new SubSink()

  ngOnInit(): void {
    const windowResizeEvent$ = this.store
      .select(selectEvent)
      .pipe(debounceTime(100))
      .subscribe((res) => {
        const event = res as Event
        if ((event?.target as Window)?.innerWidth >= 768) {
          this.menuClicked.emit(true)
          this.hideMenuBar = false
        } else {
          this.menuClicked.emit(false)
          this.hideMenuBar = true
        }
      })

    this.subSink.add(windowResizeEvent$)
    setTimeout(()=> {
      this.menuClicked.emit(true)
    },100)
  }



  ngOnDestroy(): void {
    this.subSink.unsubscribe()
  }

  onMenuClicked() {
    this.menuClicked.emit(undefined)
  }
}
