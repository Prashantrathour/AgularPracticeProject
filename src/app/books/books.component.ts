import { Component, OnInit } from '@angular/core';
import { Book } from '../Types/Book';
import { BookService } from './book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
 books: Book[] =[];
  
  addtocart:Book[]=[]
  
  constructor(private bookservices:BookService,private addtocardservice:CartService){}
  ngOnInit(): void {
    this.books=this.bookservices.getBook();
    
  }
  addToCart(book:Book){
    this.addtocardservice.addtocartservice(book)
    alert("Book added in cart")

  }

}
