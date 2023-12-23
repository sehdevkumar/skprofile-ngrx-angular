import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppPath, SideBarType } from '../typings/app-typings';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentRoute, selectUrl } from '../store/app-router-selector';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  sideBars:SideBarType[] = [
    {
      icon:'home',
      name:'Profile',
      active:true,
      path:AppPath.HOME
    },
     {
      icon:'dashboard',
      name:'Projects',
      active:false,
      path:AppPath.DASHBOARD
    },
     {
      icon:'style',
      name:'Blogs',
      active:false,
      path:AppPath.BLOGS
    }
  ]

  router = inject(Router)
  store = inject(Store)

  changeActivation(sideBar:SideBarType) {
    this.sideBars?.map(s=>s.active=false)
    sideBar.active = true

   this.router.navigate([sideBar?.path])
  }

  ngOnInit() {
    this.store.select(selectUrl).subscribe((res)=> {
       this.sideBars.map(s=> {
          if(res?.includes(s?.path)) {
            s.active = true
          }else {
            s.active = false
          }
       } )
    })
  }

}
