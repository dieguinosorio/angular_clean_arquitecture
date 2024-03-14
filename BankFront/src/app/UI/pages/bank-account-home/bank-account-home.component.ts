import { Component, OnInit } from '@angular/core';
import { BankAccountUseCase } from 'src/app/domain/usecase/bankAccount.usecase';

@Component({
  selector: 'app-bank-account-home',
  templateUrl: './bank-account-home.component.html',
})
export class BankAccountHomeComponent implements OnInit {

  constructor(private readonly _useCaseBankAccount: BankAccountUseCase) { }

  ngOnInit(): void {
    console.log('Paged charged')
  }

  onExecuteDeposit(): void {
    this.onBranchDeposit('1212545', '1200.11')
  }

  onExecutePurchase(): void {
    this.onPurchaseInPyshicalStore('1212545', '1200.11')
  }

  private onBranchDeposit(account: string, amount: string) {
    this._useCaseBankAccount.appliedBranchDeposit(account, amount).subscribe({
      next: (resp) => {
        console.log(resp)
      },
      error: ( error ) => {
        console.log(error)
      },
      complete: () => {
        console.log('completado')
      }
    });
  }

  private onPurchaseInPyshicalStore(account: string, price: string) {
    this._useCaseBankAccount.appliedPurchaseInPyshicalStore(account, price).subscribe({
      next: (resp) => {
        console.log(resp)
      },
      error: ( error ) => {
        console.log(error)
      },
      complete: () => {
        console.log('completado')
      }
    });
  }

}
