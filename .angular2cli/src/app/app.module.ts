import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyFooterModule} from "./components/MyFooter/myfooter.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MyFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
