import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {InfiniteScrollModule} from 'ngx-infinite-scroll'

import {AppComponent} from './app.component'
import {FilterComponent} from './filter/filter.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {DashboardItemComponent} from './dashboard/dashboard-item/dashboard-item.component'
import {HttpClientModule} from '@angular/common/http'
import {LoaderComponent} from './shared/components/loader/loader.component'
import {ScrollToTopComponent} from './shared/components/scroll-to-top/scroll-to-top.component'

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    DashboardComponent,
    DashboardItemComponent,
    LoaderComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
