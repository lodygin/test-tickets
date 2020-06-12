import {Component, OnInit} from '@angular/core'
import {SearchId, Ticket} from './shared/interfaces'
import {TicketsService} from './shared/services/tickets.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  tickets: Ticket[] = []
  searchId: SearchId

  isLoading = true

  constructor(
    private ticketsService: TicketsService
  ) {
  }

  ngOnInit(): void {
    const sub = this.ticketsService.getSearchId()
      .subscribe((res: SearchId) => {
        sub.unsubscribe()

        this.searchId = res
        this.getAndSetAllTickets()
      })
  }

  getAndSetAllTickets() {
    const sub = this.ticketsService.getTicketsBlock(this.searchId)
      .subscribe(res => {
        sub.unsubscribe()

        res.tickets.forEach(ticket => {
          this.tickets.push(ticket)
        })
        if (!res.stop) {
          this.getAndSetAllTickets()
        } else {
          console.log(this.tickets)
          this.isLoading = false
        }
      })
  }

}
