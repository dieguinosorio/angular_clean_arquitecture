import { Injectable } from "@angular/core";
import { BankAccountGateway } from "../models/gateway/bankAccount.gateway";

@Injectable({
  providedIn: 'root'
})
export class BankAccountUseCase {
  constructor(private readonly _bankAccountGateway: BankAccountGateway) {}

  appliedBranchDeposit(account: string, amount: string) {
    return this._bankAccountGateway.branchDeposit(account, amount);
  }

  appliedPurchaseInPyshicalStore(account: string, price: string) {
    return this._bankAccountGateway.purchaseInPyshicalStore(account, price);
  }
}
