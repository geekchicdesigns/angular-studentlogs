import { Component } from '@angular/core'
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material'

@Component({
  selector: 'NavBarComponentSheet',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponentSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<NavBarComponentSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}