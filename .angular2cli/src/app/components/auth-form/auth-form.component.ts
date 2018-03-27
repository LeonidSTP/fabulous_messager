import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
///import { AuthHttp, AuthConfig} from 'angular2-jsonwebtoken';//

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.less']
})
export class AuthFormComponent implements OnInit {

    public currentUrl: any;
    public user: User = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };


    constructor(public authService: AuthService,
       private router: Router) {     }

  //
  //    public doSomething() {
  //     this.authHttp.get('/route')
  //     .subscribe(
  //       data => console.log(data),
  //       err => console.log(err),
  //       () => console.log('RequestComplete')
  //     );
  // }

    ngOnInit() {
        this.currentUrl = this.router.url;
        console.log(this.currentUrl);
    }

    public proccessLogin = () => {
        if (this.currentUrl === '/auth') {
            this.login();
        } else {
            this.signup();
        }
    };

    public test(value) {
        console.log(value);
    }

    public login = () => {
        console.log('login');
        this.sendUser();
    };

    public signup = () => {
        console.log('signup');
        this.saveUser();
    };

    public onEnter(valid, event) {
        if (!valid) {
            return;
        }
        console.log(event);
    }


    public sendUser() {
        const attemptLogin = {
            mail: this.user.email,
            password: this.user.password,
        }
        this.authService.login(attemptLogin).subscribe(data => console.log(data))
    }

    public saveUser() {
        if (this.user.password === this.user.confirmPassword) {
            this.authService.register(this.user).subscribe(data => console.log(data))
        }
    }




}

interface User {
    userName?: string;
    email: string;
    password: string;
    confirmPassword: string;
}
