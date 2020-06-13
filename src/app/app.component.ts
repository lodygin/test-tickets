import {Component, OnInit} from '@angular/core'
import {Filter, SearchId, Ticket} from './shared/interfaces'
import {TicketsService} from './shared/services/tickets.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  _tickets: Ticket[] = []
  currTickets: Ticket[] = []

  isLoading = true

  constructor(
    private ticketsService: TicketsService
  ) {
  }

  ngOnInit(): void {
    const sub = this.ticketsService.getSearchId()
      .subscribe((res: SearchId) => {
        this.ticketsService.searchId = res
        this.setAllTickets()
        sub.unsubscribe()
      })
  }

  setAllTickets() {
    const sub = this.ticketsService.getTicketsBlock(this.ticketsService.searchId)
      .subscribe(res => {
        res.tickets.forEach((ticket: Ticket) => {
          this._tickets.push(ticket)
        })
        if (!res.stop) {
          this.setAllTickets()
        } else {
          sub.unsubscribe()
          this.currTickets = [...this._tickets]
          this.isLoading = false
        }
      })
  }

  setFilter(filter: Filter) {
    let filteredTickets: Ticket[] = [...this._tickets]

    const condition = (ticket: Ticket, length: number): boolean => {
      return ticket.segments[0].stops.length === length || ticket.segments[1].stops.length === length
    }

    filteredTickets = filteredTickets.filter((ticket: Ticket) => {
      return (
        (filter.nonTransfer ? condition(ticket, 0) : null)
        || (filter.oneTransfer ? condition(ticket, 1) : null)
        || (filter.twoTransfer ? condition(ticket, 2) : null)
        || (filter.threeTransfer ? condition(ticket, 3) : null)
      )
    })

    this.currTickets = filteredTickets
  }
}
