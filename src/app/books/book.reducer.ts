import { createReducer, on } from "@ngrx/store";
import { AddBook } from "./book.actions";
import { Book } from "../models/book";
export const initialState: Book[] = [{id: '1', title: 'My Book', author: 'my'}];
export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state, {id, title, author}) => [...state, {id, title, author}])
)