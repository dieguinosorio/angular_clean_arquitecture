import { Injectable } from '@angular/core';
import { BankAccountGateway } from '../models/gateway/bankAccount.gateway';
import { BankAccount } from '../models/bankAccount';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankAccountUseCase {
  constructor(private readonly _bankAccountGateway: BankAccountGateway) {}

  appliedBranchDeposit(
    account: string,
    amount: string
  ): Observable<BankAccount> {
    return this._bankAccountGateway.branchDeposit(account, amount);
  }

  appliedPurchaseInPyshicalStore(
    account: string,
    price: string
  ): Observable<BankAccount> {
    return this._bankAccountGateway.purchaseInPyshicalStore(account, price);
  }

  appliedAtmDeposit(account: string, amount: string): Observable<BankAccount> {
    return this._bankAccountGateway.atmDeposit(account, amount);
  }
}
