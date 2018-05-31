import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.less'],
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
       private router: Router,
       private toastr: ToastrService) {

    }


    ngOnInit() {
        this.currentUrl = this.router.url;
    }

    public proccessLogin = (validForm) => {
      if(!validForm){
        this.toastr.error('Not all fields are filled', 'Error')
      }
      else {
        if (this.currentUrl === '/auth') {
          this.login();
        } else {
          this.signup();
        }
      }
    };

    public test(value) {
    }

    public login = () => {
      this.sendUser();
    };

    public signup = () => {
         this.saveUser();
     };

    public onEnter(valid, event) {
        if (!valid) {
            return;
        }
    }


    public sendUser() {
        const attemptLogin = {
            email: this.user.email,
            password: this.user.password,
        };

        this.authService.login(attemptLogin).subscribe((data) => {
            if (data['token']) {
                console.log(data);
                localStorage.setItem('token',JSON.stringify(data['token']));
                    this.router.navigate(['/feed']);
              this.toastr.success('Success');

            } else {
                this.toastr.error(data['message']);
            }
        });
    }

    public saveUser() {
        if (this.user.password === this.user.confirmPassword) {
            this.authService.register(this.user).subscribe(data => console.log(data));
            this.router.navigate(['/create_account']);
          this.toastr.success('Success');

        }
    }
}




