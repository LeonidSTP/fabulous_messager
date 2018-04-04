import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { FormsModule } from '@angular/forms';
import { MomentModule} from 'angular2-moment';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
      MomentModule
    ],
    exports: [MessageComponent],
    declarations: [MessageComponent],
    providers: []
})

export class MessageModule {
}
