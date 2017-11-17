import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarModule } from './components/Navbar/navbar.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { MyfooterComponent } from './components/MyFooter/myfooter.component';
import { appRouterModule } from './app.routers';

@NgModule({
    declarations: [
        AppComponent,
        AuthFormComponent,
        MyfooterComponent
    ],
    imports: [
        BrowserModule,
        NavBarModule,
        appRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
