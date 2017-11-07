import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

const appRoutes: Routes = [
    {path: 'auth', component: AuthFormComponent},
];
import {MyFooterModule} from "./components/MyFooter/myfooter.module";

@NgModule({
    declarations: [
        AppComponent,
        AuthFormComponent
    ],
    imports: [
        BrowserModule,
        MyFooterModule,
        RouterModule.forRoot(
            appRoutes
        )],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
