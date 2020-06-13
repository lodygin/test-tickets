import {Component, Input} from '@angular/core'
import {Ticket} from '../../shared/interfaces'

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent {

  @Input('ticket') ticket: Ticket
  @Input('currIdx') currIdx: number = 4

  logoLink(ticket: Ticket): string {
    return `https://pics.avs.io/99/36/${ticket.carrier}.png`
  }

  counterTransfers(stops: string[]): string {
    const stopsLength: number = stops.length
    return (stopsLength === 0
        ? 'Нет пересадок'
        : stopsLength === 1
          ? '1 пересадка'
          : `${stopsLength} пересадки`
    )
  }

  arrivalTime(segments): Date {
    return new Date(new Date(segments.date).getTime() + segments.duration * 1000 * 60)
  }

  duration(duration: number): string {
    return `${(duration / 60).toFixed()}ч ${duration % 60}м`
  }

}
