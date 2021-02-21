import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRateAPIResponse } from '../interfaces/exchangerateapi';
import { NodeAPIResponse } from '../interfaces/nodeapi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  nodeApiEndpoint: string = 'http://localhost:3000/api/';
  exchangeRatesApiEndpoint = 'https://api.exchangeratesapi.io/latest';

  constructor(
    private _http: HttpClient
  ) { }

  getEndpoint(url: string): string {
    return this.nodeApiEndpoint + url;
  }

  get(url: string): Observable<NodeAPIResponse> {
    const endpoint = this.getEndpoint(url);
    return this._http.get<NodeAPIResponse>(endpoint);
  }

  exchangeRatesApi(queryString: string): Observable<ExchangeRateAPIResponse> {
    const endpoint = this.exchangeRatesApiEndpoint + queryString;
    return this._http.get<ExchangeRateAPIResponse>(endpoint);
  }
}
