import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'myfooter',
  styleUrls: ['myfooter.less'],
  templateUrl: 'myfooter.html'
})
export class MyfooterComponent implements OnInit {
  public currentYear: number = new Date().getFullYear();
  ngOnInit() {
  };
}
