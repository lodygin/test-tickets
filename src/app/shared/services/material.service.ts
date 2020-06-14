import {ElementRef} from '@angular/core'
import M from 'materialize-css/dist/js/materialize.js'

export class MaterialService {

  static initTab(ref: ElementRef) {
    return M.Tabs.init(ref.nativeElement)
  }

  static toast(message: string) {
    M.toast({html: message})
  }
}
