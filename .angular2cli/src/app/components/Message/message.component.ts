import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'message',
    styleUrls: ['message.less'],
    templateUrl: 'message.html'
})
export class MessageComponent {
    public messages: string[] = [];
    public message: string;
    
    public addMessage(): void {
        this.messages.push(this.message);
        delete this.message;

    }
}
