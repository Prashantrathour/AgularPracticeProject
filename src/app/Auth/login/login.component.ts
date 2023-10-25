import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Component } from '@angular/core';
import { FormData } from 'src/app/Types/Auth';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormData={email:"",password:"",comfirmpassword:""};
  constructor(private authservice:AuthService){}
   login(){

    this.authservice.login(this.form)
   }
}
