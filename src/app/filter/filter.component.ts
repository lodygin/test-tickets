import {Component} from '@angular/core'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  allCheckedFilters = false

  filterByTransfer = {
    nonTransfer: false,
    oneTransfer: false,
    twoTransfer: false,
    threeTransfer: false
  }

  constructor() {
  }

  allCheckHandler(): void {
    if (this.allCheckedFilters) {
      for (let key in this.filterByTransfer) {
        this.filterByTransfer[key] = true
      }
    } else {
      for (let key in this.filterByTransfer) {
        this.filterByTransfer[key] = false
      }
    }
  }

  checksHandler(): void {
    this.allCheckedFilters = Object.values(this.filterByTransfer)
      .every(item => item === true)
  }
}
