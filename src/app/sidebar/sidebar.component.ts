import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppPath, SideBarType } from '../typings/app-typings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sideBars:SideBarType[] = [
    {
      icon:'home',
      name:'',
      active:true,
      path:AppPath.HOME
    },
     {
      icon:'dashboard',
      name:'',
      active:false,
      path:AppPath.DASHBOARD
    }
  ]

  router = inject(Router)

  changeActivation(sideBar:SideBarType) {
    this.sideBars?.map(s=>s.active=false)
    sideBar.active = true

   this.router.navigate([sideBar?.path])
  }

}
