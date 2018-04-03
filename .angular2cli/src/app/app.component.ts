import { Component } from '@angular/core';
import { MainService } from './services/main.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})



  export class AppComponent {
    constructor(public mainService: MainService) {
        console.log(mainService);
    }

public Test() {
    this.mainService.testRequest({}).subscribe(data => console.log(data));
}
}

