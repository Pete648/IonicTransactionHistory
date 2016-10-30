import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TransactionHistory } from '../pages/transaction-history/transaction-history';

@NgModule({
  declarations: [
    MyApp,
      HomePage,
    TransactionHistory
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      HomePage,
      TransactionHistory
  ],
  providers: []
})
export class AppModule {}
