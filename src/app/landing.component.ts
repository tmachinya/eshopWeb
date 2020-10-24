import { Component, OnInit } from '@angular/core';
import {Session} from './auth.component';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  public onAuthenticated(session: Session): void {
  }

  ngOnInit() {
  }

}
