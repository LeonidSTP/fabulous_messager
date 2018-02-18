import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/Navbar/navbar.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { MyfooterComponent } from './components/MyFooter/myfooter.component';
import { FeedComponent } from './components/feed/feed.component';
import { appRouterModule } from './app.routers';
import { MessageModule } from './components/Message/message.module';
import { EqualValidator } from './components/auth-form/equal-validator.directive';

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
        appRouterModule,
        MessageModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
