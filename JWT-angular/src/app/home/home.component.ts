import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  DisplayUser() {
    this.auth.VerifyToken()
      .subscribe(data => {this.userData = data; console.log(this.userData)} );
  }

}
