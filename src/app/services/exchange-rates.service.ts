import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExchangeRatesResponse} from './payloads/exchange-rates-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {
  constructor(private http: HttpClient) {
  }

  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(`https://api.frankfurter.app/latest?from=${base}`);
  }
}