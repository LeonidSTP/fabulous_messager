import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {MyfooterComponent} from "./components/MyFooter/myfooter.component";

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
        RouterModule.forRoot(
            appRoutes
        )],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
