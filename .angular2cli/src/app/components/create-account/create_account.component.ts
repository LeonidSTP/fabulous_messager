import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'create_account',
  templateUrl: './create_account.component.html',
  styleUrls: ['./create_account.component.less']
})

export class Create_accountComponent implements OnInit{

  constructor(public authService: AuthService,
              private router: Router,) {}

    public userInfo: Info = {
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
     this.authService.create(this.userInfo).subscribe(data => console.log(data));
   }
}
interface Info{
  avatar?: string,
  firstName: string,
  lastName: string,
  email: string,
  city?: string,
  streetName?: string,
  streetNumber?: number,
  country?: string
}
