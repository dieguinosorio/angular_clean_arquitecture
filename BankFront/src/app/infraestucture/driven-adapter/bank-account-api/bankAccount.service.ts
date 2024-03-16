import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BankAccount } from 'src/app/domain/models/bankAccount';
import { BankAccountGateway } from 'src/app/domain/models/gateway/bankAccount.gateway';

@Injectable({
  providedIn: 'root',
})
export class BankAccountApiService implements BankAccountGateway {
  private _apiUrl: string = 'http://localhost:8080/api';
  private _apiUrlMock: string = 'https://run.mocky.io/v3';
  constructor(private _httpClient: HttpClient) {}

  branchDeposit(account: string, amount: string): Observable<BankAccount> {
    return this._httpClient.post<BankAccount>(
      `${this._apiUrlMock}/d7ce511f-14f9-4a3d-905c-4c9da9c484bf	`,
      {
        account,
        amount,
      }
    );
    // return this._httpClient.post<BankAccount>(`${this._apiUrl}/branch-deposit`,{
    //   account,
    //   amount
    // })
  }
  purchaseInPyshicalStore(
    account: string,
    price: string
  ): Observable<BankAccount> {
    return this._httpClient.post<BankAccount>(
      `${this._apiUrlMock}/b2c846a0-322a-48af-9314-cadb631c6a15	`,
      {
        account,
        price,
      }
    );
    // return this._httpClient.post<BankAccount>(
    //   `${this._apiUrl}/purchase-in-store`,
    //   {
    //     account,
    //     price,
    //   }
    // );
  }

  atmDeposit(account: string, amount: string): Observable<BankAccount> {
    return this._httpClient.post<BankAccount>(
      `${this._apiUrlMock}/b2c846a0-322a-48af-9314-cadb631c6a15	`,
      {
        account,
        amount,
      }
    );
  }
  atmWithdrawal(account: string, amount: string): Observable<BankAccount> {
    throw new Error('Method not implemented.');
  }
  depositFromAnotherAccount(
    account: string,
    amount: string
  ): Observable<BankAccount> {
    throw new Error('Method not implemented.');
  }
  purchaseOnWebPage(account: string, amount: string): Observable<BankAccount> {
    throw new Error('Method not implemented.');
  }
}
