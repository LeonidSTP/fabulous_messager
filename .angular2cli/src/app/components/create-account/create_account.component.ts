import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserInfoService, UserInfo} from '../../services/userInfo.service';

@Component({
  selector: 'create_account',
  templateUrl: './create_account.component.html',
  styleUrls: ['./create_account.component.less']
})

export class Create_accountComponent implements OnInit{

  constructor(public userInfoService: UserInfoService,
              private router: Router,) {}

    public userInfo: UserInfo = {
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    streetName: '',
    streetNumber: null,
    country: ''
    };

  ngOnInit(){}

   public processCreate(){
     console.log(this.userInfo);
     this.userInfoService.create(this.userInfo).subscribe(data => console.log(data));
     this.router.navigate(['/profile']);
   }
}

