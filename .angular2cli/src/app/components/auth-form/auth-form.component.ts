import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.less']
})
export class AuthFormComponent implements OnInit {

    public currentUrl: string;

    constructor(private router: Router) {

    }


    ngOnInit() {
        this.currentUrl = this.router.url;
    }

    public proccessLogin = () => {
        if (this.currentUrl === '/auth') {
            this.login();
        } else {
            this.signup();
        }
    }

    public login = () => {
        console.log('login');
    }

    public signup = () => {
        console.log('signup');
    }
}
