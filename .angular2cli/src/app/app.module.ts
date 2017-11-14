import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarModule } from './components/Navbar/navbar.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { MyfooterComponent } from './components/MyFooter/myfooter.component';
import { MessageModule } from './components/Message/message.module';

const appRoutes: Routes = [
    {path: 'auth', component: AuthFormComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        AuthFormComponent,
        MyfooterComponent
    ],
    imports: [
        BrowserModule,
        NavBarModule,
        MessageModule,
        RouterModule.forRoot(
            appRoutes
        )],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
