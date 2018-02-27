import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/Navbar/navbar.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MyfooterComponent } from './components/MyFooter/myfooter.component';
import { FeedComponent } from './components/feed/feed.component';
import { appRouterModule } from './app.routers';
import { MessageModule } from './components/Message/message.module';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        AuthFormComponent,
        MyfooterComponent,
        FeedComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        appRouterModule,
        MessageModule
    ],
    providers: [AuthService, HttpClient, HttpHandler],
    bootstrap: [AppComponent],
})
export class AppModule {
}
