import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
import {SearchId, TicketsBlock} from '../interfaces'
import {delay, retryWhen} from 'rxjs/operators'
import {MaterialService} from './material.service'

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getSearchId(): Observable<SearchId> {
    return this.http.get<SearchId>('https://front-test.beta.aviasales.ru/search')
  }

  getTicketsBlock(searchId: SearchId) {
    return this.http.get<TicketsBlock>('https://front-test.beta.aviasales.ru/tickets', {
      params: searchId
    })
      .pipe(
        retryWhen((errors: Observable<HttpErrorResponse>) => {
          MaterialService.toast('Ошибка установления соединения с базой данных')
          return (errors).pipe(delay(500))
        })
      )

  }
}
