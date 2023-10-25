import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { BooksModule } from './books/books.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModule } from './Auth/auth.module';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartPageComponent,
   
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BooksModule,
    AuthModule,
    ToastrModule.forRoot()
  ],
  providers: [provideToastr(),provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
