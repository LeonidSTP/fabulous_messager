import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from './navbar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
  providers: []
})

export class NavBarModule {

}
