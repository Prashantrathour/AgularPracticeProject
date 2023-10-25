import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,FormsModule,AppRoutingModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
