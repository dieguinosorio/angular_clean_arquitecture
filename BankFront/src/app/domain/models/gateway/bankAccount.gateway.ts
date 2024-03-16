import { Observable } from "rxjs";
import { BankAccount } from "../bankAccount";

export abstract class BankAccountGateway {
  abstract branchDeposit(account: string, amount: string): Observable<BankAccount>;
  abstract purchaseInPyshicalStore(account: string, price: string): Observable<BankAccount>;
  abstract atmDeposit(account: string, amount: string): Observable<BankAccount>;
  abstract atmWithdrawal(account: string, amount: string): Observable<BankAccount>;
  abstract depositFromAnotherAccount(account: string, amount: string): Observable<BankAccount>;
  abstract purchaseOnWebPage(account:string, amount: string): Observable<BankAccount>;
}
