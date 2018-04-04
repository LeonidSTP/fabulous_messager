import {Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import * as moment from 'moment';
import _date = moment.unitOfTime._date;
import {forEach} from '@angular/router/src/utils/collection';


@Component({
    selector: 'message',
    styleUrls: ['message.less'],
    templateUrl: 'message.html'
})

export class MessageComponent implements OnInit{

  constructor(public messageService: MessageService,
              private router: Router,
              private toastr: ToastrService){
    this.dateMessage = moment().format("LLLL");
  };

  dateMessage: any;
  public messages: any[] = [];
  public message: string;

  public addMessage(): void {
    if(!this.message){
      this.toastr.warning('Message is empty');
      return;
    }
    const message = {
      dateMessage: this.dateMessage,
      text: this.message,
      likes: 0,
      dislikes: 0,
      Islike: false,
      Dislike: false,
      //IsOpen: true,
    };
    this.messages.push(message);
    console.log(this.messages);
    this.messageService.createMessage(message).subscribe(data => {
      delete(this.message);
    });
  }

  ngOnInit() {
    this.messageService.getMessage({}).subscribe(data => {
      console.log(data);
        this.messages.push(data);
        console.log(this.messages);

    });

  }

  public Like(message) {
    if (!message.Islike) {
      if (message.Dislike) {
        message.dislikes--;
        message.Dislike = false;
      }
      message.likes++;
      message.Islike = true;
    }
  }

  public disLike(message) {
    if (!message.Dislike) {
      if (message.Islike) {
        message.likes--;
        message.Islike = false;
      }
      message.dislikes++;
      message.Dislike = true;
    }
  }

  public handleClick(myMessage){
    myMessage.IsOpen = !myMessage.IsOpen;
  }
}



