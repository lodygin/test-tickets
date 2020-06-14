import {Component, HostListener} from '@angular/core'

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  windowScrolled: boolean
  scrollLock: boolean = false

  constructor(
  ) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 100) {
      this.windowScrolled = true
    } else if (document.documentElement.scrollTop < 10) {
      this.windowScrolled = false
      if (this.scrollLock) this.scrollLock = false
    }
  }

  scrollToTop() {
    this.scrollLock = true;
    (function smooth() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(smooth)
        window.scrollTo(0, currentScroll - (currentScroll / 8))
      }
    })()
  }

}
