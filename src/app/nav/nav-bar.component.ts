import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { ISession, EventService } from '../events/index'
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material'
import { NavBarComponentSheet } from './nav-bar-sheet.component'

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {
  searchTerm: string = "";
  foundSessions: ISession[]
animal: string;
name: string;

  constructor(public auth: AuthService, private eventService: EventService, private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(NavBarComponentSheet);
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }
}