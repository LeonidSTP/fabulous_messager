import {Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import * as moment from 'moment';


@Component({
    selector: 'message',
    styleUrls: ['message.less'],
    templateUrl: 'message.html'
})

export class MessageComponent implements OnInit{

  constructor(public messageService: MessageService,
              private router: Router,
              private toastr: ToastrService){

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
      dateMessage: new Date(),
      text: this.message,
      likes: 0,
      dislikes: 0,
      Islike: false,
      Dislike: false,
      //IsOpen: true,
    };

    this.messageService.createMessage(message).subscribe(data => {
      this.messages.push(Object.assign({},
        message,
        {dateMessage: moment(message.dateMessage).format('LLLL')})
      );
      delete(this.message);
    });
  }

  ngOnInit() {
    this.messageService.getMessage({}).subscribe(data => {
       var Array = data;
        data.forEach((item) => {item.dateMessage = moment(item.dateMessage).format('LLLL')});

        this.messages.push(...data);
        console.log(this.messages);

    });
  }

  public Edit(message, index){
    console.log(message);
    this.messageService.editMessage(message).subscribe(data =>{
      this.messages[index] = data;
      console.log(this.messages[index]);
    });
  }

  public Like(message, index) {
    if (!message.Islike) {
      if (message.Dislike) {
        message.dislikes--;
        message.Dislike = false;
      }
      message.likes++;
      message.Islike = true;
    }

    this.Edit(message, index);
  }

  public disLike(message, index) {
    if (!message.Dislike) {
      if (message.Islike) {
        message.likes--;
        message.Islike = false;
      }
      message.dislikes++;
      message.Dislike = true;
    }
    this.Edit(message, index);

  }

  public handleClick(myMessage){
    myMessage.IsOpen = !myMessage.IsOpen;
  }
}



