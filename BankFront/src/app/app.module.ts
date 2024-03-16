import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BankAccountHomeComponent } from './UI/pages/bank-account-home/bank-account-home.component';
import { BankAccountGateway } from './domain/models/gateway/bankAccount.gateway';
import { BankAccountApiService } from './infraestucture/driven-adapter/bank-account-api/bankAccount.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    //Angular Material
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    { provide: BankAccountGateway, useClass: BankAccountApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
