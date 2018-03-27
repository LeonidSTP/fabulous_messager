import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/Navbar/navbar.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { MyfooterComponent } from './components/MyFooter/myfooter.component';
import { FeedComponent } from './components/feed/feed.component';
import { appRouterModule } from './app.routers';
import { MessageModule } from './components/Message/message.module';
import { EqualValidator } from './components/auth-form/equal-validator.directive';
import { AuthService } from './services/auth.service';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        AuthFormComponent,
        MyfooterComponent,
        FeedComponent,
        EqualValidator
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        appRouterModule,
        MessageModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
