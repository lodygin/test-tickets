import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FilterComponent} from './filter/filter.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {DashboardItemComponent} from './dashboard/dashboard-item/dashboard-item.component'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { LoaderComponent } from './shared/components/loader/loader.component'

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    DashboardComponent,
    DashboardItemComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
