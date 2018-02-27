import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.less']
})
export class AuthFormComponent implements OnInit {

    public currentUrl: any;
    public user: User = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };


    constructor(public authService: AuthService,
       private router: Router) {

     }


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
    };

    public signup = () => {
        console.log('signup');
    };

    public onEnter(valid, event) {
        if (!valid) {
            return;
        }
        console.log(event);
    }
    public saveUser() {
        this.authService.login(this.user).subscribe(data => console.log(data))
    }
}

interface User {
    username?: string;
    email: string;
    password: string;
    confirmPassword: string;
}
