import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { ChatService, Message } from '../../chat.service';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  reponseMessage: void;
  myCar: any;
  messages: Observable<Message[]>;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.messages = this.chatService.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
  }
 
  send() {
    this.chatService.talk(this.myCar);
    this.myCar = '';
  }

}
