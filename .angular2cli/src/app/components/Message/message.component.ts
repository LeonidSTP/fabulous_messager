import {Component} from '@angular/core';

@Component({
    selector: 'message',
    styleUrls: ['message.less'],
    templateUrl: 'message.html'
})
export class MessageComponent {
    public messages: any[] = [];
    public message: string;

    public addMessage(): void {
        const myMessage = {
            text: this.message,
            likes: 0,
            dislikes: 0,
            Islike: false,
            Dislike: false,
        };
        this.messages.push(myMessage);
        delete this.message;
    }

    public Like(myMessage) {
        if (!myMessage.Islike) {
            if (myMessage.Dislike) {
                myMessage.dislikes--;
                myMessage.Dislike = false;
            }
            myMessage.likes++;
            myMessage.Islike = true;
        }
    }

    public disLike(myMessage) {
        if (!myMessage.Dislike) {
            if (myMessage.Islike) {
                myMessage.likes--;
                myMessage.Islike = false;
            }
            myMessage.dislikes++;
            myMessage.Dislike = true;
        }
    }

}
