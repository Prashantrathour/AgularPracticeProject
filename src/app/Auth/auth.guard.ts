import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state): any => {
  // let auth = inject(AuthService);
  let routes = inject(Router);
  // let getauth = auth.isAuthenticate.valueOf();
  // return getauth;
  if(localStorage.getItem("login")){
    return true
  }
   routes.navigate(["/login"])
};
