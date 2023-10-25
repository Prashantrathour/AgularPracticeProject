import { Injectable } from '@angular/core';
import { FormData } from '../Types/Auth';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate: Boolean = false
  constructor(private toast: ToastrService,private router:Router) { }
  login(form: FormData) {

    console.log(form)

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential: any) => {
        // Signed in 
        const user = userCredential.user;
        this.toast.success("user logged in","Success")
        this.isAuthenticate = true
        localStorage.setItem("login","true")
        this.router.navigate(["/"])
        // ...
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticate = false
        alert(errorMessage)
        this.toast.error(errorMessage,"Error")
      });
  }
  register(form: FormData) {

    if ((form.password != form.comfirmpassword)) {
      this.toast.warning("Passwords do not match","Warring")
      return
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential: any) => {
        // Signed up 
        const user = userCredential.user;

        this.toast.success("user registered")
        this.isAuthenticate = false
        localStorage.removeItem("login")
        this.router.navigate(["/login"])
        // ...
      })
      .catch((error: any) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        this.toast.error(errorMessage,"Error")
        // ..
      });

  }
  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("user logged out")
      this.isAuthenticate = false
      this.toast.success('Logged out successfully', 'Success')
      localStorage.removeItem("login")
      this.router.navigate(["/login"])
      // Sign-out successful.
    }).catch((error) => {
      this.toast.error(error.message,"Error")
      // An error happened.
    });
  }
}
