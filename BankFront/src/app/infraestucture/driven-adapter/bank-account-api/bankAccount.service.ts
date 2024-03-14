import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BankAccount } from "src/app/domain/models/bankAccount";
import { BankAccountGateway } from "src/app/domain/models/gateway/bankAccount.gateway";

@Injectable({
  providedIn: 'root'
})
export class BankAccountApiService implements BankAccountGateway {
  private _apiUrl: string = 'http://localhost:8080/api';
  constructor(private _httpClient: HttpClient){}

  branchDeposit(account: string, amount: string): Observable<BankAccount>{
    const mockService = {
      id: 101,
      numberAccount: '145163456411',
      balance: 1461.25,
    }
    return of(mockService);
    // return this._httpClient.post<BankAccount>(`${this._apiUrl}/branch-deposit`,{
    //   account,
    //   amount
    // })
  }
  purchaseInPyshicalStore(account: string, price: string): Observable<BankAccount>{
    return this._httpClient.post<BankAccount>(`${this._apiUrl}/purchase-in-store`,{
      account,
      price
    })
  }

}
