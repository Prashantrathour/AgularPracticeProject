import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnChanges {
  isLoggedIn:any=false
  constructor(private authsevice:AuthService ,private isauth:AuthService ){}
  ngOnInit(): void {
    this.isLoggedIn=localStorage.getItem("login")
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  logout(){
    this.authsevice.logout()
  }
}
