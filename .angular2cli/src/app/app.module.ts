import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

const appRoutes: Routes = [
    {path: 'auth', component: AuthFormComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        AuthFormComponent
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
