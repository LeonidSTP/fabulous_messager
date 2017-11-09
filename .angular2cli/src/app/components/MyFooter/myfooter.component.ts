import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'myfooter',
  styleUrls: ['myfooter.less'],
  templateUrl: 'myfooter.html'
})
export class MyfooterComponent implements OnInit{
  public year = new Date().getFullYear();
  public currentYear: number = this.year;
  ngOnInit(){
    console.log('234');
  }
}
