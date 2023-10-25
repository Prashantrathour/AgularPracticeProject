import { Component } from '@angular/core';
import { FormData } from 'src/app/Types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormData = { email: "", password: "", comfirmpassword: "" };
  constructor(private authservice:AuthService) { }
  register(){
    this.authservice.register(this.form)
  }
}
