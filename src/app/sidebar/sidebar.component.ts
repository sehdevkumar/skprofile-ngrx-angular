import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SideBarType } from '../typings/app-typings';

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
      active:true
    },
     {
      icon:'dashboard',
      name:'',
      active:false
    }
  ]


  changeActivation(sideBar:SideBarType) {
    this.sideBars?.map(s=>s.active=false)
    sideBar.active = true
  }

}
