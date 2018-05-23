import {Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import * as moment from 'moment';

declare var $: any;

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
  public uploadFile: any;

  public addMessage(): void {
    if(!this.message){
      this.toastr.warning('Message is empty');
      return;
    }
    const message = {
      //file: this.uploadFile,
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
    $("body").on("click",".btn-duplicator", clone_model);
    $("body").on("click",".btn-remove", remove);
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
//Functions
    function clone_model() {
      var b = $(this).parent(".content").parent(".dropdown-content").parent(".duplicateable-content"),
        c = $(".model").clone(true, true);

      c.removeClass('model');
      c.find('input').addClass('dropify');

      $(b).before(c);
      $('.dropify').dropify();
    }

    function remove() {
      $(this).closest('.duplicateable-content').remove();
    }


    this.messageService.getMessage({}).subscribe(data => {
      data.forEach((item) => {item.dateMessage = moment(item.dateMessage).format('LLLL')});

        this.messages.push(...data);

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
    console.log(this.uploadFile);
    //this.Edit(message, index);
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



