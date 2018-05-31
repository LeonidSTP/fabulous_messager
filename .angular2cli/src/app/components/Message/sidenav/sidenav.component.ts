import {Component, OnInit} from '@angular/core';
import { AuthService, User} from '../../../services/auth.service';

@Component({
  selector: 'sideComponent',
  styleUrls: ['sidenav.component.less'],
  templateUrl: 'sidenav.component.html'
})



export class SidenavComponent implements OnInit{

  public user: String;

  constructor(private authServise: AuthService){}
  ngOnInit(){

}

}
