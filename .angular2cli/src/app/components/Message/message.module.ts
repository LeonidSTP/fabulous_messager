import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from './message.component';
import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [MessageComponent],
    declarations: [MessageComponent],
    providers: []
})

export class MessageModule {
}
