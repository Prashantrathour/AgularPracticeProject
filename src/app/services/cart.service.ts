import { Injectable } from '@angular/core';
import { Book } from '../Types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 addtocart:Book[]=[]
  constructor() { }
  addtocartservice(book:Book){
    console.log(book)
    this.addtocart.push(book)

  }
  getcart(){
    return this.addtocart
  }
}
