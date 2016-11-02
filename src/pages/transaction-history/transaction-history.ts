import { Component }		from '@angular/core';
import { OnInit }			from '@angular/core';

import { NavController }	from 'ionic-angular';

import { Toolbar }			from './toolbar';
import { MessageWrapper }	from './message-wrapper';
import { TransactionHistoryService } from '../../providers/transaction-history-service';

export class View {
	showAdvanced: boolean = false;
	showDrafts: boolean = false;
    showFilter: boolean = true;
    showDetail: boolean = false;
}

@Component({
  selector: 'page-transaction-history',
  templateUrl: 'transaction-history.html',
  providers: [TransactionHistoryService]
})
export class TransactionHistory implements OnInit {

	view: View = new View();
	toolbar: Toolbar = new Toolbar();
	messages: MessageWrapper[] = [];

	constructor(public navCtrl: NavController, public transactionHistoryService: TransactionHistoryService) {
    
	}

	ngOnInit(): void { }


	getMessages(): void {

		this.transactionHistoryService.getMessages(this.toolbar)
			.then(
			(messages: any) => {

				let temp: MessageWrapper[] = [];

				this.messages = [];
				for (var i: number = 0; i < messages.$items.length; i++) {
					temp.push(new MessageWrapper(false, messages.$items[i]));
				}

				this.messages = temp;
			});
    }

    onMessageClick(index: any): void {

        // create a new message object with the detail flag
        // flipped.  We need to change the object reference
        // itself in order for angular to recognize the change

        let message = this.messages[index];
        this.messages[index] = new MessageWrapper(!message.showDetail, message.symMessage);
	}
}
