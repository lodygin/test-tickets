import {Component, EventEmitter, Output} from '@angular/core'
import {Filter} from '../shared/interfaces'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output('filter') filter: EventEmitter<Filter> = new EventEmitter<Filter>()

  allCheckedFilter: boolean = true

  filterByTransfer: Filter = {
    nonTransfer: true,
    oneTransfer: true,
    twoTransfer: true,
    threeTransfer: true
  }

  allCheckHandler(): void {
    if (this.allCheckedFilter) {
      for (let key in this.filterByTransfer) {
        if (this.filterByTransfer.hasOwnProperty(key)) {
          this.filterByTransfer[key] = true
        }
      }
    } else {
      for (let key in this.filterByTransfer) {
        if (this.filterByTransfer.hasOwnProperty(key)) {
          this.filterByTransfer[key] = false
        }
      }
    }
    this.sendFilter()
  }

  checksHandler(): void {
    this.allCheckedFilter = Object.values(this.filterByTransfer)
      .every(item => item === true)
    this.sendFilter()
  }

  sendFilter() {
    this.filter.emit(this.filterByTransfer)
  }
}
