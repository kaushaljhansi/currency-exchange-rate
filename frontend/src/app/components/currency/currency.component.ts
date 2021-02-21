import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../interfaces/currency';
import { NodeAPIResponse } from '../../interfaces/nodeapi';
import { ExchangeRateAPIResponse } from '../../interfaces/exchangerateapi';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies: Currency[] = [];
  from: number = 1;
  fromCurrency: string = 'INR';
  to: number = 1;
  toCurrency: string = 'INR';
  message: string = '';

  constructor(
    private _currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this._currencyService.getAll().subscribe((response: NodeAPIResponse) => {
      this.currencies = response.data;
    });
  }

  onChange() {
    this.message = '';
    this.to = 0;

    if (
      this.from &&
      !isNaN(this.from) &&
      !isNaN(this.to)
    ) {
      this._currencyService.getCurrencyExchangeRate(this.fromCurrency, this.toCurrency)
        .subscribe((response: ExchangeRateAPIResponse) => {
          this.to = this.from * response.rates[this.toCurrency].toFixed(2);
          this.message = `${this.from} ${this.fromCurrency} equals ${this.to} ${this.toCurrency}`;
        });
    }
  }

}
