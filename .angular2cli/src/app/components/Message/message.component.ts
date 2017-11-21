import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'message',
    styleUrls: ['message.less'],
    templateUrl: 'message.html'
})
export class MessageComponent {
    public messages: any[] = [];
    public message: any;

    public addMessage(): void {
      const myMessage = {
        text: this.message,
        likes: 0,
        dislikes: 0,
      };

      this.messages.push(myMessage);
      console.log(myMessage);
      delete this.message;


    }
}
