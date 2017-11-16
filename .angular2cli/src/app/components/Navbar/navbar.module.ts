import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [NavBarComponent],
    declarations: [NavBarComponent],
    providers: []
})

export class NavBarModule {

}
