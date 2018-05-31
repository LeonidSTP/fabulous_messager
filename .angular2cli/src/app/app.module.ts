import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/Navbar/navbar.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { MyfooterComponent } from './components/MyFooter/myfooter.component';
import { FeedComponent } from './components/feed/feed.component';
import { appRouterModule } from './app.routers';
import { MessageModule } from './components/Message/message.module';
import { EqualValidator } from './components/auth-form/equal-validator.directive';
import { AuthService } from './services/auth.service';
import { MainService } from './services/main.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from './services/message.service';
import { MomentModule} from 'angular2-moment';
import { Create_accountComponent} from './components/create-account/create_account.component';
import { ParticlesModule} from 'angular-particle';
import { MaterializeModule } from 'angular2-materialize';
import { ProfileComponent} from './components/profile/profile.component';
import { ProfileHeaderComponent} from './components/profile/pageheader/profileHeader.component';
import {ProfileSidebarComponent} from './components/profile/pagesidebar/profileSidebar.component';
import {ProfileWallPostsComponent} from './components/profile/pagewallposts/profileWallPosts.component';
import {ProfileShareComponent} from './components/profile/profileshare/profileShare.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        AuthFormComponent,
        MyfooterComponent,
        FeedComponent,
        EqualValidator,
        Create_accountComponent,
        ProfileComponent,
        ProfileHeaderComponent,
        ProfileSidebarComponent,
        ProfileWallPostsComponent,
        ProfileShareComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRouterModule,
        MessageModule,
        BrowserAnimationsModule,
        MomentModule,
        MaterializeModule,
        ParticlesModule,
        ToastrModule.forRoot({
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        })
    ],
    providers: [
      AuthService,
      MessageService,
      MainService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
