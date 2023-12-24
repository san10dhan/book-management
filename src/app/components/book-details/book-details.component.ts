import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AddBook } from '../../books/book.actions';
import { Observable } from 'rxjs';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  books$: Observable<Book[]>;
  constructor(private store: Store<AppState>){
    this.books$ = store.pipe(select('book'));
  }
  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({id, title, author}))
  }
}
