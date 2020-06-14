import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core'
import {MaterialService} from '../shared/services/material.service'
import {Ticket} from '../shared/interfaces'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('tabs') tabsRef: ElementRef

  @Input('tickets') set getTickets(tickets: Ticket[]) {
    this.currTickets = tickets
    this.sortAscending()
    this.sortTheFastest()
    this.currIdx = this.stepIdx
    this.currTicketsLength = tickets.length
  }

  currTickets: Ticket[] = []
  currTicketsLength: number

  sortedAscending: Ticket[] = []
  sortedTheFastest: Ticket[] = []

  stepIdx: number = 4
  currIdx: number = this.stepIdx

  ngAfterViewInit(): void {
    MaterialService.initTab(this.tabsRef)
  }

  onScroll(): void {
    this.currIdx += this.stepIdx
  }

  sortAscending(): void {
    this.sortedAscending = [...this.currTickets].sort((a, b) => a.price - b.price)
  }

  sortTheFastest(): void {
    this.sortedTheFastest = [...this.currTickets].sort((a, b) => {
      return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)
    })
  }
}
