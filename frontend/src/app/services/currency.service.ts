import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRateAPIResponse } from '../interfaces/exchangerateapi';
import { NodeAPIResponse } from '../interfaces/nodeapi';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private _server: ServerService
  ) { }

  getAll(): Observable<NodeAPIResponse> {
    return this._server.get('getCurrency');
  }

  getCurrencyExchangeRate(from: string, to: string): Observable<ExchangeRateAPIResponse> {
    const queryString = `?base=${from}&symbols=${to}`;
    return this._server.exchangeRatesApi(queryString);
  }
}
