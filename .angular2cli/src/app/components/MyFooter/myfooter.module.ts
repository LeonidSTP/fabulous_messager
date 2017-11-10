import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyfooterComponent } from './myfooter.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [MyfooterComponent],
  declarations: [MyfooterComponent],
  providers: [],
})

export class MyFooterModule {
}
