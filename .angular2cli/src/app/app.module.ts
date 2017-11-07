import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavBarModule} from './components/Navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,NavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
