import {
  AfterViewInit,
  Component,
  HostListener,
  inject,
  isDevMode,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { Store, StoreModule } from '@ngrx/store'
import { applicationsActions } from './store/actions'
import { routerNavigatedAction, routerRequestAction } from '@ngrx/router-store'
import { selectCurrentRoute } from './store/app-router-selector'
import { SpinnerService } from './services/spinner.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent,
    MatProgressSpinnerModule,
  ],
  providers:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  store = inject(Store)
  public spinnerService = inject(SpinnerService)

  /**
   *
   * A global Window Resize Event dispatch
   * @param event
   */
  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.store.dispatch(applicationsActions['[window:resize]']({ event }))
  }

  ngAfterViewInit(): void {
    this.store.select(selectCurrentRoute).subscribe((res) => {
      console.log(res)
    })
  }

  isSidebarVisible = false

  menuClicked(flag: boolean) {
    this.isSidebarVisible = flag === undefined ? !this.isSidebarVisible : flag
  }
}
