import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/Navbar/navbar.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { MyfooterComponent } from './components/MyFooter/myfooter.component';
import { appRouterModule } from './app.routers';
import { MessageModule } from './components/Message/message.module';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        AuthFormComponent,
        MyfooterComponent
    ],
    imports: [
        BrowserModule,
        appRouterModule,
        MessageModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
