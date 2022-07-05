import { Component, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef} from 'apollo-angular';
import { Book } from '../../../mock-data/models';

/**
 * get server current time
 */
 export const GET_ALL_BOOKS =  gql`
 query getBooks{
  books {
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

  constructor(private apollo:Apollo) { }

  books: Book[] = [];
  ngOnInit(): void {
    this.getAllBooks();
  }

  /**
   * get all books
   */
  getAllBooks(){
    this.apollo.watchQuery({
      query: GET_ALL_BOOKS,
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    }).valueChanges
    .subscribe((result: any) => {
      if("books" in result.data){
        this.books = result.data['books'];
        console.log(this.books);
      }
    });
  }
}
