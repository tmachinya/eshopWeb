import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from './services/token.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 private userInfo;
  admin: boolean;
  hod: boolean;
  warehouse: boolean;
  munhu = '';
  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token:TokenService
  ) { }

  ngOnInit() {
    this.userInfo = localStorage.getItem('user');
    this.munhu = JSON.parse(this.userInfo);
    const roles = this.Token.getRoles()
    this.admin = roles.includes("admin");
    this.warehouse = roles.includes("warehouse");
    this.hod = roles.includes("hod");
  }
  logout(event: MouseEvent){
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }

  generateQR(url: string)
  {
    window.open(url,"_blank")
  }

}
