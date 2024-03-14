import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BankAccountHomeComponent } from './UI/pages/bank-account-home/bank-account-home.component';
import { BankAccountGateway } from './domain/models/gateway/bankAccount.gateway';
import { BankAccountApiService } from './infraestucture/driven-adapter/bank-account-api/bankAccount.service';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    { provide: BankAccountGateway, useClass: BankAccountApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
