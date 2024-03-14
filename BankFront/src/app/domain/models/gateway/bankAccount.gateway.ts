import { Observable } from "rxjs";
import { BankAccount } from "../bankAccount";

export abstract class BankAccountGateway {
  abstract branchDeposit(account: string, amount: string): Observable<BankAccount>;
  abstract purchaseInPyshicalStore(account: string, price: string): Observable<BankAccount>;
}
