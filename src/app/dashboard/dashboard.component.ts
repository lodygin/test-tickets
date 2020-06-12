import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core'
import {MaterialService} from '../shared/services/material.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('tabs') tabsRef: ElementRef

  ngAfterViewInit(): void {
    MaterialService.initTab(this.tabsRef)
  }

}
