import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  constructor() { }
  getBook(){
    return [
      { name: "React for Dummies", author: "John Doe", price: 20, image: "https://via.placeholder.com/100x150" },
      { name: "Mastering React", author: "John Smith", price: 45, image: "https://via.placeholder.com/100x150" },
      { name: "React in Practice", author: "Emily Johnson", price: 32, image: "https://via.placeholder.com/100x150" },
      { name: "The Art of React", author: "Michael Davis", price: 55, image: "https://via.placeholder.com/100x150" },
      { name: "React Essentials", author: "Sarah Miller", price: 40, image: "https://via.placeholder.com/100x150" },
      { name: "React Unleashed", author: "Andrew Wilson", price: 38, image: "https://via.placeholder.com/100x150" },
      { name: "Deep Dive into React", author: "Jessica Brown", price: 48, image: "https://via.placeholder.com/100x150" },
      { name: "React Power Techniques", author: "David Moore", price: 50, image: "https://via.placeholder.com/100x150" },
      { name: "Advanced React Development", author: "Jennifer Lee", price: 60, image: "https://via.placeholder.com/100x150" },
      { name: "React for Beginners", author: "Robert Johnson", price: 30, image: "https://via.placeholder.com/100x150" },
      { name: "Practical React Projects", author: "Amanda Williams", price: 42, image: "https://via.placeholder.com/100x150" },
      { name: "The React Handbook", author: "Christopher Robinson", price: 36, image: "https://via.placeholder.com/100x150" },
      { name: "React Mastery", author: "Elizabeth Taylor", price: 58, image: "https://via.placeholder.com/100x150" },
      { name: "React Design Patterns", author: "William Jackson", price: 52, image: "https://via.placeholder.com/100x150" },
      { name: "Learning React", author: "Daniel White", price: 35, image: "https://via.placeholder.com/100x150" },
      { name: "React Quick Start Guide", author: "Laura Garcia", price: 44, image: "https://via.placeholder.com/100x150" },
      { name: "Pro React Development", author: "Thomas Martinez", price: 47, image: "https://via.placeholder.com/100x150" },
      { name: "Effective React Programming", author: "Nicole Clark", price: 53, image: "https://via.placeholder.com/100x150" },
      { name: "Hands-On React Development", author: "Kevin Lewis", price: 41, image: "https://via.placeholder.com/100x150" },
      { name: "React Cookbook", author: "Alexis Hill", price: 46, image: "https://via.placeholder.com/100x150" },
      { name: "React Advanced Techniques", author: "Ryan Adams", price: 49, image: "https://via.placeholder.com/100x150" }
    ];
  }
}
