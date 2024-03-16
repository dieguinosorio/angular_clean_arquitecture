import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BankAccountUseCase } from 'src/app/domain/usecase/bankAccount.usecase';
import { LIST_ACTIONS_BANK_ACCOUNT } from 'src/app/infraestucture/helpers/bank-account.constant';
import { EBankAccountOptions } from 'src/app/infraestucture/helpers/bank-account.enum';
import {
  IBankAccountOption,
  IBankActions,
} from 'src/app/infraestucture/helpers/bank-account.interfaces';

@Component({
  selector: 'app-bank-account-home',
  templateUrl: './bank-account-home.component.html',
  styleUrls: ['./bank-account-home.scss'],
})
export class BankAccountHomeComponent implements OnInit {
  listActionsOption: IBankAccountOption[] = LIST_ACTIONS_BANK_ACCOUNT;
  formBankAccount!: FormGroup;
  listActions = EBankAccountOptions;

  constructor(
    private readonly _useCaseBankAccount: BankAccountUseCase,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formBankAccount = this.fb.group({
      accountNumber: ['', Validators.required],
      typeTransaction: ['', Validators.required],
      valueTransaction: ['', Validators.required],
    });
  }

  onExecuteAction(): void {
    const optionSelect = this.getForm['typeTransaction'].value;
    const { accountNumber, valueTransaction } = this.getForm;
    const onActionByOption: any = {
      AC1001: (account: string, value: string) =>
        this.onBranchDeposit(account, value),
      AC1002: (account: string, value: string) =>
        this.onAtmDeposit(account, value),
      AC1003: (account: string, value: string) => console.log('AC1003'),
      AC1004: (account: string, value: string) =>
        this.onPurchaseInPyshicalStore(account, value),
      // AC1004: {},
      // AC1005: {},
      // AC1006: {},
    };
    const action = onActionByOption[optionSelect];
    if (action) {
      action(accountNumber.value, valueTransaction.value);
    }
  }

  get getForm(): {
    [key: string]: AbstractControl;
  } {
    return this.formBankAccount.controls;
  }

  private onBranchDeposit(account: string, amount: string) {
    this._useCaseBankAccount.appliedBranchDeposit(account, amount).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completado');
      },
    });
  }

  private onPurchaseInPyshicalStore(account: string, price: string) {
    this._useCaseBankAccount
      .appliedPurchaseInPyshicalStore(account, price)
      .subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('completado');
        },
      });
  }

  private onAtmDeposit(account: string, price: string) {
    this._useCaseBankAccount.appliedAtmDeposit(account, price).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completado');
      },
    });
  }
}
