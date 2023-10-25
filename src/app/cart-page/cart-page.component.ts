import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../Types/Book';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  books: Book[]=[];
  constructor(private cartservice:CartService){}
//  @Input addtocarddata=[] as any
  ngOnInit(): void {
    this.books=this.cartservice.getcart()
  }

}
