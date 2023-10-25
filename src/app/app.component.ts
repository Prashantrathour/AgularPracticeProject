import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "./firebase.config";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-revision';
  constructor(private toast:ToastrService){}
  ngOnInit(): void {
    initializeApp(firebaseConfig);
    // this.toast.success('App loaded successfully', 'Success')
  }
}
