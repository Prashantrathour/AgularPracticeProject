import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../Types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
@Input() book= {} as Book
@ Output() addToCartEvent = new EventEmitter<Book>();

addToCart(book:Book){
this.addToCartEvent.emit(book);
}
}
