import { Component, OnInit, Input} from '@angular/core';
import { Book } from '../mock-data/models';
import { DetailsComponent } from '../details/details.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addProduct } from '../store/actions/cart.action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() inputcard: Book = {
    id: 0,
    title: 'TEST',
    description: 'TEST',
    price: 0,
    thumbnail: 'assets/img/no-pic.jpg',
    currency: '€',
    amount: 1,
    author: {
      firstName: 'TEST',
      lastName: 'TEST',
      thumbnail:  'assets/img/no-photo.jpg',
    }
  }
  constructor(
    private dialog: MatDialog,
    private store: Store) { }

  ngOnInit(): void {
    if("thumbnail" in this.inputcard){
      this.inputcard.thumbnail = `${this.inputcard.thumbnail}`
      this.inputcard.author.thumbnail = `${this.inputcard.author.thumbnail}`

    }
  }
  
  openDialog(): void {
    this.dialog.open(DetailsComponent, {
      width: '95%',
      height: '95%',
      disableClose: false,
      autoFocus: false,
      data: this.inputcard
    });
  }

  buyBook(){
    this.store.dispatch(addProduct(this.inputcard));
  }
}
