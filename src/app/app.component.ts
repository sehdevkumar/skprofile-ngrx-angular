import { AfterViewInit, Component, HostListener, inject, isDevMode } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { MatSidenavModule } from '@angular/material/sidenav'
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { Store, StoreModule } from '@ngrx/store'
import { applicationsActions } from './store/actions';
import { routerNavigatedAction, routerRequestAction } from '@ngrx/router-store'
import { selectCurrentRoute } from './store/app-router-selector'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  store = inject(Store)

  /**
   *
   * A global Window Resize Event dispatch
   * @param event
   */
  @HostListener('window:resize', ['$event']) onResize(event: any) {
      this.store.dispatch(applicationsActions['[window:resize]']({ event }))
  }

  ngAfterViewInit(): void {
    this.store.select(selectCurrentRoute

).subscribe(res=> {
       console.log(res)
    })
  }

  isSidebarVisible = false

  menuClicked(flag: boolean) {
    this.isSidebarVisible = flag ===undefined ?  !this.isSidebarVisible  :  flag
  }
}
