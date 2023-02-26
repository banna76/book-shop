import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Book } from '../mock-data/models';
import { pluck, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * get server current time
 */
 export const GET_ALL_BOOKS =  gql`
 query getBooks{
  books {
    id
    title
    author {
      firstName
      lastName
      thumbnail
    }
    description
    price
    currency
    thumbnail
  }
}`;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private apollo:Apollo) { }

  books$: Observable<any> | undefined;

  ngOnInit(): void {
    const source$ = this.getAllBooks();
    this.books$ = source$.pipe(pluck('data', 'books'));
  }

  /**
   * get all books
   */
  getAllBooks(){
    return this.apollo.watchQuery({
      query: GET_ALL_BOOKS,
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    })
    .valueChanges.pipe(shareReplay(1));
  }
}
